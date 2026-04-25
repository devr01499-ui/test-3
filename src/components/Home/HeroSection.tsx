"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      {/* ── FULLSCREEN CLEAN VIDEO — No overlay content ── */}
      <section style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#0f172a",
      }}>
        <Image 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
          alt="Hero Background"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -1 }}
          sizes="100vw"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            opacity: 1,
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Subtle bottom fade only — for smooth transition to content */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "180px",
          background: "linear-gradient(to top, var(--background) 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }} />
      </section>

      {/* ── CONTENT SECTION — Below the video ── */}
      <section style={{ background: "var(--background)", paddingTop: "5rem", paddingBottom: "6rem" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ maxWidth: "820px" }}
          >
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 18px", background: "rgba(14, 165, 233, 0.08)", borderRadius: "100px", border: "1px solid var(--electric-blue)", color: "var(--electric-blue)", fontWeight: 700, fontSize: "13px", marginBottom: "1.75rem", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              <span style={{ width: "7px", height: "7px", background: "var(--electric-blue)", borderRadius: "50%", display: "block" }} />
              24/7 Intelligent Global Operations
            </div>

            {/* Heading */}
            <h1 style={{ fontSize: "clamp(42px, 6vw, 76px)", lineHeight: 1.08, fontWeight: 800, color: "var(--charcoal-deep)", letterSpacing: "-0.03em", marginBottom: "1.75rem" }}>
              Intelligent <span style={{ color: "var(--electric-blue)" }}>Operations.</span><br />
              Human Excellence.<br />
              Exponential Scale.
            </h1>

            {/* Description */}
            <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "680px" }}>
              The definitive architecture for modern Business Process Outsourcing. We harmonize advanced AI automation with high-tier human strategic intelligence to drive enterprise transformation and operational resilience.
            </p>

            {/* CTAs */}
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
