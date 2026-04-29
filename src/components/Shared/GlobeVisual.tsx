"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export function GlobeVisual() {
  const globeEl = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-rotate
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.0;
      globeEl.current.controls().enableZoom = false;
    }
  }, []);

  // Responsive sizing
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const markers = [
    { lat: 37.7749, lng: -122.4194, size: 0.1, color: "#f59e0b", name: "San Francisco" },
    { lat: 40.7128, lng: -74.0060, size: 0.15, color: "#f59e0b", name: "New York" },
    { lat: 19.4326, lng: -99.1332, size: 0.1, color: "#f59e0b", name: "Mexico City" },
    { lat: 4.7110, lng: -74.0721, size: 0.08, color: "#f59e0b", name: "Bogota" },
    { lat: 52.2297, lng: 21.0122, size: 0.1, color: "#f59e0b", name: "Warsaw" },
    { lat: -26.2041, lng: 28.0473, size: 0.1, color: "#f59e0b", name: "Johannesburg" },
    { lat: 14.5995, lng: 120.9842, size: 0.2, color: "#f59e0b", name: "Manila" },
    { lat: 1.3521, lng: 103.8198, size: 0.12, color: "#f59e0b", name: "Singapore" },
    { lat: 12.9716, lng: 77.5946, size: 0.18, color: "#f59e0b", name: "Bangalore" },
    { lat: 17.3850, lng: 78.4867, size: 0.15, color: "#f59e0b", name: "Hyderabad" },
  ];

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 10, cursor: "grab" }}>
      {dimensions.width > 0 && (
        <Globe
          ref={globeEl}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          pointsData={markers}
          pointAltitude={0.01}
          pointColor="color"
          pointRadius="size"
          pointsMerge={true}
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#0ea5e9"
          atmosphereAltitude={0.15}
        />
      )}
    </div>
  );
}
