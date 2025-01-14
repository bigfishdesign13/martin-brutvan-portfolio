"use client";

import React from "react";
import MainNav from "../components/MainNav";
import Image from "next/image";
import Link from "next/link";
// import styles from "./Heading.module.css";
import { useScrollPosition } from "../hooks/useScrollPosition";

const Header = () => {
  const scrollPosition = useScrollPosition();
  const scrollClass =
    scrollPosition > 64
      ? "bg-light-surface-menu drop-shadow"
      : "bg-light-surface-primary";

  return (
    <header
      className={`fixed flex justify-center w-full p-4 transition-all duration-300 ${scrollClass}`}
    >
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl md:justify-between items-center">
        <Link className="flex items-center gap-2" href="/">
          <Image
            // className="dark:invert"
            alt="MB"
            className="hidden md:block"
            height={64}
            priority
            src="/icon-desktop.svg"
            width={64}
          />
          <Image
            // className="dark:invert"
            alt="Martin Brutvan, design technologist"
            className="block md:hidden"
            height={480}
            priority
            src="/icon-mobile.svg"
            width={480}
          />
        </Link>
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
