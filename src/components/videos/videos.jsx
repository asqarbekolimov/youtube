import { Link } from "react-router-dom";
import { ChannelCard, Loader, VideoCart } from "../";

const Videos = ({ videos }) => {
  if (!videos.length) return <Loader />;
  return (
    <div className="w-full flex flex-row flex-wrap justify-center items-center gap-2">
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
