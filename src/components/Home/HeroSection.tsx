"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./HeroSection.module.css";
import { GeometricMesh } from "./GeometricMesh";
import { GeometricDivider } from "../Shared/GeometricDivider";

export function HeroSection() {

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

      <div className="container" style={{ position: "relative", zIndex: 10, paddingTop: "120px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        
        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ maxWidth: "800px" }}
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
          
          <p style={{ fontSize: "20px", color: "var(--medium-gray)", lineHeight: 1.6, marginBottom: "3rem" }}>
            The definitive architecture for modern Business Process Outsourcing. We harmonize advanced AI automation with high-tier human strategic intelligence to drive enterprise transformation and operational resilience.
          </p>

          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
            <button className="btn-premium btn-primary">
              Global Platform Deploy <ArrowRight size={20} />
            </button>
            <button className="btn-premium" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "var(--white)" }}>
              Strategy Specs
            </button>
          </div>
        </motion.div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 15 }}>
        <GeometricDivider type="slant-up" color="var(--background)" height="120px" />
      </div>
    </section>
  );
}
