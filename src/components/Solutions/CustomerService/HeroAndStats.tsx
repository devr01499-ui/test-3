"use client";
import React from "react";
import Link from "next/link";
import { 
  MessageSquare, HeadphonesIcon, Globe2, Activity, Play, 
  ArrowRight, CheckCircle2 
} from "lucide-react";
import styles from "./CustomerService.module.css";

export function HeroAndStats() {
  return (
    <>
      <div className="container">
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/solutions">Solutions</Link>
          <span>/</span>
          <span>Customer Service</span>
        </div>

        <section className={styles.heroSection}>
          <div>
            <div className={styles.badge}>
              <HeadphonesIcon size={16} />
              Customer Service
            </div>
            <h1>Exceptional Customer Experiences, Every Time</h1>
            <p className={styles.subheading}>
              AI-powered support that feels human. Seamlessly blend automated efficiency with empathetic human intelligence.
            </p>
            <ul className={styles.heroList}>
              <li><CheckCircle2 size={24} /> 24/7 omnichannel coverage</li>
              <li><CheckCircle2 size={24} /> AI + human hybrid model</li>
              <li><CheckCircle2 size={24} /> 50+ languages supported natively</li>
              <li><CheckCircle2 size={24} /> Real-time analytics and QA</li>
            </ul>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn}>
                Get Started <ArrowRight size={18} />
              </button>
              <button className={styles.secondaryBtn}>
                <Play size={18} /> See Demo
              </button>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.visualPlaceholder}>
              <Activity size={64} style={{ marginBottom: "1rem", opacity: 0.5 }} />
              <p>AI Interface & Agent Dashboard</p>
            </div>
            <div className={styles.metricsOverlay}>
              <div>
                <span>99.2%</span> CSAT Score
              </div>
              <div>
                <span>&lt;20s</span> Avg Response
              </div>
              <div>
                <span>95%</span> First Contact Res.
              </div>
            </div>
          </div>
        </section>

        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <HeadphonesIcon /> 5M+ Monthly Contacts
          </div>
          <div className={styles.statItem}>
            <MessageSquare /> 99.2% CSAT Avg
          </div>
          <div className={styles.statItem}>
            <Activity /> &lt;20s Response Time
          </div>
          <div className={styles.statItem}>
            <Globe2 /> 50+ Languages
          </div>
        </div>
      </div>
    </>
  );
}
