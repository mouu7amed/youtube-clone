import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVideos } from "../utils/API";
import Videos from "./utils/Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    fetchVideos(`search?part=snippet&q=${query}`).then((data) =>
      setVideos(data.items)
    );
  }, [query]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for
        <span style={{ color: "#F31503", marginLeft: "10px" }}>{query}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
