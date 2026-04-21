"use client";
import React, { useState, useEffect } from "react";
import { 
  Check, 
  ArrowRight, 
  Cpu, 
  Bot, 
  Zap, 
  Layers, 
  Search,
  MessageSquare,
  Activity,
  Box
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AITechSpotlight.module.css";
import { BPOEnterpriseCard } from "../Shared/BPOEnterpriseCard";
import { GeometricDivider } from "../Shared/GeometricDivider";

const techCapabilities = [
  { icon: <Bot size={20} />, title: "Advanced Neural Architectures", desc: "Proprietary LLM engines optimized for sub-400ms cognitive response latency and high-context reasoning." },
  { icon: <Activity size={20} />, title: "Hyper-Granular Sentiment Mapping", desc: "Real-time emotional intelligence and intent tracking across 50+ global languages and cultural nuances." },
  { icon: <Zap size={20} />, title: "Self-Correcting Neural RPA", desc: "Adaptive orchestration engines that instantly adjust to UI changes and workflow deviations without downtime." },
  { icon: <Search size={20} />, title: "Autonomous Compliance Guardians", desc: "AI-driven algorithmic oversight ensuring 99.99% regulatory precision and continuous audit readiness." }
];

export function AITechSpotlight() {
  return (
    <section className={styles.section} style={{ background: "var(--white)", position: "relative", overflow: "hidden" }}>
      
      {/* BACKGROUND GEOMETRICS */}
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: "400px", height: "400px", background: "rgba(16, 185, 129, 0.05)", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", filter: "blur(60px)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: "300px", height: "300px", background: "rgba(14, 165, 233, 0.05)", borderRadius: "50%", filter: "blur(60px)", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: "var(--emerald-green)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px", marginBottom: "1rem" }}
          >
            Laboratory of Intelligence
          </motion.div>
          <h2 style={{ fontSize: "52px", color: "var(--charcoal-deep)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.2 }}>
            The Architecture of <span style={{ color: "var(--emerald-green)" }}>Neural Operations</span>
          </h2>
        </div>

        <div className={styles.labGrid} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          
          {/* INTERACTIVE ENGINE VISUAL */}
          <div className="card-perspective">
            <BPOEnterpriseCard elevation={4} intensity={25}>
              <div style={{ position: "relative", height: "500px", background: "var(--charcoal-deep)", borderRadius: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* CYBER MESH */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(var(--emerald-green) 1px, transparent 1px)", backgroundSize: "30px 30px", opacity: 0.1 }} />
                
                {/* CENTRAL ENGINE NODE */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ width: "260px", height: "260px", border: "2px solid var(--emerald-green)", borderRadius: "50%", padding: "20px", position: "relative" }}
                >
                  <div style={{ width: "100%", height: "100%", border: "1px dashed var(--emerald-vibrant)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box size={80} color="var(--emerald-green)" />
                  </div>
                  
                  {/* ORBITING NODES */}
                  {[0, 90, 180, 270].map((deg) => (
                    <div key={deg} style={{ position: "absolute", top: "50%", left: "50%", transform: `rotate(${deg}deg) translateX(130px)`, width: "40px", height: "40px", background: "var(--charcoal-deep)", border: "2px solid var(--emerald-green)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", margin: "-20px" }}>
                      <Cpu size={20} color="var(--emerald-green)" />
                    </div>
                  ))}
                </motion.div>

                {/* OVERLAY DATA SLOTS */}
                <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem", padding: "1.5rem", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}>
                   <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                     <span style={{ color: "var(--emerald-green)", fontSize: "12px", fontWeight: 700 }}>SYNAPSE LOAD</span>
                     <span style={{ color: "var(--white)", fontSize: "12px", fontWeight: 700 }}>88.4%</span>
                   </div>
                   <div style={{ height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden" }}>
                     <motion.div animate={{ width: ["0%", "88%", "82%", "88%"] }} transition={{ duration: 5, repeat: Infinity }} style={{ height: "100%", background: "var(--emerald-green)" }} />
                   </div>
                </div>
              </div>
            </BPOEnterpriseCard>
          </div>

          {/* CAPABILITIES LISTING */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
              {techCapabilities.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ display: "flex", gap: "1.5rem" }}
                >
                  <div style={{ width: "56px", height: "56px", background: "var(--soft-gray)", borderRadius: "12px", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--emerald-green)", flexShrink: 0 }}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "0.5rem" }}>{tech.title}</h3>
                    <p style={{ color: "var(--medium-gray)", fontSize: "16px", lineHeight: 1.5 }}>{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: "3.5rem" }}>
              <button className="btn-premium btn-primary" style={{ background: "var(--emerald-green)" }}>
                 Platform Blueprint <ArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>

      <div style={{ marginTop: "120px" }}>
        <GeometricDivider type="slant-down" color="var(--soft-gray)" height="100px" />
      </div>
    </section>
  );
}
