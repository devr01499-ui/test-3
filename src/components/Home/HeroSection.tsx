"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const mainStats = [
  { label: "Global Clients", value: "500+" },
  { label: "Countries", value: "45" },
  { label: "CSAT Score", value: "99.2%" },
  { label: "Operations", value: "24/7" },
  { label: "Languages", value: "50+" },
];

export function HeroSection() {
  return (
    <section className={styles.hero} style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* FULL SCREEN CLEAR VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none"
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* FLOATING STATS BAR */}
      <div className={styles.statsBar}>
        <div className={`${styles.statsInner} container`}>
          {mainStats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
