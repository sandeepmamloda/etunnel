"use client";
import { useState } from "react";
import styles from "./filteringproducts.module.css";

// ─── Data ─────────────────────────────────────────────

const CATEGORIES = [
  { label: "All Products", value: "all" },
  { label: "Finger Vein", value: "finger-vein" },
  { label: "Fingerprint", value: "fingerprint" },
  { label: "Multimodal", value: "multimodal" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "ETUNNEL-ST-100V",
    category: "finger-vein",
    badge: "Finger Vein",
    desc: "An integrated security product utilizing finger vein-based biometric authentication. It offers strong security and convenience in various environments, including H/W wallets, S/W wallets, and I²C login.",
  },
  {
    id: 2,
    name: "ETUNNEL-PL-101V",
    category: "finger-vein",
    badge: "Finger Vein",
    desc: "It is a safe and convenient login product using biometric authentication. Experience the optimal login solution for a secure digital environment with finger vein recognition, no password required",
  },
  {
    id: 3,
    name: "ETUNNEL-SW-100V",
    category: "finger-vein",
    badge: "Finger Vein",
    desc: "It is a software-based wallet with strong encryption technology and biometric authentication.Experience a software wallet with powerful security and convenient accessibility.",
  },
  {
    id: 4,
    name: "ETUNNEL-CW-100V",
    category: "finger-vein",
    badge: "Finger Vein",
    desc: "A hardware wallet with strong security and biometric authentication. It securely protects encrypted assets and personal information through finger vein authentication.",
  },
  {
    id: 5,
    name: "ETUNNEL-SC-100P",
    category: "fingerprint",
    badge: "Fingerprint",
    desc: "A security-enhanced smart ID card with fingerprint authentication. It provides safe and convenient authentication with just fingerprint registration, no password required.",
  },
  {
    id: 6,
    name: "ETUNNEL-CC-100",
    category: "fingerprint",
    badge: "Fingerprint",
    desc: "An accessory that securely protects your card and allows for convenient portability.It offers both security and practicality",
  },
  {
    id: 7,
    name: "ETUNNEL-CR-100",
    category: "fingerprint",
    badge: "Fingerprint",
    desc: "ETUNNEL-CR-100 is the optimal solution for accurate and fast biometric authentication.Experience the convenient and powerful fingerprint authentication system.",
  },
  {
    id: 8,
    name: "ETUNNEL-IV-100M",
    category: "multimodal",
    badge: "Multimodal",
    desc: "It is a security technology that strengthens identity verification and authentication. By utilizing AI-based validation and biometric recognition, it provides fast and accurate identity authentication.",
  },
];

// ─── Component ───────────────────────────────────────

export default function FilteringProducts() {
  const [active, setActive] = useState("all");

  const filtered = PRODUCTS.filter(
    (p) => active === "all" || p.category === active
  );

  return (
    <section className={styles["product-section"]}>
      
      {/* Header */}
      <div className={styles["product-header"]}>
        <p className={styles["product-eyebrow"]}>Product Lineup</p>

        <h1 className={styles["product-title"]}>
          The new standard in biometric security authentication
        </h1>

        <p className={styles["product-subtitle"]}>
          ETUNNEL provides a secure environment based on biometric technology.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className={styles["filter-tabs"]}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            className={`${styles["filter-btn"]} ${
              active === cat.value ? styles["active"] : ""
            }`}
            onClick={() => setActive(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles["product-grid"]}>
        {filtered.map((product) => (
          <div className={styles["product-card"]} key={product.id}>
            
            <div className={styles["product-image-wrap"]}>
              <span className={styles["product-image-placeholder"]}>🔒</span>
            </div>

            <span className={styles["product-badge"]}>
              {product.badge}
            </span>

            <div className={styles["product-info"]}>
              <p className={styles["product-name"]}>{product.name}</p>
              <p className={styles["product-desc"]}>{product.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}