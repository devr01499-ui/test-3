"use client";
import React, { useState, useEffect } from "react";
import {
  Calculator,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Zap,
  DollarSign
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ROICalculator.module.css";
import { BPOEnterpriseCard } from "../Shared/BPOEnterpriseCard";
import { GeometricDivider } from "../Shared/GeometricDivider";

export function ROICalculator() {
  const [headcount, setHeadcount] = useState(100);
  const [avgCost, setAvgCost] = useState(45000);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    // Basic BPO ROI Logic: 40% reduction via AI-augmented operations
    const annualSpend = headcount * avgCost;
    const potentialSavings = annualSpend * 0.42;
    setSavings(potentialSavings);
  }, [headcount, avgCost]);

  return (
    <section style={{ padding: "128px 0", background: "var(--soft-gray)", position: "relative", overflow: "hidden" }}>
      <div className="container">

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "center" }}>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ color: "var(--sunrise-amber)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px", marginBottom: "1rem" }}
            >
              Economic Analysis
            </motion.div>
            <h2 style={{ fontSize: "52px", fontWeight: 700, lineHeight: 1.1, marginBottom: "2rem" }}>
              Calculate Your <br />
              <span style={{ color: "var(--sunrise-amber)" }}>Efficiency Gain.</span>
            </h2>
            <p style={{ color: "var(--medium-gray)", fontSize: "18px", lineHeight: 1.6, marginBottom: "3rem" }}>
              Our proprietary Economic Analysis Engine evaluates your operational footprint to determine precisely how neural integration and global delivery centers will optimize your bottom line and compress time-to-value.
            </p>

            <div style={{ display: "grid", gap: "1.5rem" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{ color: "var(--emerald-green)" }}><CheckCircle2 size={24} /></div>
                <div style={{ fontSize: "16px", fontWeight: 600 }}>42% Projected Operational Efficiency Gain</div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{ color: "var(--electric-blue)" }}><ShieldCheck size={24} /></div>
                <div style={{ fontSize: "16px", fontWeight: 600 }}>Institutional Governance & Auditing Layer</div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{ color: "var(--sunrise-amber)" }}><Zap size={24} /></div>
                <div style={{ fontSize: "16px", fontWeight: 600 }}>Real-Time Cognitive Scaling Logic</div>
              </div>
            </div>
          </div>

          <div className="card-perspective">
            <BPOEnterpriseCard elevation={4} intensity={12}>
              <div style={{ padding: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {[1, 2, 3].map(i => <div key={i} style={{ width: "8px", height: "8px", background: "var(--border)", borderRadius: "50%" }} />)}
                  </div>
                  <div style={{ fontSize: "11px", fontWeight: 800, color: "var(--medium-gray)", textTransform: "uppercase", letterSpacing: "1px" }}>INTEL-ROI ENGINE v4.0</div>
                </div>

                <div style={{ marginBottom: "2.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <label style={{ fontSize: "14px", fontWeight: 800 }}>INSTITUTIONAL HEADCOUNT</label>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--electric-blue)", fontWeight: 700 }}>{headcount} FTEs</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="5000"
                    value={headcount}
                    onChange={(e) => setHeadcount(parseInt(e.target.value))}
                    style={{ width: "100%", height: "4px", background: "var(--border)", borderRadius: "2px", accentColor: "var(--electric-blue)" }}
                  />
                </div>

                <div style={{ marginBottom: "3.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <label style={{ fontSize: "14px", fontWeight: 800 }}>AVG COST PER EMPLOYEE (ANNUAL)</label>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--electric-blue)", fontWeight: 700 }}>${avgCost.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="30000"
                    max="150000"
                    step="5000"
                    value={avgCost}
                    onChange={(e) => setAvgCost(parseInt(e.target.value))}
                    style={{ width: "100%", height: "4px", background: "var(--border)", borderRadius: "2px", accentColor: "var(--electric-blue)" }}
                  />
                </div>

                <div style={{ background: "var(--charcoal-deep)", borderRadius: "16px", padding: "2.5rem", color: "var(--white)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, right: 0, padding: "1rem", opacity: 0.1 }}><TrendingUp size={100} color="var(--sunrise-amber)" /></div>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "var(--sunrise-amber)", marginBottom: "1rem", textTransform: "uppercase" }}>Estimated Annual Savings</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "42px", fontWeight: 700 }}>
                    ${Math.floor(savings).toLocaleString()}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "1.5rem" }}>
                    <div style={{ height: "1px", flexGrow: 1, background: "rgba(255,255,255,0.1)" }} />
                    <span style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.4)" }}>NEURAL-ROI ENGINE v5.2</span>
                  </div>
                </div>

                <button className="btn-premium btn-primary" style={{ width: "100%", marginTop: "2rem", background: "var(--sunrise-amber)", justifyContent: "center" }}>
                  Download Full Economic Blueprint <ArrowRight size={20} />
                </button>
              </div>
            </BPOEnterpriseCard>
          </div>

        </div>

      </div>

      <div style={{ marginTop: "128px" }}>
        <GeometricDivider type="slant-up" color="var(--white)" height="100px" />
      </div>
    </section>
  );
}
