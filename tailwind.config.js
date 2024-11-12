const { nextui } = require("@nextui-org/react");

// tailwind.config.js
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    extract,
  ],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    screens,
    fontSize,

    extend: {
      colors: {
        primary: "var(--primary-color)",

        "secondary-blue": "var(--secondary-blue)",
        "secondary-green": "var(--secondary-green)",
        "secondary-orange": "var(--secondary-orange)",
        "secondary-red": "var(--secondary-red)",

        "neutral-01": "var(--neutral-01)",
        "neutral-02": "var(--neutral-02)",
        "neutral-03": "var(--neutral-03)",
        "neutral-04": "var(--neutral-04)",
        "neutral-05": "var(--neutral-05)",
        "neutral-06": "var(--neutral-06)",
        "neutral-07": "var(--neutral-07)",
      },
      fontSize: {
        hero: "var(--font-size-hero)",
        "heading-1": "var(--font-size-heading-1)",
        "heading-2": "var(--font-size-heading-2)",
        "heading-3": "var(--font-size-heading-3)",
        "heading-4": "var(--font-size-heading-4)",
        "heading-5": "var(--font-size-heading-5)",
        "heading-6": "var(--font-size-heading-6)",
        "heading-7": "var(--font-size-heading-7)",
      },
      screens: {
        xs: "20rem",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), fluid],
};
