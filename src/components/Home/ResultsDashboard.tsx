"use client";

import React from "react";
import { 
  BarChart3, 
  Star, 
  Coins, 
  Zap, 
  Globe, 
  Users, 
  Target, 
  RefreshCw, 
  PhoneCall, 
  Trophy 
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ResultsDashboard.module.css";

const metrics = [
  { label: "CSAT Score", value: "99.2%", icon: BarChart3 },
  { label: "Quality Score", value: "98.5%", icon: Star },
  { label: "Cost Reduction", value: "40%", icon: Coins },
  { label: "Avg Resp Time", value: "<20sec", icon: Zap },
  { label: "Countries Served", value: "45", icon: Globe },
  { label: "Global Workforce", value: "50,000+", icon: Users },
  { label: "First Call Resoltn", value: "95%+", icon: Target },
  { label: "Operational uptime", value: "24/7", icon: RefreshCw },
  { label: "Interactions/Mo", value: "15M+", icon: PhoneCall },
  { label: "Industry Awards", value: "500+", icon: Trophy },
];

export function ResultsDashboard() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Results That Speak Volumes
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={styles.dashboard}
        >
          <div className={styles.grid}>
            {metrics.map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={styles.metricCard}
              >
                <div className={styles.iconBox}>
                  <metric.icon size={22} />
                </div>
                <div className={styles.value}>{metric.value}</div>
                <div className={styles.label}>{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
