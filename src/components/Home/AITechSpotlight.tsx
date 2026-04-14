"use client";

import React, { useState, useEffect } from "react";
import { 
  Check, 
  ArrowRight, 
  Cpu, 
  Bot, 
  Zap, 
  Layers, 
  Search,
  MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AITechSpotlight.module.css";

const capabilities = [
  "Natural Language Processing",
  "Predictive Analytics",
  "Conversational AI",
  "Process Automation",
  "Sentiment Analysis",
  "Quality AI"
];

const chatMessages = [
  { role: "user", text: "I need to analyze 10,000 customer feedback forms." },
  { role: "ai", text: "Processing... 85% reduction in manual effort. Identified 5 key sentiment clusters." },
  { role: "user", text: "How many are urgent?" },
  { role: "ai", text: "125 feedback forms flagged for immediate action. Routed to High-Priority Queue." }
];

export function AITechSpotlight() {
  const [msgCount, setMsgCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgCount(prev => (prev % chatMessages.length) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.flex}>
          {/* LEFT: INTERACTIVE DEMO (OPTION A 3D Background Card) */}
          <div className={styles.leftDemo}>
            <div className="card-3d-wrapper">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ rotateY: 8, rotateX: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                viewport={{ once: true }}
                className={`card-3d-content ${styles.demoCard}`}
                style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                {/* Option A: Full Card Background Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://loremflickr.com/800/800/artificialintelligence,server/all" alt="AI Agent" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
                {/* Heavy Glass/Gradient Overlay to make chat readable */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(14, 165, 233, 0.85) 0%, rgba(168, 85, 247, 0.85) 100%)", zIndex: 1, backdropFilter: "blur(4px)" }} />
                
                <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column" }}>
                  <div className={styles.demoHeader} style={{ background: "rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                    <div className={styles.demoDot} style={{ background: "#22c55e", boxShadow: "0 0 10px #22c55e" }} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "white" }}>LIVE AI AGENT DEMO</span>
                  </div>
                  <div className={styles.demoContent} style={{ flexGrow: 1, padding: "1.5rem" }}>
                    <div className={styles.demoChat}>
                      <AnimatePresence mode="popLayout">
                        {chatMessages.slice(0, msgCount).map((msg, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className={`${styles.msg} ${msg.role === 'ai' ? styles.aiMsg : styles.userMsg}`}
                            style={{ 
                              background: msg.role === 'ai' ? "rgba(255,255,255,0.9)" : "rgba(30,30,30,0.8)", 
                              color: msg.role === 'ai' ? "var(--text-main)" : "white",
                              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                              border: "1px solid rgba(255,255,255,0.2)"
                            }}
                          >
                            {msg.text}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: TECH STACK */}
          <div className={styles.rightContent}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.title}
            >
              Powered by Advanced AI
            </motion.h2>

            <div className={styles.techStackVisual}>
              <div className={styles.flowRow}>
                <motion.div whileHover={{ scale: 1.1 }} className={styles.techNode}>NLP</motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className={styles.techNode}>ML</motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className={styles.techNode}>CV</motion.div>
              </div>
              
              <div className={styles.connector} />
              
              <motion.div 
                animate={{ boxShadow: ["0 0 20px rgba(14, 165, 233, 0.2)", "0 0 40px rgba(14, 165, 233, 0.5)", "0 0 20px rgba(14, 165, 233, 0.2)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={styles.engineNode}
              >
                AI ENGINE CLARITIY
              </motion.div>

              <div className={styles.connector} />

              <div className={styles.layerNode}>Human Interface Layer</div>
              <div className={styles.layerNode} style={{ borderStyle: "dashed", borderColor: "#22c55e" }}>Quality Assurance AI</div>
            </div>

            <div className={styles.capabilities}>
              {capabilities.map((cap, i) => (
                <motion.div 
                  key={cap}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={styles.capItem}
                >
                  <Check size={18} />
                  {cap}
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ x: 5 }}
              className={styles.cta}
            >
              Explore AI Platform <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
