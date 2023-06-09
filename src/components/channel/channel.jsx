import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import ChannelCard from "../channel-card/channel-card";
import Videos from "../videos/videos";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(dataChannelDetail.items[0]);
        const dataVideo = await ApiService.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setVideos(dataVideo?.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="min-h-[95vh]">
      <div>
        <div className="w-full h-[300px] z-10">
          <img
            className="w-full h-full object-cover"
            src={`${channelDetail?.brandingSettings?.image?.bannerExternalUrl}`}
            alt=""
          />
        </div>
        <ChannelCard video={channelDetail} />
      </div>
      <div className="w-[90%] container">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Channel;
