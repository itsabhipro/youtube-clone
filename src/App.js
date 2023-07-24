import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar,About,Feed,VideoDetails,ChannelDetails,SearchFeed } from "./components";

function App() {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Feed />}/>
                <Route path="/video/:id" element={<VideoDetails />} />
                <Route path="/channel/:id" element={<ChannelDetails />}/>
                <Route path="/search/:searchTerm" element={<SearchFeed />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App