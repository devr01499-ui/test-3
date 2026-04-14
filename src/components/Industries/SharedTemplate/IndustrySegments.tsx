"use client";
import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
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
          {filteredItems.map((item, i) => (
            <div key={i} className={styles.segmentCard}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.5rem" }}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
