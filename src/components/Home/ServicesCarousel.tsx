"use client";

import React, { useRef, useState, useEffect } from "react";
import { 
  Headset, 
  MessageSquare, 
  PhoneCall, 
  LayoutDashboard, 
  Coins, 
  Users, 
  SquarePen, 
  Globe,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ServicesCarousel.module.css";

const services = [
  { title: "Customer Service", icon: Headset },
  { title: "Tech Support", icon: MessageSquare },
  { title: "Sales & Marketing", icon: PhoneCall },
  { title: "Back Office", icon: LayoutDashboard },
  { title: "Finance & Accounting", icon: Coins },
  { title: "HR & Recruitment", icon: Users },
  { title: "Data Entry", icon: SquarePen },
  { title: "Digital Services", icon: Globe },
];

export function ServicesCarousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Comprehensive BPO Solutions
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={styles.subtitle}
        >
          Industry-leading services powered by intelligent technology
        </motion.p>

        <motion.div ref={carousel} className={styles.carouselContainer} whileTap={{ cursor: "grabbing" }}>
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className={styles.track}
          >
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className={styles.iconBox}>
                  <service.icon size={28} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <div className={styles.aiBadge}>
                  <Check size={12} />
                  AI: READY
                </div>
                <div className={styles.arrowLink}>
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className={styles.controls}>
          <button className={styles.controlBtn} onClick={() => carousel.current?.scrollBy({ left: -300, behavior: "smooth" })}>
            <ChevronLeft size={24} />
          </button>
          <button className={styles.controlBtn} onClick={() => carousel.current?.scrollBy({ left: 300, behavior: "smooth" })}>
            <ChevronRight size={24} />
          </button>
        </div>

        <a href="#" className={styles.viewAll}>
          View All Services <ArrowRight size={18} style={{ verticalAlign: "middle" }} />
        </a>
      </div>
    </section>
  );
}
