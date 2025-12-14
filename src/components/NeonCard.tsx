import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NeonCardProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "accent" | "secondary";
}

const NeonCard = ({ children, className, variant = "primary" }: NeonCardProps) => {
  const cornerColors = {
    primary: "before:bg-primary after:bg-primary",
    accent: "before:bg-accent after:bg-accent",
    secondary: "before:bg-secondary after:bg-secondary",
  };

  return (
    <div
      className={cn(
        "relative bg-[hsl(0_0%_2%)] border border-border/30 rounded-xl overflow-hidden",
        "neon-corners",
        cornerColors[variant],
        className
      )}
    >
      {children}
    </div>
  );
};

export default NeonCard;
