"use client";

import React, { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  ArrowRight,
  TrendingDown,
  Smile,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SuccessStories.module.css";

const caseStudies = [
  {
    industry: "Healthcare",
    title: "How Global Health Corp Reduced Costs by 45% While Improving Patient Experience",
    challenge: "Scaling patient support during peak periods while maintaining high quality scores. Manual processes were causing delays in appointment scheduling and claim inquiries.",
    solution: "Implemented an AI-human hybrid triage system. AI handles routine scheduling and basic inquiries 24/7, while critical medical cases are instantly routed to empathy-trained human specialists.",
    results: [
      { label: "45%", desc: "Cost Reduction", icon: TrendingDown },
      { label: "99.2%", desc: "Patient Satisfaction", icon: Smile },
      { label: "60%", desc: "Response Improvement", icon: Zap },
    ],
    quote: "This partnership has redefined our patient engagement strategy. The AI platform handles the massive volume of routine queries, allowing our human specialists to focus on high-impact clinical care.",
    author: "Sarah Jenkins",
    authorTitle: "COO, Global Health Corp"
  }
];

export function SuccessStories() {
  const [index, setIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Trusted by Industry Leaders
        </motion.h2>

        <div className={styles.sliderContainer}>
          <button className={`${styles.navBtn} styles.prev`}>
            <ChevronLeft size={24} />
          </button>
          <button className={`${styles.navBtn} styles.next`}>
            <ChevronRight size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <div className={styles.badge}>{caseStudies[index].industry}</div>
                <div className={styles.logoBox} /> {/* Placeholder for Logo */}
              </div>

              <h3 className={styles.cardTitle}>{caseStudies[index].title}</h3>

              <div className={styles.contentGrid}>
                <div>
                  <h4 className={styles.contentH4}>The Challenge</h4>
                  <p className={styles.contentText}>{caseStudies[index].challenge}</p>
                  
                  <h4 className={styles.contentH4} style={{ marginTop: "2rem" }}>Our Solution</h4>
                  <p className={styles.contentText}>{caseStudies[index].solution}</p>
                </div>

                <div>
                  <h4 className={styles.contentH4}>Key Results</h4>
                  {caseStudies[index].results.map((res, i) => (
                    <div key={i} className={styles.resultItem}>
                      <div className={styles.resultLabel}>{res.label}</div>
                      <div className={styles.resultDesc}>{res.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className={styles.quote}>
                "{caseStudies[index].quote}"
                <footer style={{ marginTop: "1rem" }}>
                  <div className={styles.quoteAuthor}>{caseStudies[index].author}</div>
                  <div className={styles.quoteTitle}>{caseStudies[index].authorTitle}</div>
                </footer>
              </blockquote>

              <div className={styles.actions}>
                <button className={styles.primaryCTA}>
                  Read Full Case Study <ArrowRight size={18} />
                </button>
                <button className={styles.secondaryCTA}>
                  <Play size={18} fill="currentColor" />
                  Watch Video (3:45)
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.dots}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`${styles.dot} ${i === index ? styles.dotActive : ""}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
