import { Box, Stack } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading ...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      gap={2}
      justifyContent="start"
    >
      {videos.map((item, i) => (
        <Box
          key={i}
          sx={{
            minWidth: {
              xs: "100%",
              sm: "358px",
              md: "320px",
            },
          }}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
