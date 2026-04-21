"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { IndustryServicesData } from "@/types/industries";
import styles from "./IndustryTemplate.module.css";

import Image from "next/image";

export function IndustryServices({ data }: { data: IndustryServicesData }) {
  return (
    <section className={`${styles.section} ${styles.altBg}`}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: "3rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "3rem", textAlign: "center" }}
        >
          {data.title}
        </motion.h2>
        
        <div className={styles.servicesGrid}>
          {data.gridItems.map((item, i) => {
            const keyword = item.title.split(" ")[0].toLowerCase().replace(/[^a-z]/g, "");
            const imgUrl = `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800`; // Fallback to corporate tech
            // We use item-specific keywords for more relevance
            const categoryImgs: Record<string, string> = {
              "healthcare": "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800",
              "retail": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
              "finance": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
              "customer": "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800",
              "tech": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
            };
            const finalImg = categoryImgs[keyword] || imgUrl;
            const glowClass = `hover-glow-${(i % 3) + 1}`;

            return (
              <div key={i} className="card-3d-wrapper" style={{ height: "420px" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ rotateY: 8, rotateX: -4, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
                  className={`card-3d-content ${styles.serviceCard}`}
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
                    <div className="card-overlay" style={{ background: "linear-gradient(180deg, rgba(8, 47, 73, 0) 0%, rgba(8, 47, 73, 0.3) 100%)" }} />
                  </div>
                  <div className={`card-content-wrap ${glowClass}`} style={{ color: "var(--text-main)", padding: "1.5rem", background: "white" }}>
                    <h3 className="card-glass" style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary)", marginBottom: "1.25rem", marginTop: "-3rem", background: "white", padding: "12px 20px", borderRadius: "16px", display: "inline-block", boxShadow: "0 10px 25px rgba(14, 165, 233, 0.15)", width: "max-content", border: "1px solid var(--border)" }}>
                      {item.title}
                    </h3>
                    <ul className={styles.checkList} style={{ flexGrow: 1, marginTop: "0.5rem" }}>
                      {item.features.map((feature, j) => (
                        <li key={j} style={{ color: "var(--text-muted)", fontWeight: 600, fontSize: "0.9rem", display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                          <span style={{ color: "var(--primary)" }}>✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: "1rem", color: "var(--primary)", fontWeight: 800, display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem" }}>
                      Case Studies <ArrowRight size={18} />
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
