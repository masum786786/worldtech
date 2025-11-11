"use client";
import React from "react";

export default function DottedHR({
  variant = "center",
  thickness = "2px",
  dotSize = 6,
  gap = 8,
  colorStart = "#7C3AED",
  colorEnd = "#06B6D4",
  className = "",
}) {
  const variantClass = {
    center: "max-w-2xl mx-auto",
    full: "w-full",
    fancy: "max-w-3xl mx-auto animate-[dash-move_3s_linear_infinite]",
  }[variant];

  return (
    <div className={`${variantClass} ${className}`} role="separator">
      <hr
        className="border-0 h-[2px] w-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] relative overflow-hidden"
        style={{
          maskImage: `repeating-linear-gradient(to right, #000 0 ${dotSize}px, transparent ${dotSize}px ${dotSize + gap}px)`,
          WebkitMaskImage: `repeating-linear-gradient(to right, #000 0 ${dotSize}px, transparent ${dotSize}px ${dotSize + gap}px)`,
          height: thickness,
          backgroundImage: `linear-gradient(to right, ${colorStart}, ${colorEnd})`,
        }}
      />
      <style jsx>{`
        @keyframes dash-move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${dotSize + gap}px);
          }
        }
      `}</style>
    </div>
  );
}
