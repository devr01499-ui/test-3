"use client";

import React from "react";
import { 
  Bot, 
  Brain, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./SynergyShowcase.module.css";

import Image from "next/image";

const showcaseCards = [
  {
    icon: Bot,
    title: "AI-Powered Precision",
    color: "#0ea5e9",
    items: ["Autonomous Transaction Processing", "Neural Pattern Recognition", "Predictive Trend Modeling", "Unlimited Elastic Scale"],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    glow: "hover-glow-1"
  },
  {
    icon: Brain,
    title: "Strategic Human Intelligence",
    color: "#0369a1",
    items: ["High-Touch Solutioning", "Critical Context Appraisal", "Ethical Decision Making", "Complex Cultural Navigation"],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    glow: "hover-glow-2"
  },
  {
    icon: BarChart3,
    title: "Operational Synergy",
    color: "#082f49",
    items: ["Significant Cost Architecting", "Near-Zero Defect Production", "Compressed Time-to-Value", "24/7 Global Reliability"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    glow: "hover-glow-3"
  },
  {
    icon: ShieldCheck,
    title: "Institutional Governance",
    color: "#0ea5e9",
    items: ["End-to-End Encryption", "Strict Regulatory Compliance", "Advanced Privacy Protocols", "Total Quality Management (TQM)"],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    glow: "hover-glow-4"
  }
];

export function SynergyShowcase() {
  return (
    <section className={styles.section} style={{ background: "var(--surface)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.label}
            style={{ color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em" }}
          >
            The Perfect Synergy
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.title}
            style={{ fontSize: "3rem", fontWeight: 900, marginTop: "1rem" }}
          >
            Machine Speed. <span style={{ color: "var(--primary)" }}>Strategic</span> Intelligence.
          </motion.h2>
        </div>

        <div className={styles.grid} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {showcaseCards.map((card, i) => (
            <div key={card.title} className="card-3d-wrapper" style={{ height: "450px" }}>
              <motion.div 
                className={`card-3d-content ${styles.card}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotateY: 8, rotateX: -4, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.1 }}
                style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", border: "1px solid var(--border)", padding: 0 }}
              >
                <Image 
                  src={card.img} 
                  alt={card.title} 
                  fill
                  className="card-image-bg"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8, 47, 73, 0.2) 0%, rgba(8, 47, 73, 0.9) 100%)", zIndex: 1 }} />
                <div className={card.glow} style={{ position: "absolute", inset: 0, opacity: 0.3, zIndex: 1, mixBlendMode: "overlay" }} />

                <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%", padding: "2.5rem" }}>
                  <div 
                    className={styles.iconBox}
                    style={{ background: "rgba(14, 165, 233, 0.2)", color: "white", marginBottom: "1.5rem", width: "max-content", padding: "12px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.2)" }}
                  >
                    <card.icon size={28} />
                  </div>
                  <h3 className={styles.cardH3} style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.5rem", fontWeight: 900 }}>{card.title}</h3>
                  <ul className={styles.list} style={{ listStyle: "none", padding: 0, flexGrow: 1 }}>
                    {card.items.map((item) => (
                      <li key={item} className={styles.listItem} style={{ color: "rgba(255,255,255,0.9)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "10px", fontWeight: 700, fontSize: "0.9rem" }}>
                        <div className={styles.bullet} style={{ background: "var(--primary)", width: "6px", height: "6px", borderRadius: "50%" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "0.5rem", color: "white", fontWeight: 800, fontSize: "0.85rem" }}>
                    Platform Integrated <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={styles.ctaWrapper}
        >
          <button className={styles.diagBtn}>
            See How It Works <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
