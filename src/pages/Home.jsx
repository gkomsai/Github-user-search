import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "../redux/action";

export const Home = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleGetData = () => {
    dispatch(getUserData(username));
    setUsername("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        // console.log("enter press here! ");
        dispatch(getUserData(username));
    }
  };

  return (
    <>
      <Flex w="30%" gap={4} m="2rem auto">
        <Input
          onKeyPress={handleKeyPress}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          type={"text"}
          placeholder="Username"
        />
        <Button onClick={handleGetData}>Search</Button>
      </Flex>
    </>
  );
};
