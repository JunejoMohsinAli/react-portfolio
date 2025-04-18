import React from "react";
import styles from "./Experience.module.css";

// Embedded skills data directly in the file
const skills = [
  {
    "title": "HTML",
    "imageSrc": "skills/html.png"
  },
  {
    "title": "CSS",
    "imageSrc": "skills/css.png"
  },
  {
    "title": "JavaScript",
    "imageSrc": "skills/js.png"
  },
  {
    "title": "MySQL",
    "imageSrc": "skills/mysql.png"
  },
  {
    "title": "React",
    "imageSrc": "skills/react.png"
  },
  {
    "title": "Node",
    "imageSrc": "skills/node.png"
  },
  {
    "title": "Bootstrap",
    "imageSrc": "skills/bootstrap.png"
  },
  {
    "title": "Tailwind",
    "imageSrc": "skills/tailwind.png"
  },
  {
    "title": "GitHub",
    "imageSrc": "skills/github.png"
  },
  {
    "title": "Office 365",
    "imageSrc": "skills/office.png"
  }
];

// Embedded history data directly in the file
const history = [
  {
    "role": "Web Developer",
    "organisation": "ZETSOL Technologies",
    "startDate": "Apr, 2025",
    "endDate": "Present",
    "experiences": [
      "Developing responsive and user-friendly websites",
      "Working with JavaScript, React.js, PHP, and WordPress",
      "Using Bootstrap and Tailwind CSS for styling"
    ],
    "imageSrc": "history/zetsol.png"
  },
  {
    "role": "Tech Support Engineer",
    "organisation": "ZETSOL Technologies",
    "startDate": "Aug, 2024",
    "endDate": "Present",
    "experiences": [
      "Resolving technical issues for customers and staff",
      "Managing support tickets from Sehat Kahani platform",
      "Maintaining systems and ensuring smooth performance"
    ],
    "imageSrc": "history/zetsol.png"
  },
  {
    "role": "Data Analyst Intern",
    "organisation": "ORIC, MUET Jamshoro",
    "startDate": "Jul, 2024",
    "endDate": "Aug, 2024",
    "experiences": [
      "Analyzed data for project reports and visualizations",
      "Prepared statistical summaries and charts",
      "Used Excel and data tools to extract insights"
    ],
    "imageSrc": "history/oric.png"
  },
  {
    "role": "Administrative Intern",
    "organisation": "MUET Alumni Development Cell",
    "startDate": "Apr, 2024",
    "endDate": "Jun, 2024",
    "experiences": [
      "Assisted with alumni data management and outreach",
      "Handled administrative documentation and reports",
      "Coordinated with departments for event planning"
    ],
    "imageSrc": "history/muet.png"
  }
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  {/* Directly reference image from assets/experience using file name */}
                  <img src={`/assets/experience/${skill.imageSrc.split('/').pop()}`} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* Directly reference image from assets/experience using file name */}
                <img
                  src={`/assets/experience/${historyItem.imageSrc.split('/').pop()}`}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};