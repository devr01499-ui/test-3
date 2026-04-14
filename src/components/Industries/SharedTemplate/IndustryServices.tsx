"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
          {data.gridItems.map((item, i) => {
            const keyword = item.title.split(" ")[0].toLowerCase().replace(/[^a-z]/g, "");
            const imgUrl = `https://loremflickr.com/800/400/${keyword || "business"},industry/all?lock=${i + 10}`;
            const glowClass = `hover-glow-${(i % 5) + 1}`;
            return (
              <div key={i} className="card-3d-wrapper">
                <motion.div
                  whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`card-3d-content ${styles.serviceCard}`}
                  style={{ padding: 0, display: "flex", flexDirection: "column" }}
                >
                  <div style={{ height: "180px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                    <div className={glowClass} style={{ position: "absolute", inset: 0, opacity: 0.65, zIndex: 1, mixBlendMode: "overlay" }} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgUrl} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: 0 }} />
                  </div>
                  <div style={{ padding: "2rem", flexGrow: 1, background: "white", display: "flex", flexDirection: "column", position: "relative", zIndex: 2 }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "1px", marginTop: "-3.5rem", background: "white", padding: "10px 16px", borderRadius: "10px", display: "inline-flex", boxShadow: "0 8px 20px rgba(0,0,0,0.08)", zIndex: 3, position: "relative", flexWrap: "wrap" }}>
                      {item.title}
                    </h3>
                    <ul className={styles.checkList} style={{ flexGrow: 1, marginTop: "0.5rem" }}>
                      {item.features.map((feature, j) => (
                        <li key={j} style={{ color: "var(--text-muted)", fontWeight: 500, fontSize: "0.95rem" }}>• {feature}</li>
                      ))}
                    </ul>
                    <div style={{ marginTop: "1.5rem", color: "var(--primary)", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                      Learn More <ArrowRight size={16} />
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
