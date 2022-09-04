import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../utils/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChannelCard = ({ channel, marginTop }) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { md: "320px", xs: "365px" },
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId || channel?.id}`}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channel?.snippet?.title}
            sx={{
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          ></CardMedia>
          <Typography variant="h6">
            {channel?.snippet?.title}
            <CheckCircleIcon sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString(
              "en-US"
            )}{" "}
            Subscribers
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
