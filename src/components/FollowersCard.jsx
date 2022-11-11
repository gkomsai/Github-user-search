import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const FollowersCard = ({ data }) => {
  const { avatar_url, html_url, login } = data;
  return (
    <Box
      w={["90%", "70%"]}
      m="2rem auto"
      boxShadow={"dark-lg"}
      onClick={() => window.open(`${html_url}`)}
      cursor="pointer"
    >
    
      <Flex
        gap={[10, 5, 3, 10]}
        overflow="hidden"
        padding={4}
        alignItems={"center"}
      >
        <Box>
          <Avatar size="lg" name={login} src={avatar_url} />
        </Box>
        <Box>
          <Text fontWeight={"bold"}>{login}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default FollowersCard;
