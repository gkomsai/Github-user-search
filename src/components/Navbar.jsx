import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      padding={4}
      fontSize="large"
      color={"white"}
      bg="black"
      justifyContent={"space-around"}
    >
      <Box>
        {" "}
        <Link to="/">Home </Link>
      </Box>
      <Box>
        <Button bg="black" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
