import React from "react";
import MainNav from "../components/MainNav";
import Image from "next/image";
import Link from "next/link";
// import styles from "./Heading.module.css";

const Header = () => {
  return (
    <header className="flex w-full max-w-screen-xl bg-light-surface-primary px-4 mt-4 justify-between items-center">
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
    </header>
  );
};

export default Header;
