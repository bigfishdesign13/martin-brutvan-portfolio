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
        href="https://linkedin.com/in/martybrutvan/"
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
      <Link
        aria-label="Visit my GitHub profile"
        className={styles.link}
        href="https://github.com/bigfishdesign13"
        target="_blank"
      >
        <Image
          alt="GitHub icon"
          aria-hidden
          src="/images/icon-github.svg"
          className={styles.icon}
          height={16}
          width={16}
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
