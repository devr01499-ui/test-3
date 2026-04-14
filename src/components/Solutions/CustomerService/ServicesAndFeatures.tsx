"use client";
import React from "react";
import { 
  PhoneIncoming, PhoneOutgoing, Repeat, ArrowDown,
  Cpu, BarChart3, Globe, ShieldCheck, Settings, Users, Clock, Scaling
} from "lucide-react";
import styles from "./CustomerService.module.css";

export function ServicesAndFeatures() {
  return (
    <>
      {/* Service Overview */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <h2>Complete Customer Support Solutions</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3><PhoneIncoming /> Inbound Support</h3>
              <ul>
                <li><ArrowDown size={14} /> Phone Support</li>
                <li><ArrowDown size={14} /> Email Support</li>
                <li><ArrowDown size={14} /> Live Chat Support</li>
                <li><ArrowDown size={14} /> Social Media Queries</li>
                <li><ArrowDown size={14} /> Self-Service Portals</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <h3><PhoneOutgoing /> Outbound Support</h3>
              <ul>
                <li><ArrowDown size={14} /> Proactive Care</li>
                <li><ArrowDown size={14} /> Customer Surveys</li>
                <li><ArrowDown size={14} /> Post-sale Follow-ups</li>
                <li><ArrowDown size={14} /> Subscription Renewals</li>
                <li><ArrowDown size={14} /> Upsell & Cross-sell</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <h3><Repeat /> Omnichannel</h3>
              <ul>
                <li><ArrowDown size={14} /> Seamless Phone entry</li>
                <li><ArrowDown size={14} /> Email handoffs</li>
                <li><ArrowDown size={14} /> Web Chat continuity</li>
                <li><ArrowDown size={14} /> SMS & WhatsApp</li>
                <li><ArrowDown size={14} /> Video Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className={styles.section}>
        <div className="container">
          <h2>The Perfect Balance of AI and Human Touch</h2>
          
          <div className={styles.processContainer}>
            <div style={{ fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem", color: "var(--primary)" }}>
              Customer Contact
            </div>
            <div className={styles.flowArrowDown}></div>
            
            <div className={styles.flowBox}>
              [AI Router] Analyzes Intent, Sentiment, Complexity
            </div>
            
            <div className={styles.flowSplit}>
              <div className={styles.splitLineLeft}></div>
              <div className={styles.splitLineRight}></div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "200px" }}>
                <div className={styles.flowBox} style={{ borderColor: "#10b981", color: "#10b981" }}>
                  AI Bot
                </div>
                <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>Simple Queries</span>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "200px" }}>
                <div className={styles.flowBox} style={{ borderColor: "#f59e0b", color: "#d97706" }}>
                  Human Agent
                </div>
                <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>Complex / Emotional</span>
              </div>
            </div>
            
            <div className={styles.flowArrowDown} style={{ height: "30px" }}></div>
            
            <div className={styles.flowBox}>
              [AI Quality Monitor] Real-time feedback & learning
            </div>
            
            <div className={styles.flowArrowDown} style={{ height: "30px" }}></div>
            
            <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--primary)" }}>
              Resolution + Follow-up
            </div>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}><Cpu /> 70% of queries resolved by AI</div>
            <div className={styles.benefitItem}><Users /> 30% escalated to skilled agents</div>
            <div className={styles.benefitItem}><ShieldCheck /> 100% quality monitored</div>
            <div className={styles.benefitItem}><BarChart3 /> Continuous learning & improvement</div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <h2>Enterprise-Grade Capabilities</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Cpu /></div>
              <h3>AI-Powered Automation</h3>
              <ul>
                <li>Intelligent Chatbots</li>
                <li>Predictive Routing</li>
                <li>Sentiment Analysis</li>
                <li>Automated QA</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><BarChart3 /></div>
              <h3>Real-Time Analytics</h3>
              <ul>
                <li>Live KPIs</li>
                <li>Custom Dashboards</li>
                <li>Automated Reports</li>
                <li>Actionable Insights</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Globe /></div>
              <h3>Multi-Language</h3>
              <ul>
                <li>50+ Languages</li>
                <li>Native Speakers</li>
                <li>Cultural Expertise</li>
                <li>Real-time Translation</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><ShieldCheck /></div>
              <h3>Security & Compliance</h3>
              <ul>
                <li>ISO 27001 Certified</li>
                <li>SOC 2 Type II</li>
                <li>GDPR Compliant</li>
                <li>PCI DSS Secure</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Settings /></div>
              <h3>Deep Integration</h3>
              <ul>
                <li>CRM Sync</li>
                <li>Ticketing Systems</li>
                <li>Knowledge Bases</li>
                <li>Custom API Webhooks</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Users /></div>
              <h3>Expert Team</h3>
              <ul>
                <li>Rigorous Training</li>
                <li>Industry Experts</li>
                <li>Low Attrition</li>
                <li>Dedicated Managers</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Clock /></div>
              <h3>24/7/365 Ops</h3>
              <ul>
                <li>Follow-the-sun</li>
                <li>Peak Spikes Coverage</li>
                <li>Holiday Support</li>
                <li>Zero Downtime</li>
              </ul>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Scaling /></div>
              <h3>Scalability</h3>
              <ul>
                <li>Flex Capacity</li>
                <li>Global Delivery</li>
                <li>Rapid Ramp-up</li>
                <li>Burst Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
