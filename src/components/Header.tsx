"use client";

import React from "react";
import MainNav from "../components/MainNav";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { useScrollPosition } from "../hooks/useScrollPosition";
import styles from "./Header.module.css";

const Header = () => {
  const scrollPosition = useScrollPosition();
  const scrollClass =
    scrollPosition > 64
      ? "bg-light-surface-menu drop-shadow"
      : "bg-light-surface-primary";

  return (
    <header className={`${styles.mainWrapper} ${scrollClass}`}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link
            aria-label="Go to the home page"
            className={styles.logoLink}
            href="/"
          >
            <Image
              alt="MB"
              aria-hidden
              className={styles.logoInitials}
              height={64}
              priority
              src="/images/icon-mb-desktop.svg"
              width={64}
            />
            <Image
              alt="Martin Brutvan, design technologist"
              aria-hidden
              className="hidden"
              height={480}
              priority
              src="/images/icon-mobile.svg"
              width={480}
            />
          </Link>
          <div className={styles.socialLinks}>
            <SocialLinks />
          </div>
        </div>
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
