import moment from "moment/moment";
import React from "react";
import { MdVerified } from "react-icons/md";

const VideoCart = ({ video }) => {
  console.log(video);
  return (
    <div className="w-full sm:w-[360px] md:w-[320px] block rounded-lg p-4 shadow-sm shadow-indigo-100 text-black">
      <img src={video?.snippet?.thumbnails?.high?.url} alt="" />
      <div className="relative">
        <>
          <div className="my-[5px] opacity-50 text-sm font-semibold">
            {moment(video?.snippet?.publishedAt).fromNow()}
          </div>
          <h2 className="text-sm font-bold">
            {video?.snippet?.title.slice(0, 70)}
          </h2>
          {/* <p className="opacity-60">
            {video?.snippet?.description.slice(0, 80)}
          </p> */}
        </>
        <>
          <div className="flex flex-row mt-2 items-center gap-[5px]">
            <img
              className="w-12 h-12 rounded-full"
              src={video?.snippet?.thumbnails?.high?.url}
              alt=""
            />
            <p className="flex items-center gap-1">
              {video?.snippet?.channelTitle} <MdVerified />
            </p>
          </div>
        </>
      </div>
    </div>
  );
};

export default VideoCart;
