"use client";
import React from "react";
import { ArrowDown } from "lucide-react";
import { IconResolver } from "./IconResolver";
import { ServiceItem, ProcessFlow, FeatureItem } from "@/types/solutions";
import styles from "./SolutionTemplate.module.css";

export function ServicesAndFeatures({ services, processFlow, features }: { services: { title: string, items: ServiceItem[] }, processFlow: ProcessFlow, features: { title: string, items: FeatureItem[] } }) {
  return (
    <>
      {/* Service Overview */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <h2>{services.title}</h2>
          <div className={styles.servicesGrid}>
            {services.items.map((srv, i) => (
              <div key={i} className={styles.serviceCard}>
                <h3><IconResolver name={srv.icon} /> {srv.title}</h3>
                <ul>
                  {srv.features.map((feat, idx) => (
                    <li key={idx}><ArrowDown size={14} /> {feat}</li>
                  ))}
                </ul>
              </div>
            ))}
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
            {features.items.map((feat, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon}><IconResolver name={feat.icon} /></div>
                <h3>{feat.title}</h3>
                <ul>
                  {feat.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
