import React from "react";
import styles from "./GetToKnowMeCard.module.scss";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GetToKnowMeCard = ({ name, description, image, slug }) => {
  const navigate = useNavigate();
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
      onClick={() => navigate(slug)}
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
