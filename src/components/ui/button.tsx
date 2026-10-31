import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        pine: "bg-pine text-paper hover:bg-pine-deep",
        copper: "bg-copper-deep text-paper hover:bg-ink",
        paper: "bg-paper text-ink hover:bg-mist",
        line: "bg-transparent text-ink ring-1 ring-inset ring-line hover:bg-mist",
        ghost: "bg-transparent text-inherit hover:bg-paper/10",
      },
    },
    defaultVariants: { variant: "pine" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, asChild, type, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant }), className)}
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    />
  );
}

export function buttonClass(variant: VariantProps<typeof buttonVariants>["variant"] = "pine") {
  return buttonVariants({ variant });
}
