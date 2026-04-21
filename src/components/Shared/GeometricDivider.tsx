"use client";
import React from "react";

interface GeometricDividerProps {
  type: "slant-up" | "slant-down" | "trapezoid";
  color?: string;
  height?: string;
  flip?: boolean;
}

export function GeometricDivider({ type, color = "var(--white)", height = "80px", flip = false }: GeometricDividerProps) {
  const getPath = () => {
    switch (type) {
      case "slant-up":
        return "M0,100 L100,0 L100,100 L0,100 Z";
      case "slant-down":
        return "M0,0 L100,100 L100,100 L0,100 Z";
      case "trapezoid":
        return "M0,100 L20,0 L80,0 L100,100 Z";
      default:
        return "M0,100 L100,0 L100,100 L0,100 Z";
    }
  };

  return (
    <div 
      style={{ 
        height, 
        width: "100%", 
        overflow: "hidden", 
        background: "transparent",
        position: "relative",
        zIndex: 1,
        marginTop: "-1px",
        marginBottom: "-1px",
        transform: flip ? "rotate(180deg)" : "none"
      }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <path d={getPath()} fill={color} />
      </svg>
    </div>
  );
}
