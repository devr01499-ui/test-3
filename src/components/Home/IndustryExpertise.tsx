"use client";

import React from "react";
import { 
  HeartPulse, 
  ShoppingCart, 
  Landmark, 
  Laptop, 
  PhoneCall, 
  ShieldCheck, 
  GraduationCap, 
  Zap, 
  Truck, 
  Clapperboard,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./IndustryExpertise.module.css";

const industries = [
  { name: "Healthcare & Medical", icon: HeartPulse, clients: "500+ Clnts", img: "https://loremflickr.com/600/600/healthcare,doctor/all?lock=51", glow: "hover-glow-1" },
  { name: "E-commerce & Retail", icon: ShoppingCart, clients: "850+ Clnts", img: "https://loremflickr.com/600/600/ecommerce,shopping/all?lock=52", glow: "hover-glow-2" },
  { name: "Banking & Finance", icon: Landmark, clients: "300+ Clnts", img: "https://loremflickr.com/600/600/bank,finance/all?lock=53", glow: "hover-glow-3" },
  { name: "Tech & SaaS", icon: Laptop, clients: "420+ Clnts", img: "https://loremflickr.com/600/600/technology,code/all?lock=54", glow: "hover-glow-4" },
  { name: "Telecom", icon: PhoneCall, clients: "280+ Clnts", img: "https://loremflickr.com/600/600/telecom,antenna/all?lock=55", glow: "hover-glow-5" },
  { name: "Insurance", icon: ShieldCheck, clients: "350+ Clnts", img: "https://loremflickr.com/600/600/insurance,protection/all?lock=56", glow: "hover-glow-1" },
  { name: "Education & E-Learning", icon: GraduationCap, clients: "150+ Clnts", img: "https://loremflickr.com/600/600/education,classroom/all?lock=57", glow: "hover-glow-2" },
  { name: "Utilities & Energy", icon: Zap, clients: "120+ Clnts", img: "https://loremflickr.com/600/600/energy,solar/all?lock=58", glow: "hover-glow-3" },
  { name: "Logistics", icon: Truck, clients: "240+ Clnts", img: "https://loremflickr.com/600/600/logistics,warehouse/all?lock=59", glow: "hover-glow-4" },
  { name: "Media & Entertainment", icon: Clapperboard, clients: "180+ Clnts", img: "https://loremflickr.com/600/600/entertainment,media/all?lock=60", glow: "hover-glow-5" },
];

export function IndustryExpertise() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Trusted Across Industries
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={styles.subtitle}
        >
          Deep domain expertise in 25+ sectors
        </motion.p>

        <div className={styles.grid}>
          {industries.map((industry, i) => (
            <div key={i} className="card-3d-wrapper" style={{ height: "220px" }}>
              <motion.div
                className={`card-3d-content ${styles.card}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotateY: 6, rotateX: -6, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.05 }}
                style={{ position: "relative", overflow: "hidden" }}
              >
                {/* Option A: full background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={industry.img} alt={industry.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
                <div className={industry.glow} style={{ position: "absolute", inset: 0, opacity: 0.4, zIndex: 1, mixBlendMode: "overlay" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,20,50,0.55) 0%, rgba(5,5,20,0.88) 100%)", zIndex: 2 }} />
                <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%", padding: "1.5rem" }}>
                  <div className={styles.iconBox} style={{ color: "white", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", marginBottom: "auto" }}>
                    <industry.icon size={28} />
                  </div>
                  <div>
                    <h3 className={styles.industryName} style={{ color: "white" }}>{industry.name}</h3>
                    <p className={styles.clientCount} style={{ color: "rgba(255,255,255,0.7)" }}>{industry.clients}</p>
                    <a href="#" className={styles.exploreLink} style={{ color: "rgba(255,255,255,0.9)" }}>
                      Explore <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.a 
          href="#" 
          className={styles.moreIndustries}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          +15 More Industries <ArrowRight size={18} style={{ verticalAlign: "middle" }} />
        </motion.a>
      </div>
    </section>
  );
}

