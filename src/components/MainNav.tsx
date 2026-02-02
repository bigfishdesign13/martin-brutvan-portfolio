import React from "react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <nav className="w-fit flex items-center">
      <ul className={styles.navList}>
        <li className={styles.navListItem} key="link_1">
          <Link className={styles.navLink} href="/about">
            about
          </Link>
        </li>
        <li className={styles.navListItem} key="link_2">
          <Link className={styles.navLink} href="/work">
            work
          </Link>
        </li>
        <li className={styles.navListItem} key="link_3">
          <Link
            className={styles.navLink}
            href="/download/Martin-Brutvan-Resume.pdf"
            target="_blank"
          >
            r&eacute;sum&eacute;
          </Link>
        </li>
        <li className={styles.navListItem} key="link_4">
          <div className="hidden md:block">
            <SocialLinks />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
