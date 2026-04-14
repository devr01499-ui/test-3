"use client";
import React from "react";
import { ArrowRight, Calculator } from "lucide-react";
import styles from "./CustomerService.module.css";

export function MetricsAndPricing() {
  return (
    <>
      {/* Pricing Models */}
      <section className={styles.section}>
        <div className="container">
          <h2>Flexible Pricing to Match Your Needs</h2>
          
          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <h3>Pay Per Contact</h3>
              <div className={styles.priceBestFor}>Best for: Variable volume and seasonal spikes</div>
              <div className={styles.priceValue}>From $3.50<span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: 500 }}>/contact</span></div>
              <button className={styles.priceBtn}>View Details</button>
            </div>
            
            <div className={`${styles.priceCard} ${styles.popular}`}>
              <div className={styles.popularBadge}>Most Popular</div>
              <h3>Dedicated Team</h3>
              <div className={styles.priceBestFor}>Best for: Predictable operations and deep brand integration</div>
              <div className={styles.priceValue}>From $2,500<span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: 500 }}>/agent/mo</span></div>
              <button className={styles.priceBtn}>View Details</button>
            </div>
            
            <div className={styles.priceCard}>
              <h3>Outcome Based</h3>
              <div className={styles.priceBestFor}>Best for: Performance focus and specific KPIs</div>
              <div className={styles.priceValue}>Custom<span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: 500 }}> pricing</span></div>
              <button className={styles.priceBtn}>View Details</button>
            </div>
            
            <div className={styles.priceCard}>
              <h3>Hybrid Model</h3>
              <div className={styles.priceBestFor}>Best for: Complex needs requiring mixed structures</div>
              <div className={styles.priceValue}>Custom<span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: 500 }}> pricing</span></div>
              <button className={styles.priceBtn}>View Details</button>
            </div>
          </div>
          
          <div className={styles.pricingActions}>
            <button className={styles.primaryBtn}>Request Custom Quote <ArrowRight size={18} /></button>
            <button className={styles.secondaryBtn}><Calculator size={18} /> ROI Calculator</button>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <h2>Our Track Record</h2>
          
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <div className={styles.metricHeader}>
                <span>Customer Satisfaction (CSAT)</span>
                <span className={styles.metricValue}>99.2%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "99.2%" }}></div>
              </div>
            </div>
            
            <div className={styles.metricItem}>
              <div className={styles.metricHeader}>
                <span>First Contact Resolution (FCR)</span>
                <span className={styles.metricValue}>95.3%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "95.3%" }}></div>
              </div>
            </div>
            
            <div className={styles.metricItem}>
              <div className={styles.metricHeader}>
                <span>Average Handle Time (AHT)</span>
                <span className={styles.metricValue}>4:23 min</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "85%" }}></div>
              </div>
            </div>
            
            <div className={styles.metricItem}>
              <div className={styles.metricHeader}>
                <span>Net Promoter Score (NPS)</span>
                <span className={styles.metricValue}>+72</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "90%" }}></div>
              </div>
            </div>
            
            <div className={styles.metricItem}>
              <div className={styles.metricHeader}>
                <span>SLA Compliance Requirement</span>
                <span className={styles.metricValue}>99.8%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "99.8%" }}></div>
              </div>
            </div>
            
            <div className={styles.metricItem}>
              <div className={styles.metricHeader}>
                <span>Avg. Cost per Contact</span>
                <span className={styles.metricValue}>$4.20</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
