"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Laptop, HeadphonesIcon, TrendingUp, Layers, Banknote, Users, Keyboard, ShieldAlert, MessageCircle, ShoppingCart, FileSignature } from "lucide-react";
import { motion } from "framer-motion";
import styles from "@/components/Solutions/SharedTemplate/SolutionTemplate.module.css";

const allSolutions = [
  { name: "Customer Service", icon: <HeadphonesIcon size={28} />, path: "/solutions/customer-service", desc: "Exceptional omnichannel experiences blending AI and human empathy.", img: "https://loremflickr.com/800/400/headset,support/all", glow: "hover-glow-1" },
  { name: "Technical Support", icon: <Laptop size={28} />, path: "/solutions/technical-support", desc: "L1/L2/L3 IT engineering helpdesk with automated diagnostic engines.", img: "https://loremflickr.com/800/400/laptop,server/all", glow: "hover-glow-2" },
  { name: "Sales & Telemarketing", icon: <TrendingUp size={28} />, path: "/solutions/sales-telemarketing", desc: "Accelerate revenue via predictive AI dialers and trained closer pods.", img: "https://loremflickr.com/800/400/sales,meeting/all", glow: "hover-glow-3" },
  { name: "Back Office Operations", icon: <Layers size={28} />, path: "/solutions/back-office-operations", desc: "Hyper-efficient admin workflows guided by Six Sigma RPA automation.", img: "https://loremflickr.com/800/400/documents,office/all", glow: "hover-glow-4" },
  { name: "Finance & Accounting", icon: <Banknote size={28} />, path: "/solutions/finance-accounting", desc: "SOC 2 secure Procure-to-Pay and Order-to-Cash CPA operations.", img: "https://loremflickr.com/800/400/finance,money/all", glow: "hover-glow-5" },
  { name: "HR & Recruitment", icon: <Users size={28} />, path: "/solutions/hr-recruitment", desc: "Scale hiring with semantic AI screening and embedded offshore recruiters.", img: "https://loremflickr.com/800/400/hiring,team/all", glow: "hover-glow-1" },
  { name: "Data Entry & Processing", icon: <Keyboard size={28} />, path: "/solutions/data-entry", desc: "Double-blind key verification for 99.9% accurate document extraction.", img: "https://loremflickr.com/800/400/typing,keyboard/all", glow: "hover-glow-2" },
  { name: "Content Moderation", icon: <ShieldAlert size={28} />, path: "/solutions/content-moderation", desc: "Protect platforms with real-time UGC monitoring and 24/7 moderation.", img: "https://loremflickr.com/800/400/security,screen/all", glow: "hover-glow-3" },
  { name: "Email & Chat Support", icon: <MessageCircle size={28} />, path: "/solutions/email-chat", desc: "Always-on conversational support across webchat, WhatsApp, and email.", img: "https://loremflickr.com/800/400/chat,typing/all", glow: "hover-glow-4" },
  { name: "Order Processing", icon: <ShoppingCart size={28} />, path: "/solutions/order-processing", desc: "Flawless B2B/B2C fulfillment administration and backorder management.", img: "https://loremflickr.com/800/400/warehouse,boxes/all", glow: "hover-glow-5" },
  { name: "Claims Processing", icon: <FileSignature size={28} />, path: "/solutions/claims-processing", desc: "Speed up adjudication with HIPAA-compliant medical & logistics claims teams.", img: "https://loremflickr.com/800/400/contract,paperwork/all", glow: "hover-glow-1" }
];

export default function SolutionsIndex() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="container">
        
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
              className="card-3d-wrapper"
            >
              <motion.div 
                whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`card-3d-content ${styles.serviceCard}`} 
                style={{ height: "100%", display: "flex", flexDirection: "column", padding: 0 }}
              >
                {/* 3D Option B: Top Half Image */}
                <div style={{ height: "200px", width: "100%", position: "relative", overflow: "hidden" }}>
                  {/* The bright gradient overlay covering the top half slightly */}
                  <div className={sol.glow} style={{ position: "absolute", inset: 0, opacity: 0.6, zIndex: 1, mixBlendMode: "overlay" }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sol.img} alt={sol.name} style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: 0, position: "absolute" }} />
                </div>

                <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", flexGrow: 1, background: "white", zIndex: 2, position: "relative" }}>
                  <div style={{ padding: "16px", background: "var(--surface)", display: "inline-flex", borderRadius: "16px", color: "var(--primary)", marginBottom: "1.5rem", width: "max-content", boxShadow: "0 4px 12px rgba(14, 165, 233, 0.1)", marginTop: "-4rem", zIndex: 3, position: "relative" }}>
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
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
