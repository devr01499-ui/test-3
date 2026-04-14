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
  { title: "Customer Service", icon: Headset, img: "https://loremflickr.com/600/600/customer,service/all?lock=71", glow: "hover-glow-1" },
  { title: "Tech Support", icon: MessageSquare, img: "https://loremflickr.com/600/600/technical,support/all?lock=72", glow: "hover-glow-2" },
  { title: "Sales & Marketing", icon: PhoneCall, img: "https://loremflickr.com/600/600/sales,marketing/all?lock=73", glow: "hover-glow-3" },
  { title: "Back Office", icon: LayoutDashboard, img: "https://loremflickr.com/600/600/office,desk/all?lock=74", glow: "hover-glow-4" },
  { title: "Finance & Accounting", icon: Coins, img: "https://loremflickr.com/600/600/accounting,calculator/all?lock=75", glow: "hover-glow-5" },
  { title: "HR & Recruitment", icon: Users, img: "https://loremflickr.com/600/600/recruitment,hr/all?lock=76", glow: "hover-glow-1" },
  { title: "Data Entry", icon: SquarePen, img: "https://loremflickr.com/600/600/data,typing/all?lock=77", glow: "hover-glow-2" },
  { title: "Digital Services", icon: Globe, img: "https://loremflickr.com/600/600/digital,globe/all?lock=78", glow: "hover-glow-3" },
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
              <div key={i} className="card-3d-wrapper" style={{ width: "260px", flexShrink: 0, height: "280px" }}>
                <motion.div 
                  className={`card-3d-content ${styles.card}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ rotateY: 6, rotateX: -6, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.05 }}
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  {/* Option A: Full background image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.img} alt={service.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
                  <div className={service.glow} style={{ position: "absolute", inset: 0, opacity: 0.4, zIndex: 1, mixBlendMode: "overlay" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,30,0.45) 0%, rgba(5,5,20,0.90) 100%)", zIndex: 2 }} />
                  <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", height: "100%", padding: "1.5rem" }}>
                    <div className={styles.iconBox} style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", color: "white", marginBottom: "auto" }}>
                      <service.icon size={28} />
                    </div>
                    <div>
                      <h3 className={styles.cardTitle} style={{ color: "white", marginBottom: "0.5rem" }}>{service.title}</h3>
                      <div className={styles.aiBadge} style={{ background: "rgba(34,197,94,0.2)", color: "#86efac", border: "1px solid rgba(34,197,94,0.3)", width: "max-content" }}>
                        <Check size={12} />
                        AI: READY
                      </div>
                      <div className={styles.arrowLink} style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.75rem" }}>
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
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

