import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const classNames = (...classes: ClassValue[]) => {
  return twMerge(clsx(classes));
};

export default classNames;
