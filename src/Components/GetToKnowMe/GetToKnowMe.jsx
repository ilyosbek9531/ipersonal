import React from "react";
import styles from "./GetToKnowMe.module.scss";
import aboutMe from "../../assets/images/aboutme.png";
import nodeBook from "../../assets/images/notebook.png";
import bookShelf from "../../assets/images/bookshelf.png";
import techStack from "../../assets/images/techStack.png";
import GetToKnowMeCard from "Components/GetToKnowMeCard/GetToKnowMeCard";
import { Grid } from "@mui/material";

const getToKnowMe = [
  {
    name: "About me",
    description: "Who I am and what I do",
    image: aboutMe,
  },
  {
    name: "Notebook",
    description: "My thoughts, insights, and reflections",
    image: nodeBook,
  },
  {
    name: "Bookshelf",
    description: "Books and pieces of wisdom I’ve enjoyed reading",
    image: bookShelf,
  },
  {
    name: "Tech Stack",
    description: "The dev tools, apps, devices, and games I use and play.",
    image: techStack,
  },
];

const GetToKnowMe = () => {
  return (
    <div className={styles.getToKnowMe}>
      <h2>Get to know me</h2>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
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
