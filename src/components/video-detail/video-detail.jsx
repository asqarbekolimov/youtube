import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import ReactPlayer from "react-player";
import { GrView } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { Videos } from "../";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data?.items[0]);

        const relatedData = await ApiService.fetching(
          `search?parent=snippet&relatedToVideoId=${id}&type=video`
        );
        setRelatedVideo(relatedData.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  // const {
  //   snippet: { title, channel, channelTitle, description, tags, thumbnails },
  //   statistics: { videoCount, likeCount, commentCount },
  // } = videoDetail;
  return (
    <div className="min-h-[90vh] mb-10">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[75%] ml-3">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />

          <div className="flex items-center mt-3">
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
              <h2 className="font-bold">
                {videoDetail?.snippet?.channelTitle}
              </h2>
            </Link>
            <div className="flex items-center gap-3 ml-5">
              <div className="flex items-center gap-1">
                <GrView />
                {parseInt(
                  videoDetail?.statistics?.viewCount
                ).toLocaleString()}{" "}
                veiws
              </div>
              <div className="flex items-center gap-1">
                <FcLike />
                {parseInt(
                  videoDetail?.statistics?.likeCount
                ).toLocaleString()}{" "}
                likes
              </div>
              <div className="flex items-center gap-1">
                <FcComments />
                {parseInt(
                  videoDetail?.statistics?.commentCount
                ).toLocaleString()}{" "}
                comment
              </div>
            </div>
          </div>
          <div>
            {videoDetail?.snippet?.tags?.map((item, idx) => (
              <button
                className="mt-[10px] cursor-pointer border-2 rounded-2xl px-[5px] opacity-70 bg-yellow-50"
                key={idx}
              >
                #{item}
              </button>
            ))}
          </div>
          <h1 className="mt-3 font-bold">{videoDetail?.snippet?.title}</h1>
          <p className="mt-5">{videoDetail?.snippet?.description}</p>
        </div>
        <div className="w-full md:w-[25%]">
          <Videos videos={relatedVideo} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
