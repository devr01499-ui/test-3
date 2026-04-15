"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Handshake,
  Presentation,
  Calculator,
  LifeBuoy,
  Users,
  Newspaper,
  Phone,
  Mail,
  MessagesSquare,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  MapPin,
  SendHorizontal
} from "lucide-react";
import { contactData } from "@/data/contact";
import styles from "./contact.module.css";

const IconMap = ({ name, size = 24 }: { name: string; size?: number }) => {
  const components: any = {
    Handshake,
    Presentation,
    Calculator,
    LifeBuoy,
    Users,
    Newspaper
  };
  const Icon = components[name] || MessagesSquare;
  return <Icon size={size} />;
};

export default function ContactPage() {
  const [formType, setFormType] = useState("New Business");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className={styles.page}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> <ChevronRight size={14} /> <span>Contact Us</span>
            </div>
            <h1 className={styles.heroTitle}>Let's <span style={{ color: "var(--primary)" }}>Connect</span></h1>
            <p className={styles.heroSub}>
              We're here to help you transform your operations with intelligent outsourcing and AI-powered solutions.
            </p>
            
            <ul className={styles.checkList}>
              <li><CheckCircle2 size={20} color="var(--primary)" /> 24/7 global response team</li>
              <li><CheckCircle2 size={20} color="var(--primary)" /> Presence in 50+ locations</li>
              <li><CheckCircle2 size={20} color="var(--primary)" /> Support in 50+ languages</li>
              <li><CheckCircle2 size={20} color="var(--primary)" /> Expert strategic consultation</li>
            </ul>

            <div className={styles.quickContact}>
              <div className={styles.quickItem}>
                <div className={styles.quickIcon}><Phone size={20}/></div>
                <div className={styles.quickText}>
                  <h4>Call Us</h4>
                  <p>+1-800-BPO-HELP</p>
                </div>
              </div>
              <div className={styles.quickItem}>
                <div className={styles.quickIcon}><Mail size={20}/></div>
                <div className={styles.quickText}>
                  <h4>Email Us</h4>
                  <p>sales@claritiy.com</p>
                </div>
              </div>
              <div className={styles.quickItem}>
                <div className={styles.quickIcon}><MessagesSquare size={20}/></div>
                <div className={styles.quickText}>
                  <h4>Live Chat</h4>
                  <p>Available 24/7</p>
                </div>
              </div>
              <div className={styles.quickItem}>
                <div className={styles.quickIcon}><Clock size={20}/></div>
                <div className={styles.quickText}>
                  <h4>Response Time</h4>
                  <p>&lt; 2 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.mapWrapper}>
               {/* Simplified SVG Map for Performance and Aesthetic */}
               <svg viewBox="0 0 800 400" className={styles.mapSvg} fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2">
                  <path d="M150,150 Q200,100 250,150 T350,150 T450,100 T550,150 T650,150" strokeDasharray="4 4" />
                  <circle cx="200" cy="150" r="2" fill="currentColor" />
                  <circle cx="400" cy="180" r="2" fill="currentColor" />
                  <circle cx="600" cy="140" r="2" fill="currentColor" />
               </svg>
               
               {/* HQ Pulse */}
               <div className={styles.pulse} style={{ top: '40%', left: '30%' }}></div>
               <div className={styles.pulse} style={{ top: '55%', left: '55%' }}></div>
               <div className={styles.pulse} style={{ top: '35%', left: '75%' }}></div>
               <div className={styles.pulse} style={{ top: '65%', left: '15%' }}></div>

               <div className={styles.mapPin} style={{ top: '35%', left: '25%' }}><MapPin size={24} fill="currentColor"/></div>
               <div className={styles.mapPin} style={{ top: '50%', left: '50%' }}><MapPin size={24} fill="currentColor"/></div>
               <div className={styles.mapPin} style={{ top: '30%', left: '70%' }}><MapPin size={24} fill="currentColor"/></div>

               <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem", background: "white", padding: "1rem", borderRadius: "12px", border: "1px solid var(--border)", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  <p><strong>Interactive Map:</strong> Our global centers are connected 24/7 ensuring seamless handover and continuous service delivery.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHOOS YOUR PATH SECTION */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How Can We Help You Today?</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>Choose the path that best matches your needs for the fastest response.</p>
          </div>

          <div className={styles.optionsGrid}>
            {contactData.options.map((opt, i) => (
              <motion.div 
                key={opt.id} 
                className={styles.optionCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.optionIcon}>
                  <IconMap name={opt.icon} size={32} />
                </div>
                <div className={styles.responseTag}>Response: {opt.responseTime}</div>
                <h3 className={styles.optionTitle}>{opt.title}</h3>
                <p className={styles.optionDesc}>{opt.description}</p>
                
                <div className={styles.bestFor}>
                   <div className={styles.bestTitle}>Best For:</div>
                   <ul className={styles.bestList}>
                      {opt.bestFor.map(item => <li key={item}>{item}</li>)}
                   </ul>
                </div>

                <Link href="#form" className={styles.ctaLink}>
                  {opt.cta} <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GENERAL CONTACT FORM */}
      <section className={styles.section} id="form">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>Fill out the form and we'll get back to you within 2 hours.</p>
          </div>

          <div className={styles.formContainer}>
            <form className={styles.formGrid} onSubmit={handleSubmit}>
              
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>I'm interested in: *</label>
                <div className={styles.radioGroup}>
                   {["New Business", "Partnership", "Support", "Careers", "Other"].map(type => (
                     <label key={type} className={styles.radioLabel}>
                        <input 
                          type="radio" 
                          name="interest" 
                          className={styles.radioInput} 
                          checked={formType === type}
                          onChange={() => setFormType(type)}
                        />
                        {type}
                     </label>
                   ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>First Name *</label>
                <input type="text" className={styles.input} placeholder="John" required />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Last Name *</label>
                <input type="text" className={styles.input} placeholder="Doe" required />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Business Email *</label>
                <input type="email" className={styles.input} placeholder="john@company.com" required />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <input type="tel" className={styles.input} placeholder="+1 (555) 000-0000" />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Company Name *</label>
                <input type="text" className={styles.input} placeholder="Acme Inc." required />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Job Title</label>
                <input type="text" className={styles.input} placeholder="Operations Director" />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Industry *</label>
                <select className={styles.select} required defaultValue="">
                   <option value="" disabled>Select Industry</option>
                   {contactData.dropdowns.industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Company Size *</label>
                <select className={styles.select} required defaultValue="">
                   <option value="" disabled>Select Size</option>
                   {contactData.dropdowns.companySizes.map(size => <option key={size} value={size}>{size}</option>)}
                </select>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Service(s) Interested In: * (Select all that apply)</label>
                <div className={styles.checkboxContainer}>
                   {contactData.dropdowns.services.map(svc => (
                     <label key={svc} className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkboxInput} /> {svc}
                     </label>
                   ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Preferred Contact Method: *</label>
                <div className={styles.radioGroup}>
                   {["Email", "Phone", "Video Call"].map(m => (
                     <label key={m} className={styles.radioLabel}>
                        <input type="radio" name="method" className={styles.radioInput} /> {m}
                     </label>
                   ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>When would you like to start? *</label>
                <select className={styles.select} required defaultValue="">
                   <option value="" disabled>Select Timeline</option>
                   <option>Immediately</option>
                   <option>Within 1-3 months</option>
                   <option>3-6 months</option>
                   <option>Just exploring</option>
                </select>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Tell us about your project: *</label>
                <textarea 
                  className={styles.textarea} 
                  rows={4} 
                  maxLength={500} 
                  placeholder="Tell us a bit about your requirements, goals, and any specific challenges you're looking to solve..."
                  required
                ></textarea>
                <div style={{ textAlign: "right", fontSize: "0.75rem", color: "var(--text-muted)" }}>0 / 500</div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>How did you hear about us?</label>
                <select className={styles.select} defaultValue="">
                   <option value="" disabled>Select Source</option>
                   {contactData.dropdowns.sources.map(src => <option key={src} value={src}>{src}</option>)}
                </select>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`} style={{ marginTop: "1rem" }}>
                 <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkboxInput} />
                    I'd like to receive updates and insights from Claritiy
                 </label>
                 <label className={styles.checkboxLabel} style={{ marginTop: "0.5rem" }}>
                    <input type="checkbox" className={styles.checkboxInput} required />
                    I agree to the Privacy Policy and Terms of Service *
                 </label>
              </div>

              <div className={styles.fullWidth}>
                <button type="submit" className={styles.submitBtn} disabled={submitted}>
                  {submitted ? "Message Sent!" : "Send Message"} <SendHorizontal size={20} />
                </button>
              </div>

              <div className={`${styles.formHeader} ${styles.fullWidth}`} style={{ marginTop: "1rem", opacity: 0.6 }}>
                 <ShieldCheck size={16} /> <span>Your information is secure and will never be shared.</span>
              </div>

            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
