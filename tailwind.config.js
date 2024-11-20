import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",
        secondary: "#fbbc05",
        success: "#34a853",
        danger: "#ea4335",
        dark: "#171717",
        light: "#ffffff",
      },
    },
  },
  plugins: [],
};

export default config;
