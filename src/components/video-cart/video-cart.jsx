import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";

function VideoCart({ video }) {
  return (
    <Card sx={{ width: "320px", boxShadow: "none", borderRadius: 0 }}>
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{ width: "360px", height: "180px" }}
      />
      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <>
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}...
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: ".6" }}>
            {video?.snippet?.description.slice(0, 70)}...
          </Typography>
        </>
        <>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant={"subtitle2"} color={"gray"}>
              {video?.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </>
      </CardContent>
    </Card>
  );
}

export default VideoCart;
