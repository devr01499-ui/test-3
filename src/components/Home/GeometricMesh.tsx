"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function GeometricMesh() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        opacity: 0.15,
        pointerEvents: "none",
        background: "radial-gradient(circle at 50% 50%, var(--electric-blue) 0%, transparent 50%)",
        mixBlendMode: "overlay"
      }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mesh-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="var(--electric-blue)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh-grid)" />
      </svg>
    </div>
  );
}
