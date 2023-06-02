import { Link } from "react-router-dom";
import { ChannelCard, VideoCart } from "../";

const Videos = ({ videos }) => {
  return (
    <div className="w-full flex flex-row flex-wrap justify-start items-center gap-2">
      {videos.map((item) => (
        <div key={item.id.videoId}>
          {item.id.videoId && <VideoCart video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
