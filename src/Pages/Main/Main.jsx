import { Container } from "@mui/material";
import React from "react";
import styles from "./Main.module.scss";
import PersonalInfo from "Components/PersonalInfo/PersonalInfo";
import Projects from "Components/Projects/Projects";

const Main = () => {
  return (
    <Container>
      <div className={styles.main}>
        <PersonalInfo />
        <Projects />
      </div>
    </Container>
  );
};

export default Main;
