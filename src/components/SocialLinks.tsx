import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <Link
        aria-label="Visit my LinkedIn profile"
        className={styles.link}
        href="https://www.linkedin.com/in/martybrutvan/"
        target="_blank"
      >
        <Image
          alt="LinkedIn icon"
          aria-hidden
          src="/images/icon-linkedin.svg"
          className={styles.icon}
          height={16}
          width={16}
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
