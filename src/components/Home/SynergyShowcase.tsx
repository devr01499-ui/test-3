"use client";

import React from "react";
import { 
  Bot, 
  Brain, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./SynergyShowcase.module.css";

const showcaseCards = [
  {
    icon: Bot,
    title: "AI Handles",
    color: "#0ea5e9",
    items: ["Routing", "Data Entry", "Analysis", "Automation"],
    img: "https://loremflickr.com/800/800/robot,ai/all",
    glow: "hover-glow-1"
  },
  {
    icon: Brain,
    title: "Humans Excel",
    color: "#a855f7",
    items: ["Complex Tasks", "Empathy", "Creativity", "Judgment"],
    img: "https://loremflickr.com/800/800/person,thinking/all",
    glow: "hover-glow-2"
  },
  {
    icon: BarChart3,
    title: "Together We",
    color: "#22c55e",
    items: ["40% Faster", "99.5% Accuracy", "60% Cost Reduction", "Scale Infinitely"],
    img: "https://loremflickr.com/800/800/business,success/all",
    glow: "hover-glow-3"
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    color: "#f59e0b",
    items: ["AI Monitors", "Human QA", "Continuous Learning", "Real-time Feedback"],
    img: "https://loremflickr.com/800/800/security,shield/all",
    glow: "hover-glow-4"
  }
];

export function SynergyShowcase() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.label}
        >
          The Perfect Synergy
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={styles.title}
        >
          Where Artificial Intelligence Meets Human Expertise
        </motion.h2>

        <div className={styles.grid}>
          {showcaseCards.map((card, i) => (
            <div key={card.title} className="card-3d-wrapper">
              <motion.div 
                className={`card-3d-content ${styles.card}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotateY: 5, rotateX: -5, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.1 }}
                style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", border: `1px solid ${card.color}40`, padding: "2rem" }}
              >
                {/* Option A: Full Card Background Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.img} alt={card.title} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
                {/* Heavy Glass/Gradient Overlay to make text perfectly readable */}
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(30,30,30,0.85) 0%, rgba(10,10,10,0.95) 100%)`, zIndex: 1, backdropFilter: "blur(5px)" }} />
                <div className={card.glow} style={{ position: "absolute", inset: 0, opacity: 0.3, zIndex: 1, mixBlendMode: "overlay" }} />

                <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
                  <div 
                    className={styles.iconBox}
                    style={{ background: `${card.color}30`, color: card.color, marginBottom: "1.5rem", width: "max-content", padding: "12px", borderRadius: "12px" }}
                  >
                    <card.icon size={28} />
                  </div>
                  <h3 className={styles.cardH3} style={{ color: "white", marginBottom: "1rem", fontSize: "1.5rem", fontWeight: 800 }}>{card.title}</h3>
                  <ul className={styles.list} style={{ listStyle: "none", padding: 0 }}>
                    {card.items.map((item) => (
                      <li key={item} className={styles.listItem} style={{ color: "rgba(255,255,255,0.8)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
                        <div className={styles.bullet} style={{ background: card.color, width: "6px", height: "6px", borderRadius: "50%" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={styles.ctaWrapper}
        >
          <button className={styles.diagBtn}>
            See How It Works <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
