import type { Config } from "tailwindcss";
import formPlugin from "@tailwindcss/forms";
import typographPlugin from "@tailwindcss/typography";
import aspectRatioPlugin from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
  darkMode: "selector",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [formPlugin, typographPlugin, aspectRatioPlugin],
};
