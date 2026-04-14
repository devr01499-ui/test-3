import React from "react";
import { ArrowRight, FileText, BarChart3, Target, ChevronRight } from "lucide-react";
import styles from "./MegaMenu.module.css";
import { enhancedIndustries } from "@/lib/navData";

export function IndustriesMegaMenu() {
  return (
    <div className={styles.grid}>
      {/* PRIMARY INDUSTRIES GRID (4x4) */}
      <div className={styles.column} style={{ gridColumn: "span 12" }}>
        <h3 className={styles.sectionTitle}>Primary Industries</h3>
        <div className={styles.industryGrid4x4}>
          {enhancedIndustries.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.name} className={styles.industryCardDetailed}>
                <div className={styles.industryIcon}>
                  <IconComponent size={24} />
                </div>
                <h4 className={styles.industryTitle}>{item.name}</h4>
                <div className={styles.industryBullets}>
                  {item.bullets.map((bullet) => (
                    <span key={bullet} className={styles.industryBullet}>{bullet}</span>
                  ))}
                </div>
                <div className={styles.viewDetails}>
                  View Details <ChevronRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* FEATURED CONTENT SECTION */}
      <div className={styles.column} style={{ gridColumn: "span 12", borderTop: "1px solid var(--border)", marginTop: "2rem", paddingTop: "2.5rem" }}>
        <h3 className={styles.sectionTitle}>Industry Featured Content</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4rem" }}>
          <div>
            <h4 className={styles.subTitle}><FileText size={18} color="var(--primary)" /> Case Studies</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
              {[
                { title: "Healthcare: 45% Cost Cut", desc: "Operational efficiency breakthrough." },
                { title: "E-comm: 3x Scale", desc: "Handled peak season surges." },
                { title: "Fintech: 99.9% Accuracy", desc: "Zero-defect compliance processing." }
              ].map(s => (
                <a key={s.title} href="#" className={styles.link} style={{ display: "block", padding: "0.5rem", background: "var(--surface)", borderRadius: "8px" }}>
                  <span style={{ fontWeight: 700, display: "block", color: "var(--text-main)" }}>{s.title}</span>
                  <span style={{ fontSize: "0.7rem" }}>{s.desc}</span>
                </a>
              ))}
              <a href="#" className={styles.viewDetails} style={{ marginTop: "0.5rem" }}>[View All Stories →]</a>
            </div>
          </div>
          
          <div>
            <h4 className={styles.subTitle}><BarChart3 size={18} color="var(--primary)" /> Industry Reports</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
              {["2024 Trends Market Report", "Global Benchmark Data 2024", "Segment Market Analysis"].map(r => (
                <button key={r} className={styles.portalBtn} style={{ fontSize: "0.8rem", padding: "0.75rem", width: "100%", justifyContent: "space-between" }}>
                  {r} <ArrowRight size={14} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className={styles.subTitle}><Target size={18} color="var(--primary)" /> Quick Tools</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
              {["Industry Finder Tool", "ROI Calculator", "Capability Matcher"].map(t => (
                <button key={t} className={styles.quoteBtn} style={{ fontSize: "0.8rem", padding: "0.75rem", width: "100%", justifyContent: "space-between" }}>
                  {t} <ChevronRight size={14} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
