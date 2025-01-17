import React from "react";
import styles from "./SkillsList.module.css";

export type SkillTypes =
  | "Accessibility"
  | "Branding"
  | "CSS/SCSS"
  | "Database design"
  | "Documentation"
  | "Formstack"
  | "HTML"
  | "JavaScript"
  | "jQuery"
  | "Logo design"
  | "mySQL"
  | "Photography"
  | "PHP"
  | "Print design"
  | "React"
  | "Responsive"
  | "SCORM"
  | "SEO"
  | "Social media"
  | "Storybook"
  | "Streaming video"
  | "Typescript"
  | "UX design"
  | "Visual design"
  | "WordPress";

export interface SkillsListProps {
  /** String that adds an aria-label or appends to an existing aria-label for
   * screen readers.*/
  ariaLabel?: string;
  /** Optional string to add a CSS class to component's main wrapper. */
  className?: string;
  /** Optional string to add am ID that other components can cross reference for
   * accessibility purposes */
  id?: string;
  /** The skills used in within a project. */
  skills: SkillTypes[];
}

const SkillsList = (props: SkillsListProps) => {
  const { ariaLabel, skills, ...rest } = props;
  const skillsList = skills.sort().map((skill, i) => (
    <li className={styles.skill} key={`skill_${i}`}>
      {skill}
    </li>
  ));

  return (
    <ul aria-label={ariaLabel} className={styles.skillsList} {...rest}>
      {skillsList}
    </ul>
  );
};
export default SkillsList;
