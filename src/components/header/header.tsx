import { LogoIcon } from "@/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { HeaderProps } from "./header.props";

const Header = ({ onToggle }: HeaderProps) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box
      zIndex={999}
      w={"full"}
      h={"10vh"}
      pos={"absolute"}
      top={"0"}
      left={0}
      right={0}
      px={5}
      bg={useColorModeValue("gray.50", "gray.900")}
      borderBottom={"1px"}
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Flex h={"full"} gap={5} align={"center"} justify={"space-between"}>
        <HStack gap={4}>
          <Button borderRadius={"full"} variant={"ghost"} onClick={onToggle}>
            <Icon as={CiMenuBurger} w={"20px"} h={"20px"} />
          </Button>
          <Icon as={LogoIcon} w={"28"} h={"28"} />
        </HStack>
        <HStack w={"2xl"}>
          <Input placeholder="Search" />
          <Button m={0}>
            <Icon as={CiSearch} w={"5"} h={"5"} />
          </Button>
        </HStack>
        <IconButton
          aria-label="color-mode"
          onClick={toggleColorMode}
          icon={colorMode == "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
          colorScheme={"facebook"}
          variant={"outline"}
        />
      </Flex>
    </Box>
  );
};

export default Header;
