"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Globe } from "lucide-react";
import styles from "./HeroSection.module.css";
import { GeometricMesh } from "./GeometricMesh";
import { GeometricDivider } from "../Shared/GeometricDivider";
import { BPOEnterpriseCard } from "../Shared/BPOEnterpriseCard";
import { useMousePerspective } from "@/hooks/useMousePerspective";

const mainStats = [
  { label: "Global Enterprises", value: "500+", icon: <Globe size={18} /> },
  { label: "OpEx Reduction", value: "45%", icon: <Activity size={18} /> },
  { label: "Enterprise Security", value: "SOC 2 Type II", icon: <ShieldCheck size={18} /> },
];

export function HeroSection() {
  const { rotateX, rotateY } = useMousePerspective(15);

  return (
    <section className={styles.hero} style={{ position: "relative", overflow: "hidden", minHeight: "100vh", background: "var(--background)" }}>
      {/* BACKGROUND VIDEO LAYER */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.8
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* GEOMETRIC MESH OVERLAY */}
      <GeometricMesh />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.9) 100%)", zIndex: 1 }} />

      <div className="container" style={{ position: "relative", zIndex: 10, paddingTop: "120px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "center" }}>
        
        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 16px", background: "rgba(14, 165, 233, 0.1)", borderRadius: "100px", border: "1px solid var(--electric-blue)", color: "var(--electric-blue)", fontWeight: 700, fontSize: "14px", marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "1px" }}>
            <span style={{ width: "8px", height: "8px", background: "var(--electric-blue)", borderRadius: "50%", display: "block" }} />
            24/7 Intelligent Global Operations
          </div>
          
          <h1 style={{ fontSize: "72px", lineHeight: 1.1, fontWeight: 700, color: "var(--white)", marginBottom: "2rem", letterSpacing: "-0.03em" }}>
            Intelligent <span style={{ color: "var(--electric-blue)" }}>Operations.</span><br />
            Human Excellence.<br />
            Exponential Scale.
          </h1>
          
          <p style={{ fontSize: "20px", color: "var(--medium-gray)", lineHeight: 1.6, maxWidth: "600px", marginBottom: "3rem" }}>
            The definitive architecture for modern Business Process Outsourcing. We harmonize advanced AI automation with high-tier human strategic intelligence to drive enterprise transformation and operational resilience.
          </p>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <button className="btn-premium btn-primary">
              Global Platform Deploy <ArrowRight size={20} />
            </button>
            <button className="btn-premium" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "var(--white)" }}>
              Strategy Specs
            </button>
          </div>
        </motion.div>

        {/* INTERACTIVE HERO BLOCK (LEVEL 5) */}
        <div style={{ perspective: "2000px" }}>
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <BPOEnterpriseCard elevation={5} className="hero-platform-card" intensity={30}>
              <div style={{ padding: "1.5rem" }}>
                <div style={{ height: "400px", background: "var(--soft-gray)", borderRadius: "12px", border: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
                  <div className="grad-primary" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px" }} />
                  <div style={{ padding: "2rem" }}>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "2rem" }}>
                      {[1, 2, 3].map(i => <div key={i} style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--border)" }} />)}
                    </div>
                    <div style={{ height: "15px", width: "40%", background: "var(--border)", borderRadius: "4px", marginBottom: "1rem" }} />
                    <div style={{ height: "15px", width: "70%", background: "var(--border)", borderRadius: "4px", marginBottom: "3rem" }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} style={{ height: "80px", background: "white", border: "1px solid var(--border)", borderRadius: "8px", padding: "1rem" }}>
                          <div style={{ height: "8px", width: "40%", background: "var(--sky-blue-light)", borderRadius: "2px" }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                  {mainStats.map((stat) => (
                    <div key={stat.label} style={{ textAlign: "center" }}>
                      <div style={{ color: "var(--electric-blue)", marginBottom: "4px", display: "flex", justifyContent: "center" }}>{stat.icon}</div>
                      <div style={{ color: "var(--charcoal-deep)", fontWeight: 800, fontSize: "18px" }}>{stat.value}</div>
                      <div style={{ color: "var(--medium-gray)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </BPOEnterpriseCard>
          </motion.div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 15 }}>
        <GeometricDivider type="slant-up" color="var(--background)" height="120px" />
      </div>
    </section>
  );
}
