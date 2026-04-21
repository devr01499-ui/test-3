"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMousePerspective } from "@/hooks/useMousePerspective";

interface BPOEnterpriseCardProps {
  children: React.ReactNode;
  elevation?: 2 | 3 | 4 | 5;
  className?: string;
  intensity?: number;
}

export function BPOEnterpriseCard({ 
  children, 
  elevation = 2, 
  className = "", 
  intensity = 10 
}: BPOEnterpriseCardProps) {
  const { rotateX, rotateY } = useMousePerspective(intensity);

  const elevationShadows = {
    2: "var(--shadow-level-2)",
    3: "var(--shadow-level-3)",
    4: "var(--shadow-level-4)",
    5: "var(--shadow-level-5)",
  };

  const elevationTransforms = {
    2: "var(--z-level-2)",
    3: "var(--z-level-3)",
    4: "var(--z-level-4)",
    5: "var(--z-level-5)",
  };

  return (
    <div className="card-perspective" style={{ width: "100%", height: "100%" }}>
      <motion.div
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d",
          height: "100%"
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`card-3d-enterprise ${className}`}
      >
        <div style={{ 
          transform: elevationTransforms[elevation],
          boxShadow: elevationShadows[elevation],
          height: "100%",
          width: "100%",
          padding: "2rem",
          background: "var(--white)",
          position: "relative",
          zIndex: 1
        }}>
          {children}
        </div>
        
        {/* Visual "thickness" for Level 3+ */}
        {elevation >= 3 && (
          <div style={{
            position: "absolute",
            inset: 0,
            background: "rgba(14, 165, 233, 0.05)",
            transform: "translateZ(-10px)",
            borderRadius: "4px"
          }} />
        )}
      </motion.div>
    </div>
  );
}
