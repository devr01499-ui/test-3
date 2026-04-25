"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Search,
  MapPin,
  Briefcase,
  TrendingUp,
  Globe,
  Users,
  BookOpen,
  Coffee,
  HeartPulse,
  BadgeDollarSign,
  ChevronDown,
  ChevronUp,
  Headset,
  Code,
  Building,
  PieChart,
  ArrowRight,
  CheckCircle2,
  FileText,
  User,
  MessagesSquare,
  Award
} from "lucide-react";
import { careersData } from "@/data/careers";
import styles from "./careers.module.css";

// Basic lucide string icon mapper
const IconMap = (props: { name: string, className?: string, size?: number }) => {
  const { name, ...rest } = props;
  const components: any = {
    Headset, Code, TrendingUp, Building, Users, PieChart, HeartPulse, BadgeDollarSign, Coffee, BookOpen
  };
  const C = components[name] || Briefcase;
  return <C {...rest} />;
};

import Image from "next/image";

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("Healthcare");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [joined, setJoined] = useState(false);

  const handleJoinCommunity = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: "Talent Community Registration",
          email: email
        }),
      });

      if (response.ok) {
        setJoined(true);
        setTimeout(() => setJoined(false), 5000);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Community registration error:', error);
    }
  };


  return (
    <div className={styles.page}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={styles.eyebrow}
              >
                Join Our Global Talent Hub
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={styles.heroTitle}
              >
                Build the Future of <span style={{ color: "var(--primary)" }}>Intelligent</span> Outsourcing
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={styles.heroSub}
              >
                Join a world-class team of 50,000+ professionals across 50 global locations. Elevate your career with AI-driven workflows and human ingenuity.
              </motion.p>
              
              <ul className={styles.checkList}>
                <li><CheckCircle2 size={18} color="var(--primary)"/> Global Mobility Programs</li>
                <li><CheckCircle2 size={18} color="var(--primary)"/> AI Certification Paths</li>
                <li><CheckCircle2 size={18} color="var(--primary)"/> Performance Incentives</li>
                <li><CheckCircle2 size={18} color="var(--primary)"/> Hybrid Work Models</li>
              </ul>

              <div className={styles.heroBtns}>
                <Link href="#jobs" className={styles.btnPrimary}>Explore Openings &rarr;</Link>
                <button className={styles.btnSecondary}>Our Culture Video</button>
              </div>
            </div>

            <div className={styles.heroVisualInner}>
              <div className="card-3d-wrapper" style={{ height: "450px" }}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ rotateY: 5, rotateX: -5 }}
                  className="card-3d-content"
                  style={{ overflow: "hidden" }}
                >
                  <Image 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1400"
                    alt="Team culture"
                    fill
                    className="card-image-bg"
                    priority
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="card-overlay" style={{ background: "linear-gradient(to top, rgba(8, 47, 73, 0.7), transparent)" }} />
                  <div className={styles.statsOverlay}>
                    <div className={styles.statOverItem}>
                      <span className={styles.statOverVal}>250+</span>
                      <span className={styles.statOverLab}>Open Roles</span>
                    </div>
                    <div className={styles.statOverItem}>
                      <span className={styles.statOverVal}>45+</span>
                      <span className={styles.statOverLab}>Countries</span>
                    </div>
                    <div className={styles.statOverItem}>
                      <span className={styles.statOverVal}>92%</span>
                      <span className={styles.statOverLab}>Retention Rate</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS BAR */}
      <div className={styles.statsBar}>
        <div className={`container ${styles.statsGrid}`}>
          {careersData.stats.map((stat, i) => (
            <div key={i} className={styles.barStat}>
               <strong style={{color:"var(--primary)", fontSize: "1.2rem"}}>{stat.value}</strong> 
               <span style={{ fontSize: "0.9rem", fontWeight: 800 }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* JOB SEARCH WIDGET */}
      <section className={styles.section} id="jobs">
        <div className="container">
          <div className={styles.searchWidget} style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 20px 50px rgba(14, 165, 233, 0.1)" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "2rem", color: "var(--text-main)" }}>Find Your Perfect Career Path</h2>
            <div className={styles.searchInputs}>
              <div className={styles.inputWrap}>
                <Search size={18} />
                <input type="text" placeholder="Job title, department..." className={styles.searchInput} />
              </div>
              <div className={styles.inputWrap}>
                <MapPin size={18} />
                <input type="text" placeholder="Anywhere" className={styles.searchInput} />
              </div>
              <div className={styles.inputWrap}>
                <Briefcase size={18} />
                <select className={styles.searchInput} style={{ appearance: 'none', background: "white" }}>
                  <option>All Divisions</option>
                  <option>Digital Solutions</option>
                  <option>Client Relations</option>
                  <option>Corporate Support</option>
                </select>
                <ChevronDown size={14} style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
              </div>
              <button className={styles.btnPrimary}>Search Jobs</button>
            </div>
            
            <div className={styles.quickFilters}>
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-muted)", marginRight: "0.5rem" }}>Trending:</span>
              {["Hybrid", "Tech Lead", "Entry Level", "Data Science", "Graduate"].map(f => (
                <button key={f} className={styles.filterBadge}>{f}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Global Advantages</h2>
            <p className={styles.sectionSub}>Join a mission-driven organization where your growth is our priority.</p>
          </div>
          
          <div className={styles.propsGrid}>
            {[
              { t: "CAREER GROWTH", icon: <TrendingUp/>, list: ["Pathways from entry to HQ","Global mentorship","Paid certifications"] },
              { t: "GLOBAL FOOTPRINT", icon: <Globe/>, list: ["Office rotations","Expats opportunities","Multi-site collaboration"] },
              { t: "DIVERSITY 1st", icon: <Users/>, list: ["100+ Nationalities","Inclusive ERGs","Equal Opportunity and Pay"] },
              { t: "MODERN WORK", icon: <Coffee/>, list: ["Flexible Hybrid Model","Mental Health Coverage","Parental Support"] }
            ].map((prop, i) => (
              <div key={i} className="card-3d-wrapper" style={{ height: "320px" }}>
                <motion.div 
                  whileHover={{ rotateY: 8, rotateX: -4, scale: 1.05 }}
                  className={`card-3d-content ${styles.propCard}`}
                >
                  <div className={styles.propIcon} style={{ background: "rgba(14, 165, 233, 0.1)", border: "1px solid rgba(14, 165, 233, 0.2)" }}>{prop.icon}</div>
                  <h3 style={{ color: "var(--primary)", fontWeight: 800 }}>{prop.t}</h3>
                  <ul className={styles.propList}>
                    {prop.list.map(l => <li key={l}>{l}</li>)}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Departments & Roles</h2>
            <p className={styles.sectionSub}>Find your niche in our diverse ecosystem of experts.</p>
          </div>
          
          <div className={styles.deptGrid}>
            {careersData.departments.map((dept, i) => (
              <div key={i} className="card-3d-wrapper" style={{ height: "350px" }}>
                <motion.div 
                  whileHover={{ rotateY: 8, rotateX: -4, scale: 1.05 }}
                  className={`card-3d-content ${styles.deptCard}`}
                >
                  <div className={styles.deptHeader}>
                    <div className={styles.deptIcon} style={{ background: "var(--surface)", border: "1px solid var(--border)" }}><IconMap name={dept.icon} size={28} /></div>
                    <h3 style={{ color: "var(--text-main)", fontWeight: 800 }}>{dept.title}</h3>
                  </div>
                  <div className={styles.deptRoles} style={{ flexGrow: 1 }}>
                    {dept.roles.map(r => <span key={r} className={styles.deptRole} style={{ fontWeight: 600 }}>{r}</span>)}
                  </div>
                  <div className={styles.deptFooter} style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                    <span className={styles.deptCount} style={{ background: "var(--primary)", color: "white" }}>{dept.openCount} Open Positions</span>
                    <Link href="#jobs" style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--primary)" }}>Join Team &rarr;</Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOT JOBS */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Hiring Spotlight</h2>
            <p className={styles.sectionSub}>Exceptional opportunities with rapid recruitment cycles.</p>
          </div>
          
          <div className={styles.jobGrid}>
            {careersData.featuredJobs.map((job, i) => (
              <div key={i} className="card-3d-wrapper" style={{ height: "400px" }}>
                <motion.div 
                  whileHover={{ rotateY: 6, rotateX: -2, scale: 1.03 }}
                  className={`card-3d-content ${styles.jobCard}`}
                  style={{ border: "1px solid var(--border)" }}
                >
                  <div className={`${styles.jobBadge} ${styles[`badge${job.badge}`]}`} style={{ borderRadius: "20px", padding: "4px 12px" }}>{job.badge}</div>
                  <h3 className={styles.jobTitle} style={{ fontSize: "1.25rem", color: "var(--text-main)" }}>{job.title}</h3>
                  <div className={styles.jobMeta}>
                    <span className={styles.jobMetaItem}><MapPin size={16} color="var(--primary)"/> {job.location}</span>
                    <span className={styles.jobMetaItem}><Briefcase size={16} color="var(--primary)"/> {job.department}</span>
                    <span className={styles.jobMetaItem}><Coffee size={16} color="var(--primary)"/> {job.type}</span>
                  </div>
                  <div className={styles.jobSalary} style={{ color: "var(--primary)", fontSize: "1.1rem" }}>{job.salary}</div>
                  <div className={styles.jobActions} style={{ marginTop: "auto" }}>
                    <button className={styles.jobBtn} style={{ background: "var(--text-main)", borderRadius: "30px" }}>Apply Instantly</button>
                    <button className={styles.saveBtn} style={{ borderRadius: "50%", padding: "10px" }}><HeartPulse size={18}/></button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE AT COMPANY */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Life Inside Claritiy</h2>
            <p className={styles.sectionSub}>A glimpse into our collaborative workplace and community impact.</p>
          </div>
          <div className={styles.galleryGrid}>
            {careersData.lifeAtCompany.map((img, i) => (
              <div key={i} className={`card-3d-wrapper ${styles.galleryItem}`} style={{ height: "220px" }}>
                <motion.div 
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="card-3d-content"
                  style={{ overflow: "hidden" }}
                >
                  <Image 
                    src={img.url} 
                    alt={img.alt} 
                    fill 
                    style={{ objectFit: "cover" }} 
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVERSITY & INCLUSION */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.diversityGrid}>
            <div>
              <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>Radical Inclusion</h2>
              <p className={styles.heroSub} style={{ fontSize: "1.1rem", color: "var(--text-main)" }}>
                We believe that diverse perspectives fuel digital innovation. We're building a workplace where every voice is heard and every identity is celebrated.
              </p>
              
              <ul className={styles.checkList} style={{ gridTemplateColumns: "1fr", marginTop: "2.5rem", gap: "1.25rem" }}>
                <li style={{ fontSize: "1.05rem", fontWeight: 700 }}><CheckCircle2 size={24} color="var(--primary)"/> 100% Pay Equity Certifications</li>
                <li style={{ fontSize: "1.05rem", fontWeight: 700 }}><CheckCircle2 size={24} color="var(--primary)"/> Global Diversity Council Direct Oversight</li>
                <li style={{ fontSize: "1.05rem", fontWeight: 700 }}><CheckCircle2 size={24} color="var(--primary)"/> AI-driven Blind Recruitment Processes</li>
              </ul>
            </div>

            <div>
               <div className={styles.diversityMetrics}>
                  {careersData.diversity.metrics.map((m, i) => (
                    <div key={i} className="card-3d-wrapper" style={{ height: "140px" }}>
                       <motion.div 
                        whileHover={{ rotateY: 5, scale: 1.05 }}
                        className={`card-3d-content ${styles.metricCard}`}
                        style={{ border: "1px solid var(--border)", display: "flex", flexDirection: "column", justifyContent: "center" }}
                       >
                         <span style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--primary)", display: "block" }}>{m.value}</span>
                         <span style={{ fontWeight: 800, color: "var(--text-muted)", fontSize: "0.85rem" }}>{m.label}</span>
                       </motion.div>
                    </div>
                  ))}
               </div>
               <div className={styles.diversityCerts} style={{ marginTop: "3rem" }}>
                  {careersData.diversity.certifications.map(c => (
                    <span key={c} className={styles.certBadge} style={{ background: "white", padding: "10px 15px", borderRadius: "10px", fontWeight: 800, border: "1px solid var(--border)" }}>{c}</span>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAY CONNECTED */}
      <section className={styles.section} style={{ background: "linear-gradient(135deg, var(--text-main), var(--primary))", color: "white" }}>
        <div className="container">
          <div className={styles.diversityGrid}>
            <div style={{ background: "rgba(255,255,255,0.05)", padding: "3.5rem", borderRadius: "30px", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>Talent Community</h2>
              <p style={{ marginBottom: "2.5rem", color: "rgba(255,255,255,0.8)", fontSize: "1.1rem" }}>Register for prioritized job alerts and exclusive networking sessions with our global tech leads.</p>
              <form onSubmit={handleJoinCommunity} className={styles.searchInputs} style={{ gridTemplateColumns: "1fr auto" }}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="your@email.com" 
                  className={styles.searchInput} 
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "white", paddingLeft: "1.5rem" }} 
                  required
                />
                <button type="submit" className={styles.btnPrimary} style={{ background: "white", color: "var(--text-main)" }} disabled={joined}>
                  {joined ? "Joined!" : "Join Now →"}
                </button>
              </form>
            </div>

            <div style={{ paddingLeft: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "2rem" }}>Digital Presence</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {[
                  { label: "LinkedIn Elite", count: "50,000+ Connections", color: "#0077b5" },
                  { label: "Instagram Culture", count: "Live Content Daily", color: "#e4405f" },
                  { label: "Twitter Tech", count: "Rapid Updates", color: "#1da1f2" }
                ].map(social => (
                  <div key={social.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>{social.label}</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{social.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.section} style={{ textAlign: "center", background: "var(--surface)" }}>
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ fontSize: "3.2rem", fontWeight: 900, color: "var(--text-main)", marginBottom: "3rem" }}
          >
            Ready to <span style={{ color: "var(--primary)" }}>Elevate</span> Your Career?
          </motion.h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
             <button className={styles.btnSecondary} style={{ padding: "1.25rem 3.5rem", borderRadius: "50px", fontWeight: 800 }}>Schedule Discovery Call</button>
             <button className={styles.btnPrimary} style={{ padding: "1.25rem 3.5rem", borderRadius: "50px", fontWeight: 800 }}>View All Job Listings</button>
          </div>
        </div>
      </section>

    </div>
  );
}
