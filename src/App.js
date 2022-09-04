import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
          <Route path="/channel/:channelId" element={<ChannelDetail />} />
          <Route path="/search/:query" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
