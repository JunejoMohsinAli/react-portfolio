import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src="/assets/contact/whatsappIcon.svg" alt="WhatsApp icon" />
            <a 
              href="https://wa.me/923153463584?text=Hey%20Mohsin%20I%20just%20saw%20your%20portfolio%20website%20want%20to%20talk."
              target="_blank"
              rel="noopener noreferrer"
            >
              +92 315 3463584
            </a>
          </li>
          <li className={styles.link}>
            <img src="/assets/contact/emailIcon.png" alt="Email icon" />
            <a href="mailto:mohsinali.junejo@outlook.com">mohsinali.junejo@outlook.com</a>
          </li>
          <li className={styles.link}>
            <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/mohsinalijunejo" target="_blank" rel="noopener noreferrer">linkedin.com/mohsinalijunejo</a>
          </li>
          <li className={styles.link}>
            <img src="/assets/contact/githubIcon.png" alt="Github icon" />
            <a href="https://github.com/junejomohsinali" target="_blank" rel="noopener noreferrer">github.com/junejomohsinali</a>
          </li>
        </ul>
      </div>
      <p className={styles.copyright}>Copyrights © Mohsin Ali Junejo</p>
    </footer>
  );
};