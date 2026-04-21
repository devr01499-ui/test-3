"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./SolutionTemplate.module.css";
import { UseCase, TechCategory } from "@/types/solutions";

export function UseCasesAndTech({ useCases, techStack }: { useCases: { title: string, tabs: string[], items: UseCase[] }, techStack: { title: string, categories: TechCategory[] } }) {
  const [activeTab, setActiveTab] = useState(useCases.tabs[0]);

  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: "2.5rem", fontWeight: 800, textAlign: "center", marginBottom: "3rem" }}
          >
            {useCases.title}
          </motion.h2>
          
          <div className={styles.tabsNav} style={{ justifyContent: "center", marginBottom: "4rem" }}>
            {useCases.tabs.map(tab => (
              <button 
                key={tab}
                className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ""}`}
                onClick={() => setActiveTab(tab)}
                style={{ padding: "0.75rem 1.5rem", borderRadius: "50px", fontWeight: 700 }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.useCasesGrid} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem" }}>
            {useCases.items.map((uc, i) => {
               const keyword = uc.title.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '');
               const imgUrl = `https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800`; // Fallback
               const categoryImgs: Record<string, string> = {
                  "customer": "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800",
                  "ai": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                  "tech": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
               };
               const finalImg = categoryImgs[keyword] || imgUrl;
               const glowClass = `hover-glow-${(i % 3) + 1}`;

               return (
                <div key={i} className="card-3d-wrapper" style={{ height: "480px" }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ rotateY: 8, rotateX: -4, scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
                    className={`card-3d-content ${styles.useCaseCard}`}
                    style={{ padding: 0, overflow: "hidden" }}
                  >
                    <div style={{ height: "160px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                       <Image src={finalImg} alt={uc.title} fill className="card-image-bg" sizes="(max-width: 768px) 100vw, 400px" />
                       <div className="card-overlay" style={{ background: "linear-gradient(180deg, rgba(8, 47, 73, 0) 0%, rgba(8, 47, 73, 0.4) 100%)" }} />
                       <div className={styles.useCaseIcon} style={{ position: "absolute", bottom: "1rem", left: "1.5rem", zIndex: 10, background: "var(--primary)", color: "white", padding: "10px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}>{uc.icon}</div>
                    </div>

                    <div className={`card-content-wrap ${glowClass}`} style={{ padding: "1.5rem 2rem", background: "white", color: "var(--text-main)" }}>
                      <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.5rem" }}>{uc.title}</h3>
                      
                      <div className={styles.ucSection} style={{ marginBottom: "1rem" }}>
                        <div className={styles.ucLabel} style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.25rem" }}>Challenge</div>
                        <div className={styles.ucText} style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 600 }}>{uc.challenge}</div>
                      </div>
                      
                      <div className={styles.ucSection} style={{ marginBottom: "1rem" }}>
                        <div className={styles.ucLabel} style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.25rem" }}>Solution</div>
                        <div className={styles.ucText} style={{ fontSize: "0.9rem", color: "var(--text-main)", fontWeight: 600 }}>{uc.solution}</div>
                      </div>
                      
                      <div className={styles.ucResults} style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "10px 15px", borderRadius: "8px", fontWeight: 800, color: "var(--primary)", fontSize: "0.9rem" }}>
                        Results: {uc.results}
                      </div>
                      
                      <Link href="#" className={styles.learnMore} style={{ marginTop: "1.5rem", fontWeight: 800, display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)" }}>
                        Full Case Study <ArrowRight size={18} />
                      </Link>
                    </div>
                  </motion.div>
                </div>
               );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <h2>{techStack.title}</h2>
          
          <div className={styles.techWrapper}>
            <div className={styles.techGrid}>
              {techStack.categories.map((cat, i) => (
                <div key={i} className={styles.techCol}>
                  <h3>{cat.title}</h3>
                  <ul>
                    {cat.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <button className={styles.primaryBtn} style={{ background: "white", color: "var(--primary)", border: "2px solid var(--border)", boxShadow: "none" }}>
              View Full Tech Stack <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
