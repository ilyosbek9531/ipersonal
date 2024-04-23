import React from "react";
import styles from "./Project.module.scss";
import { ProjectCard } from "Components/ProjectCard/ProjectCard";
import qwattIcoImg from "../../assets/images/qwatt.webp";
import dentalIcoImg from "../../assets/images/dentalico.png";
import qwattImg from "../../assets/images/qwatt.png";
import dentalImg from "../../assets/images/dentalpages.png";
import evosIcoImg from "../../assets/images/evos.png";
import evosImg from "../../assets/images/evosWeb.png";

const projects = [
  {
    icoImage: qwattIcoImg,
    title: "Charge with q.watt!",
    description:
      "My inaugural microfrontend project, leveraged Vite React for swift, modern web development and integrated MobX for seamless, scalable state management via functional reactive programming.",
    siteLink: "https://test.app.qwatt.uz",
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
];

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
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
    </div>
  );
};

export default Projects;
