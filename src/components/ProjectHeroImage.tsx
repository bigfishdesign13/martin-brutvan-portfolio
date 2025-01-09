import React from "react";
import Image from "next/image";
// import styles from "./ProjectHero.module.css";

export interface ProjectHeroImageProps {
  /** String that adds alt prop for image.*/
  alt: string;
  /** Optional string to add a CSS class to component's main wrapper. */
  className?: string;
  /** Optional string to add am ID that other components can cross reference for
   * accessibility purposes */
  id?: string;
  /** Path for the image. */
  src: string;
}

const ProjectHeroImage = (props: ProjectHeroImageProps) => {
  const { alt, className, id, src, ...rest } = props;
  const finalClassName = `bg-light-surface-tertiary mb-8 rounded-2xl border border-light-border-tertiary ${className}`;

  return (
    <Image
      alt={alt}
      aria-hidden
      className={finalClassName}
      height={320}
      id={id && id}
      src={src}
      width={1280}
      {...rest}
    />
  );
};
export default ProjectHeroImage;
