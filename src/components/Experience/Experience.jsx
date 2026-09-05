import React from "react";
import styles from "./Experience.module.css";

const skills = [
  {
    "title": "HTML",
    "imageSrc": "skills/html.png"
  },
  {
    "title": "JavaScript",
    "imageSrc": "skills/js.png"
  },
  {
    "title": "TypeScript",
    "imageSrc": "skills/ts.png"
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
    "title": "Git",
    "imageSrc": "skills/git.png"
  },
  {
    "title": "GitHub",
    "imageSrc": "skills/github.png"
  },
  {
    "title": "Postman",
    "imageSrc": "skills/postman.png"
  },
  {
    "title": "Jira",
    "imageSrc": "skills/jira.png"
  },
  {
    "title": "ClickUp",
    "imageSrc": "skills/clickup.png"
  }
];

// Embedded history data directly in the file
const history = [
  {
    "role": "ICT Lab Assistant",
    "organisation": "The City School, Liaquat Campus, Hyderabad",
    "startDate": "Aug 2026",
    "endDate": "Present",
    "experiences": [
      "Support ICT Lab operations for the Junior & Prep Section, including maintaining hardware and software, ensuring system security from viruses, and overseeing lab cleanliness.",
      "Assist students and staff with technical requirements and perform administrative tasks as assigned by the school head."
    ],
    "imageSrc": "history/thecityschool.png"
  },
  {
    "role": "Tech Support & SQA Engineer",
    "organisation": "ZETSOL Technologies Pvt. Ltd., Hyderabad",
    "startDate": "Aug 2024",
    "endDate": "July 2026",
    "experiences": [
      "Delivered Level 1 & 2 technical support to clients and internal teams.",
      "Resolved 100+ support tickets weekly, ensuring minimal downtime.",
      "Performed manual testing for POS and Telemedicine systems, including test case creation, execution, and reporting.",
      "Collaborated with teams to track, verify, and resolve issues, ensuring quality software releases."
    ],
    "imageSrc": "history/zetsol.png"
  },
  {
    "role": "Data Analyst Intern",
    "organisation": "ORIC, MUET Jamshoro",
    "startDate": "Jul 2024",
    "endDate": "Aug 2024",
    "experiences": [
      "Handled documentation and correspondence, and managed event content and administrative records.",
      "Assisted in data collection and visualization using Excel and internal tools.",
      "Automated reports and dashboards for research insights."
    ],
    "imageSrc": "history/oric.png"
  },
  {
    "role": "Administrative Intern",
    "organisation": "MUET Alumni Development Cell, Jamshoro",
    "startDate": "Apr 2024",
    "endDate": "Jun 2024",
    "experiences": [
      "Handled documentation and correspondence, and managed event content and administrative records.",
      "Assisted in data collection and visualization using Excel and internal tools.",
      "Automated reports and dashboards for research insights."
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