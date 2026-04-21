"use client";
import React from "react";
import { 
  Globe, 
  Users, 
  MessageSquare, 
  ArrowRight,
  MapPin,
  TowerControl,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./PresenceMap.module.css";
import { BPOEnterpriseCard } from "../Shared/BPOEnterpriseCard";
import { GeometricDivider } from "../Shared/GeometricDivider";

const regions = [
  { name: "North America", count: "Strategic Mission Control (NY/SF)", latency: "Sub-10ms" },
  { name: "Latin America", count: "Premier Nearshore Centers (MX/CO)", latency: "15ms" },
  { name: "EMEA", count: "Multilingual Excellence Hubs (PL/ZA)", latency: "18ms" },
  { name: "Asia Pacific", count: "High-Tier Technology Clusters (PH/SG)", latency: "12ms" },
  { name: "South Asia", count: "Global Engineering Hubs (BLR/HYD)", latency: "8ms" },
];

const pins = [
  { x: "15%", y: "35%" }, { x: "22%", y: "42%" }, { x: "28%", y: "68%" },
  { x: "48%", y: "25%" }, { x: "52%", y: "30%" }, { x: "55%", y: "45%" },
  { x: "68%", y: "52%" }, { x: "72%", y: "45%" }, { x: "78%", y: "55%" },
  { x: "82%", y: "78%" },
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
             {/* SIMPLIFIED MAP VISUAL */}
             <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(var(--electric-blue) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
             
             {/* MAP PINS */}
             {pins.map((pin, i) => (
               <div key={i} style={{ position: "absolute", left: pin.x, top: pin.y }}>
                 <motion.div 
                   animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                   transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                   style={{ position: "absolute", width: "30px", height: "30px", borderRadius: "50%", left: "-15px", top: "-15px", background: "var(--electric-blue)" }}
                 />
                 <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--white)", border: "2px solid var(--electric-blue)", position: "relative" }} />
               </div>
             ))}

             <div style={{ position: "absolute", bottom: "2rem", right: "2rem", padding: "1.5rem", background: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(10px)", borderRadius: "12px", color: "white", width: "220px" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
                  <div style={{ width: "8px", height: "8px", background: "#22c55e", borderRadius: "50%" }} />
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
