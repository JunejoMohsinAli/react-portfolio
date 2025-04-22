import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

// Embedded project data directly in the file
const projects = [
  {
    "title": "TextFixer",
    "imageSrc": "projects/textfixer.png",
    "description": "This App lets you quickly convert case, clear, copy, and clean up text, offering a fast and user-friendly experience.",
    "skills": ["React.js", "Node.js", "Bootsrap"],
    "demo": "https://text-fixer-eight.vercel.app/",
    "source": "https://github.com/JunejoMohsinAli/TextFixer"
  },
  {
    "title": "Producto",
    "imageSrc": "projects/producto.svg",
    "description": "Landing page of a user-friendly sales app, Producto, featuring a popup modal form and a responsive layout.",
    "skills": ["React.js", "Custom CSS"],
    "demo": "https://producto-ashy.vercel.app/",
    "source": "https://github.com/JunejoMohsinAli/Producto"
  },
  {
    "title": "Taska",
    "imageSrc": "projects/taska.svg",
    "description": "Login and signup pages of a task management app, Taska, with Zod form validation and a fully responsive layout.",
    "skills": ["React.js", "Tailwind", "TypeScript"],
    "demo": "https://taska-lovat.vercel.app",
    "source": "https://github.com/JunejoMohsinAli/Taska"
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