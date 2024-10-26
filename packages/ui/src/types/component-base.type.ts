import { Size } from "./size.type";
import { Variant } from "./variant.type";

export type ComponentBaseType = {
  className?: string;
  children?: React.ReactNode;
  size?: Size;
  variant?: Variant;
};
