"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe, Users, TrendingUp, Target, ShieldCheck,
  Share2, Trophy, Leaf, Heart, ArrowRight
} from "lucide-react";
import { AboutPageData } from "@/data/about";
import styles from "./about.module.css";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={40} />,
  Users: <Users size={40} />,
  TrendingUp: <TrendingUp size={40} />,
  Target: <Target size={40} />,
  ShieldCheck: <ShieldCheck size={40} />,
  Share2: <Share2 size={40} />,
  Trophy: <Trophy size={40} />,
  Leaf: <Leaf size={40} />,
  Heart: <Heart size={40} />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.0, 0.0, 0.2, 1] as const } }),
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export function AboutTemplate({ data }: { data: AboutPageData }) {
  return (
    <div className={styles.page}>
      
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.breadcrumb}>
            <Link href="/about">About Us</Link>
            <span>/</span>
            <span>{data.title}</span>
          </div>

          <div className={styles.iconWrap} style={{ background: "linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%)" }}>
            {iconMap[data.iconName]}
          </div>

          <h1 className={styles.title}>{data.headline}</h1>
          <p className={styles.desc}>{data.description}</p>
        </motion.div>
      </section>

      {/* ── STATS (If applicable) ── */}
      {data.stats && (
        <section className={`${styles.section} ${styles.bgSurface}`}>
          <div className="container">
            <motion.div className={styles.statsGrid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {data.stats.map((stat, i) => (
                <motion.div key={i} custom={i} variants={fadeUp} className={styles.statItem}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── FEATURES GRID ── */}
      <section className={styles.section}>
        <div className="container">
          <motion.div className={styles.grid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {data.features.map((feat, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className={styles.card}>
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2>Ready to transform your enterprise?</h2>
            <button className={styles.ctaPrimary}>
              {data.ctaText || "Get in Touch"} <ArrowRight size={18} style={{ display: "inline", verticalAlign: "middle", marginLeft: "4px" }} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
