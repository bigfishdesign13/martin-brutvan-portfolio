import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CalloutLink.module.css";

export interface ProjectCardProps {
  /** String that adds an aria-label or appends to an existing aria-label for
   * screen readers.*/
  ariaLabel?: string;
  /** Optional string to add a CSS class to component's main wrapper. */
  className?: string;
  /** The link. */
  href: string;
  /** Path for the link icon. */
  icon: string;
  /** Alt text for icon. */
  iconAlt: string;
  /** Optional string to add am ID that other components can cross reference for
   * accessibility purposes */
  id?: string;
  /** The text that appears as the link. */
  linkText: string;
  /** Should link open in a new window? */
  newWindow?: boolean;
  /** Sets a smaller icon and normal text */
  reduced?: boolean;
}

const ProjectCard = (props: ProjectCardProps) => {
  const {
    ariaLabel,
    className,
    href = "#",
    icon,
    iconAlt,
    id,
    newWindow,
    reduced,
    linkText,
    ...rest
  } = props;
  const finalAriaLabel = ariaLabel ? ariaLabel : linkText;
  const iconSize = reduced ? 12 : 24;
  const finalClassName = `${className} ${styles.calloutLink} ${reduced && styles.reduced}`;

  return (
    <Link
      aria-label={finalAriaLabel}
      className={finalClassName}
      href={href}
      id={id}
      target={newWindow ? "_blank" : undefined}
      {...rest}
    >
      <span className={styles.iconContainer}>
        <Image
          alt={iconAlt}
          aria-hidden="true"
          src={icon}
          height={iconSize}
          width={iconSize}
          className={styles.icon}
        />
      </span>
      {linkText}
    </Link>
  );
};
export default ProjectCard;
