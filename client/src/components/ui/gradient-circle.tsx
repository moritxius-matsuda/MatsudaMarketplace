import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GradientCircleProps extends HTMLAttributes<HTMLDivElement> {}

export function GradientCircle({ className, ...props }: GradientCircleProps) {
  return (
    <div 
      className={cn(
        "gradient-circle",
        className
      )}
      {...props}
    />
  );
}
