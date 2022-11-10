import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import FollowersCard from "../components/FollowersCard";

const Followers = () => {
  const followersData = useSelector((store) => store.followersData);

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {followersData?.map((el) => (
          <FollowersCard key={el.id} data={el} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Followers;
