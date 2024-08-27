import React from "react";
import styles from "./ProjectsContent.module.scss";
import { ProjectCard } from "Components/ProjectCard/ProjectCard";
import qwattIcoImg from "../../assets/images/qwatt.webp";
import dentalIcoImg from "../../assets/images/dentalico.png";
import qwattImg from "../../assets/images/qwatt.png";
import dentalImg from "../../assets/images/dentalpages.png";
import evosIcoImg from "../../assets/images/evos.png";
import evosImg from "../../assets/images/evosWeb.png";
import samautoIcoImg from "../../assets/images/samautoIco.jpg";
import samautoImg from "../../assets/images/samauto.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const projects = [
  {
    icoImage: qwattIcoImg,
    title: "Charge with q.watt!",
    description:
      "My inaugural microfrontend project, leveraged Vite React for swift, modern web development and integrated MobX for seamless, scalable state management via functional reactive programming.",
    siteLink: "https://qwatt.uz/",
    siteImage: qwattImg,
  },
  {
    icoImage: dentalIcoImg,
    title: "dentalpages.uz connecting patients with dentists",
    description:
      "Implemented TypeScript for robust compile-time error checking and employed Jest.js extensively to ensure comprehensive testing of all functions and components.",
    siteLink: "https://www.dentalpages.uz/",
    siteImage: dentalImg,
  },
  {
    icoImage: evosIcoImg,
    title: "Evos",
    description:
      "As a Website Developer at Evos Project, I spearheaded the implementation of geolocation functionality, ensuring that the website dynamically displayed available menu items based on customer location, contributing to improved user experience and increased online sales.",
    siteLink: "https://evos.uz/",
    siteImage: evosImg,
  },
  {
    icoImage: samautoIcoImg,
    title: "Sam auto",
    description:
      "As part of the Sam Auto project, I developed a comprehensive car comparison feature, enabling users to compare multiple vehicles side by side. The feature suggests the best options based on user-defined criteria, such as price, performance, and features. Additionally, I implemented advanced filtering options, allowing users to narrow down their search by specific car attributes to find the perfect match.",
    siteLink: "https://samauto.uz/",
    siteImage: samautoImg,
  },
];

const ProjectsContent = ({ isMain = false }) => {
  return (
    <div className={styles.projects}>
      {isMain && <h2>Projects</h2>}
      <div className={styles.projects_cards}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            icoImage={project.icoImage}
            title={project.title}
            description={project.description}
            siteLink={project.siteLink}
            siteImage={project.siteImage}
          />
        ))}
      </div>
      {isMain && (
        <div className={styles.projects_button}>
          <Link to="/projects">
            <Button variant="outlined">More</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectsContent;
