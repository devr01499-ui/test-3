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

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("Healthcare");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div className={styles.page}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>Join Our Global Team</div>
              <h1 className={styles.heroTitle}>Build Your Career Where AI Meets Human Excellence</h1>
              <p className={styles.heroSub}>
                Join 50,000+ professionals shaping the future of intelligent outsourcing. Build a career with purpose, growth, and global impact.
              </p>
              
              <ul className={styles.checkList}>
                <li><CheckCircle2 size={18} color="var(--primary)"/> 50 global locations</li>
                <li><CheckCircle2 size={18} color="var(--primary)"/> Career growth paths</li>
                <li><CheckCircle2 size={18} color="var(--primary)"/> Learning & development</li>
                <li><CheckCircle2 size={18} color="var(--primary)"/> Inclusive culture</li>
              </ul>

              <div className={styles.heroBtns}>
                <Link href="#jobs" className={styles.btnPrimary}>Search Jobs &rarr;</Link>
                <button className={styles.btnSecondary}>Watch Our Story (2:45)</button>
              </div>
            </div>

            <div className={styles.heroVisualInner}>
              <div className={styles.heroVisual} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                    <span className={styles.statOverLab}>Satisfaction</span>
                  </div>
                </div>
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
               <strong style={{color:"var(--primary)"}}>{stat.value}</strong> {stat.label}
            </div>
          ))}
        </div>
      </div>

      {/* JOB SEARCH WIDGET */}
      <section className={styles.section} id="jobs">
        <div className="container">
          <div className={styles.searchWidget}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "2rem" }}>Find Your Perfect Role</h2>
            <div className={styles.searchInputs}>
              <div className={styles.inputWrap}>
                <Search size={18} />
                <input type="text" placeholder="Job title, skills..." className={styles.searchInput} />
              </div>
              <div className={styles.inputWrap}>
                <MapPin size={18} />
                <input type="text" placeholder="Location" className={styles.searchInput} />
              </div>
              <div className={styles.inputWrap}>
                <Briefcase size={18} />
                <select className={styles.searchInput} style={{ appearance: 'none' }}>
                  <option>All Departments</option>
                  <option>Technology</option>
                  <option>Operations</option>
                  <option>Sales</option>
                </select>
              </div>
              <button className={styles.btnPrimary}>Search</button>
            </div>
            
            <div className={styles.quickFilters}>
              {["Remote Only", "Entry Level", "Experienced", "Management", "Part-Time"].map(f => (
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
            <h2 className={styles.sectionTitle}>Why Join Our Team?</h2>
            <p className={styles.sectionSub}>More than a job – it's a career with purpose</p>
          </div>
          
          <div className={styles.propsGrid}>
            {[
              { t: "CAREER GROWTH", icon: <TrendingUp/>, list: ["Clear pathways","Mentorship","Promotions from within"] },
              { t: "GLOBAL OPPORTS", icon: <Globe/>, list: ["50 locations","International assignments","Cross-cultural exp"] },
              { t: "INCLUSIVE CULTURE", icon: <Users/>, list: ["Diversity & inclusion","100+ nationalities","Equal opportunity"] },
              { t: "WORK-LIFE BALANCE", icon: <Coffee/>, list: ["Flexible hours","Hybrid work","Mental health support"] }
            ].map((prop, i) => (
              <div key={i} className={styles.propCard}>
                <div className={styles.propIcon}>{prop.icon}</div>
                <h3>{prop.t}</h3>
                <ul className={styles.propList}>
                  {prop.list.map(l => <li key={l}>{l}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Explore Opportunities by Department</h2>
          </div>
          
          <div className={styles.deptGrid}>
            {careersData.departments.map((dept, i) => (
              <div key={i} className={styles.deptCard}>
                <div className={styles.deptHeader}>
                  <div className={styles.deptIcon}><IconMap name={dept.icon} size={24} /></div>
                  <h3>{dept.title}</h3>
                </div>
                <div className={styles.deptRoles}>
                  {dept.roles.map(r => <span key={r} className={styles.deptRole}>{r}</span>)}
                </div>
                <div className={styles.deptFooter}>
                  <span className={styles.deptCount}>{dept.openCount} open roles</span>
                  <Link href="#jobs" style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", textDecoration: "none" }}>View Jobs &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOT JOBS */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Hot Jobs Right Now</h2>
            <p className={styles.sectionSub}>Most popular openings this week</p>
          </div>
          
          <div className={styles.jobGrid}>
            {careersData.featuredJobs.map((job, i) => (
              <div key={i} className={styles.jobCard}>
                <div className={`${styles.jobBadge} ${styles[`badge${job.badge}`]}`}>{job.badge}</div>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <div className={styles.jobMeta}>
                  <span className={styles.jobMetaItem}><MapPin size={14}/> {job.location}</span>
                  <span className={styles.jobMetaItem}><Briefcase size={14}/> {job.department}</span>
                  <span className={styles.jobMetaItem}><Coffee size={14}/> {job.type}</span>
                </div>
                <div className={styles.jobSalary}>{job.salary}</div>
                <div className={styles.jobActions}>
                  <button className={styles.jobBtn}>Apply Now</button>
                  <button className={styles.saveBtn}><HeartPulse size={16}/></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (ENHANCED) */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Hear From Our Team</h2>
            <p className={styles.sectionSub}>Real stories from real people</p>
          </div>

          <div style={{ background: "#000", borderRadius: "24px", height: "500px", marginBottom: "4rem", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
             <div style={{ position: "relative", zIndex: 1, textAlign: "center", color: "white" }}>
                <div style={{ background: "var(--primary)", width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", cursor: "pointer" }}>
                  <TrendingUp size={32} style={{ transform: "rotate(90deg)" }} />
                </div>
                <h3 style={{ fontSize: "2rem" }}>"From Agent to Director: My 8-Year Journey"</h3>
                <p>Maria Santos, Operations Director, Manila</p>
             </div>
          </div>
          
          <div className={styles.propsGrid} style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {careersData.testimonials.map((t, i) => (
              <div key={i} className={styles.propCard} style={{ textAlign: "center" }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#e2e8f0", margin: "0 auto 1.5rem" }} />
                <p style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>"{t.quote}"</p>
                <div style={{ color: "#fbbf24", marginBottom: "0.5rem" }}>★★★★★</div>
                <h4 style={{ fontWeight: 800 }}>{t.name}</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{t.role} | Joined {t.joined}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE AT COMPANY (GALLERY) */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Life at Claritiy</h2>
          </div>
          <div className={styles.galleryGrid}>
            {careersData.lifeAtCompany.map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <img src={img.url} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVERSITY & INCLUSION */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.diversityGrid}>
            <div>
              <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>Diversity is Our Strength</h2>
              <p className={styles.heroSub}>
                We celebrate differences and foster belonging for all. We believe that diverse teams driving inclusive technology is the key to solving the world's most complex challenges.
              </p>
              
              <ul className={styles.checkList} style={{ gridTemplateColumns: "1fr", marginTop: "2rem" }}>
                <li><CheckCircle2 size={18} color="var(--primary)"/> Equal opportunity</li>
                <li><CheckCircle2 size={18} color="var(--primary)"/> Pay equity</li>
                <li><CheckCircle2 size={18} color="var(--primary)"/> Inclusive policies</li>
                <li><CheckCircle2 size={18} color="var(--primary)"/> ERGs & affinity groups</li>
                <li><CheckCircle2 size={18} color="var(--primary)"/> Unconscious bias training</li>
              </ul>
            </div>

            <div>
               <div className={styles.diversityMetrics}>
                  {careersData.diversity.metrics.map((m, i) => (
                    <div key={i} className={styles.metricCard}>
                      <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--primary)", display: "block" }}>{m.value}</span>
                      <span style={{ fontWeight: 700, opacity: 0.7 }}>{m.label}</span>
                    </div>
                  ))}
               </div>
               <div className={styles.diversityCerts}>
                  {careersData.diversity.certifications.map(c => (
                    <span key={c} className={styles.certBadge}>{c}</span>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS & EARLY CAREER */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Start Your Career With Us</h2>
            <p className={styles.sectionSub}>Programs for students and recent graduates</p>
          </div>

          <div className={styles.campusGrid}>
            {careersData.campus.map((prog, i) => (
              <div key={i} className={styles.campusCard}>
                <div className={styles.campusIcon}>
                  <IconMap name={prog.icon === "GraduationCap" ? "BookOpen" : prog.icon === "Zap" ? "TrendingUp" : "FileText"} size={32} />
                </div>
                <h3>{prog.title}</h3>
                <p style={{ color: "var(--text-muted)", margin: "1rem 0 1.5rem" }}>{prog.desc}</p>
                <div style={{ fontWeight: 700, color: "var(--primary)", marginBottom: "1.5rem" }}>{prog.count}</div>
                <button className={styles.btnPrimary} style={{ width: "100%" }}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Comprehensive Benefits Package</h2>
          </div>
          
          <div className={styles.beneHeader}>
            {careersData.benefits.map(b => (
              <button 
                key={b.category} 
                className={`${styles.beneTab} ${activeTab === b.category ? styles.active : ''}`}
                onClick={() => setActiveTab(b.category)}
              >
                {b.category}
              </button>
            ))}
          </div>

          <div className={styles.beneGrid}>
            {careersData.benefits.find(b => b.category === activeTab)?.items.map((item, i) => (
              <div key={i} className={`${styles.beneCard} ${i===0 ? styles.accent : ''}`}>
                <div className={styles.beneIconWrap}>
                  <IconMap name={careersData.benefits.find(b => b.category === activeTab)!.icon} size={28} />
                </div>
                <p style={{ fontWeight: 600, color: "var(--text-main)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Your Journey to Join Us</h2>
          </div>
          
          <div className={styles.timeline}>
            {[
              { s: "STEP 1", icon: <FileText/>, t: "Apply Online", d: "Submit resume & profile" },
              { s: "STEP 2", icon: <Search/>, t: "Review", d: "ATS and recruiter screening" },
              { s: "STEP 3", icon: <MessagesSquare/>, t: "Interview", d: "1-3 rounds virtual/in-person" },
              { s: "STEP 4", icon: <Award/>, t: "Assessment", d: "Skills test & background check" },
              { s: "STEP 5", icon: <User/>, t: "Offer", d: "Welcome to the team!" },
            ].map((step, i) => (
              <div key={i} className={styles.timeStep}>
                <div className={styles.timeIcon}>{step.icon}</div>
                <div className={styles.timeNum}>{i+1}</div>
                <div className={styles.timeTitle}>{step.t}</div>
                <div className={styles.timeDesc}>{step.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          </div>
          
          <div className={styles.faqGrid}>
            {careersData.faqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <div className={styles.faqQ} onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                  {faq.q}
                  {faqOpen === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                <AnimatePresence>
                  {faqOpen === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className={styles.faqA}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAY CONNECTED */}
      <section className={styles.section} style={{ background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)", color: "white" }}>
        <div className="container">
          <div className={styles.diversityGrid}>
            <div style={{ background: "rgba(255,255,255,0.1)", padding: "3rem", borderRadius: "24px", backdropFilter: "blur(10px)" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>TALENT COMMUNITY</h2>
              <p style={{ marginBottom: "2rem", opacity: 0.9 }}>Join our talent network and get personalized job alerts, company updates, and exclusive event invitations.</p>
              <div className={styles.searchInputs} style={{ gridTemplateColumns: "1fr auto" }}>
                <input type="email" placeholder="Enter your email" className={styles.searchInput} style={{ paddingLeft: "1.5rem" }} />
                <button className={styles.btnPrimary} style={{ background: "white", color: "var(--primary)" }}>Sign Up &rarr;</button>
              </div>
              <ul className={styles.checkList} style={{ gridTemplateColumns: "1fr 1fr", marginTop: "2rem", color: "white" }}>
                <li><CheckCircle2 size={18} /> Personalized alerts</li>
                <li><CheckCircle2 size={18} /> Career tips</li>
                <li><CheckCircle2 size={18} /> Company updates</li>
                <li><CheckCircle2 size={18} /> Exclusive events</li>
              </ul>
            </div>

            <div style={{ padding: "1rem 3rem" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "2rem" }}>FOLLOW US</h2>
              <p style={{ marginBottom: "2.5rem", opacity: 0.9 }}>Stay connected and see what it's really like to work at Claritiy. #LifeAtClaritiy #WeAreHiring</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { label: "LinkedIn", count: "50K followers", color: "#0077b5" },
                  { label: "Instagram", count: "25K followers", color: "#e4405f" },
                  { label: "Twitter", count: "15K followers", color: "#1da1f2" },
                  { label: "Facebook", count: "30K followers", color: "#1877f2" }
                ].map(social => (
                  <div key={social.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "0.75rem" }}>
                    <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>{social.label}</span>
                    <span style={{ opacity: 0.8 }}>{social.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.section} style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "2rem", color: "var(--text-main)" }}>Ready to Start Your Journey?</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
             <button className={styles.btnSecondary} style={{ padding: "1rem 3rem" }}>Talk to Recruiter</button>
             <button className={styles.btnPrimary} style={{ padding: "1rem 3rem" }}>Search All Jobs</button>
          </div>
        </div>
      </section>

    </div>
  );
}
