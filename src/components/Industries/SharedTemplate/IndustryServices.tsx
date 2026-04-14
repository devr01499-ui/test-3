"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { IndustryServicesData } from "@/types/industries";
import styles from "./IndustryTemplate.module.css";

export function IndustryServices({ data }: { data: IndustryServicesData }) {
  return (
    <section className={`${styles.section} ${styles.altBg}`}>
      <div className="container">
        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
          {data.title}
        </h2>
        
        <div className={styles.servicesGrid}>
          {data.gridItems.map((item, i) => (
            <div key={i} className={styles.serviceCard}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                {item.title}
              </h3>
              <ul className={styles.checkList} style={{ flexGrow: 1 }}>
                {item.features.map((feature, j) => (
                  <li key={j} style={{ color: "var(--text-muted)", fontWeight: 500, fontSize: "0.95rem" }}>• {feature}</li>
                ))}
              </ul>
              <div style={{ marginTop: "1.5rem", color: "var(--primary)", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                Learn More <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
