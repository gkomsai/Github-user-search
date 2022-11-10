import { Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import FollowersCard from "../components/FollowersCard";
import { extendTheme } from '@chakra-ui/react'

const Followers = () => {
  const followersData = useSelector((store) => store.followersData);

  return (
    <>
        <Heading m="1rem" textAlign={"center"}>Followers</Heading>
      <SimpleGrid columns={[1, 2, 3]} >
        {followersData?.map((el) => (
          <FollowersCard key={el.id} data={el} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Followers;
