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
    <section className={styles.hero} style={{ position: "relative", overflow: "hidden" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.15,
          pointerEvents: "none"
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className={`${styles.heroInner} container`} style={{ position: "relative", zIndex: 1 }}>
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
            {/* BRAIN/AI NODE ANIMATION (SIMULATED) */}
            <svg viewBox="0 0 500 500" className={styles.aiGraphic}>
              {/* Central AI Node */}
              <motion.circle 
                cx="250" cy="250" r="40" 
                fill="var(--primary)" 
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }} 
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Connecting Lines & Nodes */}
              {[...Array(8)].map((_, i) => (
                <g key={i}>
                  <motion.line 
                    x1="250" y1="250" 
                    x2={250 + 150 * Math.cos(i * (Math.PI / 4))} 
                    y2={250 + 150 * Math.sin(i * (Math.PI / 4))}
                    stroke="var(--primary)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ duration: 2, delay: i * 0.2 }}
                  />
                  <motion.circle 
                    cx={250 + 150 * Math.cos(i * (Math.PI / 4))} 
                    cy={250 + 150 * Math.sin(i * (Math.PI / 4))} 
                    r="6" 
                    fill="var(--secondary)"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  />
                </g>
              ))}

              {/* Data Flow Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.circle 
                  key={`p-${i}`}
                  r="2"
                  fill="var(--primary)"
                  animate={{ 
                    cx: [250, 250 + 200 * Math.cos(i * (Math.PI / 6))],
                    cy: [250, 250 + 200 * Math.sin(i * (Math.PI / 6))],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
            </svg>

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
