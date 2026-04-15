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

      {/* CTA */}
      <section className={styles.section} style={{ background: "var(--primary)", color: "white", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "2rem" }}>Ready to Start Your Journey?</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
             <button className={styles.btnSecondary} style={{ color: "white", borderColor: "white" }}>Talk to Recruiter</button>
             <button className={styles.btnPrimary} style={{ background: "white", color: "var(--primary)" }}>Search All Jobs</button>
          </div>
        </div>
      </section>

    </div>
  );
}
