import { Box, Stack } from "@mui/material";
import React from "react";
import { Loader, VideoCart } from "..";

function Videos({ videos }) {
  if (!videos.length) return <Loader />;
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>{item.id.videoId && <VideoCart video={item} />}</Box>
      ))}
    </Stack>
  );
}

export default Videos;
