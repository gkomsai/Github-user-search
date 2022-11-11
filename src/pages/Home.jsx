import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Flex,
  Input,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import RepoComponent from "../components/RepoComponent";
import { clearResult, getUserData } from "../redux/action";

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
      dispatch(getUserData(username));
      setUsername("");
    }
  };

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <Error />
  ) : (
    <Box>
      <Flex
        width={["80%", "60%", "40%", "30%"]}
        overflow={"hidden"}
        gap={4}
        m="2rem auto"
      >
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
          w={["80%", "60%", "60%", "50%", "40%"]}
          gap={[10, 10, 7, 10]}
          m="2rem auto"
          boxShadow={"dark-lg"}
          padding={4}
          fontSize={{ base: "md" }}
          alignItems={"center"}
        >
          <Avatar
            size="lg"
            name="Kent Dodds"
            src={repoData[0]?.owner.avatar_url}
          />

          <Text color={"blue"} fontWeight="bold">
            {repoData[0]?.owner.login}
          </Text>
          <Button
            bg="green"
            fontSize={{ base: "sm", md: "sm" }}
            color={"white"}
          >
            <Link to={"/followers"}>Followers </Link>{" "}
          </Button>
          <Show above="md">
            <Button
              fontSize={{ base: "sm", md: "md" }}
              bg="green"
              color={"white"}
              onClick={() => {
                dispatch(clearResult());
              }}
            >
              Clear Results
            </Button>
          </Show>
        </Flex>
      ) : null}

      <SimpleGrid columns={[1, 1, 1, 2]} gap="3rem" m="4rem">
        {repoData.length > 0
          ? repoData.map((el) => (
              <RepoComponent key={el.id} {...el} singleRepoData={el} />
            ))
          : ""}
      </SimpleGrid>
    </Box>
  );
};
