"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, Users, TrendingUp, Target, ShieldCheck, 
  Share2, Trophy, Leaf, Heart, ArrowRight 
} from "lucide-react";
import { aboutData } from "@/data/about";
import styles from "@/components/About/about-v2.module.css";
import { AboutLeadership } from "@/components/About/AboutLeadership";
import { AboutStory } from "@/components/About/AboutStory";
import Image from "next/image";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={32} />,
  Users: <Users size={32} />,
  TrendingUp: <TrendingUp size={32} />,
  Target: <Target size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
  Share2: <Share2 size={32} />,
  Trophy: <Trophy size={32} />,
  Leaf: <Leaf size={32} />,
  Heart: <Heart size={32} />,
};

export default function AboutPage() {
  const overview = aboutData["company-overview"];
  const mission = aboutData["mission-vision"];
  const certs = aboutData["certifications"];
  const awards = aboutData["awards-recognition"];
  const esg = aboutData["esg"];
  const diversity = aboutData["diversity"];
  const community = aboutData["community"];

  return (
    <div className={styles.page}>
      
      {/* ── HERO ── */}
      <section id="overview" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={styles.badge}
            >
              Our Company
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={styles.heroTitle}
            >
              {overview.headline}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={styles.heroDesc}
            >
              {overview.description}
            </motion.p>
          </div>

          <div className={styles.statsGrid}>
            {overview.stats?.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={styles.statItem}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <div id="story">
        <AboutStory />
      </div>

      {/* ── MISSION & VALUES ── */}
      <section id="values" className={styles.section}>
        <div className={styles.container}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 900 }}>{mission.headline}</h2>
            <p style={{ maxWidth: "800px", margin: "1rem auto 0", fontSize: "1.125rem", color: "var(--text-muted)" }}>
              {mission.description}
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {mission.features.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={styles.valueCard}
              >
                <div className={styles.valueIcon}>
                  {i === 0 ? <Target size={28} /> : i === 1 ? <Globe size={28} /> : <ShieldCheck size={28} />}
                </div>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <div id="leadership">
        <AboutLeadership />
      </div>

      {/* ── EXCELLENCE (Awards & Certs) ── */}
      <section id="excellence" className={`${styles.section} ${styles.bgGradient}`}>
        <div className={styles.container}>
          <div className={styles.excellenceGrid}>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2.5rem" }}>Global Compliance & Certifications</h2>
              <div className={styles.certsList}>
                {certs.features.slice(0, 4).map((cert, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={styles.excellenceItem}
                  >
                    <div style={{ color: "var(--primary)" }}>
                      <ShieldCheck size={32} />
                    </div>
                    <div>
                      <h4>{cert.title}</h4>
                      <p>{cert.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2.5rem" }}>Industry Awards & Recognition</h2>
              <div className={styles.awardsList}>
                {awards.features.slice(0, 4).map((award, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={styles.excellenceItem}
                  >
                    <div style={{ color: "var(--sunrise-amber)" }}>
                      <Trophy size={32} />
                    </div>
                    <div>
                      <h4>{award.title}</h4>
                      <p>{award.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT & RESPONSIBILITY (ESG, Diversity, Community) ── */}
      <section id="impact" className={styles.section}>
        <div className={styles.container}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 900 }}>Purpose-Led Growth</h2>
            <p style={{ maxWidth: "800px", margin: "1rem auto 0", fontSize: "1.125rem", color: "var(--text-muted)" }}>
              We are committed to creating a sustainable, inclusive, and positive impact on the world.
            </p>
          </div>
          
          <div className={styles.valuesGrid}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.valueCard}
            >
              <div className={`${styles.valueIcon} grad-success`} style={{ color: "white" }}>
                <Leaf size={28} />
              </div>
              <h3>Sustainability (ESG)</h3>
              <p>{esg.description}</p>
              <ul style={{ marginTop: "1rem", color: "var(--text-muted)", listStyle: "none", padding: 0 }}>
                {esg.features.slice(0, 3).map((f, i) => <li key={i} style={{ marginBottom: "0.5rem" }}>• {f.title}</li>)}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={styles.valueCard}
            >
              <div className={`${styles.valueIcon} grad-primary`} style={{ color: "white" }}>
                <Users size={28} />
              </div>
              <h3>Diversity & Inclusion</h3>
              <p>{diversity.description}</p>
              <ul style={{ marginTop: "1rem", color: "var(--text-muted)", listStyle: "none", padding: 0 }}>
                {diversity.features.slice(0, 3).map((f, i) => <li key={i} style={{ marginBottom: "0.5rem" }}>• {f.title}</li>)}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={styles.valueCard}
            >
              <div className={`${styles.valueIcon} grad-energy`} style={{ color: "white" }}>
                <Heart size={28} />
              </div>
              <h3>Community Impact</h3>
              <p>{community.description}</p>
              <ul style={{ marginTop: "1rem", color: "var(--text-muted)", listStyle: "none", padding: 0 }}>
                {community.features.slice(0, 3).map((f, i) => <li key={i} style={{ marginBottom: "0.5rem" }}>• {f.title}</li>)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.ctaContent}
          >
            <h2>Partner with a Global Leader</h2>
            <p>Ready to transform your enterprise operations with AI-augmented intelligence? Let's start a conversation.</p>
            <button className="btn-modern-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.125rem" }}>
              Get Started Now <ArrowRight size={22} />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
