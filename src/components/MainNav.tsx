import React from "react";
import Link from "next/link";
import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <nav className="w-fit flex gap-4">
      <Link className={styles.navLink} href="/about">
        about
      </Link>
      <div className={styles.navDivider} />
      <Link className={styles.navLink} href="/work">
        work
      </Link>
      <div className={styles.navDivider} />
      <Link
        className={styles.navLink}
        href="/download/Martin-Brutvan-Resume.pdf"
        target="_blank"
      >
        r&eacute;sum&eacute;
      </Link>
    </nav>
  );
};

export default MainNav;
