import React from "react";
import { ArrowRight, MapPin, Globe2, Video } from "lucide-react";
import styles from "./MegaMenu.module.css";
import { regions } from "@/lib/navData";

export function LocationsMegaMenu() {
  return (
    <div className={styles.mapSection}>
      {/* MAP AREA */}
      <div style={{ flex: 1.2 }}>
        <div className={styles.mapThumb}>
          <div style={{ textAlign: "center" }}>
            <Globe2 size={64} color="var(--primary)" style={{ marginBottom: "1rem", opacity: 0.5 }} />
            <p className={styles.mapPlaceholder}>[Interactive World Map]</p>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>• Pins for each center • Hover shows details</p>
          </div>
          
          {/* Mock Pins */}
          {[
            { top: "30%", left: "20%" }, { top: "50%", left: "60%" },
            { top: "40%", left: "45%" }, { top: "65%", left: "25%" }
          ].map((pin, i) => (
            <div 
              key={i} 
              style={{ 
                position: "absolute", 
                top: pin.top, 
                left: pin.left,
                color: "var(--primary)",
                filter: "drop-shadow(0 0 5px white)"
              }}
            >
              <MapPin size={18} fill="var(--primary)" />
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: "1.5rem" }}>
          <h4 className={styles.title} style={{ marginBottom: "1rem" }}>Featured Locations:</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {["Manila", "Bangalore", "Mexico", "Poland", "Costa Rica", "Cairo"].map(loc => (
              <span 
                key={loc}
                style={{ 
                  padding: "0.4rem 0.8rem", 
                  background: "var(--surface)", 
                  borderRadius: "6px", 
                  fontSize: "0.85rem", 
                  fontWeight: 600,
                  color: "var(--text-main)",
                  border: "1px solid var(--border)"
                }}
              >
                [{loc}]
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* REGIONS AREA */}
      <div style={{ flex: 0.8 }}>
        <h3 className={styles.title}>Global Presence</h3>
        <p className={styles.title} style={{ color: "var(--primary)", fontSize: "0.65rem", marginTop: "-1rem", marginBottom: "1.5rem" }}>Regions:</p>
        <ul className={styles.list}>
          {regions.map(region => (
            <li key={region}>
              <a href="#" className={styles.link}>
                <div style={{ width: "6px", height: "6px", border: "1.5px solid var(--primary)", borderRadius: "1px" }} />
                {region}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <a href="#" className={styles.iconLink}>
            <ArrowRight size={18} color="var(--primary)" />
            View All Locations
          </a>
          <a href="#" className={styles.iconLink}>
            <Video size={18} color="var(--primary)" />
            Virtual Tour
          </a>
        </div>
      </div>
    </div>
  );
}
