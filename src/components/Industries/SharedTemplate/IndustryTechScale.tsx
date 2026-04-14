"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { IndustryTechData } from "@/types/industries";
import styles from "./IndustryTemplate.module.css";

export function IndustryTechScale({ data }: { data: IndustryTechData }) {
  return (
    <section className={styles.section}>
      <div className="container" style={{ background: "var(--surface)", borderRadius: "16px", padding: "4rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
          {data.title}
        </h2>
        
        <div className={styles.techGrid}>
          {data.categories.map((cat, i) => (
            <div key={i} className={styles.techColumn}>
              <h3>{cat.title}</h3>
              <ul className={styles.techList}>
                {cat.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
           <button className={styles.primaryBtn}>
             View Full Integration List <ArrowRight size={18} />
           </button>
        </div>
      </div>
    </section>
  );
}
