"use client";
import { FeatureItem, ProcessFlow, ServiceItem } from "@/types/solutions";
import { ArrowDown } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { IconResolver } from "./IconResolver";
import styles from "./SolutionTemplate.module.css";

export function ServicesAndFeatures({ services, processFlow, features }: { services: { title: string, items: ServiceItem[] }, processFlow: ProcessFlow, features: { title: string, items: FeatureItem[] } }) {
  return (
    <>
      {/* Service Overview */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <h2>{services.title}</h2>
          <div className={styles.servicesGrid}>
            {services.items.map((srv, i) => {
              const keyword = srv.title.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '');
              const imgUrl = `https://loremflickr.com/800/400/${keyword || 'business'},service/all?lock=${i}`;
              const glowClass = `hover-glow-${(i % 5) + 1}`;
              return (
                <div key={i} className="card-3d-wrapper">
                  <motion.div 
                    whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`card-3d-content ${styles.serviceCard}`}
                    style={{ padding: 0 }}
                  >
                    <div style={{ height: "180px", width: "100%", position: "relative", overflow: "hidden" }}>
                      <div className={glowClass} style={{ position: "absolute", inset: 0, opacity: 0.6, zIndex: 1, mixBlendMode: "overlay" }} />
                      <img src={imgUrl} alt={srv.title} style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: 0, position: "absolute" }} />
                    </div>
                    <div style={{ padding: "2rem", flexGrow: 1, background: "white", zIndex: 2, position: "relative", display: "flex", flexDirection: "column" }}>
                      <h3 style={{ marginTop: "-3.5rem", background: "white", padding: "12px 20px", borderRadius: "12px", display: "inline-flex", width: "max-content", boxShadow: "0 10px 20px rgba(0,0,0,0.05)", zIndex: 3 }}><IconResolver name={srv.icon} /> {srv.title}</h3>
                      <ul style={{ marginTop: "1.5rem" }}>
                        {srv.features.map((feat, idx) => (
                          <li key={idx}><ArrowDown size={14} /> {feat}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className={styles.section}>
        <div className="container">
          <h2>{processFlow.title}</h2>
          
          <div className={styles.processContainer}>
            <div style={{ fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem", color: "var(--primary)" }}>
              {processFlow.trigger}
            </div>
            <div className={styles.flowArrowDown}></div>
            
            <div className={styles.flowBox}>
              {processFlow.routerParams}
            </div>
            
            <div className={styles.flowSplit}>
              <div className={styles.splitLineLeft}></div>
              <div className={styles.splitLineRight}></div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "200px" }}>
                <div className={styles.flowBox} style={{ borderColor: processFlow.aiPath.color, color: processFlow.aiPath.color }}>
                  {processFlow.aiPath.title}
                </div>
                <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>{processFlow.aiPath.subtitle}</span>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "200px" }}>
                <div className={styles.flowBox} style={{ borderColor: processFlow.humanPath.color, color: processFlow.humanPath.color }}>
                  {processFlow.humanPath.title}
                </div>
                <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>{processFlow.humanPath.subtitle}</span>
              </div>
            </div>
            
            <div className={styles.flowArrowDown} style={{ height: "30px" }}></div>
            
            <div className={styles.flowBox}>
              {processFlow.qualityMonitor}
            </div>
            
            <div className={styles.flowArrowDown} style={{ height: "30px" }}></div>
            
            <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--primary)" }}>
              Resolution + Follow-up
            </div>
          </div>

          <div className={styles.benefitsGrid}>
            {processFlow.benefits.map((ben, i) => (
              <div key={i} className={styles.benefitItem}>
                <IconResolver name={ben.icon} /> {ben.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <h2>{features.title}</h2>
          <div className={styles.featuresGrid}>
            {features.items.map((feat, i) => {
              const keyword = feat.title.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '');
              const imgUrl = `https://loremflickr.com/800/400/${keyword || 'tech'},feature/all?random=${i}`;
              const glowClass = `hover-glow-${((i+2) % 5) + 1}`;
              return (
                <div key={i} className="card-3d-wrapper">
                  <motion.div 
                    whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`card-3d-content ${styles.featureCard}`}
                    style={{ padding: 0 }}
                  >
                    <div style={{ height: "160px", width: "100%", position: "relative", overflow: "hidden" }}>
                      <div className={glowClass} style={{ position: "absolute", inset: 0, opacity: 0.6, zIndex: 1, mixBlendMode: "overlay" }} />
                      <img src={imgUrl} alt={feat.title} style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: 0, position: "absolute" }} />
                    </div>
                    <div style={{ padding: "2rem", flexGrow: 1, background: "var(--surface)", zIndex: 2, position: "relative", display: "flex", flexDirection: "column" }}>
                      <div className={styles.featureIcon} style={{ marginTop: "-4rem", zIndex: 3, position: "relative", background: "white", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}><IconResolver name={feat.icon} /></div>
                      <h3>{feat.title}</h3>
                      <ul>
                        {feat.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
