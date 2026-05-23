import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "brick";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-label-caps tracking-[0.1em] px-8 py-4 transition-all duration-500 disabled:opacity-40",
          variant === "primary" && "bg-primary text-on-primary hover:bg-secondary",
          variant === "brick" &&
            "bg-on-primary-fixed text-on-primary hover:bg-on-primary-fixed/90",
          variant === "secondary" &&
            "border border-outline text-on-surface hover:bg-surface-container-high",
          variant === "ghost" &&
            "border border-outline px-12 py-5 hover:bg-surface-container-low",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
