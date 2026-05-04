"use client";

import React from "react";
import { 
  ArrowRight, 
  Play, 
  Download
} from "lucide-react";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Ready to Scale with Institutional Precision?
        </h2>
        <p className={styles.subtitle}>
          Partner with Clarity to integrate high-tier human strategic intelligence with advanced neural architectures.
        </p>

        <div className={styles.actions}>
          <button className={styles.primary}>
            Deploy Global Platform <ArrowRight size={20} style={{ verticalAlign: "middle", marginLeft: "8px" }} />
          </button>
          
          <button className={styles.secondary}>
            <Play size={20} fill="currentColor" style={{ verticalAlign: "middle", marginRight: "8px" }} />
            Request Strategy Brief
          </button>
          
          <button className={styles.tertiary}>
            <Download size={20} />
            Download Institutional Blueprint
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
