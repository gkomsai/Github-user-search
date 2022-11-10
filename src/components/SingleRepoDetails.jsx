import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { getItemFromLocal } from "../utils/localStorage";

const SingleRepoDetails = () => {
  const singleRepoData = getItemFromLocal("singleRepo");
  const {
    owner: { avatar_url },
    created_at,
    name,
    topics,
    full_name,
    description,
    clone_url,
    forks,
    svn_url,
    language,
    watchers,
    visibility,
  } = singleRepoData;

  return (
    <>
      <Box w="70%" m="2rem auto" boxShadow={"dark-lg"} p="10px">
        <Flex
          gap={20}
          m="2rem auto"
          padding={4}
          fontSize="large"
          alignItems={"flex-start"}
        >
          <Box className="imgBox">
            <Image src={avatar_url} alt="" />
          </Box>

          <Box>
            <Heading>{name}</Heading>
            <Text>
              Repo Link:{" "}
              <Text
                as={"span"}
                onClick={() => window.open(`${svn_url}`)}
                cursor="pointer"
                color={"blue"}
              >
                {full_name}
              </Text>
            </Text>
            <Text mt="5px" color={"grey"}>
              {description}
            </Text>
            <Text>
              You want to clone it:{" "}
              <Text as={"span"} color={"blue"}>
                {clone_url}
              </Text>
            </Text>
          </Box>
        </Flex>
        <Flex
          gap={20}
          m="2rem auto"
          padding={4}
          fontSize="large"
          alignItems={"center"}
        >
          <Box>
            <h4>Verified by GitHub</h4>
            <Text fontWeight={"bold"}>{name}</Text>
            <Text fontWeight={"bold"} color={"green"}>
              Tags
            </Text>
            <Box>
              {topics?.map((e, i) => (
                <Text key={i}>{e}</Text>
              ))}
            </Box>
          </Box>

          <Box>
            <Text fontWeight={"bold"} color={"green"}>
              Other details
            </Text>
            <Text>
              Language: <i>{language}</i>
            </Text>
            <Text>
              Visibility: <i>{visibility}</i>
            </Text>
            <Text>
              Forks: <i>{forks}</i>
            </Text>
            <Text>
              Watchers: <i>{watchers}</i>
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SingleRepoDetails;
