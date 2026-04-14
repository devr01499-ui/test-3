"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, HeartPulse, ShoppingCart, Landmark, Laptop, PhoneCall, Plane, ShieldCheck, GraduationCap, Zap, Truck, Clapperboard, Home, FileText, Car, Building2, Heart, Utensils, Factory, Briefcase, Bitcoin, Gamepad2 } from "lucide-react";
import styles from "@/components/Industries/SharedTemplate/IndustryTemplate.module.css";

const allIndustries = [
  { name: "Healthcare & Medical", icon: <HeartPulse size={28} />, path: "/industries/healthcare", desc: "HIPAA-compliant BPO services supporting better patient outcomes." },
  { name: "E-commerce & Retail", icon: <ShoppingCart size={28} />, path: "/industries/ecommerce-retail", desc: "Scale your retail operations with AI-powered order and customer management." },
  { name: "Banking & Finance", icon: <Landmark size={28} />, path: "/industries/banking-finance", desc: "Secure and compliant financial operations for modern banks and fintechs." },
  { name: "Technology & SaaS", icon: <Laptop size={28} />, path: "/industries/tech-saas", desc: "Support your hyper-growth with specialized tech support and RPO." },
  { name: "Telecommunications", icon: <PhoneCall size={28} />, path: "/industries/telecom", desc: "High-volume billing and technical support for global telecom providers." },
  { name: "Travel & Hospitality", icon: <Plane size={28} />, path: "/industries/travel-hospitality", desc: "24/7 guest services and booking management for the travel industry." },
  { name: "Insurance", icon: <ShieldCheck size={28} />, path: "/industries/insurance", desc: "Accelerate claims processing and underwriting with our insurance experts." },
  { name: "Education & E-learning", icon: <GraduationCap size={28} />, path: "/industries/education", desc: "Student support and enrollment services for modern educational platforms." },
  { name: "Utilities & Energy", icon: <Zap size={28} />, path: "/industries/utilities-energy", desc: "Reliable billing and field support for energy and utility providers." },
  { name: "Logistics & Supply Chain", icon: <Truck size={28} />, path: "/industries/logistics", desc: "Optimize your supply chain with waybill processing and tracking support." },
  { name: "Media & Entertainment", icon: <Clapperboard size={28} />, path: "/industries/media-entertainment", desc: "Content moderation and subscription management for media giants." },
  { name: "Real Estate", icon: <Home size={28} />, path: "/industries/real-estate", desc: "Lead generation and tenant services for global real estate firms." },
  { name: "Legal Services", icon: <FileText size={28} />, path: "/industries/legal", desc: "Secure document management and processing for legal practices." },
  { name: "Automotive", icon: <Car size={28} />, path: "/industries/automotive", desc: "Dealer support and parts management for the automotive sector." },
  { name: "Government & Public Sector", icon: <Building2 size={28} />, path: "/industries/government", desc: "Citizen services and case management for public institutions." },
  { name: "Non-Profit", icon: <Heart size={28} />, path: "/industries/non-profit", desc: "Donor support and administrative scaling for non-profit organizations." },
  { name: "Food & Beverage", icon: <Utensils size={28} />, path: "/industries/food-beverage", desc: "Order management and customer support for the F&B industry." },
  { name: "Manufacturing", icon: <Factory size={28} />, path: "/industries/manufacturing", desc: "Supply chain and back-office support for industrial manufacturers." },
  { name: "Professional Services", icon: <Briefcase size={28} />, path: "/industries/professional-services", desc: "Administrative and front-office scaling for professional service firms." },
  { name: "Cryptocurrency & Fintech", icon: <Bitcoin size={28} />, path: "/industries/crypto-fintech", desc: "Compliance and 24/7 support for the rapidly evolving crypto space." },
  { name: "Gaming & iGaming", icon: <Gamepad2 size={28} />, path: "/industries/gaming", desc: "Trust & Safety and community management for gaming platforms." }
];

export default function IndustriesIndex() {
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
        <source src="https://videos.pexels.com/video-files/4624087/4624087-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h1 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text-main)", letterSpacing: "-0.02em" }}>Industry Specializations</h1>
          <p style={{ fontSize: "1.25rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
            Domain-specific BPO solutions tailored to the unique regulatory and operational needs of your industry.
          </p>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
          {allIndustries.map((ind, i) => (
            <Link 
              href={ind.path} 
              key={i} 
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={styles.serviceCard} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "16px", background: "var(--surface)", display: "inline-flex", borderRadius: "16px", color: "var(--primary)", marginBottom: "1.5rem", width: "max-content", boxShadow: "0 4px 12px rgba(14, 165, 233, 0.1)" }}>
                  {ind.icon}
                </div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>{ind.name}</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.6", flexGrow: 1, marginBottom: "2rem" }}>
                  {ind.desc}
                </p>
                <div style={{ color: "var(--primary)", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px", marginTop: "auto" }}>
                  View Industry Specs <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
