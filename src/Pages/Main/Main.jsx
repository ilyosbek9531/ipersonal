import { Container } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>Main</h1>
      <h3>state from location: {location?.state?.name}</h3>
    </Container>
  );
};

export default Main;
