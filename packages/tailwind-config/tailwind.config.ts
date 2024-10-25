/** @type {import('tailwindcss').Config} */
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import { Config } from "tailwindcss";

extend([mixPlugin]);

const generateDarkenColorFrom = (color: string, percentage = 0.07): string => {
  return colord(color).darken(percentage).toHex();
};
const generateForegroundColorFrom = (
  color: string,
  percentage = 0.8
): string => {
  return colord(color)
    .mix(colord(color).isDark() ? "white" : "dark", percentage)
    .toHex();
};
export const tailwindColor: Record<string, string> = {
  current: "currentColor",
  transparent: "transparent",
  white: "#F9F9F9",
  primary: "#007BEC",
  "primary-content": "#FFFFFF",
  "primary-focus": generateDarkenColorFrom("#007BEC"),
  secondary: "#6c5ce7",
  "secondary-content": "#FFFFFF",
  "secondary-focus": generateDarkenColorFrom("#6c5ce7"),
  accent: "#1FB2A5",
  "accent-content": "#FFFFFF",
  "accent-focus": generateDarkenColorFrom("#1FB2A5"),
  neutral: "#2a323c",
  "neutral-content": generateForegroundColorFrom("#FFFFFF"),
  "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
  "base-25": "#353d47",
  "base-50": "#2a323c",
  "base-75": "#20272e",
  "base-100": "#1d232a",
  "base-200": "#191e24",
  "base-300": "#15191e",
  "base-content": "#A6ADBB",
  info: "#3abff8",
  "info-content": generateForegroundColorFrom("#3abff8"),
  success: "#36d399",
  "success-content": generateForegroundColorFrom("#36d399"),
  warning: "#fbbd23",
  "warning-content": generateForegroundColorFrom("#fbbd23"),
  error: "#f87272",
  "error-content": generateForegroundColorFrom("#f87272"),
  "gradient-first": "#34eaa0",
  "gradient-second": "#0fa2e9",
};

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: tailwindColor,

    extend: {
      fontFamily: {
        figtree: ["var(--font-figtree)", "sans-serif"],
        yekan: ["var(--font-yekan-bakh)", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
