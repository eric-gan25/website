"use client";

import { ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";

interface AnimatedContentProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedContent({
  children,
  className,
  ...motionProps
}: AnimatedContentProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      {...motionProps} 
    >
      {children}
    </motion.div>
  );
}
