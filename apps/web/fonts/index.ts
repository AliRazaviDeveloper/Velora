import { Figtree } from "next/font/google";
import localFont from "next/font/local";
export const figtree = Figtree({
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-figtree",
  fallback: ["sans-serif"],
  preload: true,
});

export const yekanBakh = localFont({
  src: [
    {
      path: "../public/fonts/YekanBakh-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Fat.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-News.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
  display: "swap",
});
