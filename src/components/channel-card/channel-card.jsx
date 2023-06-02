import React from "react";
import { MdVerified } from "react-icons/md";

const ChannelCard = ({ video }) => {
  return (
    <div className="flex justify-center items-center w-[356] h-[326px] rounded-[28px] m-auto">
      <div className="flex justify-center items-center text-center">
        <img
          src={video?.snippet?.thumbnails?.default?.url}
          alt={video?.snippet?.title}
        />
        <h1 className="flex items-center gap-1">
          {video?.snippet?.title} <MdVerified />
        </h1>
        {video?.statistics?.subscriberCount && (
          <p className="opacity-50">
            {parseInt(video?.statistics?.subscriberCount).toLocaleString(
              "en-Us"
            )}
            {""}Subscribers
          </p>
        )}
      </div>
    </div>
  );
};

export default ChannelCard;
