"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, HeartPulse, ShoppingCart, Landmark, Laptop, PhoneCall, Plane, ShieldCheck, GraduationCap, Zap, Truck, Clapperboard, Home, FileText, Car, Building2, Heart, Utensils, Factory, Briefcase, Bitcoin, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import styles from "@/components/Industries/SharedTemplate/IndustryTemplate.module.css";
import Image from "next/image";

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
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "2.5rem" }}>
          {allIndustries.map((ind, i) => {
            const unsplashKeywords: Record<string, string> = {
              "Healthcare & Medical": "1586770107582-fc44cd4327a0",
              "E-commerce & Retail": "1556742049-0cfed4f6a45d",
              "Banking & Finance": "1550751827-4bd374c3f58b",
              "Technology & SaaS": "1518770660439-4636190af475",
              "Telecommunications": "1516383274235-5f42d6c6426d",
              "Travel & Hospitality": "1451187580459-43490279c0fa",
              "Insurance": "1450101499163-c8848c66ca85",
              "Education & E-learning": "1523240715637-8917f646a73d",
              "Utilities & Energy": "1473341304170-971dccb5ac1e",
              "Logistics & Supply Chain": "1586528116311-ad99c7a61677",
              "Media & Entertainment": "1470225620780-dba8ba36b745",
              "Real Estate": "1560518883-ce09059eeffa",
              "Legal Services": "1505664194779-847a7ad0d26a",
              "Automotive": "1492144537055-56f8b5095e21",
              "Government & Public Sector": "1529107386315-e1d23805ec07",
              "Non-Profit": "1488521787997-04786875b682",
              "Food & Beverage": "1552566629-107c640c8101",
              "Manufacturing": "1581091226825-a6a2a5aee158",
              "Professional Services": "1521791136064-7986c2959441",
              "Cryptocurrency & Fintech": "1518544831936-3dd91320436b",
              "Gaming & iGaming": "1542751371-adc3844ad15f"
            };
            const imageId = unsplashKeywords[ind.name] || "1451187580459-43490279c0fa";
            
            return (
              <Link 
                href={ind.path} 
                key={ind.name} 
                style={{ textDecoration: "none", color: "inherit" }}
                className="card-3d-wrapper"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="card-3d-content"
                  style={{ height: "480px", border: "1px solid var(--border)", position: "relative" }}
                >
                  <Image 
                    src={`https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&q=80&w=800`}
                    alt={ind.name}
                    fill
                    className="card-image-bg"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8, 47, 73, 0.2) 0%, rgba(8, 47, 73, 0.8) 100%)", zIndex: 1 }} />
                  
                  <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", padding: "2.5rem", color: "white" }}>
                    <div style={{ padding: "16px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", color: "white", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.2)", width: "max-content", marginBottom: "1.5rem" }}>
                      {ind.icon}
                    </div>
                    <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "white", marginBottom: "1rem" }}>{ind.name}</h2>
                    <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem", lineHeight: "1.6", fontWeight: 500, flexGrow: 1 }}>
                      {ind.desc}
                    </p>
                    <div style={{ color: "var(--secondary)", fontWeight: 800, display: "flex", alignItems: "center", gap: "8px", marginTop: "2rem" }}>
                      Industry Specifications <ArrowRight size={18} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
