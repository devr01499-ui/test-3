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
    items: ["Routing", "Data Entry", "Analysis", "Automation"]
  },
  {
    icon: Brain,
    title: "Humans Excel",
    color: "#a855f7",
    items: ["Complex Tasks", "Empathy", "Creativity", "Judgment"]
  },
  {
    icon: BarChart3,
    title: "Together We",
    color: "#22c55e",
    items: ["40% Faster", "99.5% Accuracy", "60% Cost Reduction", "Scale Infinitely"]
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    color: "#f59e0b",
    items: ["AI Monitors", "Human QA", "Continuous Learning", "Real-time Feedback"]
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
            <motion.div 
              key={card.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div 
                className={styles.iconBox}
                style={{ background: `${card.color}15`, color: card.color }}
              >
                <card.icon size={28} />
              </div>
              <h3 className={styles.cardH3}>{card.title}</h3>
              <ul className={styles.list}>
                {card.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <div className={styles.bullet} style={{ background: card.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
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
