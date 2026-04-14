"use client";
import React from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { PricingModel, SuccessMetric } from "@/types/solutions";
import styles from "./SolutionTemplate.module.css";

export function MetricsAndPricing({ pricing, metrics }: { pricing: { title: string, models: PricingModel[] }, metrics: { title: string, items: SuccessMetric[] } }) {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <h2>{pricing.title}</h2>
          
          <div className={styles.pricingGrid}>
            {pricing.models.map((model, i) => (
              <div key={i} className={`${styles.priceCard} ${model.isPopular ? styles.popular : ""}`}>
                {model.isPopular && <div className={styles.popularBadge}>Most Popular</div>}
                <h3>{model.title}</h3>
                <div className={styles.priceBestFor}>Best for: {model.bestFor}</div>
                <div className={styles.priceValue}>
                  {model.priceValue}
                  {model.priceUnit && <span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: 500 }}>{model.priceUnit}</span>}
                </div>
                <button className={styles.priceBtn}>View Details</button>
              </div>
            ))}
          </div>
          
          <div className={styles.pricingActions}>
            <button className={styles.primaryBtn}>Request Custom Quote <ArrowRight size={18} /></button>
            <button className={styles.secondaryBtn}><Calculator size={18} /> ROI Calculator</button>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <h2>{metrics.title}</h2>
          
          <div className={styles.metricsGrid}>
            {metrics.items.map((metric, i) => (
              <div key={i} className={styles.metricItem}>
                <div className={styles.metricHeader}>
                  <span>{metric.label}</span>
                  <span className={styles.metricValue}>{metric.value}</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${metric.progressPercent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
