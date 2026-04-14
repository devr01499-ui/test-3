"use client";
import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { IndustryComplianceData } from "@/types/industries";
import styles from "./IndustryTemplate.module.css";

const certImages = [
  "https://loremflickr.com/600/400/security,compliance/all?lock=31",
  "https://loremflickr.com/600/400/certification,shield/all?lock=32",
  "https://loremflickr.com/600/400/regulation,data/all?lock=33",
  "https://loremflickr.com/600/400/privacy,lock/all?lock=34",
];
const certGlows = ["hover-glow-3", "hover-glow-5", "hover-glow-1", "hover-glow-4"];

export function IndustryCompliance({ data }: { data: IndustryComplianceData }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
          {data.title}
        </h2>

        <div className={styles.complianceContainer}>
          <div className={styles.certGrid}>
            {data.cards.map((card, i) => (
              <div key={i} className="card-3d-wrapper">
                <motion.div
                  whileHover={{ rotateY: 6, rotateX: -6, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`card-3d-content ${styles.certCard}`}
                  style={{ padding: 0, overflow: "hidden", position: "relative", minHeight: "200px" }}
                >
                  {/* Option A: full background image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={certImages[i % certImages.length]} alt={card.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
                  <div className={certGlows[i % certGlows.length]} style={{ position: "absolute", inset: 0, opacity: 0.45, zIndex: 1, mixBlendMode: "overlay" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(10,20,50,0.82) 0%, rgba(10,10,30,0.92) 100%)", zIndex: 2 }} />
                  <div style={{ position: "relative", zIndex: 3, padding: "1.75rem" }}>
                    <div className={styles.certTitle} style={{ color: "white", marginBottom: "1rem", fontSize: "1.05rem" }}>{card.title}</div>
                    <ul className={styles.certBullets}>
                      {card.bullets.map((b, j) => (
                        <li key={j} style={{ color: "rgba(255,255,255,0.75)", marginBottom: "0.5rem" }}>• {b}</li>
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
