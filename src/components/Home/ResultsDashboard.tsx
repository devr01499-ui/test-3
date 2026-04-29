"use client";
import React from "react";
import { 
  BarChart3, 
  Star, 
  Activity, 
  Zap, 
  Globe, 
  Users, 
  Target, 
  ShieldCheck, 
  Cpu,
  TrendingUp 
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ResultsDashboard.module.css";
import { BPOEnterpriseCard } from "../Shared/BPOEnterpriseCard";
import { GeometricDivider } from "../Shared/GeometricDivider";
import { VideoBackground } from "../Shared/VideoBackground";

const performanceMetrics = [
  { label: "Predictive First-Contact Resolution", value: "95%+", icon: <Zap size={20} />, color: "var(--electric-blue)" },
  { label: "Neural Sentiment Accuracy", value: "98.8%", icon: <Activity size={20} />, color: "var(--emerald-green)" },
  { label: "System Cognitive Latency", value: "0.4s", icon: <Cpu size={20} />, color: "var(--cyan-accent)" },
  { label: "Global Redundancy & Uptime", value: "99.99%", icon: <Globe size={20} />, color: "var(--electric-blue-deep)" },
  { label: "Institutional Security", value: "SOC 2 II", icon: <ShieldCheck size={20} />, color: "var(--amber-deep)" },
  { label: "Elastic Infrastructure Scale", value: "On-Demand", icon: <TrendingUp size={20} />, color: "var(--sunrise-amber)" },
  { label: "Client Satisfaction (CSAT)", value: "99.2%", icon: <Star size={20} />, color: "var(--electric-blue)" },
  { label: "Strategic Intelligence Factor", value: "Top 1%", icon: <Users size={20} />, color: "var(--emerald-vibrant)" },
];

export function ResultsDashboard() {
  return (
    <section style={{ padding: "0 0 128px 0", background: "var(--white)", position: "relative" }}>
      <GeometricDivider type="slant-up" color="var(--white)" height="100px" flip />
      
      <div className="container" style={{ marginTop: "4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: "var(--electric-blue)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px", marginBottom: "1rem" }}
          >
            Performance Intelligence
          </motion.div>
          <h2 style={{ fontSize: "52px", fontWeight: 700, color: "var(--charcoal-deep)" }}>
            Our Operating <span style={{ color: "var(--electric-blue)" }}>Metrics.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {performanceMetrics.map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <BPOEnterpriseCard elevation={2} intensity={8}>
                <div style={{ padding: "1rem", textAlign: "center" }}>
                  <div style={{ color: metric.color, marginBottom: "1.5rem", display: "flex", justifyContent: "center" }}>
                    {metric.icon}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "2.5rem", fontWeight: 700, color: "var(--charcoal-deep)", marginBottom: "0.5rem" }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "var(--medium-gray)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {metric.label}
                  </div>
                  <div style={{ height: "2px", width: "40px", background: metric.color, margin: "1.5rem auto 0", borderRadius: "2px" }} />
                </div>
              </BPOEnterpriseCard>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM METRIC STRIP */}
        <div style={{ marginTop: "5rem", padding: "3rem", background: "transparent", borderRadius: "12px", border: "1px solid var(--border)", display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap: "2rem", position: "relative", overflow: "hidden" }}>
           <VideoBackground opacity={0.3} />
           <div style={{ display: "flex", alignItems: "center", gap: "1rem", position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "14px", fontWeight: 800, color: "var(--white)" }}>TRUSTED BY FORTUNE 500</div>
              <div style={{ height: "1px", width: "100px", background: "rgba(255,255,255,0.2)" }} />
           </div>
           <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 600, position: "relative", zIndex: 1 }}>HIPAA COMPLIANT</div>
           <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 600, position: "relative", zIndex: 1 }}>PCI DSS LEVEL 1</div>
           <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 600, position: "relative", zIndex: 1 }}>ISO 27001</div>
        </div>
      </div>
    </section>
  );
}
