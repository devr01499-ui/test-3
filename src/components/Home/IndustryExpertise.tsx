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
  { name: "Healthcare & Medical", icon: HeartPulse, clients: "500+ Clnts" },
  { name: "E-commerce & Retail", icon: ShoppingCart, clients: "850+ Clnts" },
  { name: "Banking & Finance", icon: Landmark, clients: "300+ Clnts" },
  { name: "Tech & SaaS", icon: Laptop, clients: "420+ Clnts" },
  { name: "Telecom", icon: PhoneCall, clients: "280+ Clnts" },
  { name: "Insurance", icon: ShieldCheck, clients: "350+ Clnts" },
  { name: "Education & E-Learning", icon: GraduationCap, clients: "150+ Clnts" },
  { name: "Utilities & Energy", icon: Zap, clients: "120+ Clnts" },
  { name: "Logistics", icon: Truck, clients: "240+ Clnts" },
  { name: "Media & Entertainment", icon: Clapperboard, clients: "180+ Clnts" },
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
            <motion.div 
              key={i} 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className={styles.iconBox}>
                <industry.icon size={28} />
              </div>
              <h3 className={styles.industryName}>{industry.name}</h3>
              <p className={styles.clientCount}>{industry.clients}</p>
              <a href="#" className={styles.exploreLink}>
                Explore <ArrowRight size={16} />
              </a>
            </motion.div>
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
