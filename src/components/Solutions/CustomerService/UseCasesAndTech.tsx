"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./CustomerService.module.css";

const tabs = ["All", "Retail & E-commerce", "SaaS & Tech", "Healthcare", "Financial Services", "Telecommunications"];

const useCases = [
  {
    icon: "🛍️",
    title: "E-commerce Support",
    challenge: "Managing massive seasonal traffic spikes and high-anxiety shipping queries without bloating headcount.",
    solution: "Deployed AI bots for order tracking and simple returns, with flex-staffed human empathy for escalations.",
    results: "99% CSAT • 40% cost reduction"
  },
  {
    icon: "💻",
    title: "SaaS Technical Support",
    challenge: "Providing complex, multi-tiered technical troubleshooting 24/7 for a global enterprise user base.",
    solution: "Integrated a smart knowledge base with trained L1/L2 engineers and seamless CRM issue tracking.",
    results: "95% FCR • 30% faster resolution"
  },
  {
    icon: "🏥",
    title: "Healthcare Patient Care",
    challenge: "Handling sensitive patient data and appointment scheduling with strict HIPAA compliance and deep empathy.",
    solution: "Implemented secure AI triage leading into dedicated, trained medical support receptionists.",
    results: "98% satisfaction • 100% compliant"
  }
];

export function UseCasesAndTech() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      {/* Use Cases */}
      <section className={styles.section}>
        <div className="container">
          <h2>Proven Solutions Across Scenarios</h2>
          
          <div className={styles.tabsNav}>
            {tabs.map(tab => (
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
            {useCases.map((uc, i) => (
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

      {/* Tech Stack */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <h2>Powered by Leading Technology</h2>
          
          <div className={styles.techWrapper}>
            <div className={styles.techGrid}>
              <div className={styles.techCol}>
                <h3>AI & Automation</h3>
                <ul>
                  <li>IBM Watson</li>
                  <li>Google Dialogflow</li>
                  <li>Amazon Lex</li>
                  <li>Custom NLP Models</li>
                  <li>Sentiment Analysis Engines</li>
                </ul>
              </div>
              <div className={styles.techCol}>
                <h3>Core Platforms</h3>
                <ul>
                  <li>Salesforce Service Cloud</li>
                  <li>Microsoft Dynamics 365</li>
                  <li>ServiceNow</li>
                  <li>Genesys Cloud</li>
                  <li>Five9 Contact Center</li>
                </ul>
              </div>
              <div className={styles.techCol}>
                <h3>Integrations</h3>
                <ul>
                  <li>Zendesk</li>
                  <li>Freshdesk</li>
                  <li>Intercom</li>
                  <li>HubSpot CRM</li>
                  <li>Custom REST/GraphQL APIs</li>
                </ul>
              </div>
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
