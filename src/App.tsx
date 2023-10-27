import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Search from './pages/search';
import Shorts from './pages/shorts';

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
};

export default App;
