"use client";

import { useState, useEffect } from "react";
import FloatingLines from "@/components/FloatingLines";

export default function BackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
      <FloatingLines
        enabledWaves={["top", "bottom"]}
        lineCount={10}
        lineDistance={0.6}
        animationSpeed={0.4}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
      />
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/stardust.png')",
        }}
      />
      {/* Mouse-tracking glow */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 pointer-events-none transition-[left,top] duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, #00E5FF 0%, transparent 70%)",
          left: mousePos.x - 400,
          top: mousePos.y - 400,
        }}
      />
      {/* Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
          backgroundSize: "100% 2px, 3px 100%",
        }}
      />
      {/* Static ambient glow bottom-right */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none bottom-0 right-0"
        style={{
          background: "radial-gradient(circle, #38BDF8 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
