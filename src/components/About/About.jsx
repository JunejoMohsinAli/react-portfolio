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
            <img src="/assets/about/cursorIcon.png" alt="Lab operations icon" />
            <div className={styles.aboutItemText}>
              <h3>ICT Lab Operations</h3>
              <p>
                Overseeing ICT lab operations, maintaining hardware and software systems, ensuring virus security, and assisting students and staff with technical requirements.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/uiIcon.png" alt="QA icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Quality Assurance (SQA)</h3>
              <p>
                Experienced in manual testing for POS and Telemedicine platforms, test case creation, execution, bug tracking, and partnering with teams for stable software releases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon.png" alt="Tech support icon" />
            <div className={styles.aboutItemText}>
              <h3>Level 1 & Level 2 Technical Support</h3>
              <p>
                Strong track record resolving 100+ support tickets weekly with minimal downtime, diagnosing issues, and ensuring reliable, high-quality IT infrastructure performance.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
