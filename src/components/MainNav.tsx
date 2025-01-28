import React from "react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <nav className="w-fit flex items-center">
      <Link className={styles.navLink} href="/about">
        about
      </Link>

      <Link className={styles.navLink} href="/work">
        work
      </Link>

      <Link
        className={styles.navLink}
        href="/download/Martin-Brutvan-Resume.pdf"
        target="_blank"
      >
        r&eacute;sum&eacute;
      </Link>

      <div className="hidden md:block">
        <SocialLinks />
      </div>
    </nav>
  );
};

export default MainNav;
