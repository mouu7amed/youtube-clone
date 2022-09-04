import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchVideos } from "../utils/API";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./utils/Videos";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { videoId } = useParams();

  useEffect(() => {
    fetchVideos(`videos?part=snippet,statistics&id=${videoId}`).then((res) =>
      setVideo(res.items[0])
    );

    fetchVideos(
      `search?part=snippet&relatedToVideoId=${videoId}&type=video`
    ).then((res) => setRelatedVideos(res.items));
  }, [videoId]);

  return (
    <Box minHeight={"calc(100vh - 78px)"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${videoId}`}
              controls
            />
            <Typography variant="h5" color="#fff" fontWeight={"bold"} p={2}>
              {video?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              color="#fff"
              py={1}
              px={2}
            >
              <Link to={`/channel/${video?.snippet?.channelId}`}>
                <Typography variant={"subtitle1"} color="#fff">
                  {video?.snippet?.channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" alignItems="center" gap="20px">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(video?.statistics?.viewCount).toLocaleString()}{" "}
                  Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(video?.statistics?.likeCount).toLocaleString()}{" "}
                  Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ xs: 5, md: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
