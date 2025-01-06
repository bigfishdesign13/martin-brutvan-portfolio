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
      <div className="flex w-full max-w-screen-xl justify-between items-center">
        <Link href="/">
          <Image
            // className="dark:invert"
            src="/icon.svg"
            alt="Martin Brutvan"
            width={64}
            height={64}
            priority
          />
        </Link>
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
