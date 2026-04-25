"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./about-v2.module.css";
import { aboutData } from "@/data/about";

export function AboutLeadership() {
  const data = aboutData["leadership-team"];
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.storyContent}
            style={{ fontSize: "3.5rem", fontWeight: 900 }}
          >
            {data.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ maxWidth: "800px", margin: "1rem auto 0", fontSize: "1.125rem", color: "var(--text-muted)" }}
          >
            {data.description}
          </motion.p>
        </div>

        <div className={styles.teamGrid}>
          {data.features.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.teamMember}
            >
              <div className={styles.memberImage}>
                <Image 
                  src={`https://images.unsplash.com/photo-${
                    i === 0 ? "1507003211163-49d055f1a7ec" : 
                    i === 1 ? "1573497019940-1c28c88b4f3e" : 
                    i === 2 ? "1560250097-0b93528c311a" : 
                    i === 3 ? "1519085360753-af0119f7cbe7" : 
                    i === 4 ? "1580489944761-15a19d654956" : 
                    "1506794778202-cad84cf45f1d"
                  }?auto=format&fit=crop&q=80&w=600`}
                  alt={member.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className={styles.memberName}>{member.title}</h3>
              <p className={styles.memberRole}>{member.description.split(".")[0]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
