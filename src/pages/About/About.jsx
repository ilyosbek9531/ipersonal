import { Container } from "@mui/material";
import AboutContent from "Components/AboutContent/AboutContent";
import PageTitle from "Components/PageTitle/PageTitle";
import React from "react";

const About = () => {
  return (
    <Container>
      <PageTitle
        title="A little bit about me"
        description="Who I am and what I do."
      />
      <AboutContent />
    </Container>
  );
};

export default About;
