"use client";

import React from "react";
import MainNav from "../components/MainNav";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
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
        <div className="flex items-center justify-between w-full mb-2 md:mb-0">
          <Link
            aria-label="Go to Martin Brutvan Portfolio home page"
            className="flex items-center gap-2"
            href="/"
          >
            <Image
              alt="MB"
              className="h-12 md:h-16 w-12 md:w-16"
              height={64}
              priority
              src="/images/icon-mb-desktop.svg"
              width={64}
            />
            <Image
              alt="Martin Brutvan, design technologist"
              className="hidden"
              height={480}
              priority
              src="/images/icon-mobile.svg"
              width={480}
            />
          </Link>
          <div className="block md:hidden">
            <SocialLinks />
          </div>
        </div>
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
