"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./HeroSection.module.css";
import { GeometricMesh } from "./GeometricMesh";
import { GeometricDivider } from "../Shared/GeometricDivider";

export function HeroSection() {

  return (
    <>
    {/* ── VIDEO HERO — Heading Only ── */}
    <section className={styles.hero} style={{ position: "relative", overflow: "hidden", minHeight: "65vh", background: "var(--charcoal-deep)", display: "flex", alignItems: "center" }}>
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
          opacity: 0.5
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* GEOMETRIC MESH OVERLAY */}
      <GeometricMesh />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.85) 100%)", zIndex: 1 }} />

      <div className="container" style={{ position: "relative", zIndex: 10, paddingTop: "60px", paddingBottom: "60px" }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ maxWidth: "820px" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 16px", background: "rgba(14, 165, 233, 0.1)", borderRadius: "100px", border: "1px solid var(--electric-blue)", color: "var(--electric-blue)", fontWeight: 700, fontSize: "13px", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            <span style={{ width: "7px", height: "7px", background: "var(--electric-blue)", borderRadius: "50%", display: "block" }} />
            24/7 Intelligent Global Operations
          </div>

          <h1 style={{ fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 1.05, fontWeight: 800, color: "var(--white)", letterSpacing: "-0.03em", margin: 0 }}>
            Intelligent <span style={{ color: "var(--electric-blue)" }}>Operations.</span><br />
            Human Excellence.<br />
            Exponential Scale.
          </h1>
        </motion.div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 15 }}>
        <GeometricDivider type="slant-up" color="var(--background)" height="80px" />
      </div>
    </section>

    {/* ── BELOW-VIDEO SECTION — Description + CTAs ── */}
    <section style={{ background: "var(--background)", paddingTop: "5rem", paddingBottom: "6rem" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ maxWidth: "760px" }}
        >
          <p style={{ fontSize: "1.25rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            The definitive architecture for modern Business Process Outsourcing. We harmonize advanced AI automation with high-tier human strategic intelligence to drive enterprise transformation and operational resilience.
          </p>
          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
            <button className="btn-premium btn-primary">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="btn-premium btn-secondary" style={{ borderColor: "var(--border)", color: "var(--charcoal)" }}>
              View Strategy Specs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
