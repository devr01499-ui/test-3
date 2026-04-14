"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Globe, 
  ChevronDown, 
  Cpu
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";
import dynamic from "next/dynamic";

const SolutionsMegaMenu = dynamic(() => import("./MegaMenu/SolutionsMegaMenu").then(mod => mod.SolutionsMegaMenu), { ssr: false });
const IndustriesMegaMenu = dynamic(() => import("./MegaMenu/IndustriesMegaMenu").then(mod => mod.IndustriesMegaMenu), { ssr: false });
const AITechMegaMenu = dynamic(() => import("./MegaMenu/AITechMegaMenu").then(mod => mod.AITechMegaMenu), { ssr: false });
const LocationsMegaMenu = dynamic(() => import("./MegaMenu/LocationsMegaMenu").then(mod => mod.LocationsMegaMenu), { ssr: false });
const ResourcesMegaMenu = dynamic(() => import("./MegaMenu/ResourcesMegaMenu").then(mod => mod.ResourcesMegaMenu), { ssr: false });
const AboutMegaMenu = dynamic(() => import("./MegaMenu/AboutMegaMenu").then(mod => mod.AboutMegaMenu), { ssr: false });
const ServicesMegaMenu = dynamic(() => import("./MegaMenu/ServicesMegaMenu").then(mod => mod.ServicesMegaMenu), { ssr: false });

const navItems = [
  { name: "Solutions", component: SolutionsMegaMenu },
  { name: "Industries", component: IndustriesMegaMenu },
  { name: "AI Technology", component: AITechMegaMenu },
  { name: "Locations", component: LocationsMegaMenu },
  { name: "Resources", component: ResourcesMegaMenu },
  { name: "About", component: AboutMegaMenu },
  { name: "Services", component: ServicesMegaMenu },
  { name: "Careers", hasDropdown: false },
  { name: "Contact", hasDropdown: false },
  { name: "Pricing", hasDropdown: false },
];

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setActiveMenu(name);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className={`${styles.header} ai-glow-effect`} onMouseLeave={handleMouseLeave}>
      <div className={`${styles.headerInner} container`}>
        {/* LOGO */}
        <Link href="/" className={styles.logoArea}>
          <Cpu className={styles.aiIcon} size={32} />
          <span>Claritiy</span>
        </Link>

        {/* MAIN MENU */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter(item.name)}
            >
              {item.name}
              {(item.component || item.hasDropdown) && (
                <ChevronDown size={14} className={styles.chevron} />
              )}
            </div>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className={styles.actions}>
          <div className={styles.langSwitch}>
            <Globe size={18} />
            <span>EN</span>
            <ChevronDown size={12} />
          </div>
          <Search size={20} className={styles.actionIcon} />
          <button className={styles.portalBtn}>Client Portal</button>
          <button className={styles.quoteBtn}>Get Quote</button>
        </div>
      </div>

      {/* MEGA MENUS */}
      <AnimatePresence>
        {activeMenu && navItems.find(i => i.name === activeMenu)?.component && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={styles.megaMenuWrapper}
            onMouseEnter={() => handleMouseEnter(activeMenu)}
          >
            <div className={styles.megaMenuInner}>
              {React.createElement(navItems.find(i => i.name === activeMenu)!.component!)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
