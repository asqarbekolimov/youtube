import React from "react";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const ChannelCard = ({ video }) => {
  console.log(video);
  return (
    <div className="w-full sm:w-[360px] md:w-[320px] shadow-sm shadow-indigo-100 flex justify-center items-center  h-[326px]  m-auto">
      <Link
        to={`/channel/${
          video?.id?.channelId ? video?.id.channelId : video?.id
        }`}
      >
        <div className="flex justify-center flex-col items-center text-center">
          <img
            className="rounded-full"
            src={video?.snippet?.thumbnails?.default?.url}
            alt={video?.snippet?.title}
          />
          <h1 className="flex items-center gap-1">
            {video?.snippet?.title} <MdVerified />
          </h1>
          {video?.statistics?.subscriberCount && (
            <p className="opacity-50">
              {parseInt(video?.statistics?.subscriberCount).toLocaleString(
                "en-US"
              )}
              {""}Subscribers
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
