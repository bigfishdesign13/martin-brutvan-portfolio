import React from "react";
import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="w-fit flex gap-4">
      <Link className="btn-main-nav" href="/about">
        about
      </Link>
      <div className="border-s-4 border-light-border-primary" />
      <Link className="btn-main-nav" href="/work">
        work
      </Link>
      <div className="border-s-4 border-light-border-primary" />
      <Link
        className="btn-main-nav"
        href="/download/Martin-Brutvan-Resume.pdf"
        target="_blank"
      >
        r&eacute;sum&eacute;
      </Link>
    </nav>
  );
};

export default MainNav;
