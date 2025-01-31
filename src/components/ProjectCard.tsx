import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import SkillsList, { SkillTypes } from "./SkillsList";
import styles from "./ProjectCard.module.css";

export interface ProjectCardProps {
  /** String that adds an aria-label or appends to an existing aria-label for
   * screen readers.*/
  ariaLabel?: string;
  /** Optional string to add a CSS class to component's main wrapper. */
  className?: string;
  /** Optional string to add am ID that other components can cross reference for
   * accessibility purposes */
  id?: string;
  /** Path for the card's image. */
  thumbnail: string;
  /** The skills used in within a project. */
  skills: SkillTypes[];
  /** The page slug. */
  slug: string;
  /** A brief description of the project. */
  summary: string;
  /** The visible card title and default value for the aria-label. */
  title: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const {
    ariaLabel,
    className,
    id,
    skills,
    slug,
    summary,
    thumbnail,
    title,
    ...rest
  } = props;
  const finalHref = `/work/${slug}`;
  const finalAriaLabel = ariaLabel ? ariaLabel : title;

  return (
    <a
      aria-label={finalAriaLabel}
      className={`${className} ${styles.wrapper}`}
      href={finalHref}
      id={id}
      {...rest}
    >
      <Image
        alt={`${title} thumbnail`}
        aria-hidden
        className={styles.image}
        height={480}
        src={thumbnail}
        width={480}
      />
      {/* <h3>{title}</h3> */}
      <div className={styles.text}>
        <Heading
          className={styles.heading}
          fontFamily="alt"
          level="h3"
          size="heading5"
        >
          {title}
        </Heading>
        <SkillsList skills={skills} />
        <p>{summary}</p>
      </div>
    </a>
  );
};
export default ProjectCard;
