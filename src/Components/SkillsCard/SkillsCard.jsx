import React from "react";
import styles from "./SkillsCard.module.scss";
import { useTheme } from "@mui/material";

const SkillsCard = ({ name, type, image }) => {
  const theme = useTheme();
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#383737" : "#F6F6F6",
        border: `1px solid ${
          theme.palette.mode === "dark" ? "#383737" : "#EBEBEB"
        }`,
      }}
    >
      <div />
      <img src={image} alt="skillsCard" />
      <div className={styles.card_info}>
        <h4>{name}</h4>
        <span>{type}</span>
      </div>
    </div>
  );
};

export default SkillsCard;
