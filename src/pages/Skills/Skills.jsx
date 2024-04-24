import { Container } from "@mui/material";
import PageTitle from "Components/PageTitle/PageTitle";
import SkillsContent from "Components/SkillsContent/SkillsContent";
import React from "react";

const Skills = () => {
  return (
    <Container>
      <PageTitle
        title="Skills"
        description="Technical profile and abilities what I can"
      />
      <SkillsContent />
    </Container>
  );
};

export default Skills;
