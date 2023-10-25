import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Box>
  );
};

export default App;
