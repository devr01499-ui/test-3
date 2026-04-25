"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./about-v2.module.css";
import { aboutData } from "@/data/about";

export function AboutStory() {
  const data = aboutData["our-story"];
  
  return (
    <section className={`${styles.section} ${styles.bgSurface}`}>
      <div className={styles.container}>
        <div className={styles.storyGrid}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.storyImageWrap}
          >
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
              alt="Our Story"
              fill
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, rgba(14, 165, 233, 0.2), transparent)" }} />
          </motion.div>

          <div className={styles.storyContent}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: "3.5rem", fontWeight: 900, marginBottom: "1.5rem" }}
            >
              {data.headline}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: "1.25rem", color: "var(--text-muted)", marginBottom: "3rem" }}
            >
              {data.description}
            </motion.p>

            <div className={styles.storyTimeline}>
              {data.features.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={styles.timelineItem}
                >
                  <span className={styles.year}>{i === 0 ? "Jan 2025" : i === 1 ? "Feb 2025" : i === 2 ? "Mar 2025" : "Q2 2025"}</span>
                  <div className={styles.timelineDesc}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
