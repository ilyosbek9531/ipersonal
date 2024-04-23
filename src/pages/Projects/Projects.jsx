import { Container } from "@mui/material";
import PageTitle from "Components/PageTitle/PageTitle";
import ProjectsContent from "Components/ProjectsContent/ProjectsContent";
import React from "react";

const Projects = () => {
  return (
    <Container>
      <PageTitle
        title="Projects"
        description="Projects and ideas I’ve worked on"
      />
      <ProjectsContent />
    </Container>
  );
};

export default Projects;
