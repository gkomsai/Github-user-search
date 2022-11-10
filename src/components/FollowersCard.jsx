import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const FollowersCard = ({ data }) => {
  const { avatar_url, html_url, login } = data;
  return (
    <Box
      w={["90%", "70%"]}
      m="2rem auto"
      onClick={() => window.open(`${html_url}`)}
      cursor="pointer"
    >
      <Flex
        gap={[5, 8, 10]}
        boxShadow={"dark-lg"}
        padding={4}
        fontSize="large"
        alignItems={"center"}
      >
        <Box>
          <Avatar size="lg" name="Kent Dodds" src={avatar_url} />
        </Box>
        <Box>
          <Text fontWeight={"bold"}>{login}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default FollowersCard;
