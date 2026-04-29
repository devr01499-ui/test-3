"use client";
import React from "react";

interface VideoBackgroundProps {
  opacity?: number;
}

export function VideoBackground({ opacity = 0.5 }: VideoBackgroundProps) {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: opacity
        }}
      >
        <source src="/blue.mp4" type="video/mp4" />
      </video>
      {/* Optional overlay to keep the glass touch and blend with theme colors */}
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        background: "var(--soft-gray)", 
        backdropFilter: "blur(4px)",
        mixBlendMode: "overlay"
      }} />
    </div>
  );
}
