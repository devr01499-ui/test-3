"use client";
import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { IndustrySegmentsData } from "@/types/industries";
import styles from "./IndustryTemplate.module.css";

import Image from "next/image";

export function IndustrySegments({ data }: { data: IndustrySegmentsData }) {
  const [activeTab, setActiveTab] = useState(data.tabs[0]);

  const filteredItems = activeTab === "All"
    ? data.items
    : data.items.filter(item => item.name === activeTab);

  return (
    <section className={`${styles.section} ${styles.altBg}`}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: "2.8rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "3rem", textAlign: "center" }}
        >
          {data.title}
        </motion.h2>

        <div className={styles.tabsContainer} style={{ justifyContent: "center", borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem" }}>
          {data.tabs.map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab)}
              style={{ padding: "0.75rem 1.5rem", borderRadius: "50px", fontWeight: 700 }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.segmentsGrid} style={{ marginTop: "3rem" }}>
          {filteredItems.map((item, i) => {
            const keyword = item.title.split(" ")[0].toLowerCase().replace(/[^a-z]/g, "");
            const stockImg = `https://images.unsplash.com/photo-1542744094-3a31f2f9c568?auto=format&fit=crop&q=80&w=800`; // Team fallback
            const categoryImgs: Record<string, string> = {
              "corporate": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
              "individual": "https://images.unsplash.com/photo-1521791136064-7986c2953d75?auto=format&fit=crop&q=80&w=800",
              "specialized": "https://images.unsplash.com/photo-1454165833767-02acdcd101f0?auto=format&fit=crop&q=80&w=800"
            };
            const finalImg = categoryImgs[keyword] || stockImg;
            const glowClass = `hover-glow-${((i + 2) % 3) + 1}`;

            return (
              <div key={i} className="card-3d-wrapper" style={{ height: "420px" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ rotateY: 8, rotateX: -4, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
                  className={`card-3d-content ${styles.segmentCard}`}
                  style={{ overflow: "hidden", padding: 0 }}
                >
                  <div style={{ height: "180px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                    <Image 
                      src={finalImg} 
                      alt={item.title} 
                      fill 
                      className="card-image-bg"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="card-overlay" style={{ background: "linear-gradient(180deg, rgba(8, 47, 73, 0) 0%, rgba(8, 47, 73, 0.4) 100%)" }} />
                  </div>
                  <div className={`card-content-wrap ${glowClass}`} style={{ color: "var(--text-main)", padding: "1.5rem", background: "white" }}>
                    <h3 className="card-glass" style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary)", marginBottom: "1.25rem", marginTop: "-3rem", background: "white", padding: "12px 20px", borderRadius: "16px", display: "inline-block", boxShadow: "0 10px 25px rgba(14, 165, 233, 0.15)", width: "max-content", border: "1px solid var(--border)" }}>
                      {item.title}
                    </h3>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.75rem", textTransform: "uppercase" }}>Key Services:</div>
                    <ul className={styles.checkList} style={{ marginBottom: "1.5rem", flexGrow: 1 }}>
                      {item.services.map((svc, j) => (
                        <li key={j} style={{ fontSize: "0.9rem", color: "var(--text-main)", fontWeight: 600, display: "flex", gap: "0.5rem", marginBottom: "0.4rem" }}>
                          <Check size={14} color="var(--primary)" /> {svc}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                      <span className={styles.segmentCount} style={{ background: "var(--surface)", color: "var(--primary)", border: "1px solid var(--border)", padding: "4px 10px" }}>{item.clientsCount} Clients</span>
                      <span style={{ color: "var(--primary)", fontWeight: 800, fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                        Case study <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
