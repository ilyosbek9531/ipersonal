import { Button } from "@mui/material";
import React from "react";
import styles from "./PersonalInfo.module.scss";

const PersonalInfo = () => {
  return (
    <div className={styles.info}>
      <h1>
        <span>I'm</span> Ilyosbek Sheraliyev
      </h1>
      <p>
        Combining my mastery of JavaScript/TypeScript for front-end and
        Rust/Actix/Nodejs/Nestjs for back-end, I aspire to excel in crafting
        top-tier web applications. Thriving in dynamic settings, I aim to
        innovate, delivering optimal solutions and fostering seamless teamwork.
      </p>
      <div className={styles.info_button}>
        <Button variant="outlined">See my resume</Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
