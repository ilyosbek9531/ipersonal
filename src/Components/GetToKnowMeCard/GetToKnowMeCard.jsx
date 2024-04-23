import React from "react";
import styles from "./GetToKnowMeCard.module.scss";
import { useTheme } from "@mui/material";

const GetToKnowMeCard = (name, description, image) => {
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
      GetToKnowMeCard
    </div>
  );
};

export default GetToKnowMeCard;
