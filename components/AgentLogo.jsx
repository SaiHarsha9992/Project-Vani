"use client";

import { motion } from "framer-motion";

export const AgentLogo = ({ className = "w-48" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="v-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <filter id="glow-strong">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Clip paths for painting animation effect */}
          {/* Masks for painting animation effect (mask is more broadly supported for SVG motion than clipPath) */}
          <mask id="paint-mask-left">
            <motion.rect 
              x="120" y="50" width="120" height="150"
              fill="white"
              initial={{ height: 0 }}
              animate={{ height: 150 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </mask>
          <mask id="paint-mask-right">
            {/* Animate wiping from bottom left to top right */}
            <motion.rect 
              x="180" width="100" height="80"
              fill="white"
              initial={{ y: 200 }} 
              animate={{ y: 130 }} 
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            />
          </mask>
        </defs>

        {/* The Solid V Background */}
        <path
          d="M 135 60 L 175 60 L 220 180 L 185 180 Z"
          fill="url(#v-gradient)"
          mask="url(#paint-mask-left)"
        />
        <path
          d="M 225 140 L 245 140 L 220 180 L 185 180 Z"
          fill="url(#v-gradient)"
          mask="url(#paint-mask-right)"
        />

        {/* The Neural Waves */}
        {/* Wave 4 - dark blue (back) */}
        <motion.path
          d="M 80 130 C 110 130, 125 155, 140 155 C 155 155, 160 80, 175 80 C 190 80, 200 190, 220 190 C 240 190, 250 70, 265 70 C 280 70, 285 155, 300 155 C 315 155, 330 130, 360 130"
          stroke="#1E3A8A"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        {/* Wave 2 - deeply cyan */}
        <motion.path
          d="M 80 130 C 110 130, 125 150, 140 150 C 155 150, 160 85, 175 85 C 190 85, 200 185, 220 185 C 240 185, 250 75, 265 75 C 280 75, 285 150, 300 150 C 315 150, 330 130, 360 130"
          stroke="#0EA5E9"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.1 }}
        />
        {/* Wave 5 - teal */}
        <motion.path
          d="M 80 130 C 110 130, 125 148, 140 148 C 155 148, 160 92, 175 92 C 190 92, 200 182, 220 182 C 240 182, 250 82, 265 82 C 280 82, 285 148, 300 148 C 315 148, 330 130, 360 130"
          stroke="#2DD4BF"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, ease: "easeInOut", delay: 0.2 }}
        />
        {/* Wave 3 - white */}
        <motion.path
          d="M 80 130 C 110 130, 125 140, 140 140 C 155 140, 160 95, 175 95 C 190 95, 200 175, 220 175 C 240 175, 250 85, 265 85 C 280 85, 285 140, 300 140 C 315 140, 330 130, 360 130"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
        />
        {/* Wave 1 - main cyan glowing */}
        <motion.path
          d="M 80 130 C 110 130, 125 145, 140 145 C 155 145, 160 90, 175 90 C 190 90, 200 180, 220 180 C 240 180, 250 80, 265 80 C 280 80, 285 145, 300 145 C 315 145, 330 130, 360 130"
          stroke="#00E5FF"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow-strong)"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
        />
        {/* Wave 6 - tight core bright cyan */}
        <motion.path
          d="M 80 130 C 110 130, 125 142, 140 142 C 155 142, 160 88, 175 88 C 190 88, 200 178, 220 178 C 240 178, 250 78, 265 78 C 280 78, 285 142, 300 142 C 315 142, 330 130, 360 130"
          stroke="#E0FFFF"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.9, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Neural Network Nodes and Connections */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {/* Connecting Lines */}
          {[
            "235,75 260,70", "235,75 220,105", "235,75 245,100", 
            "220,105 245,100", "245,100 260,70", "245,100 255,90", 
            "245,100 235,120", "255,90 260,70", "255,90 270,115", 
            "235,120 220,105", "235,120 225,140", "235,120 245,140", 
            "270,115 245,140", "270,115 285,110", "260,70 285,110",
            "245,140 255,160", "225,140 245,140"
          ].map((line, idx) => {
            const [p1, p2] = line.split(" ");
            const [x1, y1] = p1.split(",");
            const [x2, y2] = p2.split(",");
            return (
              <motion.line 
                key={idx} 
                x1={x1} y1={y1} x2={x2} y2={y2} 
                stroke="#00E5FF" strokeWidth="1.5" strokeOpacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.5 + idx * 0.05 }}
              />
            );
          })}

          {/* Nodes */}
          {[
            { cx: 235, cy: 75, r: 6, fill: "#00E5FF", glow: true },
            { cx: 220, cy: 105, r: 5, fill: "#00E5FF", glow: false },
            { cx: 245, cy: 100, r: 5, fill: "#00E5FF", glow: true },
            { cx: 260, cy: 70, r: 5, fill: "#FFFFFF", glow: false },
            { cx: 255, cy: 90, r: 4, fill: "#FFFFFF", glow: false },
            { cx: 235, cy: 120, r: 5, fill: "#00E5FF", glow: false },
            { cx: 225, cy: 140, r: 4, fill: "#FFFFFF", glow: false },
            { cx: 270, cy: 115, r: 4.5, fill: "#00E5FF", glow: false },
            { cx: 245, cy: 140, r: 5, fill: "#FFFFFF", glow: false },
            { cx: 285, cy: 110, r: 3.5, fill: "#FFFFFF", glow: false },
            { cx: 255, cy: 160, r: 4, fill: "#00E5FF", glow: true }
          ].map((n, idx) => (
            <motion.circle 
              key={idx} 
              cx={n.cx} cy={n.cy} r={n.r} fill={n.fill}
              filter={n.glow ? "url(#glow-strong)" : undefined}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2 + idx * 0.05, type: "spring", stiffness: 200 }}
            />
          ))}
        </motion.g>
        
        {/* Brand Name Text built into the SVG for reliable auto-scaling */}
        <motion.g 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.5 }}
        >
          <text x="200" y="215" textAnchor="middle" fontFamily="'Poppins', sans-serif" fontSize="32" fontWeight="800" letterSpacing="0.05em" fill="#FFFFFF">
            PROJECT <tspan fill="#00E5FF">VANI</tspan>
          </text>
          <text x="200" y="235" textAnchor="middle" fontFamily="'Poppins', sans-serif" fontSize="13" fontWeight="400" letterSpacing="0.02em" fill="#E2E8F0">
            AI &amp; Multilingual Communication
          </text>
        </motion.g>
      </svg>
    </div>
  );
};
