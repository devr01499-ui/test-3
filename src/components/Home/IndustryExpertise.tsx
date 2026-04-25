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
import { BPOEnterpriseCard } from "../Shared/BPOEnterpriseCard";
import { GeometricDivider } from "../Shared/GeometricDivider";
import Image from "next/image";

const industries = [
  { name: "Healthcare & Life Sciences", icon: <HeartPulse size={24} />, desc: "High-precision clinical data integrity, HIPAA-compliant patient cycle automation, and specialized RCM scaling.", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800", color: "var(--electric-blue)" },
  { name: "Global Finance & Banking", icon: <Landmark size={24} />, desc: "Regulatory-grade transaction support, autonomous auditing frameworks, and secure end-to-end financial reconciliation.", img: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800", color: "var(--emerald-green)" },
  { name: "E-commerce & High-Growth Retail", icon: <ShoppingCart size={24} />, desc: "AI-driven supply chain orchestration, predictive demand planning, and omnichannel customer lifetime value optimization.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", color: "var(--sunrise-amber)" },
  { name: "Enterprise Tech & SaaS", icon: <Laptop size={24} />, desc: "Neural dev-ops assistance, proactive level 3 engineering support, and specialized churn mitigation strategies.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", color: "var(--cyan-accent)" },
  { name: "Global Telecom & Infrastructure", icon: <PhoneCall size={24} />, desc: "Real-time network optimization, autonomous billing reconciliation, and mission-critical 5G support workflows.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800", color: "var(--electric-blue-deep)" },
  { name: "Insurance & Risk Management", icon: <ShieldCheck size={24} />, desc: "Automated underwriting engines, deep-learning fraud detection, and high-precision claims life-cycle management.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800", color: "var(--emerald-vibrant)" },
];

export function IndustryExpertise() {
  return (
    <section style={{ padding: "128px 0", background: "var(--white)", position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: "var(--electric-blue)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px", marginBottom: "1rem" }}
          >
            Domain Intelligence
          </motion.div>
          <h2 style={{ fontSize: "52px", color: "var(--charcoal-deep)", fontWeight: 700 }}>
            Specialized in <span style={{ color: "var(--electric-blue)" }}>Enterprise Scale.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "2.5rem" }}>
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BPOEnterpriseCard elevation={3} intensity={12}>
                <div style={{ height: "420px", display: "flex", flexDirection: "column" }}>
                   <div style={{ height: "180px", position: "relative", borderRadius: "8px", overflow: "hidden", marginBottom: "2rem" }}>
                      <Image 
                        src={ind.img} 
                        alt={ind.name} 
                        fill 
                        style={{ objectFit: "cover", opacity: 0.9 }} 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15, 23, 42, 0.6), transparent)" }} />
                   </div>
                   
                   <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", alignItems: "center" }}>
                      <div style={{ color: ind.color }}>{ind.icon}</div>
                      <h3 style={{ fontSize: "22px", fontWeight: 700 }}>{ind.name}</h3>
                   </div>

                   <p style={{ color: "var(--medium-gray)", fontSize: "16px", lineHeight: 1.6, flexGrow: 1 }}>
                     {ind.desc}
                   </p>

                   <div style={{ marginTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <button className="btn-premium" style={{ padding: "0.5rem 0", color: ind.color, border: "none" }}>
                         Industry Brief <ArrowRight size={16} />
                      </button>
                      <div style={{ height: "8px", width: "8px", background: ind.color, borderRadius: "50%" }} />
                   </div>
                </div>
              </BPOEnterpriseCard>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "5rem" }}>
           <button className="btn-premium btn-primary" style={{ background: "var(--charcoal-deep)" }}>
              View All 25+ Industry Solutions
           </button>
        </div>
      </div>
      
      <div style={{ marginTop: "120px" }}>
        <GeometricDivider type="slant-up" color="var(--soft-gray)" height="100px" />
      </div>
    </section>
  );
}

