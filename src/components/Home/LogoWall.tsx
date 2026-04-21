"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./LogoWall.module.css";

const logos = [
  "GLOBAL-SYS", "NEURAL-TECH", "NEXUS-CORP", "VIRTUE-HEALTH", 
  "PRIME-FI", "LUMEN-SOFT", "VERTEX-OPS", "CORE-RCM",
  "GLOBAL-SYS", "NEURAL-TECH", "NEXUS-CORP", "VIRTUE-HEALTH", 
  "PRIME-FI", "LUMEN-SOFT", "VERTEX-OPS", "CORE-RCM"
];

const filters = ["All", "Healthcare", "Finance", "Tech", "Retail", "Manufacturing"];

export function LogoWall() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Architecting Success for 500+ Institutional Partners
        </motion.h2>

        <div className={styles.logoTrack}>
          <div className={styles.trackInner}>
            {logos.map((logo, i) => (
              <div key={i} className={styles.logoItem}>
                {logo}
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {logos.map((logo, i) => (
              <div key={`d-${i}`} className={styles.logoItem}>
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.filters}>
          {filters.map((filter) => (
            <button 
              key={filter} 
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
