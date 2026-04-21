"use client";
import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { IndustryComplianceData } from "@/types/industries";
import styles from "./IndustryTemplate.module.css";

import Image from "next/image";

const certImages = [
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
];
const certGlows = ["hover-glow-3", "hover-glow-1", "hover-glow-2", "hover-glow-3"];

export function IndustryCompliance({ data }: { data: IndustryComplianceData }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: "2.8rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "3rem", textAlign: "center" }}
        >
          {data.title}
        </motion.h2>

        <div className={styles.complianceContainer} style={{ background: "white", borderRadius: "24px", padding: "3rem", border: "1px solid var(--border)" }}>
          <div className={styles.certGrid}>
            {data.cards.map((card, i) => (
              <div key={i} className="card-3d-wrapper" style={{ height: "240px" }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ rotateY: 10, rotateX: -4, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
                  className={`card-3d-content ${styles.certCard}`}
                  style={{ overflow: "hidden", padding: 0 }}
                >
                  <Image 
                    src={certImages[i % certImages.length]} 
                    alt={card.title} 
                    fill 
                    className="card-image-bg"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="card-overlay" style={{ background: "linear-gradient(160deg, rgba(8, 47, 73, 0.85) 0%, rgba(8, 47, 73, 0.95) 100%)" }} />
                  <div className={`card-content-wrap ${certGlows[i % certGlows.length]}`} style={{ padding: "1.75rem" }}>
                    <div className={styles.certTitle} style={{ color: "white", marginBottom: "1rem", fontSize: "1.1rem", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "1rem", fontWeight: 800 }}>{card.title}</div>
                    <ul className={styles.certBullets}>
                      {card.bullets.map((b, j) => (
                        <li key={j} style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.5rem", fontSize: "0.9rem", display: "flex", gap: "0.5rem" }}>
                          <span style={{ color: "var(--primary)" }}>✓</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: 700, letterSpacing: "1px", color: "var(--text-muted)", textTransform: "uppercase" }}>
              SECURITY MEASURES:
            </div>
            <div className={styles.securityList}>
              {data.securityMeasures.map((measure) => (
                <div key={measure.id} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontWeight: 600, color: "var(--text-main)" }}>
                  <Check size={16} color="var(--success)" /> {measure.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
