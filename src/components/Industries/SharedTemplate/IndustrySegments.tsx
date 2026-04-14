"use client";
import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { IndustrySegmentsData } from "@/types/industries";
import styles from "./IndustryTemplate.module.css";

export function IndustrySegments({ data }: { data: IndustrySegmentsData }) {
  const [activeTab, setActiveTab] = useState(data.tabs[0]);

  const filteredItems = activeTab === "All"
    ? data.items
    : data.items.filter(item => item.name === activeTab);

  return (
    <section className={`${styles.section} ${styles.altBg}`}>
      <div className="container">
        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "2rem" }}>
          {data.title}
        </h2>

        <div className={styles.tabsContainer}>
          {data.tabs.map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.segmentsGrid}>
          {filteredItems.map((item, i) => {
            const keyword = item.title.split(" ")[0].toLowerCase().replace(/[^a-z]/g, "");
            const imgUrl = `https://loremflickr.com/800/400/${keyword || "team"},segment/all?lock=${i + 20}`;
            const glowClass = `hover-glow-${((i + 3) % 5) + 1}`;
            return (
              <div key={i} className="card-3d-wrapper">
                <motion.div
                  whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`card-3d-content ${styles.segmentCard}`}
                  style={{ padding: 0, display: "flex", flexDirection: "column" }}
                >
                  <div style={{ height: "160px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                    <div className={glowClass} style={{ position: "absolute", inset: 0, opacity: 0.65, zIndex: 1, mixBlendMode: "overlay" }} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgUrl} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: 0 }} />
                  </div>
                  <div style={{ padding: "1.5rem 2rem 2rem", flexGrow: 1, background: "white", display: "flex", flexDirection: "column", position: "relative", zIndex: 2 }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.5rem", marginTop: "-3rem", background: "white", padding: "8px 14px", borderRadius: "10px", display: "inline-flex", boxShadow: "0 8px 20px rgba(0,0,0,0.08)", zIndex: 3, position: "relative" }}>
                      {item.title}
                    </h3>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 700, marginBottom: "1rem" }}>Services:</div>
                    <ul className={styles.checkList} style={{ marginBottom: "2rem" }}>
                      {item.services.map((svc, j) => (
                        <li key={j} style={{ fontSize: "0.9rem" }}><Check size={14} color="var(--primary)" /> {svc}</li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
                      <span className={styles.segmentCount}>{item.clientsCount} Clients</span>
                      <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.25rem", cursor: "pointer" }}>
                        Case Study <ArrowRight size={14} />
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
