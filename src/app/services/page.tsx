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
import Image from "next/image";

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
      <section className={styles.section} style={{ background: "var(--background)" }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ fontSize: "3rem", fontWeight: 900 }}>Core Service <span style={{ color: "var(--primary)" }}>Domains</span></h2>
            <p style={{ color: "var(--text-main)", fontSize: "1.2rem", fontWeight: 600 }}>Our foundational expertise across the enterprise value chain.</p>
          </div>

          <div className={styles.coreGrid} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem" }}>
            {enhancedServices.core.map((domain, i) => (
              <div key={domain.title} className="card-3d-wrapper" style={{ height: "480px" }}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ rotateY: 8, rotateX: -4, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
                  className="card-3d-content"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <Image 
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1556740758-90de374c12ad' : i === 1 ? '1454165833222-d1d44d60ed4b' : i === 2 ? '1554224155-8d04cb21cd6c' : '1521791136064-7986c2959441'}?auto=format&fit=crop&q=80&w=800`}
                    alt={domain.title}
                    fill
                    className="card-image-bg"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8, 47, 73, 0.3) 0%, rgba(8, 47, 73, 0.9) 100%)", zIndex: 1 }} />
                  
                  <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", padding: "2.5rem", color: "white" }}>
                    <div className={styles.iconWrap} style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", color: "white", border: "1px solid rgba(255,255,255,0.2)", marginBottom: "1.5rem" }}>
                      <DomainIcon title={domain.title} />
                    </div>
                    <h3 className={styles.domainTitle} style={{ color: "white", fontSize: "1.75rem", fontWeight: 900, marginBottom: "1.5rem" }}>{domain.title.replace(/^[^\w\s]*/, '')}</h3>
                    <ul className={styles.domainList} style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500, flexGrow: 1 }}>
                      {domain.items.map(item => (
                        <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <CheckCircle size={14} style={{ color: "var(--secondary)" }} /> {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="#" style={{ color: "var(--secondary)", fontWeight: 800, marginTop: "2rem", display: "flex", alignItems: "center", gap: "8px" }}>
                      Detailed Scope <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED SERVICES */}
      <section className={`${styles.section}`} style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ fontSize: "2.5rem", fontWeight: 900 }}>Specialized <span style={{ color: "var(--primary)" }}>Solutions</span></h2>
          </div>

          <div className={styles.specGrid} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {Object.entries(enhancedServices.specialized).map(([key, items], i) => (
              <div key={key} className="card-3d-wrapper" style={{ height: "320px" }}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`card-3d-content ${styles.specCard}`}
                  style={{ background: "white", padding: "2rem", border: "1px solid var(--border)" }}
                >
                  <div className={styles.specTitle} style={{ fontWeight: 900, color: "var(--primary)", borderBottom: "1px solid var(--surface)", paddingBottom: "1rem", marginBottom: "1rem" }}>{key}</div>
                  <ul className={styles.domainList} style={{ gap: "0.5rem" }}>
                    {items.slice(0, 5).map((item: string) => (
                      <li key={item} style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-main)" }}>{item}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "auto", fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase" }}>Explorer Category</div>
                </motion.div>
              </div>
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
