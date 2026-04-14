"use client";

import React, { useState } from "react";
import { 
  Book, 
  Video, 
  FileText, 
  ArrowRight,
  Clock,
  Calendar
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ResourcesHub.module.css";

const tabs = ["Latest", "Blog", "Case Studies", "Webinars", "Reports"];

const featuredItems = [
  {
    type: "Blog",
    title: "The Future of BPO: AI Trends That Will Define 2026",
    meta: "8 min read",
    date: "Jan 15, 2026",
    icon: Book,
    img: "https://loremflickr.com/800/500/artificial-intelligence,trend/all?lock=61",
    glow: "hover-glow-2"
  },
  {
    type: "Webinar",
    title: "AI in Customer Service: Best Practices for Global Scale",
    meta: "45 min",
    date: "Jan 20, 2026",
    icon: Video,
    img: "https://loremflickr.com/800/500/conference,webinar/all?lock=62",
    glow: "hover-glow-4"
  },
  {
    type: "Report",
    title: "2026 BPO Benchmark: The State of Intelligent Outsourcing",
    meta: "65 pages",
    date: "Q1 2026",
    icon: FileText,
    img: "https://loremflickr.com/800/500/report,data/all?lock=63",
    glow: "hover-glow-5"
  }
];

export function ResourcesHub() {
  const [activeTab, setActiveTab] = useState("Latest");

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Knowledge Center
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={styles.subtitle}
        >
          Stay ahead with latest insights and trends
        </motion.p>

        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <div 
              key={tab} 
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {featuredItems.map((item, i) => (
            <div key={i} className="card-3d-wrapper">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotateY: 5, rotateX: -5, scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.1 }}
                className={`card-3d-content ${styles.card}`}
                style={{ overflow: "hidden", padding: 0, display: "flex", flexDirection: "column" }}
              >
                {/* Option B: top-half image */}
                <div style={{ height: "200px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                  <div className={item.glow} style={{ position: "absolute", inset: 0, opacity: 0.65, zIndex: 1, mixBlendMode: "overlay" }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: 0 }} />
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem", zIndex: 2, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", padding: "6px 14px", borderRadius: "20px", color: "white", fontWeight: 700, fontSize: "0.8rem" }}>
                    {item.type}
                  </div>
                </div>
                <div className={styles.cardBody} style={{ padding: "1.75rem", flexGrow: 1, background: "white", display: "flex", flexDirection: "column" }}>
                  <h3 className={styles.cardTitle} style={{ marginBottom: "1rem" }}>{item.title}</h3>
                  <div className={styles.footer} style={{ marginBottom: "1.25rem", marginTop: "auto" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Clock size={14} /> {item.meta}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Calendar size={14} /> {item.date}
                    </div>
                  </div>
                  <a href="#" className={styles.link}>
                    Read More <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.a 
          href="#" 
          className={styles.viewAll}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Visit Resource Library <ArrowRight size={18} style={{ verticalAlign: "middle" }} />
        </motion.a>
      </div>
    </section>
  );
}

