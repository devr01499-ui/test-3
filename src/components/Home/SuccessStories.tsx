"use client";
import React, { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  ArrowRight,
  TrendingUp,
  Smile,
  Zap,
  CheckCircle2,
  BarChart4
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SuccessStories.module.css";
import { BPOEnterpriseCard } from "../Shared/BPOEnterpriseCard";
import { GeometricDivider } from "../Shared/GeometricDivider";

const caseStudies = [
  {
    industry: "Healthcare Infrastructure",
    title: "Global Health Systems: 45% Operational Efficiency via Neural Triage Integration",
    challenge: "Fragmented patient routing ecosystems causing significant triage latency and high operational overhead.",
    solution: "Implementation of autonomous clinical decision-support agents harmonized with tier-1 medical specialists for complex orchestration.",
    results: [
      { label: "45%", desc: "Operational Efficiency", icon: <TrendingUp size={24} /> },
      { label: "99.4%", desc: "Patient CSAT", icon: <Smile size={24} /> },
      { label: "Sub-1s", desc: "Response Latency", icon: <Zap size={24} /> },
    ],
    quote: "The deployment of Claritiy's neural operating system has fundamentally re-engineered our patient engagement architecture, enabling our clinical staff to focus on high-acuity medical outcomes.",
    author: "Dr. Sarah Jenkins",
    authorTitle: "SVP of Operations, Global Health Systems"
  },
  {
    industry: "Institutional FinTech",
    title: "FinStream Capital: 60% Reduction in Compliance Cycle Times",
    challenge: "Scaling KYC/AML auditing workflows across multiple jurisdictions while maintaining absolute regulatory integrity.",
    solution: "Deployment of self-correcting neural auditing engines integrated with human compliance officers for cross-border anomaly resolution.",
    results: [
      { label: "60%", desc: "Cycle Time Reduction", icon: <BarChart4 size={24} /> },
      { label: "Zero", desc: "Regulatory Deviations", icon: <CheckCircle2 size={24} /> },
      { label: "85%", desc: "Automation Density", icon: <Zap size={24} /> },
    ],
    quote: "Claritiy's intelligent operations platform provided the elastic scale we needed to enter four new markets in 12 months without linear headcount growth.",
    author: "Marcello Russo",
    authorTitle: "Chief Compliance Officer, FinStream Capital"
  }
];

export function SuccessStories() {
  const [index, setIndex] = useState(0);

  return (
    <section style={{ padding: "0 0 128px 0", background: "var(--white)", position: "relative" }}>
      <div className="container" style={{ marginTop: "4rem" }}>
        
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             style={{ color: "var(--sunrise-amber)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px", marginBottom: "1rem" }}
           >
             Transformation Evidence
           </motion.div>
           <h2 style={{ fontSize: "52px", color: "var(--charcoal-deep)", fontWeight: 700 }}>
             Proven <span style={{ color: "var(--sunrise-amber)" }}>Exponential Results.</span>
           </h2>
        </div>

        <BPOEnterpriseCard elevation={2} intensity={5} className="success-slider-card">
          <div style={{ padding: "3rem" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginBottom: "2rem" }}>
               <button onClick={() => setIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)} className={styles.controlBtn}>
                 <ChevronLeft size={20} />
               </button>
               <button onClick={() => setIndex((prev) => (prev + 1) % caseStudies.length)} className={styles.controlBtn}>
                 <ChevronRight size={20} />
               </button>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "5rem", alignItems: "center" }}
              >
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 12px", background: "rgba(245, 158, 11, 0.1)", borderRadius: "100px", border: "1px solid var(--sunrise-amber)", color: "var(--sunrise-amber)", fontWeight: 800, fontSize: "12px", marginBottom: "2rem", textTransform: "uppercase" }}>
                     <BarChart4 size={14} /> {caseStudies[index].industry} Authority
                  </div>
                  
                  <h3 style={{ fontSize: "36px", fontWeight: 700, lineHeight: 1.2, marginBottom: "2rem" }}>
                    {caseStudies[index].title}
                  </h3>

                  <div style={{ marginBottom: "3rem" }}>
                    <div style={{ fontWeight: 800, color: "var(--charcoal-deep)", fontSize: "14px", marginBottom: "0.5rem", textTransform: "uppercase" }}>The Architecture</div>
                    <p style={{ color: "var(--medium-gray)", fontSize: "18px", lineHeight: 1.6 }}>{caseStudies[index].solution}</p>
                  </div>

                  <blockquote style={{ padding: "2rem", background: "var(--soft-gray)", borderRadius: "12px", borderLeft: "4px solid var(--sunrise-amber)", marginBottom: "3rem" }}>
                    <p style={{ fontStyle: "italic", fontSize: "18px", color: "var(--charcoal-deep)", marginBottom: "1.5rem" }}>"{caseStudies[index].quote}"</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontStyle: "normal" }}>
                       <div style={{ width: "40px", height: "40px", background: "var(--border)", borderRadius: "50%" }} />
                       <div>
                          <div style={{ fontWeight: 800, fontSize: "15px" }}>{caseStudies[index].author}</div>
                          <div style={{ fontSize: "12px", color: "var(--medium-gray)", fontWeight: 700 }}>{caseStudies[index].authorTitle}</div>
                       </div>
                    </div>
                  </blockquote>

                  <div style={{ display: "flex", gap: "1.5rem" }}>
                    <button className="btn-premium btn-primary" style={{ background: "var(--sunrise-amber)" }}>
                       View Full Blueprint <ArrowRight size={20} />
                    </button>
                    <button className="btn-premium" style={{ border: "1px solid var(--border)" }}>
                       <Play size={18} fill="currentColor" /> Executive Interview
                    </button>
                  </div>
                </div>

                <div style={{ background: "var(--charcoal-deep)", borderRadius: "24px", padding: "3rem", color: "var(--white)", position: "relative", overflow: "hidden" }}>
                   <div style={{ position: "absolute", top: 0, right: 0, padding: "1rem", opacity: 0.1 }}><Zap size={150} color="var(--sunrise-amber)" /></div>
                   <h4 style={{ fontSize: "14px", fontWeight: 800, color: "var(--sunrise-amber)", marginBottom: "3rem", textTransform: "uppercase", letterSpacing: "1px" }}>Impact Architecture</h4>
                   
                   <div style={{ display: "grid", gap: "3rem" }}>
                      {caseStudies[index].results.map((res, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                           <div style={{ color: "var(--sunrise-amber)" }}>{res.icon}</div>
                           <div>
                              <div style={{ fontFamily: "var(--font-mono)", fontSize: "32px", fontWeight: 700, color: "var(--white)" }}>{res.label}</div>
                              <div style={{ fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>{res.desc}</div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </BPOEnterpriseCard>

      </div>
      
      <div style={{ marginTop: "120px" }}>
        <GeometricDivider type="slant-down" color="var(--charcoal-deep)" height="100px" />
      </div>
    </section>
  );
}
