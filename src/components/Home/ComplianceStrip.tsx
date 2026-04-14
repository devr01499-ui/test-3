"use client";

import React from "react";
import { 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ComplianceStrip.module.css";

const badges = [
  { name: "ISO", sub: "27001" },
  { name: "SOC2", sub: "Type 2" },
  { name: "GDPR", sub: "Compliant" },
  { name: "HIPAA", sub: "Cert" },
  { name: "PCI", sub: "DSS" },
  { name: "CMMI", sub: "Level 5" },
  { name: "SSAE", sub: "18" },
  { name: "Cyber", sub: "Essentials" },
];

export function ComplianceStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Enterprise-Grade Security & Compliance
        </motion.h2>

        <div className={styles.grid}>
          {badges.map((badge, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={styles.badgeCard}
            >
              <ShieldCheck size={24} color="var(--primary)" />
              <div className={styles.badgeName}>{badge.name}</div>
              <div className={styles.badgeSub}>{badge.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.a 
          href="#" 
          className={styles.viewAll}
          whileHover={{ x: 5 }}
        >
          View All Certifications <ArrowRight size={16} style={{ verticalAlign: "middle", marginLeft: "4px" }} />
        </motion.a>
      </div>
    </section>
  );
}
