import type { Config } from "tailwindcss";

export const primatives = {
  gray: {
    "25": "#F1F1F1",
    "50": "#E0E0E0",
    "100": "#CECECE",
    "200": "#BDBDBD",
    "300": "#ACACAC",
    "400": "#9A9A9A",
    "500": "#898989",
    "600": "#777777",
    "700": "#5C5C5C",
    "800": "#424242",
    "900": "#272727",
    "950": "#0C0C0C",
  },
  cornflower: {
    "25": "#E9ECF1",
    "50": "#CDD3E0",
    "100": "#B1BACE",
    "200": "#95A2BD",
    "300": "#7989AC",
    "400": "#5D709A",
    "500": "#415889",
    "600": "#253F77",
    "700": "#1D315C",
    "800": "#142342",
    "900": "#0C1527",
    "950": "#04060C",
  },
  mahogany: {
    "25": "#FCF6F2",
    "50": "#F3DED0",
    "100": "#EAC6AD",
    "200": "#E1AF8A",
    "300": "#D89768",
    "400": "#CF7F45",
    "500": "#C66723",
    "600": "#BD4F00",
    "700": "#933D00",
    "800": "#682B00",
    "900": "#3D1A00",
    "950": "#130800",
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        // base: "0.5rem",
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        display1: "10rem",
        heading1: "8rem",
        heading2: "6rem",
        heading3: "4rem",
        heading4: "3rem",
        heading5: "2rem",
        heading6: "1rem",
        subheading1: "1.5rem",
        mainNavLink: "1.75rem", // 28px,
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      fontFamily: {
        heading: ["var(--font-passionone)", "sans-serif"],
        headingAlt: ["var(--font-robotoSlab)", "serif"],
        sans: ["var(--font-passionone)", "sans-serif"],
        serif: ["var(--font-robotoSlab)", "serif"],
      },
      colors: {
        // Semantic Tokens
        light: {
          surface: {
            primary: primatives.cornflower[25],
            secondary: primatives.cornflower[50],
            tertiary: primatives.cornflower[100],
            menu: primatives.mahogany[25],
          },
          heading: {
            primary: primatives.mahogany[900],
            secondary: primatives.cornflower[900],
            tertiary: primatives.cornflower[500],
          },
          bodytext: {
            primary: primatives.gray[900],
          },
          border: {
            primary: primatives.mahogany[200],
            secondary: primatives.cornflower[200],
            // tertiary: primatives.cornflower[500],
          },
          link: {
            primary: primatives.cornflower[500],
            secondary: primatives.cornflower[700],
          },
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        about: "1fr 2fr",
        // projects: "1fr 1fr 1fr",
        // projects: "repeat(3, 1fr);",
        projects: "repeat(1, 1fr);",
      },
    },
  },
  plugins: [],
};
export default config;
