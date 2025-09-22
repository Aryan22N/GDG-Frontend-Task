"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Meteors = ({ number, className }) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 overflow-hidden"
    >
      {meteors.map((_, idx) => {
        // randomize starting positions
        const startTop = Math.floor(Math.random() * window.innerHeight) - 100; // anywhere in viewport height
        const startLeft = Math.floor(Math.random() * window.innerWidth) - 100; // anywhere in viewport width

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: `${startTop}px`,
              left: `${startLeft}px`,
              animationDelay: `${Math.random() * 5}s`, // random delay
              animationDuration: `${Math.floor(Math.random() * (10 - 5) + 5)}s`, // random speed
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
