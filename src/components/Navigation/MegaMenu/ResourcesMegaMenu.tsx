import { BookOpen, FileText, Calculator, Search, Mail, HelpCircle, GraduationCap, Video, AudioLines, Download, MessageSquareText, TrendingUp, Filter, List, Newspaper } from "lucide-react";
import styles from "./MegaMenu.module.css";
import { enhancedResources } from "@/lib/navData";

export function ResourcesMegaMenu() {
  return (
    <div className={styles.grid}>
      {/* COLUMN 1: CONTENT LIBRARY (Span 3) */}
      <div className={styles.column} style={{ gridColumn: "span 3" }}>
        <h3 className={styles.sectionTitle}>Content Library</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {enhancedResources.learn.map(group => (
            <div key={group.title}>
              <h4 className={styles.subTitle}>
                {group.title === "Blog" && <Newspaper size={16} color="var(--primary)" />}
                {group.title === "Case Studies" && <FileText size={16} color="var(--primary)" />}
                {group.title === "Guides & eBooks" && <BookOpen size={16} color="var(--primary)" />}
                {group.title === "Webinars & Events" && <Video size={16} color="var(--primary)" />}
                {group.title === "Videos" && <Video size={16} color="var(--primary)" />}
                {group.title === "Podcasts" && <AudioLines size={16} color="var(--primary)" />}
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
      </div>

      {/* COLUMN 2: TOOLS & RESOURCES (Span 3) */}
      <div className={styles.column} style={{ gridColumn: "span 3" }}>
        <h3 className={styles.sectionTitle}>Tools & Calculators</h3>
        <ul className={styles.list} style={{ marginBottom: "2rem" }}>
          {enhancedResources.tools.map(tool => (
            <li key={tool}>
              <a href="#" className={styles.iconLink}>
                <Calculator size={14} color="var(--primary)" /> {tool}
              </a>
            </li>
          ))}
        </ul>

        <h3 className={styles.sectionTitle}>Resources</h3>
        <ul className={styles.list} style={{ marginBottom: "2rem" }}>
          {enhancedResources.resourceFiles.map(file => (
            <li key={file}>
              <a href="#" className={styles.link}><FileText size={14} opacity={0.6} /> {file}</a>
            </li>
          ))}
        </ul>

        <div style={{ padding: "1.25rem", background: "var(--surface)", borderRadius: "12px", border: "1px solid var(--border)" }}>
           <h4 className={styles.subTitle} style={{ marginTop: 0 }}><Mail size={16} /> Newsletter</h4>
           <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Stay updated with the latest BPO & AI trends.</p>
           <ul className={styles.list} style={{ marginBottom: "1rem" }}>
             <li><a href="#" className={styles.link}>Weekly Digest</a></li>
             <li><a href="#" className={styles.link}>Monthly Insights</a></li>
           </ul>
           <button className={styles.quoteBtn} style={{ width: "100%", padding: "0.6rem", fontSize: "0.8rem" }}>Subscribe Now</button>
        </div>
      </div>

      {/* COLUMN 3: INSIGHTS & RESEARCH (Span 3) */}
      <div className={styles.column} style={{ gridColumn: "span 3" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {enhancedResources.insights.map(group => (
            <div key={group.title}>
              <h3 className={styles.sectionTitle}>{group.title}</h3>
              <ul className={styles.list}>
                {group.items.map(item => (
                  <li key={item}><a href="#" className={styles.link} style={{ fontWeight: 600 }}>{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h3 className={styles.sectionTitle}>Academy & Learning</h3>
          <ul className={styles.list}>
            {enhancedResources.academy.map(item => (
              <li key={item}>
                <a href="#" className={styles.link}>
                  <GraduationCap size={14} color="var(--primary)" /> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* COLUMN 4: TRENDING & FILTERS (Span 3) */}
      <div className={styles.column} style={{ gridColumn: "span 3" }}>
        <h3 className={styles.sectionTitle}>Trending Content</h3>
        <ul className={styles.list} style={{ marginBottom: "2rem" }}>
          {enhancedResources.trending.map((item, i) => (
            <li key={item}>
              <a href="#" className={styles.link} style={{ fontWeight: 700, color: "var(--text-main)" }}>
                <span style={{ color: "var(--primary)", marginRight: "8px" }}>{i + 1}.</span> {item}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.featuredBox} style={{ marginBottom: "2rem" }}>
          <h3 className={styles.sectionTitle} style={{ border: "none", marginBottom: "0.5rem" }}>Featured Download</h3>
          <div className={styles.previewImg} style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={40} color="var(--primary)" opacity={0.2} />
          </div>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, textAlign: "center" }}>Ultimate Guide to BPO Selection</p>
          <button className={styles.quoteBtn} style={{ width: "100%", padding: "0.6rem" }}><Download size={14} /> Download Free</button>
        </div>

        <div style={{ padding: "1.25rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
           <h4 className={styles.subTitle} style={{ marginTop: 0 }}><Filter size={16} /> Content Filters</h4>
           <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
              <select style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid var(--border)", fontSize: "0.75rem" }}>
                <option>Industry: [All]</option>
              </select>
              <select style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid var(--border)", fontSize: "0.75rem" }}>
                <option>Topic: [All]</option>
              </select>
              <button className={styles.portalBtn} style={{ padding: "0.5rem", fontSize: "0.75rem" }}>Apply Filters</button>
           </div>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
           <h4 className={styles.subTitle}>Quick Links</h4>
           <ul className={styles.list}>
              <li><a href="#" className={styles.iconLink}><List size={14} /> Browse All Resources</a></li>
              <li><a href="#" className={styles.iconLink}><TrendingUp size={14} /> Recommended for You</a></li>
           </ul>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className={styles.footerActions}>
        <a href="#" className={styles.actionBtn}><Search size={16} /> Advanced Search</a>
        <a href="#" className={styles.actionBtn}><HelpCircle size={16} /> Knowledge Base</a>
        <a href="#" className={styles.actionBtn}><MessageSquareText size={16} /> Ask an Expert</a>
      </div>
    </div>
  );
}
