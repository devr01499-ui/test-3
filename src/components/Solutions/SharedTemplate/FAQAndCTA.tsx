"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Calendar, Download, Play } from "lucide-react";
import { FAQ, RelatedSolution } from "@/types/solutions";
import styles from "./SolutionTemplate.module.css";

export function FAQAndCTA({ faqs, related, cta }: { faqs: { title: string, items: FAQ[] }, related: { title: string, items: RelatedSolution[] }, cta: { title: string, primaryBtn: string, secondaryBtn1: string, secondaryBtn2: string } }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <h2>{faqs.title}</h2>
          <div className={styles.faqMax}>
            {faqs.items.map((faq, i) => (
              <div key={i} className={styles.faqItem} data-open={openFaq === i}>
                <button className={styles.faqQuestion} onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <ChevronDown className={styles.faqIcon} />
                </button>
                {openFaq === i && (
                  <div className={styles.faqAnswer}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/faq" className={styles.learnMore}>
                View All FAQs <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className={styles.relatedContainer}>
            <h3>{related.title}</h3>
            <div className={styles.relatedGrid}>
              {related.items.map((rel, i) => (
                <Link key={i} href={rel.link} className={styles.relatedCard}>
                  {rel.title} <ArrowRight size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>{cta.title}</h2>
        <div className={styles.ctaActions}>
          <button className={styles.btnWhite}>
            <Calendar size={20} /> {cta.primaryBtn}
          </button>
          <button className={styles.btnOutline}>
            <Download size={20} /> {cta.secondaryBtn1}
          </button>
          <button className={styles.btnOutline}>
            <Play size={20} /> {cta.secondaryBtn2}
          </button>
        </div>
      </section>
    </>
  );
}
