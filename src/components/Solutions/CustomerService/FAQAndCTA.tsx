"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Calendar, Download, Play } from "lucide-react";
import styles from "./CustomerService.module.css";

const faqs = [
  { q: "How do you ensure quality?", a: "We utilize AI-driven 100% quality monitoring alongside experienced human QA managers. Every interaction is scored against custom rubrics tailored to your brand voice." },
  { q: "What languages do you support?", a: "We natively support over 50 languages across our global delivery centers, complemented by real-time AI translation for any emergent linguistic needs." },
  { q: "How quickly can you scale?", a: "With our flexible hybrid model, we can handle volume spikes up to 300% instantly via AI, and ramp up fully-trained human teams within 2 to 4 weeks depending on complexity." },
  { q: "What industries do you serve?", a: "Our dedicated pods specialize in E-commerce, SaaS, Healthcare, Financial Services, and Telecommunications, bringing deep industry terminology and compliance expertise." },
  { q: "How does pricing work?", a: "We offer completely customized pricing including Pay-per-contact, Dedicated Agent hourly rates, and Outcome-based models. We build the financial structure that guarantees your ROI." },
  { q: "What's your data security approach?", a: "Enterprise-grade. We are ISO 27001 certified, SOC 2 Type II compliant, strict GDPR adherents, and maintain PCI DSS clean rooms for payment processing." },
  { q: "Can you integrate with our systems?", a: "Yes. Our tech stack natively integrates with Salesforce, Zendesk, ServiceNow, and everything in between through direct API webhooks ensuring zero data silos." },
  { q: "What's your average ramp-up time?", a: "Typical enterprise implementations launch within 45 to 60 days. This includes system integration, knowledge base ingestion, agent training, and shadow phases." }
];

export function FAQAndCTA() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* FAQ */}
      <section className={styles.section}>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqMax}>
            {faqs.map((faq, i) => (
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

          {/* Related Solutions */}
          <div className={styles.relatedContainer}>
            <h3>You might also be interested in:</h3>
            <div className={styles.relatedGrid}>
              <Link href="/solutions/technical-support" className={styles.relatedCard}>
                Technical Support <ArrowRight size={20} />
              </Link>
              <Link href="/solutions/email-chat" className={styles.relatedCard}>
                Email/Chat Support <ArrowRight size={20} />
              </Link>
              <Link href="/solutions/social-media" className={styles.relatedCard}>
                Social Media Management <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <h2>Ready to Transform Your Customer Experience?</h2>
        <div className={styles.ctaActions}>
          <button className={styles.btnWhite}>
            <Calendar size={20} /> Schedule Consultation
          </button>
          <button className={styles.btnOutline}>
            <Download size={20} /> Download Service Sheet
          </button>
          <button className={styles.btnOutline}>
            <Play size={20} /> See Demo
          </button>
        </div>
      </section>
    </>
  );
}
