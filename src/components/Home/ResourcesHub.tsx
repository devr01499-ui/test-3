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

import Image from "next/image";

const tabs = ["Latest", "Blog", "Case Studies", "Webinars", "Reports"];

const featuredItems = [
    {
      type: "Whitepaper",
      title: "The 2026 BPO Frontier: Scaling Neural Operations in High-Growth Enterprises",
      meta: "12 min read",
      date: "Feb 12, 2026",
      icon: Book,
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      glow: "hover-glow-1"
    },
    {
      type: "Executive Webinar",
      title: "Institutional Mastery: Integrating Human Intelligence in Automated Workflows",
      meta: "42 min",
      date: "Feb 20, 2026",
      icon: Video,
      img: "https://images.unsplash.com/photo-1591115765373-520b7a05da8f?auto=format&fit=crop&q=80&w=800",
      glow: "hover-glow-2"
    },
    {
      type: "Global Report",
      title: "2026 BPO Benchmark: Analyzing the Shift from Labor-Based to Outcome-Based Models",
      meta: "72 pages",
      date: "Q1 2026",
      icon: FileText,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      glow: "hover-glow-3"
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
          Deep-dive into high-performance operations, AI integration, and the future of enterprise efficiency.
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
            <div key={i} className="card-3d-wrapper" style={{ height: "480px" }}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotateY: 8, rotateX: -4, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 22, delay: i * 0.1 }}
                className={`card-3d-content ${styles.card}`}
                style={{ overflow: "hidden", padding: 0 }}
              >
                <div style={{ height: "220px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="card-image-bg"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="card-overlay" style={{ background: "linear-gradient(180deg, rgba(8, 47, 73, 0) 0%, rgba(8, 47, 73, 0.4) 100%)" }} />
                  <div style={{ position: "absolute", bottom: "1rem", left: "1.5rem", zIndex: 2, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", padding: "6px 16px", borderRadius: "30px", color: "white", fontWeight: 800, fontSize: "0.75rem", border: "1px solid rgba(255,255,255,0.3)" }}>
                    {item.type}
                  </div>
                </div>
                <div className={styles.cardBody} style={{ padding: "2rem", flexGrow: 1, background: "white", display: "flex", flexDirection: "column", borderTop: "1px solid var(--border)" }}>
                  <h3 className={styles.cardTitle} style={{ marginBottom: "1.5rem", fontSize: "1.35rem" }}>{item.title}</h3>
                  <div className={styles.footer} style={{ marginBottom: "1.5rem", marginTop: "auto" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)" }}>
                      <Clock size={16} /> <span style={{ fontWeight: 600 }}>{item.meta}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)" }}>
                      <Calendar size={16} /> <span style={{ fontWeight: 600 }}>{item.date}</span>
                    </div>
                  </div>
                  <a href="#" className={styles.link} style={{ color: "var(--primary)", fontWeight: 800 }}>
                    Access Full Intelligence <ArrowRight size={20} />
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

