import React, { useState } from 'react';
import { LayoutProps } from './layout.props';
import { Box, Container } from '@chakra-ui/react';
import { Header, Sidebar } from '../components';

const Layout = ({ children, Navtoggle = false }: LayoutProps) => {
  const [toggle, setToggle] = useState<boolean>(Navtoggle);

  const onToggle = () => setToggle((prev) => !prev);
  return (
    <Box w={'full'} overflow={'hidden'}>
      <Header onToggle={onToggle} />
      <Sidebar toggle={toggle} />
      <Box
        mt={'10vh'}
        pl={{ base: 0, lg: !toggle ? '250px' : '0' }}
        transition={'all .4s ease'}
      >
        <Container maxW={'full'}>{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;
