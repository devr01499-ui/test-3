"use client";
import React from "react";
import { GlobeVisual } from "../Shared/GlobeVisual";
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
