import { Grid } from "@mui/material";
import React from "react";
import SkillsCard from "Components/SkillsCard/SkillsCard";
import javascript from "../../assets/images/javascript.png";
import typescript from "../../assets/images/TypeScript.png";
import rust from "../../assets/images/rust.png";
import react from "../../assets/images/react.webp";
import vite from "../../assets/images/vite.svg";
import next from "../../assets/images/next.png";
import angular from "../../assets/images/angular.png";
import actix from "../../assets/images/actix.png";
import node from "../../assets/images/node.webp";
import expressjs from "../../assets/images/expressjs.png";
import nest from "../../assets/images/nest.png";
import git from "../../assets/images/git.png";
import github from "../../assets/images/github.png";
import gitlab from "../../assets/images/gitlab.webp";
import jest from "../../assets/images/jest.webp";
import test from "../../assets/images/test.png";
import mongoDb from "../../assets/images/mongodb.png";
import postgresql from "../../assets/images/postgresql.png";

const skills = [
  {
    name: "JavaScript",
    type: "Language",
    image: javascript,
  },
  {
    name: "TypeScript",
    type: "Language",
    image: typescript,
  },
  {
    name: "Rust",
    type: "Language",
    image: rust,
  },
  {
    name: "Node.js",
    type: "Environment",
    image: node,
  },
  {
    name: "React",
    type: "Web Framework",
    image: react,
  },
  {
    name: "Vite",
    type: "Web Framework",
    image: vite,
  },
  {
    name: "Next",
    type: "Web Framework",
    image: next,
  },
  {
    name: "Angular",
    type: "Web Framework",
    image: angular,
  },
  {
    name: "Actix",
    type: "Web Framework",
    image: actix,
  },
  {
    name: "Express.js",
    type: "Web Framework",
    image: expressjs,
  },
  {
    name: "Nest.js",
    type: "Web Framework",
    image: nest,
  },
  {
    name: "Git",
    type: "Version control",
    image: git,
  },
  {
    name: "GitHub",
    type: "Version control",
    image: github,
  },
  {
    name: "GitLab",
    type: "Version control",
    image: gitlab,
  },
  {
    name: "Jest.js",
    type: "Testing",
    image: jest,
  },
  {
    name: "Test.js",
    type: "Testing",
    image: test,
  },
  {
    name: "MongoDb",
    type: "Database",
    image: mongoDb,
  },
  {
    name: "PostgreSQL",
    type: "Database",
    image: postgresql,
  },
];

const SkillsContent = () => {
  return (
    <Grid container spacing={{ xs: 1, sm: 2 }}>
      {skills.map((elem) => (
        <Grid item xs={12} sm={6} md={4} key={elem.name}>
          <SkillsCard name={elem.name} type={elem.type} image={elem.image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillsContent;
