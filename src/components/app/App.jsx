import React from "react";
import { Route, Routes } from "react-router-dom";
import { Channel, Main, Navbar, NotFound, Search, VideoDetail } from "../";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
