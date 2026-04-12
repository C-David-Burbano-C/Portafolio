import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: "rgb(5, 7, 11)",
        surface: "rgb(16, 25, 39)",
        foreground: "rgb(243, 247, 251)",
        muted: "rgb(191, 208, 226)",
        accent: "rgb(95, 178, 255)",
        cyan: "rgb(119, 236, 255)",
        violet: "rgb(156, 163, 255)",
        line: "rgba(201, 218, 255, 0.2)",

        "light-bg": "rgb(255, 255, 255)",
        "light-surface": "rgb(248, 250, 252)",
        "light-foreground": "rgb(30, 41, 59)",
        "light-muted": "rgb(100, 116, 139)",
      },
      fontFamily: {
        sans: [
          "Manrope",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        display: [
          "Space Grotesk",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
