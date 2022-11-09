import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      color={"white"}
      bg="black"
      padding={5}
      fontSize="large"
      justifyContent={"space-around"}
    >
      <Box>
        {" "}
        <Link to="/">Home </Link>
      </Box>
      <Box>
        {" "}
        <Link to="/follwers">Follwers</Link>
      </Box>
      <Box>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
