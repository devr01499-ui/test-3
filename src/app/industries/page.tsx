"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, HeartPulse, ShoppingCart, Landmark, Laptop, PhoneCall, Plane, ShieldCheck, GraduationCap, Zap, Truck, Clapperboard, Home, FileText, Car, Building2, Heart, Utensils, Factory, Briefcase, Bitcoin, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import styles from "@/components/Industries/SharedTemplate/IndustryTemplate.module.css";

const allIndustries = [
  { name: "Healthcare & Medical", icon: <HeartPulse size={28} />, path: "/industries/healthcare", desc: "HIPAA-compliant BPO services supporting better patient outcomes.", img: "https://loremflickr.com/800/400/healthcare,hospital/all", glow: "hover-glow-1" },
  { name: "E-commerce & Retail", icon: <ShoppingCart size={28} />, path: "/industries/ecommerce-retail", desc: "Scale your retail operations with AI-powered order and customer management.", img: "https://loremflickr.com/800/400/ecommerce,retail/all", glow: "hover-glow-2" },
  { name: "Banking & Finance", icon: <Landmark size={28} />, path: "/industries/banking-finance", desc: "Secure and compliant financial operations for modern banks and fintechs.", img: "https://loremflickr.com/800/400/banking,money/all", glow: "hover-glow-3" },
  { name: "Technology & SaaS", icon: <Laptop size={28} />, path: "/industries/tech-saas", desc: "Support your hyper-growth with specialized tech support and RPO.", img: "https://loremflickr.com/800/400/technology,software/all", glow: "hover-glow-4" },
  { name: "Telecommunications", icon: <PhoneCall size={28} />, path: "/industries/telecom", desc: "High-volume billing and technical support for global telecom providers.", img: "https://loremflickr.com/800/400/telecom,network/all", glow: "hover-glow-5" },
  { name: "Travel & Hospitality", icon: <Plane size={28} />, path: "/industries/travel-hospitality", desc: "24/7 guest services and booking management for the travel industry.", img: "https://loremflickr.com/800/400/travel,hotel/all", glow: "hover-glow-1" },
  { name: "Insurance", icon: <ShieldCheck size={28} />, path: "/industries/insurance", desc: "Accelerate claims processing and underwriting with our insurance experts.", img: "https://loremflickr.com/800/400/insurance,family/all", glow: "hover-glow-2" },
  { name: "Education & E-learning", icon: <GraduationCap size={28} />, path: "/industries/education", desc: "Student support and enrollment services for modern educational platforms.", img: "https://loremflickr.com/800/400/education,student/all", glow: "hover-glow-3" },
  { name: "Utilities & Energy", icon: <Zap size={28} />, path: "/industries/utilities-energy", desc: "Reliable billing and field support for energy and utility providers.", img: "https://loremflickr.com/800/400/energy,solar/all", glow: "hover-glow-4" },
  { name: "Logistics & Supply Chain", icon: <Truck size={28} />, path: "/industries/logistics", desc: "Optimize your supply chain with waybill processing and tracking support.", img: "https://loremflickr.com/800/400/logistics,truck/all", glow: "hover-glow-5" },
  { name: "Media & Entertainment", icon: <Clapperboard size={28} />, path: "/industries/media-entertainment", desc: "Content moderation and subscription management for media giants.", img: "https://loremflickr.com/800/400/media,entertainment/all", glow: "hover-glow-1" },
  { name: "Real Estate", icon: <Home size={28} />, path: "/industries/real-estate", desc: "Lead generation and tenant services for global real estate firms.", img: "https://loremflickr.com/800/400/realestate,house/all", glow: "hover-glow-2" },
  { name: "Legal Services", icon: <FileText size={28} />, path: "/industries/legal", desc: "Secure document management and processing for legal practices.", img: "https://loremflickr.com/800/400/legal,law/all", glow: "hover-glow-3" },
  { name: "Automotive", icon: <Car size={28} />, path: "/industries/automotive", desc: "Dealer support and parts management for the automotive sector.", img: "https://loremflickr.com/800/400/automotive,car/all", glow: "hover-glow-4" },
  { name: "Government & Public Sector", icon: <Building2 size={28} />, path: "/industries/government", desc: "Citizen services and case management for public institutions.", img: "https://loremflickr.com/800/400/government,building/all", glow: "hover-glow-5" },
  { name: "Non-Profit", icon: <Heart size={28} />, path: "/industries/non-profit", desc: "Donor support and administrative scaling for non-profit organizations.", img: "https://loremflickr.com/800/400/charity,nonprofit/all", glow: "hover-glow-1" },
  { name: "Food & Beverage", icon: <Utensils size={28} />, path: "/industries/food-beverage", desc: "Order management and customer support for the F&B industry.", img: "https://loremflickr.com/800/400/food,restaurant/all", glow: "hover-glow-2" },
  { name: "Manufacturing", icon: <Factory size={28} />, path: "/industries/manufacturing", desc: "Supply chain and back-office support for industrial manufacturers.", img: "https://loremflickr.com/800/400/manufacturing,factory/all", glow: "hover-glow-3" },
  { name: "Professional Services", icon: <Briefcase size={28} />, path: "/industries/professional-services", desc: "Administrative and front-office scaling for professional service firms.", img: "https://loremflickr.com/800/400/business,professional/all", glow: "hover-glow-4" },
  { name: "Cryptocurrency & Fintech", icon: <Bitcoin size={28} />, path: "/industries/crypto-fintech", desc: "Compliance and 24/7 support for the rapidly evolving crypto space.", img: "https://loremflickr.com/800/400/cryptocurrency,fintech/all", glow: "hover-glow-5" },
  { name: "Gaming & iGaming", icon: <Gamepad2 size={28} />, path: "/industries/gaming", desc: "Trust & Safety and community management for gaming platforms.", img: "https://loremflickr.com/800/400/gaming,esports/all", glow: "hover-glow-1" }
];

export default function IndustriesIndex() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="container">
        
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
                  <div className={ind.glow} style={{ position: "absolute", inset: 0, opacity: 0.6, zIndex: 1, mixBlendMode: "overlay" }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ind.img} alt={ind.name} style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: 0, position: "absolute" }} />
                </div>

                <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", flexGrow: 1, background: "white", zIndex: 2, position: "relative" }}>
                  <div style={{ padding: "16px", background: "var(--surface)", display: "inline-flex", borderRadius: "16px", color: "var(--primary)", marginBottom: "1.5rem", width: "max-content", boxShadow: "0 4px 12px rgba(14, 165, 233, 0.1)", marginTop: "-4rem", zIndex: 3, position: "relative" }}>
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
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
