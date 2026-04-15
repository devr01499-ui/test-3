"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Headphones, 
  Briefcase, 
  TrendingUp, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  Settings, 
  Palette, 
  Laptop, 
  CheckCircle, 
  MapPin, 
  Globe, 
  Handshake, 
  ArrowRight,
  Download,
  Info
} from "lucide-react";
import { enhancedServices } from "@/lib/navData";
import styles from "./services.module.css";

const DomainIcon = ({ title, size = 32 }: { title: string; size?: number }) => {
  if (title.includes("Contact")) return <Headphones size={size} />;
  if (title.includes("Back")) return <Briefcase size={size} />;
  if (title.includes("Finance")) return <TrendingUp size={size} />;
  if (title.includes("HR")) return <Users size={size} />;
  if (title.includes("Analytics")) return <BarChart3 size={size} />;
  return <Settings size={size} />;
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.heroTitle}>Premier BPO <span style={{ color: "var(--primary)" }}>Solutions</span></h1>
          <p className={styles.heroSub}>
            Global delivery, specialized domain expertise, and AI-powered scalability tailored to your business needs.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <button className="btn-modern-primary" style={{ padding: "1rem 2.5rem" }}>Request Service Catalog</button>
            <button className="btn-modern-secondary" style={{ padding: "1rem 2.5rem" }}>Talk to an Expert</button>
          </div>
        </motion.div>
      </section>

      {/* CORE DOMAINS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core Service Domains</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>Our foundational expertise across the enterprise value chain.</p>
          </div>

          <div className={styles.coreGrid}>
            {enhancedServices.core.map((domain, i) => (
              <motion.div 
                key={domain.title} 
                className={styles.coreCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.iconWrap}>
                  <DomainIcon title={domain.title} />
                </div>
                <h3 className={styles.domainTitle}>{domain.title.replace(/^[^\w\s]*/, '')}</h3>
                <ul className={styles.domainList}>
                  {domain.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED SERVICES */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Specialized Offerings</h2>
          </div>

          <div className={styles.specGrid}>
            {Object.entries(enhancedServices.specialized).map(([key, items], i) => (
              <motion.div 
                key={key} 
                className={styles.specCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.specTitle}>{key}</div>
                <ul className={styles.domainList} style={{ gap: "0.5rem" }}>
                   {items.slice(0, 5).map((item: string) => (
                     <li key={item} style={{ fontSize: "0.9rem" }}>{item}</li>
                   ))}
                </ul>
                <div style={{ marginTop: "1.5rem", fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)" }}>+ More</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY MODELS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.modelGrid}>
             <div className={styles.modelGroup}>
                <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>Global Delivery Network</h2>
                <div className={styles.modelItem}>
                   <div className={styles.modelIcon}><MapPin size={24}/></div>
                   <div className={styles.modelText}>
                      <h4>Onshore Centers</h4>
                      <p>High-proximity centers in USA, UK, and Canada for sensitive and high-complexity accounts.</p>
                   </div>
                </div>
                <div className={styles.modelItem}>
                   <div className={styles.modelIcon}><Globe size={24}/></div>
                   <div className={styles.modelText}>
                      <h4>Nearshore & Offshore</h4>
                      <p>Optimized cost and scalability through our elite centers in Philippines, India, and Latin America.</p>
                   </div>
                </div>
                <div className={styles.modelItem}>
                   <div className={styles.modelIcon}><Handshake size={24}/></div>
                   <div className={styles.modelText}>
                      <h4>Engagement Models</h4>
                      <p>From Dedicated Teams to Build-Operate-Transfer (BOT) and transaction-based pricing.</p>
                   </div>
                </div>
             </div>

             <div style={{ background: "white", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem" }}>Service Excellence & SLAs</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                   {enhancedServices.models.levels.map(level => (
                     <div key={level} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
                        <span style={{ fontWeight: 700 }}>{level}</span>
                        <CheckCircle size={20} color="#10b981" />
                     </div>
                   ))}
                </div>
                <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                   <Info size={16} /> <span>All services are backed by our enterprise-grade 99.9% uptime and accuracy guarantee.</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.section} style={{ textAlign: "center", background: "var(--primary)", color: "white" }}>
        <div className="container">
          <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1.5rem", color: "white" }}>Need a Custom Solution?</h2>
          <p style={{ fontSize: "1.25rem", opacity: 0.9, marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            Our solutions architects can design a bespoke delivery model tailored to your specific industry and technical requirements.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
             <button className="btn-modern-primary" style={{ background: "white", color: "var(--primary)", padding: "1rem 3rem" }}>Talk to a Consultant</button>
             <button className="btn-modern-secondary" style={{ color: "white", borderColor: "white", padding: "1rem 3rem" }}>Download Service Deck</button>
          </div>
        </div>
      </section>

    </div>
  );
}
