import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement>, MotionProps {
  hoverable?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverable = false, children, ...props }, ref) => {
    const MotionDiv = motion.div;
    
    return (
      <MotionDiv
        ref={ref}
        className={cn(
          "glass-card rounded-xl",
          hoverable && "transition-all duration-300 hover:glow-border",
          className
        )}
        whileHover={hoverable ? { y: -5 } : undefined}
        {...props}
      >
        {children}
      </MotionDiv>
    );
  }
);

GlassCard.displayName = "GlassCard";
