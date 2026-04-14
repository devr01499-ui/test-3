"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Laptop, HeadphonesIcon, TrendingUp, Layers, Banknote, Users, Keyboard, ShieldAlert, MessageCircle, ShoppingCart, FileSignature } from "lucide-react";
import styles from "@/components/Solutions/SharedTemplate/SolutionTemplate.module.css";

const allSolutions = [
  { name: "Customer Service", icon: <HeadphonesIcon size={28} />, path: "/solutions/customer-service", desc: "Exceptional omnichannel experiences blending AI and human empathy." },
  { name: "Technical Support", icon: <Laptop size={28} />, path: "/solutions/technical-support", desc: "L1/L2/L3 IT engineering helpdesk with automated diagnostic engines." },
  { name: "Sales & Telemarketing", icon: <TrendingUp size={28} />, path: "/solutions/sales-telemarketing", desc: "Accelerate revenue via predictive AI dialers and trained closer pods." },
  { name: "Back Office Operations", icon: <Layers size={28} />, path: "/solutions/back-office-operations", desc: "Hyper-efficient admin workflows guided by Six Sigma RPA automation." },
  { name: "Finance & Accounting", icon: <Banknote size={28} />, path: "/solutions/finance-accounting", desc: "SOC 2 secure Procure-to-Pay and Order-to-Cash CPA operations." },
  { name: "HR & Recruitment", icon: <Users size={28} />, path: "/solutions/hr-recruitment", desc: "Scale hiring with semantic AI screening and embedded offshore recruiters." },
  { name: "Data Entry & Processing", icon: <Keyboard size={28} />, path: "/solutions/data-entry", desc: "Double-blind key verification for 99.9% accurate document extraction." },
  { name: "Content Moderation", icon: <ShieldAlert size={28} />, path: "/solutions/content-moderation", desc: "Protect platforms with real-time UGC monitoring and 24/7 moderation." },
  { name: "Email & Chat Support", icon: <MessageCircle size={28} />, path: "/solutions/email-chat", desc: "Always-on conversational support across webchat, WhatsApp, and email." },
  { name: "Order Processing", icon: <ShoppingCart size={28} />, path: "/solutions/order-processing", desc: "Flawless B2B/B2C fulfillment administration and backorder management." },
  { name: "Claims Processing", icon: <FileSignature size={28} />, path: "/solutions/claims-processing", desc: "Speed up adjudication with HIPAA-compliant medical & logistics claims teams." }
];

export default function SolutionsIndex() {
  return (
    <div style={{ position: "relative", background: "var(--background)", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "8rem", overflow: "hidden" }}>
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

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h1 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text-main)", letterSpacing: "-0.02em" }}>Our Solutions Architecture</h1>
          <p style={{ fontSize: "1.25rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
            Enterprise-grade outsourcing frameworks combining purpose-built AI automation with expert human talent across 11 critical departments.
          </p>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
          {allSolutions.map((sol, i) => (
            <Link 
              href={sol.path} 
              key={i} 
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={styles.serviceCard} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "16px", background: "var(--surface)", display: "inline-flex", borderRadius: "16px", color: "var(--primary)", marginBottom: "1.5rem", width: "max-content", boxShadow: "0 4px 12px rgba(14, 165, 233, 0.1)" }}>
                  {sol.icon}
                </div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>{sol.name}</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.6", flexGrow: 1, marginBottom: "2rem" }}>
                  {sol.desc}
                </p>
                <div style={{ color: "var(--primary)", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px", marginTop: "auto" }}>
                  View Solution Specs <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
