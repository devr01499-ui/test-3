"use client";

import React from "react";
import { 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";
import styles from "./ComplianceStrip.module.css";

const badges = [
  { name: "ISO", sub: "27001:2022" },
  { name: "SOC 2", sub: "Type II" },
  { name: "GDPR", sub: "E.U. Compliant" },
  { name: "HIPAA", sub: "HITRUST Certified" },
  { name: "PCI DSS", sub: "Level 1 v4.0" },
  { name: "CMMI", sub: "Level 5 SVC/3" },
  { name: "NIST", sub: "800-53" },
  { name: "ISO", sub: "9001:2015" },
];

export function ComplianceStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Institutional Security & Global Compliance Framework
        </h2>

        <div className={styles.grid}>
          {badges.map((badge, i) => (
            <div 
              key={i}
              className={styles.badgeCard}
            >
              <ShieldCheck size={24} color="var(--primary)" />
              <div className={styles.badgeName}>{badge.name}</div>
              <div className={styles.badgeSub}>{badge.sub}</div>
            </div>
          ))}
        </div>

        <a 
          href="#" 
          className={styles.viewAll}
        >
          View All Certifications <ArrowRight size={16} style={{ verticalAlign: "middle", marginLeft: "4px" }} />
        </a>
      </div>
    </section>
  );
}
