import React from "react";
import styles from "./GetToKnowMeCard.module.scss";
import { useTheme } from "@mui/material";

const GetToKnowMeCard = ({ name, description, image }) => {
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
      <div className={styles.card_info}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <img src={image} alt="getToKnowMeCard" />
    </div>
  );
};

export default GetToKnowMeCard;
