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
import Image from "next/image";

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
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: "Newsletter Subscription",
          email: email
        }),
      });

      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 5000);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

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
      <section className={`${styles.section}`} style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ fontSize: "3rem", fontWeight: 900 }}>Resource <span style={{ color: "var(--primary)" }}>Library</span></h2>
            <p style={{ color: "var(--text-main)", fontSize: "1.1rem", fontWeight: 600 }}>Curated insights and strategic frameworks for global operations.</p>
          </div>

          <div className={styles.libGrid} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
             {enhancedResources.learn.map((cat, i) => (
               <div key={cat.title} className="card-3d-wrapper" style={{ height: "400px" }}>
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
                      src={`https://images.unsplash.com/photo-${i === 0 ? '1450101499163-c8848c66ca85' : i === 1 ? '1586281380349-632531fb7ed4' : i === 2 ? '1434030216411-0b793f4b4173' : '1517048676732-d65bc937f952'}?auto=format&fit=crop&q=80&w=800`}
                      alt={cat.title}
                      fill
                      className="card-image-bg"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8, 47, 73, 0.4) 0%, rgba(8, 47, 73, 0.9) 100%)", zIndex: 1 }} />
                    
                    <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", padding: "2.5rem", color: "white" }}>
                      <div className={styles.libIcon} style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", color: "white", border: "1px solid rgba(255,255,255,0.2)", marginBottom: "1.5rem" }}>
                        <CategoryIcon title={cat.title} />
                      </div>
                      <h3 className={styles.libTitle} style={{ color: "white", fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem" }}>{cat.title}</h3>
                      <ul className={styles.libList} style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500, flexGrow: 1 }}>
                        {cat.items.map(item => (
                          <li key={item} style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>• {item}</li>
                        ))}
                      </ul>
                      <Link href="#" className={styles.libLink} style={{ color: "var(--secondary)", fontWeight: 800 }}>
                        View Library <ArrowRight size={16} />
                      </Link>
                    </div>
                 </motion.div>
               </div>
             ))}
             
             {enhancedResources.insights.map((cat, i) => (
               <div key={cat.title} className="card-3d-wrapper" style={{ height: "400px" }}>
                 <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
                  className="card-3d-content"
                  style={{ border: "1px solid var(--border)" }}
                 >
                    <Image 
                      src={`https://images.unsplash.com/photo-${i === 0 ? '1460925895917-afdab827c52f' : '1554224155-8d04cb21cd6c'}?auto=format&fit=crop&q=80&w=800`}
                      alt={cat.title}
                      fill
                      className="card-image-bg"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8, 47, 73, 0.4) 0%, rgba(8, 47, 73, 0.9) 100%)", zIndex: 1 }} />
                    
                    <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", padding: "2.5rem", color: "white" }}>
                      <div className={styles.libIcon} style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", color: "white", border: "1px solid rgba(255,255,255,0.2)", marginBottom: "1.5rem" }}>
                        <CategoryIcon title={cat.title} />
                      </div>
                      <h3 className={styles.libTitle} style={{ color: "white", fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem" }}>{cat.title}</h3>
                      <ul className={styles.libList} style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500, flexGrow: 1 }}>
                        {cat.items.map(item => (
                          <li key={item} style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>• {item}</li>
                        ))}
                      </ul>
                      <Link href="#" className={styles.libLink} style={{ color: "var(--secondary)", fontWeight: 800 }}>
                        View Insights <ArrowRight size={16} />
                      </Link>
                    </div>
                 </motion.div>
               </div>
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
            <form onSubmit={handleSubscribe} style={{ maxWidth: "600px", margin: "0 auto", display: "flex", gap: "1rem" }}>
               <input 
                 type="email" 
                 name="email"
                 placeholder="Enter your business email" 
                 style={{ flexGrow: 1, padding: "1rem 1.5rem", borderRadius: "12px", border: "1px solid var(--border)", outline: "none" }} 
                 required
                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                 title="Please enter a valid email address"
               />
               <button type="submit" className="btn-modern-primary" style={{ padding: "1rem 2.5rem" }} disabled={subscribed}>
                 {subscribed ? "Subscribed! We will contact you soon." : "Subscribe"}
               </button>
            </form>
            <div style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
               By subscribing, you agree to our <Link href="/about">Privacy Policy</Link>.
            </div>
         </div>
      </section>

    </div>
  );
}
