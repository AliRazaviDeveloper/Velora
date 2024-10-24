import classNames from "./utils/classNames";

type TextOwnProps<E extends React.ElementType> = {
  children?: React.ReactNode;
  as?: E;
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  weight?:
    | "thin"
    | "extraLight"
    | "light"
    | "normal"
    | "medium"
    | "semiBold"
    | "bold"
    | "extraBold"
    | "black";
  align?: "left" | "center" | "right" | "justify";
  className?: string;
};

const textStyles = {
  size: {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl",
  },
  weight: {
    thin: "font-thin",
    extraLight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semiBold: "font-semibold",
    bold: "font-bold",
    extraBold: "font-extrabold",
    black: "font-black",
  },
  align: {
    center: "text-center",
    start: "text-start",
    end: "text-end",
    left: "text-left",
    right: "text-right",
    justify: "text-justify",
  },
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const Taypography = <E extends React.ElementType = "span">({
  align,
  children,
  as,
  className,
  size,
  weight,
  ...rest
}: TextProps<E>) => {
  const Component = as || "span";

  return (
    <Component
      className={classNames(
        {
          [textStyles.size[size!]]: size,
          [textStyles.weight[weight!]]: weight,
          [textStyles.align[align!]]: align,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Taypography;
