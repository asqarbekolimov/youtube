import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import ReactPlayer from "react-player";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );

        setVideoDetail(data?.items[0]);
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
  console.log(videoDetail?.snippet);
  return (
    <div className="min-h-[90vh] mb-10">
      <div className="flex">
        <div className="w-[75%] ml-3">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />

          <div className="flex items-center mt-3">
            <h2 className="font-bold">{videoDetail?.snippet?.channelTitle}</h2>
            <div className="flex items-center">
              <div className="flex items-center">
                {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()}{" "}
                veiws
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
        <div className="w-[25%]">Suggested Videos</div>
      </div>
    </div>
  );
};

export default VideoDetail;
