"use client";

import React from "react";
import { 
  Calculator, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ROICalculator.module.css";

export function ROICalculator() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.flex}>
          {/* LEFT: VISUAL */}
          <div className={styles.leftVisual}>
             <motion.div 
               initial={{ opacity: 0, rotate: -5 }}
               whileInView={{ opacity: 1, rotate: 0 }}
               viewport={{ once: true }}
               className={styles.calcBox}
             >
                <div className={styles.calcHeader}>
                  <div className={styles.calcDot} />
                  <div className={styles.calcDot} />
                  <div className={styles.calcDot} />
                </div>
                <div className={styles.calcScreen}>
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ textAlign: "center" }}
                  >
                    <div style={{ fontSize: "0.75rem", opacity: 0.6, marginBottom: "0.5rem" }}>POTENTIAL SAVINGS</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>$1.2M+</div>
                  </motion.div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem" }}>
                  {[...Array(6)].map((_, i) => (
                    <div key={i} style={{ height: "15px", borderRadius: "4px", background: "rgba(255,255,255,0.1)" }} />
                  ))}
                </div>
             </motion.div>

             <motion.div 
               style={{ position: "absolute", bottom: "-20px", right: "20px" }}
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 3, repeat: Infinity }}
             >
                <TrendingUp size={64} style={{ opacity: 0.2 }} />
             </motion.div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className={styles.rightContent}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.title}
            >
              Calculate Your Savings
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={styles.desc}
            >
              See how much you could save by partnering with us. Our AI-augmented workforce 
              delivers enterprise-grade quality at a fraction of traditional BPO costs.
            </motion.p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>40%</div>
                <div className={styles.statLabel}>Avg. Cost Reduction</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>3-6m</div>
                <div className={styles.statLabel}>Payback Period</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>99%+</div>
                <div className={styles.statLabel}>Quality Standards</div>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.cta}
            >
              Try ROI Calculator <ArrowRight size={20} style={{ verticalAlign: "middle", marginLeft: "8px" }} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
