"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { IconResolver } from "./IconResolver";
import { HeroData, QuickStat } from "@/types/solutions";
import styles from "./SolutionTemplate.module.css";

export function HeroAndStats({ heroData, quickStats, breadcrumb }: { heroData: HeroData, quickStats: QuickStat[], breadcrumb: string }) {
  return (
    <>
      <div className="container">
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/solutions">Solutions</Link>
          <span>/</span>
          <span>{breadcrumb}</span>
        </div>

        <section className={styles.heroSection}>
          <div>
            <div className={styles.badge}>
              <IconResolver name={heroData.badgeIcon} size={16} />
              {heroData.badgeText}
            </div>
            <h1>{heroData.headline}</h1>
            <p className={styles.subheading}>
              {heroData.subheading}
            </p>
            <ul className={styles.heroList}>
              {heroData.bullets.map((bullet, i) => (
                <li key={i}><CheckCircle2 size={24} /> {bullet}</li>
              ))}
            </ul>
            <div className={styles.heroActions}>
              <button className={styles.primaryBtn}>
                {heroData.primaryCta} <ArrowRight size={18} />
              </button>
              <button className={styles.secondaryBtn}>
                <IconResolver name="Play" size={18} /> {heroData.secondaryCta}
              </button>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.visualPlaceholder}>
              <IconResolver name={heroData.visualIcon} size={64} style={{ marginBottom: "1rem", opacity: 0.5 }} />
              <p>{heroData.visualText}</p>
            </div>
            <div className={styles.metricsOverlay}>
              {heroData.metricsOverlay.map((metric, i) => (
                <div key={i}>
                  <span>{metric.value}</span> {metric.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.statsBar}>
          {quickStats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <IconResolver name={stat.icon} /> {stat.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
