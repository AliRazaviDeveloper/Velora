"use client";
import Link from "next/link";
import { topNavigation } from "./data";
import { usePathname } from "next/navigation";

const TopNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-row gap-x-8 items-center mr-24 hidden lg:flex">
      {topNavigation.map((navigation) => {
        const isActive = pathname === navigation.href;

        return (
          <li key={navigation.id}>
            <Link
              href={navigation.href}
              className={`hover:dark:text-primary pb-2 ${isActive ? "dark:border-b-2 dark:border-primary/30 dark:text-primary" : ""}`}
            >
              {navigation.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TopNavigation;
