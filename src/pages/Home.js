import { Container } from "@mui/material";
import React from "react";
import Carousel from "../components/Carousel";
import Display from "../components/Display";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Carousel />
      <Display />
    </Container>
  );
};

export default Home;
