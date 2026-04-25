"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Cpu, 
  Share2, 
  Layers, 
  LineChart, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  TrendingUp, 
  Users, 
  Handshake,
  ShieldCheck,
  SendHorizontal
} from "lucide-react";
import { partnershipData } from "@/data/partnership";
import styles from "./partnership.module.css";

const IconMap = ({ name, size = 24 }: { name: string; size?: number }) => {
  const components: any = {
    Cpu, Share2, Layers, LineChart, Globe, TrendingUp, Users, Handshake
  };
  const Icon = components[name] || Handshake;
  return <Icon size={size} />;
};

export default function PartnershipPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: "Partnership Application",
          ...data
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className={styles.page}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.badge}>Claritiy Partner Ecosystem</div>
            <h1 className={styles.heroTitle}>Empower Growth Through <span style={{ color: "var(--primary)" }}>Strategic</span> Partnerships</h1>
            <p className={styles.heroSub}>
              Join a global network of technology leaders, resellers, and consultants transforming the world of intelligent outsourcing.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href="#apply" className="btn-modern-primary" style={{ padding: "1rem 2.5rem" }}>Become a Partner</Link>
              <Link href="/about" className="btn-modern-secondary" style={{ padding: "1rem 2.5rem" }}>Learn More</Link>
            </div>
          </motion.div>

          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.visualCard}>
              <div className={styles.statsStrip}>
                {partnershipData.stats.map((stat, i) => (
                  <div key={i} className={styles.statItem}>
                    <span className={styles.statVal}>{stat.value}</span>
                    <span className={styles.statLab}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Background elements */}
            <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)", zIndex: 0 }} />
          </motion.div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionTitle}
            >
              Four Ways to Partner
            </motion.h2>
            <p style={{ color: "var(--text-main)", fontSize: "1.1rem", maxWidth: "600px", margin: "1rem auto 0", fontWeight: 600 }}>
              Whether you provide technology, consulting, or sales leadership, there's a tier designed for your growth.
            </p>
          </div>

          <div className={styles.pillarGrid}>
            {partnershipData.pillars.map((pillar, i) => (
              <div key={pillar.title} className="card-3d-wrapper" style={{ height: "480px" }}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ rotateY: 8, rotateX: -4, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
                  className={`card-3d-content ${styles.pillarCard}`}
                  style={{ border: "1px solid var(--border)" }}
                >
                  <div className={styles.pillarIcon} style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <IconMap name={pillar.icon} size={28} />
                  </div>
                  <h3 className={styles.pillarTitle} style={{ color: "var(--primary)", fontWeight: 800 }}>{pillar.title}</h3>
                  <p className={styles.pillarDesc} style={{ flexGrow: 1 }}>{pillar.description}</p>
                  <ul className={styles.benefitList} style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", marginTop: "1rem" }}>
                    {pillar.benefits.map(b => (
                      <li key={b} style={{ fontWeight: 600 }}><CheckCircle2 size={16} color="var(--primary)" /> {b}</li>
                    ))}
                  </ul>
                  <Link href="#apply" style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 800, color: "var(--primary)", textDecoration: "none" }}>
                    Apply to Program <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER LEVELS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Partner Program Tiers</h2>
          </div>
          
          <div className={styles.tableWrapper}>
            <table className={styles.levelTable}>
              <thead>
                <tr>
                  <th>Program Level</th>
                  <th>Revenue Target</th>
                  <th>Reward Tier</th>
                  <th>Sales Leads</th>
                  <th>Support Level</th>
                </tr>
              </thead>
              <tbody>
                {partnershipData.levels.map(level => (
                  <tr key={level.name}>
                    <td className={styles.levelName}>{level.name}</td>
                    <td>{level.minRev}</td>
                    <td>{level.discount}</td>
                    <td>{level.leads}</td>
                    <td>{level.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className={`${styles.section} ${styles.bgSurface}`} id="apply">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Apply for the Ecosystem</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>Tell us about your business and let's explore mutual growth.</p>
          </div>

          <div className={styles.formFull}>
             <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontWeight: 700, fontSize: "0.9rem" }}>Company Name *</label>
                  <input type="text" name="companyName" placeholder="Your company name" style={{ padding: "1rem", borderRadius: "10px", border: "1.5px solid var(--border)" }} required />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontWeight: 700, fontSize: "0.9rem" }}>Partner Type *</label>
                  <select name="partnerType" style={{ padding: "1rem", borderRadius: "10px", border: "1.5px solid var(--border)" }} required>
                    <option>Technology Partner</option>
                    <option>Channel / Reseller</option>
                    <option>Strategic Alliance</option>
                    <option>Advisory / Consulting</option>
                  </select>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontWeight: 700, fontSize: "0.9rem" }}>Contact Name *</label>
                  <input type="text" name="contactName" placeholder="Your full name" style={{ padding: "1rem", borderRadius: "10px", border: "1.5px solid var(--border)" }} required />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontWeight: 700, fontSize: "0.9rem" }}>Business Email *</label>
                  <input type="email" name="email" placeholder="your@company.com" style={{ padding: "1rem", borderRadius: "10px", border: "1.5px solid var(--border)" }} required />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", gridColumn: "span 2" }}>
                  <label style={{ fontWeight: 700, fontSize: "0.9rem" }}>Partner Goals *</label>
                  <textarea name="goals" rows={4} placeholder="Briefly describe your partnership goals and current business footprint..." style={{ padding: "1rem", borderRadius: "10px", border: "1.5px solid var(--border)" }} required />
                </div>
                <div style={{ gridColumn: "span 2" }}>
                   <button type="submit" className="btn-modern-primary" style={{ width: "100%", padding: "1.25rem" }} disabled={submitted}>
                      {submitted ? "Application Sent!" : "Submit Partner Application"} <SendHorizontal size={20} style={{ marginLeft: "0.5rem" }} />
                   </button>
                </div>
                <div style={{ gridColumn: "span 2", textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                  <ShieldCheck size={16} /> <span>All applications are reviewed within 48 business hours.</span>
                </div>
             </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.section} style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Ready to Scale Together?</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem" }}>Join 150+ partners already delivering excellence with Claritiy.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
             <button className="btn-modern-primary" style={{ padding: "1rem 3rem" }}>Talk to Partner Desk</button>
             <button className="btn-modern-secondary" style={{ padding: "1rem 3rem" }}>Download Program Guide (PDF)</button>
          </div>
        </div>
      </section>

    </div>
  );
}
