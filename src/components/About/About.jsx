import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/aboutImage.png"
          alt="Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Web Developer</h3>
              <p>
              Experienced in developing responsive, performance optimized, 
              and user-centered web applications using modern technologies and best practices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Tech Support Engineer</h3>
              <p>
              Skilled in diagnosing and resolving technical issues, 
              providing effective user support, and maintaining system reliability and performance.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
