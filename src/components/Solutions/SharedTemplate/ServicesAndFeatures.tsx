"use client";
import { FeatureItem, ProcessFlow, ServiceItem } from "@/types/solutions";
import { ArrowDown, CheckCircle2, Cpu, Zap, Activity } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { IconResolver } from "./IconResolver";
import styles from "./SolutionTemplate.module.css";
import { BPOEnterpriseCard } from "@/components/Shared/BPOEnterpriseCard";
import { GeometricDivider } from "@/components/Shared/GeometricDivider";
import { VideoBackground } from "@/components/Shared/VideoBackground";
import Image from "next/image";

export function ServicesAndFeatures({ services, processFlow, features }: { services: { title: string, items: ServiceItem[] }, processFlow: ProcessFlow, features: { title: string, items: FeatureItem[] } }) {
  return (
    <div style={{ background: "var(--white)" }}>
      {/* Service Overview Architecture */}
      <section style={{ padding: "128px 0", background: "transparent", position: "relative", overflow: "hidden" }}>
        <VideoBackground opacity={0.3} />
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            {services.title}
          </motion.h2>

          <div className={styles.servicesGrid}>
            {services.items.map((srv, i) => (
              <BPOEnterpriseCard key={i} elevation={3} intensity={10}>
                <div style={{ height: "480px", display: "flex", flexDirection: "column" }}>
                  <div style={{ height: "200px", position: "relative", borderRadius: "12px", overflow: "hidden", marginBottom: "2rem" }}>
                    <Image 
                      src={`https://images.unsplash.com/photo-${i === 0 ? '1551434678-e076c223a692' : i === 1 ? '1549923746-c502d488b3ea' : '1518186239747-d330398fbb06'}?auto=format&fit=crop&q=80&w=800`} 
                      alt={srv.title} 
                      fill 
                      style={{ objectFit: "cover" }} 
                    />
                    <div style={{ position: "absolute", top: "1rem", right: "1rem", padding: "6px 12px", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", borderRadius: "100px", display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 800, color: "var(--electric-blue)" }}>
                      <Activity size={12} /> LIVE OPS
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div style={{ color: "var(--electric-blue)" }}><IconResolver name={srv.icon} size={24} /></div>
                    <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--charcoal-deep)" }}>{srv.title}</h3>
                  </div>

                  <ul style={{ flexGrow: 1, listStyle: "none", padding: 0 }}>
                    {srv.features.map((feat, idx) => (
                      <li key={idx} style={{ display: "flex", gap: "10px", marginBottom: "0.75rem", color: "var(--medium-gray)", fontWeight: 700, fontSize: "15px" }}>
                        <CheckCircle2 size={16} style={{ color: "var(--emerald-green)", flexShrink: 0, marginTop: "2px" }} /> 
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: "1.5rem", borderTop: "1px solid var(--border)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 800, color: "var(--electric-blue)", textTransform: "uppercase" }}>Depth x0{i+1}</div>
                    <ArrowDown size={18} color="var(--medium-gray)" />
                  </div>
                </div>
              </BPOEnterpriseCard>
            ))}
          </div>
        </div>
      </section>

      <GeometricDivider type="slant-up" color="var(--white)" height="100px" />

      {/* Process Architecture */}
      <section className={styles.section}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            {processFlow.title}
          </motion.h2>
          
          <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto", padding: "6rem 4rem", background: "transparent", borderRadius: "40px", border: "1px solid var(--border)", textAlign: "center", overflow: "hidden" }}>
            <VideoBackground opacity={0.2} />
            <div style={{ position: "absolute", top: "2rem", left: "50%", transform: "translateX(-50%)", fontSize: "12px", fontWeight: 800, color: "var(--medium-gray)", textTransform: "uppercase", letterSpacing: "2px" }}>Neural Routing Protocol v1.0</div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ fontWeight: 800, fontSize: "22px", marginBottom: "2rem", color: "var(--electric-blue)", background: "var(--white)", padding: "16px 32px", borderRadius: "100px", display: "inline-block", boxShadow: "var(--shadow-level-2)" }}
            >
              {processFlow.trigger}
            </motion.div>

            <div style={{ height: "40px", width: "2px", background: "var(--electric-blue)", margin: "0 auto" }}></div>
            
            <div style={{ background: "var(--electric-blue)", color: "var(--white)", padding: "20px 40px", borderRadius: "16px", fontWeight: 800, fontSize: "18px", display: "inline-block", boxShadow: "var(--shadow-level-3)" }}>
              {processFlow.routerParams}
            </div>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "8rem", position: "relative", marginTop: "3rem" }}>
              <div style={{ position: "absolute", top: "-3rem", left: "50%", transform: "translateX(-50%)", width: "2px", height: "3rem", background: "var(--electric-blue)" }}></div>
              <div style={{ position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", width: "calc(100% - 16rem)", height: "2px", background: "var(--electric-blue)" }}></div>
              
              <div style={{ width: "240px", position: "relative" }}>
                 <div style={{ position: "absolute", top: "-2px", left: "50%", width: "2px", height: "2rem", background: "var(--electric-blue)" }}></div>
                 <div style={{ marginTop: "2rem", background: "var(--white)", border: "2px solid var(--electric-blue)", padding: "20px", borderRadius: "16px" }}>
                    <div style={{ color: "var(--electric-blue)", fontWeight: 800, marginBottom: "0.5rem" }}>{processFlow.aiPath.title}</div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--medium-gray)" }}>{processFlow.aiPath.subtitle}</div>
                 </div>
              </div>

              <div style={{ width: "240px", position: "relative" }}>
                 <div style={{ position: "absolute", top: "-2px", left: "50%", width: "2px", height: "2rem", background: "var(--electric-blue)" }}></div>
                 <div style={{ marginTop: "2rem", background: "var(--white)", border: "2px solid var(--charcoal-deep)", padding: "20px", borderRadius: "16px" }}>
                    <div style={{ color: "var(--charcoal-deep)", fontWeight: 800, marginBottom: "0.5rem" }}>{processFlow.humanPath.title}</div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--medium-gray)" }}>{processFlow.humanPath.subtitle}</div>
                 </div>
              </div>
            </div>

            <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid var(--border)", fontWeight: 800, fontSize: "20px", color: "var(--charcoal-deep)" }}>
              Continuous Optimization & Strategic Insight
            </div>
          </div>

          <div className={styles.benefitsGrid} style={{ marginTop: "5rem" }}>
            {processFlow.benefits.map((ben, i) => (
              <motion.div 
                key={i} 
                className={styles.benefitItem}
                style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "1.5rem 2rem", borderRadius: "20px", boxShadow: "var(--shadow-level-1)" }}
              >
                <div style={{ color: "var(--emerald-green)" }}><IconResolver name={ben.icon} size={24} /></div>
                <span style={{ fontWeight: 800, color: "var(--charcoal-deep)", fontSize: "18px" }}>{ben.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GeometricDivider type="slant-down" color="var(--soft-gray)" height="100px" />

      {/* Key Feature Architecture */}
      <section style={{ padding: "128px 0", background: "transparent", position: "relative", overflow: "hidden" }}>
        <VideoBackground opacity={0.3} />
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            {features.title}
          </motion.h2>
          <div className={styles.featuresGrid}>
            {features.items.map((feat, i) => (
              <BPOEnterpriseCard key={i} elevation={2} intensity={8}>
                <div style={{ padding: "2.5rem", height: "380px", display: "flex", flexDirection: "column" }}>
                  <div style={{ width: "60px", height: "60px", background: "var(--electric-blue)", border: "1px solid var(--border)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", marginBottom: "2rem", boxShadow: "var(--shadow-level-2)" }}>
                    <IconResolver name={feat.icon} size={30} />
                  </div>
                  <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--charcoal-deep)", marginBottom: "1.5rem" }}>{feat.title}</h3>
                  <ul style={{ flexGrow: 1, listStyle: "none", padding: 0 }}>
                    {feat.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ fontSize: "15px", color: "var(--medium-gray)", fontWeight: 600, marginBottom: "0.75rem", display: "flex", gap: "10px", alignItems: "center" }}>
                        <Zap size={14} style={{ color: "var(--electric-blue)" }} /> {bullet}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "1rem", display: "flex", gap: "6px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "var(--electric-blue)", textTransform: "uppercase", background: "var(--white)", padding: "4px 8px", borderRadius: "4px", border: "1px solid var(--border)" }}>SYSTEMS-SYNC</span>
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "var(--emerald-green)", textTransform: "uppercase", background: "var(--white)", padding: "4px 8px", borderRadius: "4px", border: "1px solid var(--border)" }}>NEURAL-READY</span>
                  </div>
                </div>
              </BPOEnterpriseCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
