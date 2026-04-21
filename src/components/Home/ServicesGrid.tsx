"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Headset, 
  MessageSquare, 
  ShieldCheck, 
  LayoutDashboard, 
  Coins, 
  Users, 
  Database, 
  Globe,
  ArrowRight,
  Zap
} from "lucide-react";
import { BPOEnterpriseCard } from "../Shared/BPOEnterpriseCard";
import Image from "next/image";

const solutions = [
  { 
    title: "Omnichannel CX", 
    icon: <Headset size={24} />, 
    desc: "AI-augmented customer journeys with real-time sentiment mapping and 0.4s agent assistance.",
    metric: "99.2% NPS",
    img: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800",
    color: "var(--electric-blue)"
  },
  { 
    title: "Technical Engineering", 
    icon: <MessageSquare size={24} />, 
    desc: "L1-L3 technical support powered by predictive troubleshooting and automated ticket routing.",
    metric: "45% MTTR",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    color: "var(--cyan-accent)"
  },
  { 
    title: "Trust & Safety", 
    icon: <ShieldCheck size={24} />, 
    desc: "High-tier content moderation and identity verification using neural compliance oversight.",
    metric: "Zero Breach",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    color: "var(--emerald-green)"
  },
  { 
    title: "Intelligent Back-Office", 
    icon: <Database size={24} />, 
    desc: "Autonomous workflow orchestration for complex invoice processing and document extraction.",
    metric: "99.9% Accuracy",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    color: "var(--sunrise-amber)"
  },
  { 
    title: "Financial Engineering", 
    icon: <Coins size={24} />, 
    desc: "SOC 2 compliant procure-to-pay and order-to-cash operations with AI auditing.",
    metric: "30% Lower OPEX",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    color: "var(--teal-accent)"
  },
  { 
    title: "Strategic Talent AI", 
    icon: <Users size={24} />, 
    desc: "Global recruitment and workforce management powered by semantic skill matching.",
    metric: "14-Day Cycle",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2959441?auto=format&fit=crop&q=80&w=800",
    color: "var(--electric-blue-deep)"
  }
];

export function ServicesGrid() {
  return (
    <section style={{ padding: "128px 0", background: "var(--soft-gray)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem" }}>
          <div style={{ maxWidth: "700px" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ color: "var(--electric-blue)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px", marginBottom: "1rem" }}
            >
              Enterprise Solutions
            </motion.div>
            <h2 style={{ fontSize: "52px", lineHeight: 1.2, fontWeight: 700 }}>
              Autonomous Engines for <br />
              <span style={{ color: "var(--electric-blue)" }}>Global Scale.</span>
            </h2>
          </div>
          <button className="btn-premium btn-primary">
            Architecture Catalog <ArrowRight size={20} />
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2.5rem" }}>
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BPOEnterpriseCard elevation={3} intensity={15}>
                <div style={{ height: "450px", display: "flex", flexDirection: "column" }}>
                  <div style={{ height: "200px", position: "relative", borderRadius: "8px", overflow: "hidden", marginBottom: "2rem" }}>
                    <Image src={sol.img} alt={sol.title} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: "1rem", left: "1rem", padding: "6px 12px", background: "var(--white)", borderRadius: "100px", display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 800, color: sol.color, boxShadow: "var(--shadow-level-2)" }}>
                       <Zap size={12} /> AI OPERATING
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div style={{ color: sol.color }}>{sol.icon}</div>
                    <h3 style={{ fontSize: "24px", fontWeight: 700 }}>{sol.title}</h3>
                  </div>

                  <p style={{ color: "var(--medium-gray)", fontSize: "16px", lineHeight: 1.6, flexGrow: 1 }}>
                    {sol.desc}
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem", borderTop: "1px solid var(--border)", marginTop: "1rem" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "14px", fontWeight: 700, color: "var(--charcoal-deep)" }}>
                      {sol.metric}
                    </div>
                    <div style={{ color: "var(--electric-blue)", fontWeight: 800, display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                      Specs <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </BPOEnterpriseCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
