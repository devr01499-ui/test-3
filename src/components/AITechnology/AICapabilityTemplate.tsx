"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageSquare, BarChart3, Eye, Heart, GitBranch,
  Workflow, ShieldCheck, Mic, BookOpen, ArrowRight,
  CheckCircle, ArrowLeft, Rocket
} from "lucide-react";
import { AICapabilityData } from "@/data/ai-capabilities";
import styles from "@/app/ai-technology/technology.module.css";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare size={48} />,
  BarChart3: <BarChart3 size={48} />,
  Eye: <Eye size={48} />,
  Heart: <Heart size={48} />,
  GitBranch: <GitBranch size={48} />,
  Workflow: <Workflow size={48} />,
  ShieldCheck: <ShieldCheck size={48} />,
  Mic: <Mic size={48} />,
  BookOpen: <BookOpen size={48} />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.0, 0.0, 0.2, 1] as const } }),
};

const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

export function AICapabilityTemplate({ data }: { data: AICapabilityData }) {
  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.subHero}>
        <div className={styles.subHeroGrid}>
          <motion.div
            className={styles.subHeroContent}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.subBreadcrumb}>
              <Link href="/ai-technology"><ArrowLeft size={14} /> AI Technology</Link>
              <span>/</span>
              <span>{data.breadcrumb}</span>
            </div>

            <h1 className={styles.subTitle}>{data.headline}</h1>
            <p className={styles.subDesc}>{data.description}</p>

            <ul className={styles.heroBullets}>
              {data.bullets.map((b, i) => (
                <motion.li key={i} custom={i} variants={fadeUp} initial="hidden" animate="visible">
                  <CheckCircle size={18} className={styles.bulletIcon} /> {b}
                </motion.li>
              ))}
            </ul>

            <div className={styles.heroCtas}>
              <Link href="#features" className={styles.btnPrimary}>
                Explore Features <ArrowRight size={18} />
              </Link>
              <button className={styles.btnSecondary}>Request Demo</button>
            </div>
          </motion.div>

          <motion.div
            className={styles.subVisual}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.subOrbWrap}>
              <div className={`${styles.subOrb} ${styles.subOrb1}`} />
              <div className={`${styles.subOrb} ${styles.subOrb2}`} />
              <div className={`${styles.subOrb} ${styles.subOrb3}`} />
              <div className={styles.subMainIcon} style={{ color: "var(--primary)" }}>
                {iconMap[data.iconName]}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section id="features" className={styles.section}>
        <div className="container">
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <p className={styles.sectionSub}>Deep-dive into the technical capabilities powering {data.title}.</p>
          </motion.div>

          <motion.div className={styles.featGrid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {data.features.map((feat, i) => (
              <motion.div key={feat.title} custom={i} variants={fadeUp} className={styles.featCard}>
                <h4>{feat.title}</h4>
                <p>{feat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className={styles.useCaseSection}>
        <div className="container">
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className={styles.sectionTitle}>Real-World Use Cases</h2>
            <p className={styles.sectionSub}>See how enterprises deploy {data.title} to transform operations.</p>
          </motion.div>

          <motion.div className={styles.useCaseGrid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {data.useCases.map((uc, i) => (
              <motion.div key={uc.title} custom={i} variants={fadeUp} className={styles.useCaseCard}>
                <h4>{uc.title}</h4>
                <p>{uc.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className={styles.section}>
        <div className="container">
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className={styles.sectionTitle}>Performance Metrics</h2>
          </motion.div>

          <motion.div className={styles.metricBar} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {data.metrics.map((m) => (
              <div key={m.label} className={styles.metricItem}>
                <span className={styles.metricValue}>{m.value}</span>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Rocket size={40} style={{ color: "white", marginBottom: "1.5rem" }} />
            <h2 className={styles.ctaTitle}>{data.ctaHeadline}</h2>
            <p className={styles.ctaSub}>Schedule a personalized demo to see {data.title} in action with your data.</p>
            <div className={styles.ctaBtns}>
              <button className={styles.ctaBtnPrimary}>Schedule Demo</button>
              <button className={styles.ctaBtnSecondary}>Download Whitepaper</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
