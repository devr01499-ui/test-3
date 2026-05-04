"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  Send, 
  MessageSquare, 
  Globe, 
  Play,
  Check
} from "lucide-react";
import styles from "./Footer.module.css";

export function Footer() {
  const [year, setYear] = React.useState<number | string>("2026");

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* BRAND COLUMN */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image src="/logo.png" alt="Claritiy Logo" width={36} height={36} sizes="36px" />
              <span>Claritiy</span>
            </Link>
            <p className={styles.desc}>
              The future of intelligent outsourcing. Seamlessly integrating AI capabilities 
              with human expertise to deliver enterprise-grade business operations.
            </p>
            <div className={styles.newsletter}>
              <div className={styles.colTitle}>Subscribe to Insights</div>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Enter your email" className={styles.input} />
                <button className={styles.submitBtn}>
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* SOLUTIONS */}
          <div>
            <div className={styles.colTitle}>Solutions</div>
            <ul className={styles.linkList}>
              {["Customer Experience", "Sales & Revenue", "Back Office Ops", "Finance & Accounting", "HR & Talent"].map(link => (
                <li key={link}><a href="#" className={styles.link}>{link}</a></li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <div className={styles.colTitle}>Services</div>
            <ul className={styles.linkList}>
              {["Contact Center", "Data Management", "RPA Integration", "Cloud Support", "Omnichannel AI"].map(link => (
                <li key={link}><a href="#" className={styles.link}>{link}</a></li>
              ))}
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <div className={styles.colTitle}>Industries</div>
            <ul className={styles.linkList}>
              {["Healthcare", "E-commerce", "Banking & Finance", "Tech & SaaS", "Telecom"].map(link => (
                <li key={link}><a href={`/industries/${link.toLowerCase().replace(/ & |-|\s+/g, '-')}`} className={styles.link}>{link}</a></li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <div className={styles.colTitle}>Resources</div>
            <ul className={styles.linkList}>
              {["Blog & Insights", "Case Studies", "Whitepapers", "Webinars", "API Documentation"].map(link => (
                <li key={link}><a href="/resources" className={styles.link}>{link}</a></li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <div className={styles.colTitle}>Company</div>
            <ul className={styles.linkList}>
              {["About Us", "Our Leadership", "Careers", "Newsroom", "Contact Us"].map(link => (
                <li key={link}><a href="#" className={styles.link}>{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © {year} Claritiy BPO Solutions. All rights reserved.
          </div>
          
          <div className={styles.legalLinks}>
            <a href="#" className={styles.link}>Privacy Policy</a>
            <a href="#" className={styles.link}>Terms of Service</a>
            <a href="#" className={styles.link}>Cookie Policy</a>
            <a href="#" className={styles.link}>Security</a>
          </div>

          <div className={styles.socials}>
            <Building2 size={20} className={styles.socialIcon} />
            <Send size={20} className={styles.socialIcon} />
            <MessageSquare size={20} className={styles.socialIcon} />
            <Globe size={20} className={styles.socialIcon} />
            <Play size={20} className={styles.socialIcon} />
          </div>
        </div>
      </div>
    </footer>
  );
}
