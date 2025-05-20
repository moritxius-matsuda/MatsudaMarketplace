import { ReactNode, forwardRef } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  width?: "full" | "auto";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

export const Reveal = forwardRef<HTMLDivElement, RevealProps>(
  ({ children, className, width = "full", delay = 0, direction = "up" }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        variants={variants[direction]}
        className={cn(width === "full" ? "w-full" : "", className)}
      >
        {children}
      </motion.div>
    );
  }
);

Reveal.displayName = "Reveal";
