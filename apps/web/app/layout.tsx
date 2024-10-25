import type { Metadata } from "next";
import "./globals.css";
import { figtree, yekanBakh } from "../fonts";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`dark ${yekanBakh.className} ${figtree.className}`}
    >
      <body className="dark:bg-base-100 dark:text-base-content min-h-screen grid grid-rows-[5rem_1fr_auto]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
