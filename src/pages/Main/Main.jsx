import { Container } from "@mui/material";
import React from "react";
import styles from "./Main.module.scss";
import PersonalInfo from "Components/PersonalInfo/PersonalInfo";
import ProjectsContent from "Components/ProjectsContent/ProjectsContent";
import GetToKnowMe from "Components/GetToKnowMe/GetToKnowMe";

const Main = () => {
  return (
    <Container>
      <div className={styles.main}>
        <PersonalInfo />
        <ProjectsContent isMain={true} />
        <GetToKnowMe />
      </div>
    </Container>
  );
};

export default Main;
