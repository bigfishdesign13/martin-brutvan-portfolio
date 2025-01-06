import React from "react";
import Link from "next/link";

// export const headingSizesArray = [
//   "display1",
//   "display2",
//   "heading1",
//   "heading2",
//   "heading3",
//   "heading4",
//   "heading5",
//   "heading6",
//   "heading7",
//   "heading8",
// ] as const;
// export const headingLevelsArray = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

// export type HeadingSizes = (typeof headingSizesArray)[number];
// export type HeadingLevels = (typeof headingLevelsArray)[number];

// export interface HeadingProps {
//   /** Optional className that appears in addition to `heading` */
//   className?: string;
//   children: string | JSX.Element;
//   /** Optional ID that other components can cross reference for accessibility
//    * purposes */
//   id?: string;
//   /** Optional number 1-6 used to create the `<h*>` tag; if prop is not passed,
//    * `Heading` will default to `<h2>` */
//   level?: HeadingLevels;
//   /** Optional size used to override the default styles of the native HTML `<h>`
//    * elements */
//   size?: HeadingSizes;
// }

const MainNav = () => {
  // const {
  //   className = "",
  //   children,
  //   id,
  //   level = "h2",
  //   size = "",
  //   ...rest
  // } = props;
  // const Tag = `${level}` as keyof JSX.IntrinsicElements;

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
