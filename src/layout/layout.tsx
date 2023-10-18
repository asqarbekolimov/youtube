import React, { useState } from "react";
import { LayoutProps } from "./layout.props";
import { Header } from "@/components";
import Sidebar from "@/components/sidebar/sidebar";
import { Box, Container } from "@chakra-ui/react";

const Layout = ({ children }: LayoutProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => setToggle((prev) => !prev);

  return (
    <Box w={"full"} overflow={"hidden"}>
      <Header onToggle={onToggle} />
      <Sidebar toggle={toggle} />
      <Box
        mt={"10vh"}
        pl={{ base: 0, lg: !toggle ? "250px" : "0" }}
        transition={"all .4s ease"}
        // minH={"90vh"}
      >
        <Container maxW={"full"}>{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;
