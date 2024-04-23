import React from "react";
import styles from "./GetToKnowMe.module.scss";
import aboutMe from "../../assets/images/aboutme.png";
import GetToKnowMeCard from "Components/GetToKnowMeCard/GetToKnowMeCard";
import { Grid } from "@mui/material";

const getToKnowMe = [
  {
    name: "About me",
    description: "Who I am and what I do",
    image: aboutMe,
  },
  {
    name: "About me",
    description: "Who I am and what I do",
    image: aboutMe,
  },
  {
    name: "About me",
    description: "Who I am and what I do",
    image: aboutMe,
  },
  {
    name: "About me",
    description: "Who I am and what I do",
    image: aboutMe,
  },
];

const GetToKnowMe = () => {
  return (
    <div className={styles.getToKnowMe}>
      <h2>Get to know me</h2>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {getToKnowMe.map((elem) => (
          <Grid item xs={12} sm={6} key={elem.name}>
            <GetToKnowMeCard
              name={elem.name}
              description={elem.description}
              image={elem.image}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GetToKnowMe;
