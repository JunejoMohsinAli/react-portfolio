import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

// Embedded project data directly in the file
const projects = [
  {
    "title": "TextFixer",
    "imageSrc": "projects/project1.png",
    "description": "This App lets you quickly convert case, clear, copy, and clean up text, offering a fast and user-friendly experience.",
    "skills": ["React.js", "Node.js", "Bootsrap"],
    "demo": "https://text-fixer-eight.vercel.app/",
    "source": "https://github.com/JunejoMohsinAli/TextFixer"
  },
  {
    "title": "Producto",
    "imageSrc": "projects/project2.png",
    "description": "Landing page for Producto, a user-friendly sales app, featuring a clean design, popup modal form, and responsive layout.",
    "skills": ["React.js", "Custom CSS"],
    "demo": "https://producto-ashy.vercel.app/",
    "source": "https://github.com/JunejoMohsinAli/Producto"
  },
];

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};