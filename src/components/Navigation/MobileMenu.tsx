"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  X, 
  ChevronDown, 
  ArrowRight,
  Phone,
  Mail,
  Globe
} from "lucide-react";
import styles from "./Header.module.css";
import { 
  enhancedSolutions, 
  enhancedServices, 
  enhancedResources, 
  enhancedAbout 
} from "@/lib/navData";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (name: string) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  const menuSections = [
    { 
      name: "Solutions", 
      path: "/solutions", 
      items: enhancedSolutions.byFunction.map(f => f.title) 
    },
    { 
      name: "Services", 
      path: "/services", 
      items: enhancedServices.core.map(c => c.title.replace(/^[^\w\s]*/, '')) 
    },
    { 
      name: "Industries", 
      path: "/industries", 
      items: ["Healthcare", "E-commerce", "Banking", "Technology", "Logistics", "View All"]
    },
    { 
      name: "AI Technology", 
      path: "/ai-technology", 
      items: ["Our AI Suite", "Core AI Tech", "Process Automation", "Visual AI"]
    },
    { 
      name: "Resources", 
      path: "/resources", 
      items: ["Blog", "Case Studies", "Webinars", "ROI Calculator"]
    },
    { 
      name: "About", 
      path: "/about", 
      items: ["Company Story", "Leadership", "Sustainability", "Investors"]
    },
    { name: "Partnership", path: "/partnership" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.div 
      className={styles.mobileDrawer}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
    >
      <div className={styles.drawerHeader}>
        <div className={styles.logoArea}>
          <span>Claritiy</span>
        </div>
        <button onClick={onClose} className={styles.closeBtn}>
          <X size={28} />
        </button>
      </div>

      <div className={styles.drawerBody}>
        <nav className={styles.mobileNav}>
          {menuSections.map((section) => (
            <div key={section.name} className={styles.mobileNavItem}>
              <div className={styles.mobileNavHeader}>
                {section.path ? (
                  <Link href={section.path} onClick={onClose} className={styles.mainLink}>
                    {section.name}
                  </Link>
                ) : (
                  <span className={styles.mainLink}>{section.name}</span>
                )}
                
                {section.items && (
                  <button 
                    onClick={() => toggleAccordion(section.name)}
                    className={styles.accordionToggle}
                  >
                    <ChevronDown 
                      size={20} 
                      style={{ transform: activeAccordion === section.name ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} 
                    />
                  </button>
                )}
              </div>

              <AnimatePresence>
                {activeAccordion === section.name && section.items && (
                  <motion.ul 
                    className={styles.mobileSubList}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link href={section.path || "#"} onClick={onClose} className={styles.subLink}>
                          {item} <ArrowRight size={14} opacity={0.5} />
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className={styles.drawerFooter}>
          <div className={styles.footerContact}>
             <div className={styles.contactItem}>
                <Phone size={18} /> <span>+1-800-BPO-HELP</span>
             </div>
             <div className={styles.contactItem}>
                <Mail size={18} /> <span>sales@claritiy.com</span>
             </div>
             <div className={styles.contactItem}>
                <Globe size={18} /> <span>50+ Global Centers</span>
             </div>
          </div>
          <button className="btn-modern-primary" style={{ width: "100%", padding: "1rem" }} onClick={onClose}>
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
}
