import React from "react";
import { ArrowRight, Calculator, Calendar, BarChart3, Target, Download, FileText, PieChart, TrendingUp, Zap } from "lucide-react";
import styles from "./MegaMenu.module.css";
import { enhancedSolutions } from "@/lib/navData";

export function SolutionsMegaMenu() {
  return (
    <div className={styles.grid}>
      {/* COLUMN 1: BY FUNCTION (Span 4) */}
      <div className={styles.column} style={{ gridColumn: "span 4" }}>
        <h3 className={styles.sectionTitle}>By Function</h3>
        <div className={styles.nestedGrid}>
          {enhancedSolutions.byFunction.map((group) => (
            <div key={group.title}>
              <h4 className={styles.subTitle}>{group.title}</h4>
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

      {/* COLUMN 2: BY AI CAPABILITY (Span 3) */}
      <div className={styles.column} style={{ gridColumn: "span 3" }}>
        <h3 className={styles.sectionTitle}>By AI Capability</h3>
        <ul className={styles.list}>
          {enhancedSolutions.byCapability.map((cap) => (
            <li key={cap.title}>
              <a href="#" className={styles.link} style={{ fontWeight: 600, color: "var(--text-main)" }}>
                {cap.title}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "1.5rem" }}>
          <h4 className={styles.subTitle}>Specializations</h4>
          <ul className={styles.list}>
            {enhancedSolutions.specializations.map(spec => (
              <li key={spec}>
                <a href="#" className={styles.link}>
                  <div className={styles.bullet} style={{ opacity: 0.2 }} /> {spec}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: "1.25rem" }}>
          <a href="#" className={styles.iconLink} style={{ color: "var(--primary)", fontWeight: 700 }}>
             Explore All AI <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* COLUMN 3: BY OUTCOME & INDUSTRIES (Span 2) */}
      <div className={styles.column} style={{ gridColumn: "span 2" }}>
        <h3 className={styles.sectionTitle}>By Outcome</h3>
        <ul className={styles.list} style={{ marginBottom: "2rem" }}>
          {enhancedSolutions.byOutcome.map(outcome => (
            <li key={outcome}>
              <a href="#" className={styles.link} style={{ fontWeight: 600 }}>
                <TrendingUp size={12} color="var(--primary)" /> {outcome}
              </a>
            </li>
          ))}
        </ul>

        <h3 className={styles.sectionTitle}>Industry Solutions</h3>
        <ul className={styles.list} style={{ marginBottom: "2rem" }}>
          {enhancedSolutions.industrySpecific.map(ind => (
            <li key={ind}>
              <a href="#" className={styles.link}>
                <div className={styles.bullet} /> {ind}
              </a>
            </li>
          ))}
        </ul>
        
        <h3 className={styles.sectionTitle}>Custom Solutions</h3>
        <ul className={styles.list}>
          {enhancedSolutions.custom.map(c => (
            <li key={c}>
              <a href="#" className={styles.link}>{c}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* COLUMN 4: FEATURED & QUICK ACTIONS (Span 3) */}
      <div className={styles.column} style={{ gridColumn: "span 3" }}>
        <div className={styles.featuredBox}>
          <h3 className={styles.sectionTitle} style={{ border: "none", marginBottom: "0.5rem" }}>Featured Solution</h3>
          <div className={styles.previewImg}>
            <div style={{ width: "100%", height: "100%", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Zap size={48} color="var(--primary)" opacity={0.2} />
              <div style={{ position: "absolute", bottom: "10px", right: "10px", padding: "4px 8px", background: "rgba(0,106,255,0.1)", borderRadius: "4px", fontSize: "0.6rem", fontWeight: 700, color: "var(--primary)" }}>PREVIEW</div>
            </div>
          </div>
          <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-main)" }}>AI+Human Hybrid Contact Center</p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button className={styles.quoteBtn} style={{ padding: "0.6rem", fontSize: "0.75rem", flex: 1 }}>Watch Demo</button>
            <button className={styles.portalBtn} style={{ padding: "0.6rem", fontSize: "0.75rem", flex: 1 }}>Download Brief</button>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <p className={styles.subTitle} style={{ marginTop: 0 }}>Quick Actions:</p>
            <ul className={styles.list}>
              <li><a href="#" className={styles.iconLink}><Calculator size={14} color="var(--primary)" /> ROI Calculator</a></li>
              <li><a href="#" className={styles.iconLink}><Calendar size={14} color="var(--primary)" /> Schedule Consultation</a></li>
              <li><a href="#" className={styles.iconLink}><PieChart size={14} color="var(--primary)" /> View Pricing</a></li>
              <li><a href="#" className={styles.iconLink}><Download size={14} color="var(--primary)" /> Download Brochure</a></li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "2rem", padding: "1.25rem", borderLeft: "3px solid var(--primary)", background: "var(--surface)", borderRadius: "0 8px 8px 0" }}>
           <p style={{ fontSize: "0.8rem", fontStyle: "italic", color: "var(--text-muted)", lineHeight: 1.5 }}>
            &ldquo;Transformed our operations and reduced overhead by 40% in the first year.&rdquo;
          </p>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, marginTop: "0.75rem", color: "var(--primary)" }}>- Fortune 500 CTO</p>
        </div>
      </div>

      {/* STATS STRIP (Full Width) */}
      <div className={styles.statsStrip}>
        {enhancedSolutions.stats.map(stat => (
          <div key={stat.label} className={styles.statItem}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* FOOTER ACTIONS */}
      <div className={styles.footerActions}>
        <a href="#" className={styles.actionBtn}><FileText size={16} /> View All Solutions</a>
        <a href="#" className={styles.actionBtn}><BarChart3 size={16} /> Solutions Comparison</a>
        <a href="#" className={styles.actionBtn}><Target size={16} /> Find My Solution</a>
      </div>
    </div>
  );
}

