"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, TrendingUp, Target, ShieldCheck, Share2, Trophy, Leaf, Heart, ArrowUpRight } from "lucide-react";
import { aboutData } from "@/data/about";
import styles from "@/app/ai-technology/technology.module.css"; // Reuse some of the awesome grid styles

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={28} />,
  Users: <Users size={28} />,
  TrendingUp: <TrendingUp size={28} />,
  Target: <Target size={28} />,
  ShieldCheck: <ShieldCheck size={28} />,
  Share2: <Share2 size={28} />,
  Trophy: <Trophy size={28} />,
  Leaf: <Leaf size={28} />,
  Heart: <Heart size={28} />,
};

const aboutRoutes = [
  { slug: "company-overview", data: aboutData["company-overview"] },
  { slug: "leadership-team", data: aboutData["leadership-team"] },
  { slug: "our-story", data: aboutData["our-story"] },
  { slug: "mission-vision-values", data: aboutData["mission-vision"] },
  { slug: "certifications-compliance", data: aboutData["certifications"] },
  { slug: "partners-alliances", data: aboutData["partners-alliances"] },
  { slug: "awards-recognition", data: aboutData["awards-recognition"] },
  { slug: "esg-sustainability", data: aboutData["esg"] },
  { slug: "diversity-inclusion", data: aboutData["diversity"] },
  { slug: "community-impact", data: aboutData["community"] },
];

export default function AboutIndexPage() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h1 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text-main)", letterSpacing: "-0.02em" }}>About Claritiy</h1>
          <p style={{ fontSize: "1.25rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
            We're a global leader bridging human empathy and artificial intelligence to redefine enterprise efficiency. Discover our story, our people, and the values that drive us.
          </p>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
          {aboutRoutes.map((route, i) => (
            <Link 
              href={`/about/${route.slug}`} 
              key={i} 
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ 
                  background: "white", 
                  borderRadius: "16px", 
                  padding: "2.5rem", 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--card-shadow)"
                }}
              >
                <div style={{ 
                  padding: "16px", 
                  background: "var(--surface)", 
                  display: "inline-flex", 
                  borderRadius: "16px", 
                  color: "var(--primary)", 
                  marginBottom: "1.5rem", 
                  width: "max-content",
                }}>
                  {iconMap[route.data.iconName]}
                </div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>{route.data.title}</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.6", flexGrow: 1, marginBottom: "2rem" }}>
                  {route.data.description}
                </p>
                <div style={{ color: "var(--primary)", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px", marginTop: "auto" }}>
                  Read More <ArrowUpRight size={18} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
