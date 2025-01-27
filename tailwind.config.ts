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
        display1: "10rem", // 160px
        display1Mobile: "8rem",
        display1SmallMobile: "6rem",
        heading1: "8rem", // 128px
        heading1Mobile: "6rem",
        heading2: "6rem", // 96px
        heading2Mobile: "4rem",
        heading3: "4rem", // 64px
        heading3Mobile: "3.2rem",
        heading4: "3rem", // 48px
        heading4Mobile: "2.4rem",
        heading5: "2rem", // 32px
        heading6: "1rem", // 16px
        subheading1: "1.5rem",
        body1: "1.125rem",
        body2: "1rem",
        mainNavLink: "1.75rem", // 28px,
        mainNavLinkSmallMobile: "1.25rem", // 20px,
        mainNavLinkLargeMobile: "1.5rem", // 24px,
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
          bodytext: {
            primary: primatives.gray[900],
            seconday: primatives.gray[800],
          },
          border: {
            primary: primatives.mahogany[200],
            secondary: primatives.cornflower[200],
            tertiary: primatives.cornflower[50],
          },
          heading: {
            primary: primatives.mahogany[900],
            secondary: primatives.cornflower[900],
            tertiary: primatives.cornflower[500],
          },
          link: {
            primary: primatives.mahogany[700],
            secondary: primatives.mahogany[900],
          },
          surface: {
            primary: primatives.cornflower[25],
            secondary: primatives.cornflower[50],
            tertiary: primatives.cornflower[100],
            menu: primatives.mahogany[25],
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
        // projects: "repeat(1, 1fr);",
        projects: "repeat(2, 1fr);",
      },
    },
  },
  plugins: [],
};
export default config;
