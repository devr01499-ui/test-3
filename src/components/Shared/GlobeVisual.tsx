"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function GlobeVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const phiRef = useRef(0);

  useEffect(() => {
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.95, 0.95, 0.95],
      markerColor: [0.05, 0.65, 0.91], // Electric Blue markers
      glowColor: [0.73, 0.90, 0.99], // Clear Sky Blue glow
      markers: [
        { location: [37.7749, -122.4194], size: 0.06 },
        { location: [40.7128, -74.0060], size: 0.08 },
        { location: [19.4326, -99.1332], size: 0.07 },
        { location: [4.7110, -74.0721], size: 0.05 },
        { location: [52.2297, 21.0122], size: 0.06 },
        { location: [-26.2041, 28.0473], size: 0.07 },
        { location: [14.5995, 120.9842], size: 0.1 },
        { location: [1.3521, 103.8198], size: 0.06 },
        { location: [12.9716, 77.5946], size: 0.09 },
        { location: [17.3850, 78.4867], size: 0.08 },
      ],
      // @ts-expect-error onRender is missing from COBEOptions in some versions but is supported
      onRender: (state) => {
        if (pointerInteracting.current === null) {
          phiRef.current += 0.005;
        }
        state.phi = phiRef.current;
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'grab', position: 'relative', zIndex: 10 }}
         onPointerDown={(e) => {
           pointerInteracting.current = e.clientX;
           if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
         }}
         onPointerUp={() => {
           pointerInteracting.current = null;
           if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
         }}
         onPointerOut={() => {
           pointerInteracting.current = null;
           if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
         }}
         onMouseMove={(e) => {
           if (pointerInteracting.current !== null) {
             const delta = e.clientX - pointerInteracting.current;
             pointerInteracting.current = e.clientX;
             phiRef.current += delta / 200;
           }
         }}
         onTouchMove={(e) => {
           if (pointerInteracting.current !== null && e.touches[0]) {
             const delta = e.touches[0].clientX - pointerInteracting.current;
             pointerInteracting.current = e.touches[0].clientX;
             phiRef.current += delta / 200;
           }
         }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '600px',
          maxHeight: '600px',
          aspectRatio: 1,
          contain: 'layout paint size',
          cursor: 'inherit'
        }}
      />
    </div>
  );
}
