import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Search from './pages/search';
import Shorts from './pages/shorts';
import VideoDetail from './pages/video-detail';

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </Box>
  );
};

export default App;
