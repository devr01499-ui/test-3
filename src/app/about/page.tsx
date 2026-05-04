"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, Users, TrendingUp, Target, ShieldCheck, 
  Share2, Trophy, Leaf, Heart, ArrowRight, 
  Briefcase, Landmark, Rocket, Sparkles, Shield
} from "lucide-react";
import { aboutData } from "@/data/about";
import styles from "@/components/About/about-v2.module.css";
import { AboutLeadership } from "@/components/About/AboutLeadership";
import { AboutStory } from "@/components/About/AboutStory";
import Image from "next/image";

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
              The AI Infrastructure Revolution
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
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem" }}>
               <button className="btn-modern-primary">Upgrade Your Operations <ArrowRight size={18} /></button>
            </div>
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

      {/* ── SECTOR FOCUS ── */}
      <section className={`${styles.section} ${styles.bgSurface}`} style={{ paddingBottom: "4rem" }}>
        <div className={styles.container}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>Specialized AI Infrastructure</h2>
            <p style={{ maxWidth: "700px", margin: "1rem auto 0", color: "var(--text-muted)" }}>
              We focus on the sectors that form the backbone of the global economy, upgrading traditional management styles with modern AI base layers.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {[
              { icon: <Briefcase />, title: "BPO & Support", desc: "Next-gen contact center infrastructure that makes operations scalable and 'professional-fun'." },
              { icon: <Landmark />, title: "Gov-Tech", desc: "Building secure, scalable AI backbones for modern citizen services and public administration." },
              { icon: <Rocket />, title: "Manufacturing", desc: "Predictive AI integration that transforms traditional floor ops into intelligent ecosystems." },
              { icon: <Sparkles />, title: "Real Estate", desc: "Data-mesh networks that automate property management and valuation with high precision." }
            ].map((sector, i) => (
              <motion.div 
                key={i}
                className={styles.valueCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.valueIcon}>{sector.icon}</div>
                <h3>{sector.title}</h3>
                <p>{sector.desc}</p>
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
                  {i % 3 === 0 ? <Target size={28} /> : i % 3 === 1 ? <Globe size={28} /> : <Shield size={28} />}
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
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2.5rem" }}>Compliance & AI Safety</h2>
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
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2.5rem" }}>Recognition & Milestones</h2>
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
            <h2 style={{ fontSize: "3.5rem", fontWeight: 900 }}>Professional Fun & Social Impact</h2>
            <p style={{ maxWidth: "800px", margin: "1rem auto 0", fontSize: "1.125rem", color: "var(--text-muted)" }}>
              We are on a mission to help professionals upgrade their skills in an engaging, rewarding way while building a sustainable future.
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
              <h3>Energy-Efficient AI (ESG)</h3>
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
              <h3>Inclusive Infrastructure</h3>
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
              <h3>Community Growth</h3>
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
          <div className={styles.ctaContent}>
            <h2>Upgrade Your Legacy Infrastructure</h2>
            <p>From manufacturing floors to government backbones, we provide the AI base to maximize your output.</p>
            <button className="btn-modern-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.125rem" }}>
              Start Your AI Upgrade <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
