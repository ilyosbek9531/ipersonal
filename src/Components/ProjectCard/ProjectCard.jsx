import React from "react";
import styles from "./ProjectCard.module.scss";
import { useTheme } from "@mui/material";
import { ArrowRight } from "helpers/icons";

export const ProjectCard = ({
  icoImage,
  title,
  description,
  siteLink,
  siteImage,
}) => {
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
        <div className={styles.card_info_items}>
          <img src={icoImage} alt="icoImage" />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div
          className={styles.card_info_site}
          onClick={() => window.open(siteLink, "_blank")}
        >
          <h4>Visit Site</h4>
          <div className={styles.card_info_site_arrow}>
            <ArrowRight
              stroke={theme.palette.mode === "dark" ? "white" : "black"}
            />
          </div>
        </div>
      </div>
      <div className={styles.card_img}>
        <img src={siteImage} alt="siteImage" />
      </div>
    </div>
  );
};
