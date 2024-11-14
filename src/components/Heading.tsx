import React from "react";
// import styles from "./Heading.module.css";

export const headingSizesArray = [
  "display1",
  "display2",
  "heading1",
  "heading2",
  "heading3",
  "heading4",
  "heading5",
  "heading6",
  "heading7",
  "heading8",
] as const;
export const headingLevelsArray = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
export const headingFontFamilyArray = ["default", "alt"] as const;

export type HeadingSizes = (typeof headingSizesArray)[number];
export type HeadingLevels = (typeof headingLevelsArray)[number];
export type HeadingFontFamily = (typeof headingFontFamilyArray)[number];

export interface HeadingProps {
  /** Optional className that appears in addition to `heading` */
  className?: string;
  children: string | JSX.Element;
  /** Optional font selection. */
  fontFamily?: HeadingFontFamily;
  /** Optional ID that other components can cross reference for accessibility
   * purposes */
  id?: string;
  /** Optional number 1-6 used to create the `<h*>` tag; if prop is not passed,
   * `Heading` will default to `<h2>` */
  level?: HeadingLevels;
  /** Optional size used to override the default styles of the native HTML `<h>`
   * elements */
  size?: HeadingSizes;
}

const Heading = (props: HeadingProps) => {
  const {
    className = "",
    children,
    id,
    fontFamily,
    level = "h2",
    size = "",
    ...rest
  } = props;
  const Tag = `${level}` as keyof JSX.IntrinsicElements;
  const finalFontFamily = fontFamily === "alt" ? "headingAlt" : "heading"

  return (
    <Tag
      className={`${className} ${size} font-${finalFontFamily}`}
      data-size={size}
      id={id}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Heading;
