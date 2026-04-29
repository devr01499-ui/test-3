"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { 
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { BPOEnterpriseCard } from "../Shared/BPOEnterpriseCard";
import { GeometricDivider } from "../Shared/GeometricDivider";

const regions = [
  { name: "North America", count: "Strategic Mission Control (NY/SF)", latency: "Sub-10ms" },
  { name: "Latin America", count: "Premier Nearshore Centers (MX/CO)", latency: "15ms" },
  { name: "EMEA", count: "Multilingual Excellence Hubs (PL/ZA)", latency: "18ms" },
  { name: "Asia Pacific", count: "High-Tier Technology Clusters (PH/SG)", latency: "12ms" },
  { name: "South Asia", count: "Global Engineering Hubs (BLR/HYD)", latency: "8ms" },
];

export function PresenceMap() {
  return (
    <section style={{ padding: "0 0 128px 0", background: "var(--soft-gray)", position: "relative", overflow: "hidden" }}>
      <GeometricDivider type="trapezoid" color="var(--soft-gray)" height="100px" flip />
      
      <div className="container" style={{ marginTop: "4rem" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "center" }}>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ color: "var(--electric-blue)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px", marginBottom: "1rem" }}
            >
              Global Infrastructure
            </motion.div>
            <h2 style={{ fontSize: "52px", fontWeight: 700, lineHeight: 1.1, marginBottom: "2rem" }}>
              The Intelligent <br />
              <span style={{ color: "var(--electric-blue)" }}>Global Node.</span>
            </h2>
            <p style={{ color: "var(--medium-gray)", fontSize: "18px", lineHeight: 1.6, marginBottom: "3rem" }}>
              Our 50+ global delivery centers are unified via a high-tier neural backbone, delivering 24/7/365 operational continuity with carrier-grade latency and deep redundancy.
            </p>

            <BPOEnterpriseCard elevation={4} intensity={10}>
              <div style={{ padding: "1rem" }}>
                <h4 style={{ fontSize: "14px", fontWeight: 800, color: "var(--electric-blue)", marginBottom: "1.5rem", textTransform: "uppercase" }}>Strategic Hubs</h4>
                {regions.map((region) => (
                  <div key={region.name} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "15px" }}>{region.name}</div>
                      <div style={{ fontSize: "12px", color: "var(--medium-gray)" }}>{region.count}</div>
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--emerald-green)", fontWeight: 700 }}>{region.latency}</div>
                  </div>
                ))}
              </div>
            </BPOEnterpriseCard>
          </div>

          <div style={{ position: "relative", height: "600px", background: "var(--white)", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--shadow-level-3)", overflow: "hidden" }}>
             {/* 3D INTERACTIVE GLOBE */}
             <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(var(--sunrise-amber) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
             
             <GlobeVisual />

             <div style={{ position: "absolute", bottom: "2rem", right: "2rem", padding: "1.5rem", background: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(10px)", borderRadius: "12px", color: "white", width: "220px", pointerEvents: "none" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
                  <div style={{ width: "8px", height: "8px", background: "#f59e0b", borderRadius: "50%" }} />
                  <span style={{ fontSize: "12px", fontWeight: 700 }}>52,000+ AGENTS LIVE</span>
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", lineHeight: 1.4 }}>
                  Real-time network health active across all 50+ Tier-1 delivery clusters.
                </div>
             </div>
          </div>

        </div>

        <div style={{ marginTop: "5rem", display: "flex", gap: "2rem", justifyContent: "center" }}>
           <button className="btn-premium btn-primary">
              Full Network Specs <ArrowRight size={20} />
           </button>
           <button className="btn-premium" style={{ border: "1px solid var(--border)" }}>
              Virtual Site Audit
           </button>
        </div>

      </div>
    </section>
  );
}

function GlobeVisual() {
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
      baseColor: [1, 1, 1],
      markerColor: [0.96, 0.61, 0.04], // Bright Orange
      glowColor: [1, 0.92, 0.83],
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
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'grab' }}
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
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
