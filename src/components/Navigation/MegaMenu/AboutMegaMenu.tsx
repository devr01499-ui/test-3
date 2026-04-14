import { ArrowRight, Users, TrendingUp, Newspaper, Trophy, Mail, MapPin, Briefcase, Globe, ShieldCheck, Heart, Leaf, Share2, Download } from "lucide-react";
import styles from "./MegaMenu.module.css";
import { enhancedAbout } from "@/lib/navData";

export function AboutMegaMenu() {
  return (
    <div className={styles.grid}>
      {/* COLUMN 1: COMPANY (Span 4) */}
      <div className={styles.column} style={{ gridColumn: "span 4" }}>
        <h3 className={styles.sectionTitle}>Company</h3>
        <div className={styles.nestedGrid}>
          {enhancedAbout.overview.map(group => (
            <div key={group.title}>
              <h4 className={styles.subTitle}>
                {group.title.includes("Overview") && <Globe size={16} color="var(--primary)" />}
                {group.title.includes("Partnerships") && <Share2 size={16} color="var(--primary)" />}
                {group.title.includes("Certifications") && <ShieldCheck size={16} color="var(--primary)" />}
                {group.title}
              </h4>
              <ul className={styles.list}>
                {group.items.map(item => (
                  <li key={item}><a href="#" className={styles.link}><div className={styles.bullet} /> {item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h3 className={styles.sectionTitle}>Corporate Info</h3>
          <ul className={styles.list} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
             {["Company History", "Board of Directors", "Governance", "Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
               <li key={item}><a href="#" className={styles.link}>{item}</a></li>
             ))}
          </ul>
        </div>
      </div>

      {/* COLUMN 2: LEADERSHIP & CULTURE (Span 4) */}
      <div className={styles.column} style={{ gridColumn: "span 4" }}>
        <h3 className={styles.sectionTitle}>Leadership & People</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {enhancedAbout.leadership.map(group => (
            <div key={group.title}>
              <h4 className={styles.subTitle}>
                {group.title.includes("Team") && <Users size={16} color="var(--primary)" />}
                {group.title.includes("Culture") && <Heart size={16} color="var(--primary)" />}
                {group.title}
              </h4>
              <ul className={styles.list}>
                {group.items.map(item => <li key={item}><a href="#" className={styles.link}>{item}</a></li>)}
              </ul>
            </div>
          ))}

          <div>
            <h4 className={styles.subTitle}><Leaf size={16} color="var(--primary)" /> Sustainability</h4>
            <ul className={styles.list}>
              {["Environmental Impact", "Social Responsibility", "Ethics & Integrity", "ESG Reporting"].map(item => (
                <li key={item}><a href="#" className={styles.link}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ background: "var(--surface)", padding: "1.5rem", borderRadius: "16px", marginTop: "2rem", border: "1px solid var(--border)" }}>
          <h4 className={styles.subTitle} style={{ marginTop: 0 }}><Briefcase size={18} /> Careers</h4>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1rem", lineHeight: 1.5 }}>Join a global team dedicated to redefining enterprise efficiency through AI and human talent.</p>
          <button className={styles.quoteBtn} style={{ width: "100%", padding: "0.75rem" }}>[Explore Career Opportunities]</button>
        </div>
      </div>

      {/* COLUMN 3: RECOGNITION & STATS (Span 4) */}
      <div className={styles.column} style={{ gridColumn: "span 4" }}>
        <h3 className={styles.sectionTitle}>Newsroom & Recognition</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {enhancedAbout.corporate.map(group => (
            <div key={group.title}>
              <h4 className={styles.subTitle}>
                {group.title.includes("Newsroom") && <Newspaper size={16} color="var(--primary)" />}
                {group.title.includes("Recognition") && <Trophy size={16} color="var(--primary)" />}
                {group.title}
              </h4>
              <ul className={styles.list}>
                {group.items.map(item => (
                  <li key={item}><a href="#" className={styles.link}>{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h3 className={styles.sectionTitle}>Company Stats</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {enhancedAbout.stats.map(stat => (
              <div key={stat} style={{ padding: "0.75rem", background: "var(--surface)", borderRadius: "8px", border: "1px solid var(--border)" }}>
                <span style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--primary)", display: "block" }}>{stat.split(" ")[0]}</span>
                <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>{stat.split(" ").slice(1).join(" ")}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
           <h3 className={styles.sectionTitle}>Investors & Global</h3>
           <div className={styles.nestedGrid}>
              <div>
                <h4 className={styles.subTitle}><TrendingUp size={16} /> Investors</h4>
                <ul className={styles.list}>
                  {["Investor Relations", "Financial Reports", "Stock Information"].map(item => (
                    <li key={item}><a href="#" className={styles.link}>{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={styles.subTitle}><MapPin size={16} /> Offices</h4>
                <ul className={styles.list}>
                  {["Global Locations", "Visit Our HQ", "Regional Hubs"].map(item => (
                    <li key={item}><a href="#" className={styles.link}>{item}</a></li>
                  ))}
                </ul>
              </div>
           </div>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className={styles.footerActions}>
        <a href="#" className={styles.actionBtn}><Download size={16} /> Download Investor Kit</a>
        <a href="#" className={styles.actionBtn}><ArrowRight size={16} /> Company Overview Presentation</a>
        <a href="#" className={styles.actionBtn}><Mail size={16} /> Contact Corporate Affairs</a>
      </div>
    </div>
  );
}
