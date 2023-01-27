import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCart } from "../";

function Videos({ videos }) {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    >
      {videos.map((item) => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCart video={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
