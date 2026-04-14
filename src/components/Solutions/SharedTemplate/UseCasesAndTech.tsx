"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { UseCase, TechCategory } from "@/types/solutions";
import styles from "./SolutionTemplate.module.css";

export function UseCasesAndTech({ useCases, techStack }: { useCases: { title: string, tabs: string[], items: UseCase[] }, techStack: { title: string, categories: TechCategory[] } }) {
  const [activeTab, setActiveTab] = useState(useCases.tabs[0]);

  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <h2>{useCases.title}</h2>
          
          <div className={styles.tabsNav}>
            {useCases.tabs.map(tab => (
              <button 
                key={tab}
                className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.useCasesGrid}>
            {useCases.items.map((uc, i) => (
              <div key={i} className={styles.useCaseCard}>
                <div className={styles.useCaseIcon}>{uc.icon}</div>
                <h3>{uc.title}</h3>
                
                <div className={styles.ucSection}>
                  <div className={styles.ucLabel}>Challenge</div>
                  <div className={styles.ucText}>{uc.challenge}</div>
                </div>
                
                <div className={styles.ucSection}>
                  <div className={styles.ucLabel}>Solution</div>
                  <div className={styles.ucText}>{uc.solution}</div>
                </div>
                
                <div className={styles.ucResults}>
                  Results: {uc.results}
                </div>
                
                <Link href="#" className={styles.learnMore}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <h2>{techStack.title}</h2>
          
          <div className={styles.techWrapper}>
            <div className={styles.techGrid}>
              {techStack.categories.map((cat, i) => (
                <div key={i} className={styles.techCol}>
                  <h3>{cat.title}</h3>
                  <ul>
                    {cat.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <button className={styles.primaryBtn} style={{ background: "white", color: "var(--primary)", border: "2px solid var(--border)", boxShadow: "none" }}>
              View Full Tech Stack <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
