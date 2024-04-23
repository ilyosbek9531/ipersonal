import React from "react";
import styles from "./AboutContent.module.scss";
import ilyosbekImg from "../../assets/images/ilyosbek.png";
import { Button, useTheme } from "@mui/material";

const about = [
  {
    title: "Who I am ?",
    description:
      "I am Ilyosbek Sheraliyev, a Full Stack Web Developer from Uzbekistan 🇺🇿. My expertise spans JavaScript/TypeScript for front-end and Rust/Actix/Node.js/Nest.js for back-end development. I aim to excel in crafting top-tier web applications while thriving in dynamic settings and fostering seamless teamwork.",
  },
  {
    title: "What I Do ?",
    description:
      "With a Bachelor of Science in Business Information System from Westminster International University in Tashkent, I have honed my skills in both front-end and back-end development. During my tenure as a Front-end Developer at Udevs.io in Tashkent from June 2022 to October 2023, I worked on various projects including Qwatt, AllDental, Parfume, Uzdigital, and Evos. These projects involved technologies like Vite React, MobX, TypeScript, Jest.js, Axios, and Next.js, among others. I collaborated on projects for clients such as dentalpages.uz, uzdplus.uz, and evos.uz, contributing to improved user experiences and increased online sales.",
  },
  {
    title: "What I Did ?",
    description:
      "Prior to my journey in web development, I pursued my education at a specialized school focusing on mathematics and physics in Fergana between 2016 to 2021. Excelling in mathematics, I actively participated in math olympiads several times, showcasing my passion and proficiency in the subject. This academic background instilled in me a rigorous analytical mindset and problem-solving skills, which I now apply to my work as a Full Stack Web Developer.",
  },
];

const AboutContent = () => {
  const theme = useTheme();
  return (
    <div className={styles.about}>
      <div className={styles.about_info}>
        {about.map((elem) => (
          <div className={styles.about_info_elem} key={elem.title}>
            <h5>{elem.title}</h5>
            <p>{elem.description}</p>
          </div>
        ))}
        <p>
          Feel free to reach out via{" "}
          <a
            href=""
            style={{
              color: theme.palette.mode === "dark" ? "#FF8C00" : "#DC143C",
            }}
          >
            e-mail
          </a>
          . Want to see where I’ve worked? Check out my{" "}
          <a
            href=""
            style={{
              color: theme.palette.mode === "dark" ? "#FF8C00" : "#DC143C",
            }}
          >
            Resume
          </a>
          , or Connect with me on{" "}
          <a
            href=""
            style={{
              color: theme.palette.mode === "dark" ? "#FF8C00" : "#DC143C",
            }}
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      <div className={styles.about_assets}>
        <div className={styles.about_assets_image}>
          <img src={ilyosbekImg} alt="ilyosbekImg" />
        </div>
        <div className={styles.about_assets_button}>
          <Button variant="outlined">Get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
