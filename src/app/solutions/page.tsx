"use client";
import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Laptop, 
  HeadphonesIcon, 
  TrendingUp, 
  Layers, 
  Banknote, 
  Users, 
  Keyboard, 
  ShieldAlert, 
  MessageCircle, 
  ShoppingCart, 
  FileSignature,
  Zap,
  Cpu,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { BPOEnterpriseCard } from "@/components/Shared/BPOEnterpriseCard";
import { GeometricDivider } from "@/components/Shared/GeometricDivider";
import Image from "next/image";

const allSolutions = [
  { name: "Omnichannel CX", icon: <HeadphonesIcon size={24} />, path: "/solutions/customer-service", desc: "AI-augmented customer journeys with real-time sentiment mapping and 0.4s agent assistance.", img: "1534536281715-e28d76689b4d", color: "var(--electric-blue)" },
  { name: "Technical Support", icon: <Laptop size={24} />, path: "/solutions/technical-support", desc: "L1-L3 technical support powered by predictive troubleshooting and automated ticket routing.", img: "1517694712202-14dd9538aa97", color: "var(--cyan-accent)" },
  { name: "Sales & Telemarketing", icon: <TrendingUp size={24} />, path: "/solutions/sales-telemarketing", desc: "Accelerate revenue via predictive AI dialers and trained high-closer pods.", img: "1552581230-c817309701b1", color: "var(--sunrise-amber)" },
  { name: "Back Office Operations", icon: <Layers size={24} />, path: "/solutions/back-office-operations", desc: "Autonomous workflow orchestration for complex invoicing and document extraction.", img: "1450101499163-c8848c66ca85", color: "var(--emerald-green)" },
  { name: "Finance & Accounting", icon: <Banknote size={24} />, path: "/solutions/finance-accounting", desc: "SOC 2 compliant CPA operations with integrated AI auditing and spend analysis.", img: "1554224155-8d04cb21cd6c", color: "var(--teal-accent)" },
  { name: "Strategic Talent AI", icon: <Users size={24} />, path: "/solutions/hr-recruitment", desc: "Global recruitment and workforce management powered by semantic skill matching.", img: "1521791136064-7986c2959441", color: "var(--electric-blue-deep)" },
  { name: "Content Integrity", icon: <ShieldAlert size={24} />, path: "/solutions/content-moderation", desc: "High-tier content moderation and identity verification using neural compliance oversight.", img: "1563986768609-322da13575f3", color: "var(--emerald-vibrant)" },
  { name: "Order Architecture", icon: <ShoppingCart size={24} />, path: "/solutions/order-processing", desc: "Autonomous supply chain fulfillment administration and inventory choreography.", img: "1586528116311-ad99c7a61677", color: "var(--cyan-accent)" },
  { name: "Claims Engineering", icon: <FileSignature size={24} />, path: "/solutions/claims-processing", desc: "Rapid adjudication cycles via HIPAA-compliant medical and logistics claim engines.", img: "1505664194779-847a7ad0d26a", color: "var(--electric-blue)" }
];

export default function SolutionsIndex() {
  return (
    <div style={{ background: "var(--white)", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <section style={{ 
        padding: "160px 0 120px 0", 
        background: "var(--charcoal-deep)", 
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Geometric Mesh Overlay */}
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          opacity: 0.1, 
          backgroundImage: "linear-gradient(var(--electric-blue) 1px, transparent 1px), linear-gradient(90deg, var(--electric-blue) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} />
        
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}
          >
            <div style={{ color: "var(--electric-blue)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "3px", fontSize: "14px", marginBottom: "1.5rem" }}>
              Enterprise Operations
            </div>
            <h1 style={{ fontSize: "72px", lineHeight: 1, fontWeight: 700, color: "var(--white)", marginBottom: "2rem" }}>
              Global <span style={{ color: "var(--electric-blue)" }}>Solutions</span> Architecture.
            </h1>
            <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "3rem" }}>
              Next-generation outsourcing frameworks harmonizing purpose-built AI agents with high-tier human intelligence to drive exponential operational growth.
            </p>
          </motion.div>
        </div>
        
        <GeometricDivider type="slant-down" color="var(--white)" height="100px" />
      </section>

      {/* SOLUTIONS GRID */}
      <section style={{ padding: "100px 0 160px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem" }}>
            {allSolutions.map((sol, i) => (
              <Link 
                href={sol.path} 
                key={sol.name} 
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <BPOEnterpriseCard elevation={3} intensity={15}>
                  <div style={{ height: "450px", display: "flex", flexDirection: "column" }}>
                    <div style={{ height: "220px", position: "relative", borderRadius: "8px", overflow: "hidden", marginBottom: "2rem" }}>
                      <Image 
                        src={`https://images.unsplash.com/photo-${sol.img}?auto=format&fit=crop&q=80&w=800`} 
                        alt={sol.name} 
                        fill 
                        style={{ objectFit: "cover" }} 
                      />
                      <div style={{ position: "absolute", top: "1rem", left: "1rem", padding: "6px 12px", background: "var(--white)", borderRadius: "100px", display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 800, color: sol.color, boxShadow: "var(--shadow-level-2)" }}>
                        <Cpu size={12} /> NEURAL-READY
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                      <div style={{ color: sol.color }}>{sol.icon}</div>
                      <h2 style={{ fontSize: "26px", fontWeight: 700, color: "var(--charcoal-deep)" }}>{sol.name}</h2>
                    </div>

                    <p style={{ color: "var(--medium-gray)", fontSize: "16px", lineHeight: 1.6, flexGrow: 1 }}>
                      {sol.desc}
                    </p>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem", borderTop: "1px solid var(--border)", marginTop: "1rem" }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 700, color: "var(--electric-blue)", textTransform: "uppercase" }}>
                        Architecture Scope x0{i+1}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 800, color: "var(--charcoal-deep)", cursor: "pointer", fontSize: "14px" }}>
                        Specs <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </BPOEnterpriseCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GeometricDivider type="slant-up" color="var(--charcoal-deep)" height="100px" flip />
    </div>
  );
}
