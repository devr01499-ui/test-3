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
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: opacity,
          pointerEvents: "none"
        }}
      >
        <source src="/blue.mp4" type="video/mp4" />
      </video>
      {/* Dark gradient overlay for extreme readability */}
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.6))", 
        backdropFilter: "blur(2px)"
      }} />
    </div>
  );
}
