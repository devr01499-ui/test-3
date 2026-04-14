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
    icon: Book
  },
  {
    type: "Webinar",
    title: "AI in Customer Service: Best Practices for Global Scale",
    meta: "45 min",
    date: "Jan 20, 2026",
    icon: Video
  },
  {
    type: "Report",
    title: "2026 BPO Benchmark: The State of Intelligent Outsourcing",
    meta: "65 pages",
    date: "Q1 2026",
    icon: FileText
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
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.card}
            >
              <div className={styles.image}>
                <item.icon size={48} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.badge}>{item.type}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.footer}>
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
