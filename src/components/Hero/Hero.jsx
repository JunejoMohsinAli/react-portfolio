import React from "react";

import styles from "./Hero.module.css";
import heroImage from "../../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mohsin Ali</h1>
        <p className={styles.description}>
        I’m a Web Developer with expertise in JavaScript, PHP, React.js, WordPress, Bootstrap, and Tailwind CSS, and a passion for MERN stack development. Alongside building responsive, user-friendly web apps, I bring strong technical support experience to ensure seamless functionality and user satisfaction.
        </p>
        <a href="https://www.linkedin.com/messaging/compose/?recipient=mohsinalijunejo" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
