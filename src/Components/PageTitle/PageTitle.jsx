import React from "react";
import styles from "./PageTitle.module.scss";
import { useTheme } from "@mui/material";

const PageTitle = ({ title, description }) => {
  const theme = useTheme();
  return (
    <div className={styles.pageTitle}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PageTitle;
