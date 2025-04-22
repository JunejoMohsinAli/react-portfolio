import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <br/>  Mohsin Ali</h1>
        <p className={styles.description}>
          I’m a Web Developer with expertise in JavaScript, PHP, React.js, WordPress, Bootstrap, and Tailwind CSS, and a passion for MERN stack development. Alongside building responsive, user-friendly web apps, I bring strong technical support experience to ensure seamless functionality and user satisfaction.
        </p>
        <div className={styles.contactButtons}>
          <a 
            href="https://www.linkedin.com/in/mohsinalijunejo" 
            className={styles.contactBtn}
          >
            <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn" className={styles.icon} />
          </a>
          
          <a 
            href="https://github.com/junejomohsinali" 
            className={styles.contactBtn}
          >
            <img src="/assets/contact/githubIcon.png" alt="GitHub" className={styles.icon} />
          </a>
          
          <a 
            href="mailto:your-email@example.com" 
            className={styles.contactBtn}
          >
            <img src="/assets/contact/emailIcon.png" alt="Email" className={styles.icon} />
          </a>
        </div>
      </div>
      <img
        src="/assets/hero/heroImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};