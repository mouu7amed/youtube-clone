import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVideos } from "../utils/API";
import ChannelCard from "./utils/ChannelCard";
import Videos from "./utils/Videos";

const ChannelDetail = () => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  const { channelId } = useParams();

  useEffect(() => {
    fetchVideos(`channels?part=snippet&id=${channelId}`).then((res) =>
      setChannelInfo(res?.items[0])
    );

    fetchVideos(`search?channelId=${channelId}&part=snippet&order=date`).then(
      (res) => setChannelVideos(res?.items)
    );
  }, [channelId]);

  return (
    <Box minHeight={"calc(100vh - 78px)"}>
      <Box>
        <div
          style={{
            height: "300px",
            zIndex: 10,
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,68,1) 0%, rgba(0,212,255,1) 100%)",
          }}
        />
        <ChannelCard channel={channelInfo} marginTop="-110px" />
      </Box>
      <Box dispaly="flex" p={2}>
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
