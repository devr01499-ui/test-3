"use client";
import React from "react";
import { Check } from "lucide-react";
import { IndustryComplianceData } from "@/types/industries";
import styles from "./IndustryTemplate.module.css";

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
              <div key={i} className={styles.certCard}>
                <div className={styles.certTitle}>{card.title}</div>
                <ul className={styles.certBullets}>
                  {card.bullets.map((b, j) => (
                    <li key={j}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: 700, letterSpacing: "1px", color: "var(--text-muted)", textTransform: "uppercase" }}>
              SECURITY MEASURES:
            </div>
            <div className={styles.securityList}>
              {data.securityMeasures.map((measure, i) => (
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
