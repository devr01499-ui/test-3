"use client";

import React from "react";
import { 
  Globe, 
  Users, 
  MessageSquare, 
  ArrowRight,
  MapPin
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./PresenceMap.module.css";

const regions = [
  { name: "North America", count: "5 centers" },
  { name: "Latin America", count: "8 centers" },
  { name: "Europe", count: "6 centers" },
  { name: "MEA", count: "4 centers" },
  { name: "Asia Pacific", count: "12 centers" },
  { name: "India", count: "15 centers" },
];

const mainStats = [
  { label: "Locations", value: "50", icon: Globe },
  { label: "Employees", value: "50,000+", icon: Users },
  { label: "Languages", value: "50+", icon: MessageSquare },
];

// Simplified Pin Positions (Percentage Based)
const pins = [
  { x: "20%", y: "30%" }, // NA
  { x: "30%", y: "70%" }, // LA
  { x: "48%", y: "25%" }, // EU
  { x: "55%", y: "45%" }, // MEA
  { x: "75%", y: "40%" }, // Asia
  { x: "70%", y: "55%" }, // India
  { x: "85%", y: "75%" }, // AU
];

export function PresenceMap() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Global Reach, Local Expertise
        </motion.h2>

        <div className={styles.mapContainer}>
          {/* MOCK WORLD MAP BACKGROUND */}
          <svg className={styles.mapSVG} viewBox="0 0 1000 500">
            <path d="M150,150 Q200,100 300,150 T450,200 T600,150 T800,200 T900,150" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M200,300 Q250,350 350,300 T500,350 T700,300 T850,350" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>

          {/* PULSING PINS */}
          {pins.map((pin, i) => (
            <div 
              key={i}
              style={{ position: "absolute", left: pin.x, top: pin.y }}
              className={styles.pin}
            >
              <motion.div 
                animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className={styles.pinPulse}
                style={{ position: "absolute", width: "30px", height: "30px", borderRadius: "50%", left: "-15px", top: "-15px" }}
              />
              <motion.div className={styles.pinCore} style={{ width: "8px", height: "8px", borderRadius: "50%", position: "relative" }} />
            </div>
          ))}

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mapOverlay}
          >
            {regions.map((region) => (
              <div key={region.name} className={styles.regionItem}>
                <span>{region.name}</span>
                <span className={styles.regionCount}>{region.count}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className={styles.presenceStats}>
          {mainStats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.statItem}
            >
              <div className={styles.statIcon}>
                <stat.icon size={28} />
              </div>
              <div className={styles.statVal}>{stat.value}</div>
              <div className={styles.statLab}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.primaryCTA}>
            Explore All Locations <ArrowRight size={18} />
          </button>
          <button className={styles.secondaryCTA}>
            Take Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
}
