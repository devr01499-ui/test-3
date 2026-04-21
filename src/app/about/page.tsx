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
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem" }}>
          {aboutRoutes.map((route, i) => (
            <Link 
              href={`/about/${route.slug}`} 
              key={i} 
              style={{ textDecoration: "none", color: "inherit" }}
              className="card-3d-wrapper"
            >
              <div style={{ height: "400px" }}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ rotateY: 8, rotateX: -4, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.05 }}
                  className="card-3d-content"
                  style={{ border: "1px solid var(--border)" }}
                >
                   {/* Background Image based on the slug */}
                   <Image 
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1497366216548-37526070297c' : i === 1 ? '1521737711867-e3b97375f902' : i === 2 ? '1557804506-669a67965ba0' : '1552664730-d307ca884978'}?auto=format&fit=crop&q=80&w=800`}
                    alt={route.data.title}
                    fill
                    className="card-image-bg"
                   />
                   <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8, 47, 73, 0.2) 0%, rgba(8, 47, 73, 0.9) 100%)", zIndex: 1 }} />
                   
                   <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", padding: "2.5rem", color: "white" }}>
                      <div style={{ 
                        padding: "12px", 
                        background: "rgba(255, 255, 255, 0.2)", 
                        backdropFilter: "blur(12px)",
                        display: "inline-flex", 
                        borderRadius: "12px", 
                        color: "white", 
                        marginBottom: "auto", 
                        width: "max-content",
                        border: "1px solid rgba(255, 255, 255, 0.2)"
                      }}>
                        {iconMap[route.data.iconName]}
                      </div>
                      <h2 style={{ fontSize: "1.75rem", fontWeight: 900, marginBottom: "0.5rem" }}>{route.data.title}</h2>
                      <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.95rem", lineHeight: "1.6", fontWeight: 500 }}>
                        {route.data.description}
                      </p>
                      <div style={{ color: "var(--secondary)", fontWeight: 800, display: "flex", alignItems: "center", gap: "8px", marginTop: "1.5rem", fontSize: "0.9rem" }}>
                        View Details <ArrowUpRight size={18} />
                      </div>
                   </div>
                </motion.div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
