"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(0, 229, 255, 0.15)" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl border border-white/8 bg-white/4 transition-all duration-300 hover:border-white/15 overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};
