import { Container } from "@mui/material";
import React from "react";
import styles from "./Main.module.scss";
import PersonalInfo from "Components/PersonalInfo/PersonalInfo";
import Projects from "Components/Projects/Projects";
import GetToKnowMe from "Components/GetToKnowMe/GetToKnowMe";

const Main = () => {
  return (
    <Container>
      <div className={styles.main}>
        <PersonalInfo />
        <Projects />
        <GetToKnowMe />
      </div>
    </Container>
  );
};

export default Main;
