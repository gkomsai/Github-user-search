import { Container, Image } from "@chakra-ui/react";
import React from "react";

const Error = () => {
  return (
    <Container maxW={"30%"} m="2rem auto">
      <Image src="images/loading.gif" />
    </Container>
  );
};

export default Error;
