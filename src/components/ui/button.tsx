import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "ivory";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-label-caps luxury-transition",
          "tracking-[0.18em] px-10 py-4 disabled:opacity-40",
          variant === "primary" &&
            "bg-charcoal text-ivory hover:bg-brick",
          variant === "ivory" &&
            "bg-ivory text-charcoal hover:bg-surface-muted",
          variant === "secondary" &&
            "border border-clay/50 text-charcoal hover:border-brick hover:text-brick bg-transparent",
          variant === "ghost" &&
            "border border-clay/40 text-charcoal hover:border-gold",
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
