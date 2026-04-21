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
import Image from "next/image";

const services = [
  { title: "Intelligent Customer Experience", icon: Headset, img: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800", glow: "hover-glow-1" },
  { title: "High-Tier Technical Support", icon: MessageSquare, img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800", glow: "hover-glow-2" },
  { title: "Strategic Sales & Marketing", icon: PhoneCall, img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", glow: "hover-glow-3" },
  { title: "Enterprise Back-Office Operations", icon: LayoutDashboard, img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800", glow: "hover-glow-1" },
  { title: "Regulatory Finance & Accounting", icon: Coins, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800", glow: "hover-glow-2" },
  { title: "Global HR & Talent Acquisition", icon: Users, img: "https://images.unsplash.com/photo-1521791136064-7986c2953d75?auto=format&fit=crop&q=80&w=800", glow: "hover-glow-3" },
  { title: "High-Precision Data Management", icon: SquarePen, img: "https://images.unsplash.com/photo-1542744094-3a31f2f9c568?auto=format&fit=crop&q=80&w=800", glow: "hover-glow-1" },
  { title: "Integrated Digital Transformation", icon: Globe, img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", glow: "hover-glow-2" },
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
          Premier BPO Solutions
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={styles.subtitle}
        >
          Specialized enterprise expertise delivered via our high-performance global delivery network.
        </motion.p>

        <motion.div ref={carousel} className={styles.carouselContainer} whileTap={{ cursor: "grabbing" }}>
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className={styles.track}
          >
            {services.map((service, i) => (
              <div key={i} className="card-3d-wrapper" style={{ width: "320px", flexShrink: 0, height: "380px", padding: "10px" }}>
                <motion.div 
                  className={`card-3d-content ${styles.card}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ rotateY: 8, rotateX: -4, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.05 }}
                >
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className="card-image-bg"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                  <div className="card-overlay" />
                  <div className={`card-content-wrap ${service.glow}`}>
                    <div className={styles.iconBox} style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(12px)", color: "white", marginBottom: "auto" }}>
                      <service.icon size={30} />
                    </div>
                    <div className="card-glass" style={{ width: "100%" }}>
                      <h3 className={styles.cardTitle} style={{ color: "white", marginBottom: "0.5rem", fontSize: "1.25rem" }}>{service.title}</h3>
                      <div className={styles.aiBadge} style={{ background: "rgba(14, 165, 233, 0.3)", color: "white", border: "1px solid rgba(255, 255, 255, 0.4)", width: "max-content", padding: "4px 10px" }}>
                        <Check size={12} />
                        AI: ENHANCED
                      </div>
                      <div className={styles.arrowLink} style={{ color: "white", marginTop: "1rem" }}>
                        <ArrowRight size={20} />
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

