import { Box, Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      display={"flex"}
      color={"white"}
      bg="black"
      justifyContent={"space-around"}
      w="100vw"
      padding={4}
      m="auto"
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
    </Box>
  );
};

export default Navbar;
