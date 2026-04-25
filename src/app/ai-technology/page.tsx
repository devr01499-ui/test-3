"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain, MessageSquare, BarChart3, Eye, Heart, GitBranch,
  Workflow, ShieldCheck, Mic, BookOpen, ArrowRight, CheckCircle,
  Cpu, Sparkles, Zap, Users, Bot, Target, FlaskConical,
  FileText, Award, Rocket
} from "lucide-react";
import styles from "./technology.module.css";
import Image from "next/image";

/* ── AI Capabilities Data ── */
const capabilities = [
  {
    slug: "conversational-ai",
    title: "Conversational AI",
    icon: <MessageSquare size={28} />,
    features: ["NLP Processing", "Intent Analysis", "Multi-language", "Context Aware", "Voice & Text"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    slug: "predictive-analytics",
    title: "Predictive Analytics",
    icon: <BarChart3 size={28} />,
    features: ["Demand Forecast", "Trend Analysis", "Risk Scoring", "Customer Churn", "WFM Optimization"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    icon: <Eye size={28} />,
    features: ["Document OCR", "Image Recognition", "ID Verification", "Quality Inspection", "Content Moderation"],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    slug: "sentiment-analysis",
    title: "Sentiment Analysis",
    icon: <Heart size={28} />,
    features: ["Real-time Mood", "Call Analysis", "Escalation Flags", "CSAT Prediction", "Trend Detection"],
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    slug: "intelligent-routing",
    title: "Intelligent Routing",
    icon: <GitBranch size={28} />,
    features: ["Skill Matching", "Workload Balance", "Priority Queue", "AI + Human Mix", "SLA Optimization"],
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    slug: "process-automation",
    title: "Process Automation",
    icon: <Workflow size={28} />,
    features: ["RPA Integration", "Data Extraction", "Form Processing", "Workflow Automation", "Report Generation"],
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  },
  {
    slug: "quality-ai",
    title: "Quality AI",
    icon: <ShieldCheck size={28} />,
    features: ["Auto Call Eval", "Compliance Check", "Performance Scoring", "Training Gaps", "Calibration AI"],
    gradient: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)",
  },
  {
    slug: "speech-analytics",
    title: "Speech Analytics",
    icon: <Mic size={28} />,
    features: ["Transcription", "Voice Biometric", "Keyword Spotting", "Emotion Detect", "Language Detect"],
    gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
  },
  {
    slug: "knowledge-management",
    title: "Knowledge Management AI",
    icon: <BookOpen size={28} />,
    features: ["Auto-tagging", "Content Search", "Suggest Articles", "Gap Analysis", "Auto-updates"],
    gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
  },
];

/* ── Collaboration Flow Steps ── */
const flowSteps = [
  { label: "Customer Contact", icon: <Users size={20} />, desc: "Incoming inquiry via any channel" },
  { label: "AI Analysis", icon: <Brain size={20} />, desc: "Intent • Sentiment • Context • History" },
  { label: "Smart Routing", icon: <GitBranch size={20} />, desc: "AI decides: automate or escalate" },
  { label: "Resolution", icon: <CheckCircle size={20} />, desc: "AI monitors, learns, & improves" },
];

/* ── Tech Partners ── */
const partners = [
  { name: "IBM Watson", icon: <Cpu size={24} /> },
  { name: "Google AI", icon: <Sparkles size={24} /> },
  { name: "AWS AI/ML", icon: <Zap size={24} /> },
  { name: "Microsoft Azure AI", icon: <Bot size={24} /> },
  { name: "OpenAI", icon: <Brain size={24} /> },
  { name: "Hugging Face", icon: <Heart size={24} /> },
];

/* ── Innovation Lab Items ── */
const labItems = [
  { title: "GPT-Powered Agent Assist", desc: "Real-time response suggestions for live agents using fine-tuned large language models.", icon: <Bot size={24} /> },
  { title: "Emotion-Aware Routing", desc: "Route frustrated callers to senior agents instantly using real-time vocal analysis.", icon: <Heart size={24} /> },
  { title: "Autonomous QA Engine", desc: "100% interaction scoring with zero human auditor involvement and drift detection.", icon: <ShieldCheck size={24} /> },
  { title: "Predictive Staffing", desc: "ML-based workforce forecasting that reduces overstaffing by 30% while maintaining SLAs.", icon: <Target size={24} /> },
];

/* ── Case Studies ── */
const caseStudies = [
  { industry: "Healthcare", metric: "40% faster claims", desc: "Computer Vision OCR reduced manual review cycles by automating document classification across 2M+ claims annually.", gradient: "linear-gradient(135deg, #667eea, #764ba2)" },
  { industry: "E-commerce", metric: "92% auto-resolution", desc: "Conversational AI chatbot handles 92% of tier-1 inquiries without human intervention across 14 languages.", gradient: "linear-gradient(135deg, #f093fb, #f5576c)" },
  { industry: "Banking", metric: "60% cost reduction", desc: "Intelligent routing combined with sentiment analysis cut average handle time by 45 seconds per interaction.", gradient: "linear-gradient(135deg, #4facfe, #00f2fe)" },
];

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.0, 0.0, 0.2, 1] as const } }),
};

const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

export default function AITechnologyPage() {
  return (
    <div className={styles.page}>

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          {/* Left Content */}
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className={styles.heroBadge}>
              <Brain size={18} />
              <span>Enterprise AI Platform</span>
            </div>

            <h1 className={styles.heroTitle}>
              Enterprise AI Platform <span className={styles.heroAccent}>for BPO</span>
            </h1>

            <p className={styles.heroSub}>
              Transforming operations with intelligent automation, predictive analytics, and human-in-the-loop AI that delivers measurable ROI from day one.
            </p>

            <ul className={styles.heroBullets}>
              {["10+ AI capabilities", "99.5% accuracy rate", "Real-time learning", "Human-in-the-loop"].map((b, i) => (
                <motion.li key={i} custom={i} variants={fadeUp} initial="hidden" animate="visible">
                  <CheckCircle size={18} className={styles.bulletIcon} /> {b}
                </motion.li>
              ))}
            </ul>

            <div className={styles.heroCtas}>
              <Link href="#capabilities" className={styles.btnPrimary}>
                Explore Platform <ArrowRight size={18} />
              </Link>
              <button className={styles.btnSecondary}>
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right Visualization */}
          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.neuralOrb}>
              <div className={styles.orbRing} />
              <div className={styles.orbRing2} />
              <div className={styles.orbRing3} />
              <Brain size={64} className={styles.orbIcon} />
            </div>

            <div className={styles.poweredBy}>
              <span className={styles.poweredLabel}>POWERED BY</span>
              <div className={styles.partnerLogos}>
                {["IBM Watson", "Google AI", "AWS AI", "Custom Models"].map((p) => (
                  <div key={p} className={styles.partnerChip}>{p}</div>
                ))}
              </div>
            </div>

            {/* Floating data nodes */}
            {["Neural Networks", "NLP Engine", "Computer Vision", "ML Pipeline"].map((label, i) => (
              <motion.div
                key={label}
                className={styles.floatingNode}
                style={{ "--node-index": i } as React.CSSProperties}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI CAPABILITIES */}
      <section id="capabilities" className={styles.section} style={{ background: "var(--background)" }}>
        <div className="container">
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className={styles.sectionTitle} style={{ fontSize: "3.5rem", fontWeight: 900 }}>Enterprise AI <span style={{ color: "var(--primary)" }}>Engines</span></h2>
            <p className={styles.sectionSub} style={{ fontWeight: 600, color: "var(--text-main)" }}>Nine purpose-built AI engines working in concert to transform every facet of your BPO operations.</p>
          </motion.div>

          <motion.div className={styles.capGrid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {capabilities.map((cap, i) => (
              <div key={cap.slug} className="card-3d-wrapper" style={{ height: "450px" }}>
                <motion.div 
                  custom={i} 
                  variants={fadeUp}
                  whileHover={{ rotateY: 8, rotateX: -4, scale: 1.05 }}
                  className={`card-3d-content ${styles.capCard}`}
                  style={{ border: "1px solid var(--border)", position: "relative" }}
                >
                  <Image 
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1677442136019-21780ecad995' : i === 1 ? '1551288049-bebda4e38f71' : i === 2 ? '1519389950473-47ba0277781c' : '1485827404703-89b55fcc595e'}?auto=format&fit=crop&q=80&w=800`}
                    alt={cap.title}
                    fill
                    className="card-image-bg"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8, 47, 73, 0.4) 0%, rgba(8, 47, 73, 0.9) 100%)", zIndex: 1 }} />
                  
                  <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", padding: "2rem", color: "white" }}>
                    <div className={styles.capIconWrap} style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)", marginBottom: "auto" }}>
                      {cap.icon}
                    </div>
                    <h3 className={styles.capTitle} style={{ color: "white", fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem" }}>{cap.title}</h3>
                    <ul className={styles.capFeatures} style={{ marginBottom: "1.5rem" }}>
                      {cap.features.map((f) => (
                        <li key={f} style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
                          <span className={styles.featureDot} style={{ background: "var(--primary)" }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/ai-technology/${cap.slug}`} className={styles.capLink} style={{ color: "var(--secondary)", fontWeight: 800 }}>
                      Architecture Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI INNOVATION LAB */}
      <section className={styles.labSection} style={{ background: "var(--surface)" }}>
        <div className="container">
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className={styles.labBadge} style={{ background: "var(--primary)", color: "white", border: "none" }}><FlaskConical size={18} /> RESEARCH & DEVELOPMENT</div>
            <h2 className={styles.sectionTitle}>AI Innovation Lab</h2>
            <p className={styles.sectionSub} style={{ fontWeight: 700, color: "var(--text-main)" }}>Next-generation initiatives bridging the gap between research and production.</p>
          </motion.div>

          <motion.div className={styles.labGrid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {labItems.map((item, i) => (
              <div key={item.title} className="card-3d-wrapper" style={{ height: "300px" }}>
                <motion.div 
                  custom={i} 
                  variants={fadeUp} 
                  whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
                  className={`card-3d-content ${styles.labCard}`}
                  style={{ background: "white", border: "1px solid var(--border)", padding: "2rem" }}
                >
                  <div className={styles.labIcon} style={{ background: "var(--surface)", color: "var(--primary)", border: "1px solid var(--border)" }}>{item.icon}</div>
                  <h4 style={{ fontWeight: 800, color: "var(--text-main)", fontSize: "1.1rem" }}>{item.title}</h4>
                  <p style={{ fontWeight: 500, color: "var(--text-muted)", fontSize: "0.9rem" }}>{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ AI CASE STUDIES ═══════════════════ */}
      <section className={styles.section}>
        <div className="container">
          <motion.div className={styles.sectionHeader} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className={styles.sectionTitle}>AI Case Studies</h2>
            <p className={styles.sectionSub}>Real-world AI implementation success stories from our enterprise clients.</p>
          </motion.div>

          <motion.div className={styles.caseGrid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {caseStudies.map((cs, i) => (
              <motion.div key={cs.industry} custom={i} variants={fadeUp} className={styles.caseCard}>
                <div className={styles.caseBanner} style={{ background: cs.gradient }}>
                  <span className={styles.caseIndustry}>{cs.industry}</span>
                  <span className={styles.caseMetric}>{cs.metric}</span>
                </div>
                <div className={styles.caseBody}>
                  <p>{cs.desc}</p>
                  <Link href="#" className={styles.caseLink}>
                    Read Full Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className={styles.ctaSection}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Rocket size={40} style={{ color: "white", marginBottom: "1.5rem" }} />
            <h2 className={styles.ctaTitle}>Ready to Transform Your Operations with AI?</h2>
            <p className={styles.ctaSub}>Schedule a personalized demo to see our AI platform in action with your data.</p>
            <div className={styles.ctaBtns}>
              <button className={styles.ctaBtnPrimary}>Schedule AI Demo</button>
              <button className={styles.ctaBtnSecondary}>Download AI Whitepaper</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
