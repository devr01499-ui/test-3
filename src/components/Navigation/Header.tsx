"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronDown,
  Menu
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";
import dynamic from "next/dynamic";
import { MobileMenu } from "./MobileMenu";

const SolutionsMegaMenu = dynamic(() => import("./MegaMenu/SolutionsMegaMenu").then(mod => mod.SolutionsMegaMenu), { ssr: false });
const ServicesMegaMenu = dynamic(() => import("./MegaMenu/ServicesMegaMenu").then(mod => mod.ServicesMegaMenu), { ssr: false });
const IndustriesMegaMenu = dynamic(() => import("./MegaMenu/IndustriesMegaMenu").then(mod => mod.IndustriesMegaMenu), { ssr: false });
const AITechMegaMenu = dynamic(() => import("./MegaMenu/AITechMegaMenu").then(mod => mod.AITechMegaMenu), { ssr: false });
const ResourcesMegaMenu = dynamic(() => import("./MegaMenu/ResourcesMegaMenu").then(mod => mod.ResourcesMegaMenu), { ssr: false });

const AboutMegaMenu = dynamic(() => import("./MegaMenu/AboutMegaMenu").then(mod => mod.AboutMegaMenu), { ssr: false });

const navItems = [
  { name: "Solutions", path: "/solutions", component: SolutionsMegaMenu },
  { name: "Services", path: "/services", component: ServicesMegaMenu },
  { name: "Industries", path: "/industries", component: IndustriesMegaMenu },
  { name: "AI Technology", path: "/ai-technology", component: AITechMegaMenu },

  { name: "Resources", path: "/resources", component: ResourcesMegaMenu },
  { name: "About", path: "/about", component: AboutMegaMenu },
  { name: "Partnership", path: "/partnership", hasDropdown: false },
  { name: "Careers", path: "/careers", hasDropdown: false },
  { name: "Contact", path: "/contact", hasDropdown: false },
];

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <Link href="/" className={styles.logoArea} onClick={() => setIsMobileMenuOpen(false)}>
          <Image 
            src="/logo.png" 
            alt="Claritiy Logo" 
            width={36} 
            height={36}
            className={styles.aiIcon}
            priority
            sizes="36px"
          />
          <span>Claritiy</span>
        </Link>

        {/* MAIN MENU */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            item.path ? (
              <Link 
                href={item.path}
                key={item.name} 
                className={styles.navItem}
                style={{ textDecoration: 'none', color: 'inherit' }}
                onMouseEnter={() => handleMouseEnter(item.name)}
              >
                {item.name}
                {(item.component || item.hasDropdown) && (
                  <ChevronDown size={14} className={styles.chevron} />
                )}
              </Link>
            ) : (
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
            )
          ))}
        </nav>

        {/* MOBILE TRIGGER */}
        <button 
          className={styles.menuBtn} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={28} />
        </button>

      </div>

      {/* MEGA MENUS (Desktop) */}
      <AnimatePresence>
        {activeMenu && navItems.find(i => i.name === activeMenu)?.component && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
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

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}

