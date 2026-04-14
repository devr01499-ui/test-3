"use client";

import React from "react";
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  ChevronDown, 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  HeartPulse,
  Users,
  Globe,
  Star,
  Zap,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const trustBadges = [
  { icon: ShieldCheck, name: "ISO 27001" },
  { icon: Lock, name: "SOC2 TYPE 2" },
  { icon: UserCheck, name: "GDPR" },
  { icon: HeartPulse, name: "HIPAA" },
];

const mainStats = [
  { label: "Global Clients", value: "500+" },
  { label: "Countries", value: "45" },
  { label: "CSAT Score", value: "99.2%" },
  { label: "Operations", value: "24/7" },
  { label: "Languages", value: "50+" },
];

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroInner} container`}>
        {/* LEFT CONTENT */}
        <div className={styles.leftContent}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.eyebrow}
          >
            <Sparkles size={16} />
            <span>AI-Powered BPO</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.title}
          >
            Transform Business Operations with <span className={styles.gradientText}>Intelligence</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.subheading}
          >
            50,000+ AI-augmented professionals delivering excellence across 45 countries. 
            The future of intelligent outsourcing is here.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.heroActions}
          >
            <button className={styles.primaryBtn}>
              Get Started <ArrowRight size={20} />
            </button>
            <button className={styles.secondaryBtn}>
              <Play size={20} fill="currentColor" />
              Watch Demo (2:30)
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className={styles.scrollIndicator}
            style={{ marginTop: "4rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.875rem" }}
          >
            <ChevronDown className="animate-bounce" size={16} />
            Scroll for more
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className={styles.rightVisual}>
          <div className={styles.visualContainer}>
            {/* HERO VIDEO INSTEAD OF SVG */}
            <motion.div 
              style={{
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                position: "relative"
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  background: "var(--surface)"
                }}
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              
              {/* Optional clean overlay gradient */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)",
                pointerEvents: "none"
              }} />
            </motion.div>

            {/* TRUST BADGES OVERLAY */}
            <div className={styles.trustOverlay}>
              {trustBadges.map((badge, i) => (
                <motion.div 
                  key={badge.name}
                  className={styles.badgeCard}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                >
                  <badge.icon className={styles.badgeIcon} size={24} />
                  <span className={styles.badgeName}>{badge.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING STATS BAR */}
      <div className={styles.statsBar}>
        <div className={`${styles.statsInner} container`}>
          {mainStats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
