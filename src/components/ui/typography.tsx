import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva(
  "text-base leading-normal transition-all font-normal",
  {
    variants: {
      variant: {
        h1: "text-[46px] md:text-[54px] 2xl:text-[70px] leading-[1.1]",
        h2: "text-[40px] md:text-[46px] 2xl:text-[60px] leading-[1.1]",
        h3: "text-[22px] md:text-[26px] text-[#212121] leading-[1.1]",
        h4: "text-[18px] 2xl:text-[20px]",
        h5: "text-[16px] 2xl:text-[18px]",
        p: "text-default ",
        span: "inline text-[14px]",
        div: "block",
      },
      color: {
        default: "primary",
        primary: "text-primary",
        secondary: "text-secondary",
        description: "text-description",
      },
      size: {
        default: "text-base",
      },
      textAlign: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
      lineHeight: {
        default: "leading-normal",
        relaxed: "leading-relaxed",
        tight: "leading-tight",
      },
      fontFamily: {
        oswald: "font-oswald",
        roboto: "font-roboto",

      },
      fontWeight: {
        thin: "font-thin",
        extralight: "font-extralight",
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
        black: "font-black",
      },
    },
    defaultVariants: {
      variant: "p",
      color: "default",
      fontWeight: "normal",
    },
  }
);

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  fontFamily?: "oswald" | "roboto";
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant,
      color,
      size,
      textAlign,
      lineHeight,
      fontFamily,
      fontWeight,
      children,
      ...props
    },
  ) => {
    const Component = variant || "p";
    return (
      <Component
        className={cn(
          typographyVariants({
            variant,
            color,
            size,
            textAlign,
            lineHeight,
            fontFamily,
            fontWeight,
            className,
          })
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
