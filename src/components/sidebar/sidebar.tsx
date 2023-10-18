import { sidebarItem } from "@/config/constants";
import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SidebarProps } from "./sidebar.props";

const Sidebar = ({ toggle }: SidebarProps) => {
  console.log(toggle);

  const router = useRouter();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      w={{ base: "full", lg: "250px" }}
      h={"90vh"}
      pos={"fixed"}
      top={"10vh"}
      left={{ base: toggle ? 0 : "-100%", lg: toggle ? 0 : "-100%" }}
      // mt={10}
      bg={bgColor}
      borderRight={"1px"}
      borderRightColor={borderColor}
      overflowY={"scroll"}
      css={{
        "&::-webkit-scrollbar": { width: "1px" },
        "&::-webkit-scrollbar-track": { width: "1px" },
        "&::-webkit-scrollbar-thumb": { background: "transparent" },
      }}
      transition={"all .4s ease"}
    >
      <Container maxW={"container.xl"}>
        {sidebarItem.map((item, idx) => (
          <Box
            key={idx}
            w={"full"}
            mt={0}
            borderBottom={"1px"}
            borderBottomColor={borderColor}
            pb={3}
          >
            <Text mt={5}>{item.title}</Text>
            {item.links.map((nav) => {
              const active = router.asPath == nav.path;
              return (
                <Link key={nav.path} href={nav.path}>
                  <Button
                    colorScheme={"facebook"}
                    variant={active ? "solid" : "ghost"}
                    w={"full"}
                    justifyContent={"flex-start"}
                    h={14}
                    mt={2}
                  >
                    <HStack gap={2}>
                      <Icon as={nav.icon} w={5} h={5} />
                      <Text>{nav.title}</Text>
                    </HStack>
                  </Button>
                </Link>
              );
            })}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Sidebar;
