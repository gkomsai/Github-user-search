import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Flex,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RepoComponent from "../components/RepoComponent";
import { getUserData } from "../redux/action";

export const Home = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError, repoData } = useSelector((store) => store);

  
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

  if (isLoading) {
    return (
      <CircularProgress
        isIndeterminate
        color="green.300"
        value={50}
        size="120px"
      />
    );
  }
  if (isError) {
    return <Box>...error</Box>;
  }
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
      {repoData.length > 0 ? (
        <Flex
          w="30%"
          gap={20}
          m="2rem auto"
          boxShadow={"dark-lg"}
          padding={4}
          fontSize="large"
          alignItems={"center"}
        >
          <Avatar
            size="md"
            name="Kent Dodds"
            src={repoData[0]?.owner.avatar_url}
          />
          {/* <Flex direction={"column"} gap="4" justifyContent="flex-start"> */}
            <Text color={"blue"} fontWeight="bold">
            {repoData[0]?.owner.login}
            </Text>
            <Button  bg="green" color={"white"}>
              <Link to={"/followers"}>Followers </Link>{" "}
            </Button>
         
        
        </Flex>
      ) : null}

      <SimpleGrid columns={[1, null, 2]} spacing="40px" m="4rem">
        {repoData.length > 0
          ? repoData.map((el) => (
              <RepoComponent key={el.id} {...el} singleRepoData={el} />
            ))
          : ""}
      </SimpleGrid>
    </>
  );
};
