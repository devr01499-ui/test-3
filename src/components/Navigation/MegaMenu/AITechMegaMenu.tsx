import React from "react";
import { Microscope, ShieldCheck, Zap, FileText, Calculator, Presentation, Play, Globe, Cpu, Layers, MessageSquare, Mic, Eye, Code, Share2, Award, BookOpen, BarChart3, Target, CheckCircle } from "lucide-react";
import styles from "./MegaMenu.module.css";
import { enhancedAITech } from "@/lib/navData";

export function AITechMegaMenu() {
  return (
    <div className={styles.grid}>
      {/* COLUMN 1: AI PLATFORMS & CORE TECH (Span 4) */}
      <div className={styles.column} style={{ gridColumn: "span 4" }}>
        <h3 className={styles.sectionTitle}>AI Platforms & Infrastructure</h3>
        <div className={styles.nestedGrid}>
          {enhancedAITech.platforms.map((group) => (
            <div key={group.title}>
              <h4 className={styles.subTitle}>
                {group.title.includes("Suite") && <Layers size={16} color="var(--primary)" />}
                {group.title.includes("Core") && <Cpu size={16} color="var(--primary)" />}
                {group.title.includes("Automation") && <Zap size={16} color="var(--primary)" />}
                {group.title.includes("Speech") && <Mic size={16} color="var(--primary)" />}
                {group.title.includes("Visual") && <Eye size={16} color="var(--primary)" />}
                {group.title.includes("Governance") && <ShieldCheck size={16} color="var(--primary)" />}
                {group.title}
              </h4>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className={styles.link}>
                      <div className={styles.bullet} /> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* COLUMN 2: CAPABILITIES & INNOVATION (Span 4) */}
      <div className={styles.column} style={{ gridColumn: "span 4" }}>
        <h3 className={styles.sectionTitle}>AI Capabilities</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {enhancedAITech.capabilities.map((group) => (
            <div key={group.title}>
              <h4 className={styles.subTitle}>
                {group.title.includes("Conversational") && <MessageSquare size={16} color="var(--primary)" />}
                {group.title.includes("Analytics") && <BarChart3 size={16} color="var(--primary)" />}
                {group.title.includes("Smart") && <Target size={16} color="var(--primary)" />}
                {group.title.includes("Hybrid") && <Share2 size={16} color="var(--primary)" />}
                {group.title}
              </h4>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item}><a href="#" className={styles.link}>{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h3 className={styles.sectionTitle}>Innovation & Tech Stack</h3>
          <div className={styles.nestedGrid}>
             <div>
              <h4 className={styles.subTitle}><Microscope size={16} /> Research Lab</h4>
              <ul className={styles.list}>
                {enhancedAITech.innovation.map(item => <li key={item}><a href="#" className={styles.link}>{item}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className={styles.subTitle}><Code size={16} /> Tech Stack</h4>
              <ul className={styles.list}>
                {enhancedAITech.stack.map(item => <li key={item}><a href="#" className={styles.link}>{item}</a></li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* COLUMN 3: ACADEMY, DEMO & RESOURCES (Span 4) */}
      <div className={styles.column} style={{ gridColumn: "span 4" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <h3 className={styles.sectionTitle}>AI Academy</h3>
            <ul className={styles.list} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              {enhancedAITech.academy.map(item => (
                <li key={item}>
                  <a href="#" className={styles.link}>
                    <BookOpen size={14} color="var(--primary)" opacity={0.6} /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle} style={{ border: "none", marginBottom: "0.5rem" }}>Demo Center</h3>
            <div className={styles.featuredBox}>
              <div className={styles.videoPreview} style={{ height: "140px" }}>
                <div className={styles.playIcon}><Play size={20} fill="currentColor" /></div>
                <div style={{ position: "absolute", top: "10px", left: "10px", padding: "2px 6px", background: "rgba(0,106,255,0.1)", borderRadius: "4px", fontSize: "0.6rem", fontWeight: 700, color: "var(--primary)" }}>LIVE DEMO</div>
              </div>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, textAlign: "center" }}>Experience our AI in Real-Time</p>
              <button className={styles.quoteBtn} style={{ padding: "0.75rem", width: "100%" }}>[Launch Interactive Demo]</button>
            </div>
          </div>

          <div className={styles.nestedGrid}>
            <div>
              <h3 className={styles.sectionTitle}>AI Use Cases</h3>
              <ul className={styles.list}>
                {enhancedAITech.useCases.map(item => (
                  <li key={item}><a href="#" className={styles.link}><CheckCircle size={14} color="var(--primary)" /> {item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.sectionTitle}>Certifications</h3>
              <ul className={styles.list}>
                {enhancedAITech.certifications.map(item => (
                  <li key={item}><a href="#" className={styles.link}><Award size={14} color="var(--primary)" /> {item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
           <h3 className={styles.sectionTitle}>Quick Links</h3>
           <ul className={styles.list} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              <li><a href="#" className={styles.iconLink}><Presentation size={14} /> Schedule Demo</a></li>
              <li><a href="#" className={styles.iconLink}><Calculator size={14} /> AI ROI Tool</a></li>
              <li><a href="#" className={styles.iconLink}><Globe size={14} /> Global Partners</a></li>
              <li><a href="#" className={styles.iconLink}><FileText size={14} /> Dev Portal</a></li>
           </ul>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className={styles.footerActions}>
        <a href="#" className={styles.actionBtn}>🚀 AI Platform Tour</a>
        <a href="#" className={styles.actionBtn}>📊 AI ROI Calculator</a>
        <a href="#" className={styles.actionBtn}>🤝 Partner with Our AI</a>
      </div>
    </div>
  );
}
