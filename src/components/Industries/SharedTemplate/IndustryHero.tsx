"use client";
import React from "react";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { IndustryHeroData } from "@/types/industries";
import styles from "./IndustryTemplate.module.css";
import { IconResolver } from "@/components/Solutions/SharedTemplate/IconResolver";

export function IndustryHero({ data, breadcrumb }: { data: IndustryHeroData, breadcrumb: string }) {
  return (
    <section className={styles.section} style={{ paddingTop: "8rem" }}>
      <div className="container">
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "2rem", fontWeight: 500 }}>
          {breadcrumb}
        </div>
        
        <div className={styles.heroSplit}>
          <div className={styles.heroLeft}>
            <div className={styles.badge}>
              <IconResolver name={data.badgeIcon} size={18} /> {data.badgeText}
            </div>
            <h1>{data.headline}</h1>
            <p>{data.subheading}</p>
            
            <ul className={styles.checkList}>
              {data.bullets.map((bullet, i) => (
                <li key={i}>
                  <div style={{ background: "rgba(16, 185, 129, 0.1)", borderRadius: "50%", padding: "4px", color: "var(--success)" }}>
                    <Check size={16} />
                  </div>
                  {bullet}
                </li>
              ))}
            </ul>
            
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn}>{data.primaryCta} <ArrowRight size={18} /></button>
              <button className={styles.secondaryBtn}>{data.secondaryCta}</button>
            </div>
          </div>
          
          <div className={styles.heroRight}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <IconResolver name={data.visualIcon} size={64} style={{ color: "var(--primary)", opacity: 0.2, marginBottom: "1rem" }} />
              <div style={{ fontWeight: 800, color: "var(--text-main)", fontSize: "1.2rem" }}>{data.badgeText} Architecture</div>
            </div>
            
            <ul className={styles.checkList} style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              {data.visualList.map((item, i) => (
                 <li key={i} style={{ color: "var(--text-muted)" }}>• {item}</li>
              ))}
            </ul>
            
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1px", color: "var(--text-muted)", marginBottom: "1rem", textTransform: "uppercase" }}>
                Certifications
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {data.certifications.map(cert => (
                  <span key={cert.id} style={{ padding: "4px 8px", background: "var(--background)", border: "1px solid var(--border)", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700 }}>
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ background: "rgba(14, 165, 233, 0.05)", padding: "1.5rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1px", color: "var(--primary)", marginBottom: "0.5rem", textTransform: "uppercase" }}>
                Client Success
              </div>
              <div style={{ fontWeight: 800, color: "var(--text-main)", marginBottom: "0.25rem" }}>{data.clientSuccess.stat1}</div>
              <div style={{ fontWeight: 800, color: "var(--text-main)" }}>{data.clientSuccess.stat2}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
