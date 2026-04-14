import React from "react";
import { Search, FileText, BarChart3, Users, Globe, Settings, MapPin, Handshake, ShieldCheck, TrendingUp, Palette, Laptop, CheckCircle, Headphones, Briefcase, FileCode, Download, Target } from "lucide-react";
import styles from "./MegaMenu.module.css";
import { enhancedServices } from "@/lib/navData";

export function ServicesMegaMenu() {
  return (
    <div className={styles.grid}>
      {/* COLUMN 1: CORE SERVICES (Span 4) */}
      <div className={styles.column} style={{ gridColumn: "span 4" }}>
        <h3 className={styles.sectionTitle}>Core Services</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {enhancedServices.core.map((group) => (
            <div key={group.title}>
              <h4 className={styles.subTitle}>
                {group.title.includes("Contact") && <Headphones size={16} color="var(--primary)" />}
                {group.title.includes("Back") && <Briefcase size={16} color="var(--primary)" />}
                {group.title.includes("Finance") && <TrendingUp size={16} color="var(--primary)" />}
                {group.title.includes("HR") && <Users size={16} color="var(--primary)" />}
                {group.title.includes("Analytics") && <BarChart3 size={16} color="var(--primary)" />}
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

      {/* COLUMN 2: SPECIALIZED SERVICES (Span 4) */}
      <div className={styles.column} style={{ gridColumn: "span 4" }}>
        <h3 className={styles.sectionTitle}>Specialized Services</h3>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <h4 className={styles.subTitle}><ShieldCheck size={16} color="var(--primary)"/> Vertical-Specific</h4>
            <ul className={styles.list}>
              {enhancedServices.specialized.vertical.map(item => (
                <li key={item}><a href="#" className={styles.link}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.subTitle}><Settings size={16} color="var(--primary)"/> Technical Services</h4>
            <ul className={styles.list}>
              {enhancedServices.specialized.technical.map(item => (
                <li key={item}><a href="#" className={styles.link}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.subTitle}><Palette size={16} color="var(--primary)"/> Creative Services</h4>
            <ul className={styles.list}>
              {enhancedServices.specialized.creative.map(item => (
                <li key={item}><a href="#" className={styles.link}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.subTitle}><Laptop size={16} color="var(--primary)"/> Digital Services</h4>
            <ul className={styles.list}>
              {enhancedServices.specialized.digital.map(item => (
                <li key={item}><a href="#" className={styles.link}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.subTitle}><CheckCircle size={16} color="var(--primary)"/> Compliance Services</h4>
            <ul className={styles.list}>
              {enhancedServices.specialized.compliance.map(item => (
                <li key={item}><a href="#" className={styles.link}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <a href="#" className={styles.iconLink} style={{ color: "var(--primary)" }}>
            <FileCode size={16} /> Service Catalog PDF <Download size={12} />
          </a>
        </div>
      </div>

      {/* COLUMN 3: SERVICE MODELS & SLA (Span 4) */}
      <div className={styles.column} style={{ gridColumn: "span 4" }}>
        <h3 className={styles.sectionTitle}>Service Models</h3>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
          <div>
            <h4 className={styles.subTitle}><MapPin size={16} color="var(--primary)"/> Onshore</h4>
            <ul className={styles.list}>
              {enhancedServices.models.onshore.map(item => (
                <li key={item}><a href="#" className={styles.link}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.subTitle}><Globe size={16} opacity={0.5} color="var(--primary)"/> Nearshore</h4>
            <ul className={styles.list}>
              {enhancedServices.models.nearshore.map(item => (
                <li key={item}><a href="#" className={styles.link}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.subTitle}><Globe size={16} color="var(--primary)"/> Offshore</h4>
            <ul className={styles.list}>
              {enhancedServices.models.offshore.map(item => (
                <li key={item}><a href="#" className={styles.link}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.subTitle}><TrendingUp size={16} color="var(--primary)"/> Hybrid</h4>
            <ul className={styles.list}>
              {enhancedServices.models.hybrid.map(item => (
                <li key={item}><a href="#" className={styles.link}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className={styles.sectionTitle}>Engagement Models</h3>
        <ul className={styles.list} style={{ marginBottom: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
          {enhancedServices.models.engagement.map(item => (
            <li key={item}>
              <a href="#" className={styles.link}>
                <Handshake size={14} color="var(--primary)" opacity={0.6} /> {item}
              </a>
            </li>
          ))}
        </ul>

        <h3 className={styles.sectionTitle}>Service Levels</h3>
        <ul className={styles.list}>
          {enhancedServices.models.levels.map(item => (
            <li key={item}>
              <a href="#" className={styles.link} style={{ fontWeight: 600 }}>
                <CheckCircle size={14} color="var(--primary)" /> {item}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "2.5rem" }}>
           <button className={styles.quoteBtn} style={{ width: "100%", padding: "0.8rem", marginBottom: "0.75rem" }}>
            [Pricing Guide]
          </button>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className={styles.footerActions}>
        <a href="#" className={styles.actionBtn}><Search size={16} /> Service Finder Tool</a>
        <a href="#" className={styles.actionBtn}><FileText size={16} /> Compare Services</a>
        <a href="#" className={styles.actionBtn}><Target size={16} /> Request Consultation</a>
      </div>
    </div>
  );
}

