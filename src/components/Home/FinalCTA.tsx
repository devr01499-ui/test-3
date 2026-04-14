"use client";

import React from "react";
import { 
  ArrowRight, 
  Play, 
  Download
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Ready to Transform Your Operations?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={styles.subtitle}
        >
          Let's discuss how we can help you achieve your goals with our AI-human hybrid solutions.
        </motion.p>

        <div className={styles.actions}>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.primary}
          >
            Get Started <ArrowRight size={20} style={{ verticalAlign: "middle", marginLeft: "8px" }} />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.secondary}
          >
            <Play size={20} fill="currentColor" style={{ verticalAlign: "middle", marginRight: "8px" }} />
            Schedule Demo
          </motion.button>
          
          <button className={styles.tertiary}>
            <Download size={20} />
            Download Brochure
          </button>
        </div>

        <div className={styles.trustFooter}>
          <div className={styles.trustText}>Trusted by 500+ companies worldwide</div>
          <div className={styles.logos}>
            <div className={styles.logoPlaceholder}>GLOBE</div>
            <div className={styles.logoPlaceholder}>NEXUS</div>
            <div className={styles.logoPlaceholder}>VERTEX</div>
            <div className={styles.logoPlaceholder}>PRIME</div>
            <div className={styles.logoPlaceholder}>CORE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
