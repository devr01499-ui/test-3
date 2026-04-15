"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Search, 
  BookOpen, 
  Video, 
  FileText, 
  BarChart, 
  Zap, 
  PlayCircle, 
  Mic2, 
  Download, 
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  ExternalLink,
  Calculator,
  CheckCircle,
} from "lucide-react";
import { enhancedResources } from "@/lib/navData";
import styles from "./resources.module.css";

const CategoryIcon = ({ title, size = 28 }: { title: string; size?: number }) => {
  if (title.includes("Blog")) return <BookOpen size={size} />;
  if (title.includes("Case Studies")) return <Award size={size} />;
  if (title.includes("Guides")) return <FileText size={size} />;
  if (title.includes("Webinars")) return <Video size={size} />;
  if (title.includes("Videos")) return <PlayCircle size={size} />;
  if (title.includes("Podcasts")) return <Mic2 size={size} />;
  if (title.includes("REPORTS")) return <BarChart size={size} />;
  return <BookOpen size={size} />;
};

export default function ResourcesPage() {
  return (
    <div className={styles.page}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>Knowledge <span style={{ color: "var(--primary)" }}>Hub</span></h1>
            <p className={styles.heroSub}>
              Deep dives, industry benchmarks, and strategic insights for the modern enterprise.
            </p>
            <div className={styles.searchBar}>
              <Search size={20} color="var(--text-muted)" />
              <input type="text" placeholder="Search insights, reports, guides..." className={styles.searchInput} />
            </div>
            <div className={styles.topicsArea}>
              {enhancedResources.trending.map(tag => (
                <span key={tag} className={styles.topicTag}>{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.featuredBox}>
               <div className={styles.featuredBadge}>Feature Story</div>
               <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-main)" }}>The 2026 BPO Benchmark Report: AI & Human Synergy</h3>
               <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>Our latest research study analyzing 1,000 global enterprises and their shift towards intelligent outsourcing models.</p>
               <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
                  <button className="btn-modern-primary" style={{ padding: "0.8rem 2rem" }}>Download Report</button>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", alignItems: 'center', gap: "0.4rem" }}>
                    <Clock size={14} /> 15 min read
                  </span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Resource Library</h2>
          </div>

          <div className={styles.libGrid}>
             {enhancedResources.learn.map((cat, i) => (
               <motion.div 
                key={cat.title} 
                className={styles.libCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
               >
                 <div className={styles.libIcon}>
                   <CategoryIcon title={cat.title} />
                 </div>
                 <h3 className={styles.libTitle}>{cat.title}</h3>
                 <ul className={styles.libList}>
                    {cat.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                 </ul>
                 <Link href="#" className={styles.libLink}>
                   Explore Category <ArrowRight size={16} />
                 </Link>
               </motion.div>
             ))}
             
             {/* Dynamic Report Section from navData */}
             {enhancedResources.insights.map((cat, i) => (
               <motion.div 
                key={cat.title} 
                className={styles.libCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
               >
                 <div className={styles.libIcon} style={{ background: "rgba(139, 92, 246, 0.1)", color: "#8b5cf6" }}>
                   <CategoryIcon title={cat.title} />
                 </div>
                 <h3 className={styles.libTitle}>{cat.title}</h3>
                 <ul className={styles.libList}>
                    {cat.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                 </ul>
                 <Link href="#" className={styles.libLink} style={{ color: "#8b5cf6" }}>
                   View Documents <ArrowRight size={16} />
                 </Link>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE TOOLS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Interactive Tools</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>Data-driven calculators to help you build your business case.</p>
          </div>

          <div className={styles.toolGrid}>
             {enhancedResources.tools.map((tool, i) => (
               <motion.div 
                key={tool} 
                className={styles.toolCard}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
               >
                 <div style={{ background: "var(--surface)", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", color: "var(--primary)" }}>
                   {tool.includes("Calculator") ? <Calculator size={20} /> : <TrendingUp size={20} />}
                 </div>
                 <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)" }}>{tool}</h4>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* ACADEMY SECTION */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
             <div>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>Claritiy Academy</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginBottom: "2rem" }}>
                   Upskill your team with our specialized training programs on AI-Human synergy, operational excellence, and digital transformation.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                   {enhancedResources.academy.slice(0, 3).map(item => (
                     <div key={item} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <CheckCircle size={16} />
                        </div>
                        <span style={{ fontWeight: 700, color: "var(--text-main)" }}>{item}</span>
                     </div>
                   ))}
                </div>
                <button className="btn-modern-primary" style={{ marginTop: "3rem", padding: "1rem 2.5rem" }}>Enter Academy</button>
             </div>
             <div>
                <div style={{ background: "white", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                   <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
                      <h4 style={{ fontWeight: 800 }}>Most Downloaded</h4>
                      <BarChart size={20} color="var(--primary)" />
                   </div>
                   <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {enhancedResources.resourceFiles.slice(0, 5).map(file => (
                        <div key={file} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "var(--surface)", borderRadius: "12px" }}>
                           <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>{file}</span>
                           <Download size={16} color="var(--primary)" style={{ cursor: "pointer" }} />
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.section} style={{ textAlign: "center" }}>
         <div className="container">
            <h2 className={styles.sectionTitle}>Ready to stay informed?</h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "3rem" }}>Join 50,000+ industry leaders who receive our weekly insights.</p>
            <div style={{ maxWidth: "600px", margin: "0 auto", display: "flex", gap: "1rem" }}>
               <input type="email" placeholder="Enter your business email" style={{ flexGrow: 1, padding: "1rem 1.5rem", borderRadius: "12px", border: "1px solid var(--border)", outline: "none" }} />
               <button className="btn-modern-primary" style={{ padding: "1rem 2.5rem" }}>Subscribe</button>
            </div>
            <div style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
               By subscribing, you agree to our <Link href="/about">Privacy Policy</Link>.
            </div>
         </div>
      </section>

    </div>
  );
}
