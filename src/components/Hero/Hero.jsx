import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <br/>  Mohsin Ali</h1>
        <p className={styles.description}>
          ICT Lab Assistant, SQA & Technical Support Engineer with an MSc in Computer Science (3.25 CGPA) and over five years of IT experience. Currently working at The City School, Liaquat Campus, Hyderabad, supporting ICT lab operations while bringing extensive experience in software quality assurance for POS and healthcare systems, as well as Level 1 & Level 2 technical support.
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
            href="mailto:mohsinali.junejo@outlook.com" 
            className={styles.contactBtn}
          >
            <img src="/assets/contact/emailIcon.png" alt="Email" className={styles.icon} />
          </a>
          
          <a 
            href="https://wa.me/923153463584?text=Hey%20Mohsin%20I%20just%20saw%20your%20portfolio%20website%20want%20to%20talk." 
            className={styles.contactBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/contact/whatsappIcon.svg" alt="WhatsApp" className={styles.icon} />
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