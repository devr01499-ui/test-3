"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Zap, ShieldCheck, Cpu } from "lucide-react";
import { IconResolver } from "./IconResolver";
import { HeroData, QuickStat } from "@/types/solutions";
import styles from "./SolutionTemplate.module.css";
import { BPOEnterpriseCard } from "@/components/Shared/BPOEnterpriseCard";
import { motion } from "framer-motion";

export function HeroAndStats({ heroData, quickStats, breadcrumb }: { heroData: HeroData, quickStats: QuickStat[], breadcrumb: string }) {
  return (
    <div style={{ background: "var(--white)", position: "relative", overflow: "hidden" }}>
      {/* Background Mesh Overlay */}
      <div style={{ 
        position: "absolute", 
        top: 0, 
        right: 0, 
        width: "50%", 
        height: "100%", 
        opacity: 0.05, 
        backgroundImage: "radial-gradient(circle at 1px 1px, var(--electric-blue) 1px, transparent 0)", 
        backgroundSize: "24px 24px" 
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingBottom: "128px" }}>
        
        <div className={styles.breadcrumb}>
          <Link href="/">Hq</Link>
          <ChevronRight size={14} className={styles.chevron} />
          <Link href="/solutions">Solutions</Link>
          <ChevronRight size={14} className={styles.chevron} />
          <span style={{ color: "var(--charcoal-deep)" }}>{breadcrumb}</span>
        </div>

        <section className={styles.heroSection}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.badge}>
              <Cpu size={14} />
              {heroData.badgeText}
            </div>
            <h1>{heroData.headline}</h1>
            <p className={styles.subheading}>
              {heroData.subheading}
            </p>
            <ul className={styles.heroList}>
              {heroData.bullets.map((bullet, i) => (
                <li key={i}>
                  <CheckCircle2 size={24} /> 
                  {bullet}
                </li>
              ))}
            </ul>
            <div className={styles.heroActions}>
              <button className="btn-premium btn-primary">
                Deploy Architecture <ArrowRight size={18} />
              </button>
              <button className="btn-premium btn-secondary" style={{ borderColor: 'var(--border)' }}>
                Systems Audit
              </button>
            </div>
          </motion.div>
          
          <div className="card-perspective">
            <BPOEnterpriseCard elevation={4} intensity={12}>
              <div className={styles.heroVisual} style={{ background: "var(--soft-gray)", border: "none" }}>
                <div className={styles.visualPlaceholder}>
                  <div style={{ background: "var(--white)", padding: "2.5rem", borderRadius: "24px", boxShadow: "var(--shadow-level-2)", marginBottom: "2rem" }}>
                    <IconResolver name={heroData.visualIcon} size={64} color="var(--electric-blue)" />
                  </div>
                  <p style={{ color: "var(--charcoal-deep)", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px" }}>
                    {heroData.visualText}
                  </p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={styles.metricsOverlay}
                >
                  <div style={{ fontSize: "11px", fontWeight: 800, color: "var(--sunrise-amber)", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "1px" }}>Neural Efficiency Metrics</div>
                  {heroData.metricsOverlay.map((metric, i) => (
                    <div key={i}>
                      <span>{metric.value}</span> {metric.label}
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: "6px", marginTop: "1rem" }}>
                    {[1,2,3].map(i => <div key={i} style={{ height: "4px", flexGrow: 1, background: "rgba(255,255,255,0.1)", borderRadius: "2px" }} />)}
                  </div>
                </motion.div>
              </div>
            </BPOEnterpriseCard>
          </div>
        </section>

        <div className={styles.statsBar}>
          {quickStats.map((stat, i) => (
            <motion.div 
              key={i} 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <IconResolver name={stat.icon} /> <span>{stat.text}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
