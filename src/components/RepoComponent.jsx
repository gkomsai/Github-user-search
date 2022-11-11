import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { saveItemToLocal } from "../utils/localStorage";

const RepoComponent = ({
  login,
  owner: { avatar_url },
  created_at,
  owner,
  name,
  description,
  id,
  singleRepoData,
}) => {
  const handleSingleRepoData = () => {
    saveItemToLocal("singleRepo", singleRepoData);
  };

  return (
    <>
      <Link onClick={handleSingleRepoData} to={`/repodetails/${id}`}>
        <Flex
          gap={"2rem"}
          p="2rem"
          alignItems="flex-start"
          boxShadow={"dark-lg"}
          minHeight="200px"
          minW={"500px"}
        >
          <Avatar size="lg" name={login} src={avatar_url} />
          <Flex direction={"column"} gap="4" justifyContent="flex-start">
            <Text fontWeight="bold">{name}</Text>
            <Text noOfLines={4} >{description}</Text>
          </Flex>
        </Flex>
      </Link>
    </>
  );
};

export default RepoComponent;
