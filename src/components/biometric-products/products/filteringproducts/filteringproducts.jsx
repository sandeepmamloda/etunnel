"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./filteringproducts.module.css";

gsap.registerPlugin(ScrollTrigger);

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
    slug: "st-100v",
    category: "finger-vein",
    badge: "Finger Vein",
    image: "/images/biometric-products/products/biometric-products/ETUNNEL-ST-100V.png",
    desc: "An integrated security product utilizing finger vein-based biometric authentication. It offers strong security and convenience in various environments, including H/W wallets, S/W wallets, and I²C login.",
  },
  {
    id: 2,
    name: "ETUNNEL-PL-101V",
    slug: "pl-101v",
    category: "finger-vein",
    badge: "Finger Vein",
    image: "/images/biometric-products/products/biometric-products/ETUNNEL-PL-101V.png",
    desc: "It is a safe and convenient login product using biometric authentication. Experience the optimal login solution for a secure digital environment with finger vein recognition, no password required.",
  },
  {
    id: 3,
    name: "ETUNNEL-SW-100V",
    slug: "sw-100v",
    category: "finger-vein",
    badge: "Finger Vein",
    image: "/images/biometric-products/products/biometric-products/ETUNNEL-SW-100V.png",
    desc: "It is a software-based wallet with strong encryption technology and biometric authentication. Experience a software wallet with powerful security and convenient accessibility.",
  },
  {
    id: 4,
    name: "ETUNNEL-CW-100V",
    slug: "cw-100v",
    category: "finger-vein",
    badge: "Finger Vein",
    image: "/images/biometric-products/products/biometric-products/ETUNNEL-CW-100V.png",
    desc: "A hardware wallet with strong security and biometric authentication. It securely protects encrypted assets and personal information through finger vein authentication.",
  },
  {
    id: 5,
    name: "ETUNNEL-SC-100P",
    slug: "sc-100p",
    category: "fingerprint",
    badge: "Fingerprint",
    image: "/images/biometric-products/products/biometric-products/ETUNNEL-SC-100P.png",
    desc: "A security-enhanced smart ID card with fingerprint authentication. It provides safe and convenient authentication with just fingerprint registration, no password required.",
  },
  {
    id: 6,
    name: "ETUNNEL-CC-100",
    slug: "cc-100",
    category: "fingerprint",
    badge: "Fingerprint",
    image: "/images/biometric-products/products/biometric-products/ETUNNEL-CC-100.png",
    desc: "An accessory that securely protects your card and allows for convenient portability. It offers both security and practicality.",
  },
  {
    id: 7,
    name: "ETUNNEL-CR-100",
    slug: "cr-100",
    category: "fingerprint",
    badge: "Fingerprint",
    image: "/images/biometric-products/products/biometric-products/ETUNNEL-CR-100.png",
    desc: "ETUNNEL-CR-100 is the optimal solution for accurate and fast biometric authentication. Experience the convenient and powerful fingerprint authentication system.",
  },
  {
    id: 8,
    name: "ETUNNEL-IV-100M",
    slug: "iv-100m",
    category: "multimodal",
    badge: "Multimodal",
    image: "/images/biometric-products/products/biometric-products/ETUNNEL-IV-100M.png",
    desc: "It is a security technology that strengthens identity verification and authentication. By utilizing AI-based validation and biometric recognition, it provides fast and accurate identity authentication.",
  },
];

export default function FilteringProducts() {
  const [active, setActive] = useState("all");
  const [visibleKey, setVisibleKey] = useState("all");
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);

  // ── Refs ──
  const wrapperRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const filterTabsRef = useRef(null);
  const cardRefs = useRef([]);

  const filtered = PRODUCTS.filter(
    (p) => visibleKey === "all" || p.category === visibleKey
  );

  const handleFilter = (value) => {
    if (value === active || animating) return;
    setAnimating(true);
    timeoutRef.current = setTimeout(() => {
      setVisibleKey(value);
      setActive(value);
      setAnimating(false);
    }, 220);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  // ── GSAP clipPath animations ──
  useEffect(() => {
    const ctx = gsap.context(() => {

      // eyebrow
      gsap.from(eyebrowRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 30,
        duration: 1.0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: eyebrowRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // h1
      gsap.from(titleRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // subtitle
      gsap.from(subtitleRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // filter tabs
      gsap.from(filterTabsRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 30,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.45,
        scrollTrigger: {
          trigger: filterTabsRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // ── har card individually ──
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.from(card, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 40,
          duration: 1.0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef} className={styles["product-section"]}>

      {/* Header */}
      <div className={styles["product-header"]}>
        <p ref={eyebrowRef} className={styles["product-eyebrow"]}>Product Lineup</p>
        <h1 ref={titleRef} className={styles["product-title"]}>
          The new standard in biometric security authentication
        </h1>
        <p ref={subtitleRef} className={styles["product-subtitle"]}>
          ETUNNEL provides a secure environment based on biometric technology.
          Experience a more convenient and reliable security solution with the
          powerful 100V series and cutting-edge authentication system.
        </p>
      </div>

      {/* Filter Tabs */}
      <div ref={filterTabsRef} className={styles["filter-tabs"]}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            className={`${styles["filter-btn"]} ${
              active === cat.value ? styles["active"] : ""
            }`}
            onClick={() => handleFilter(cat.value)}
          >
            <span className={styles["stair"]} />
            <span className={styles["stair"]} />
            <span className={styles["stair"]} />
            <span className={styles["stair"]} />
            <span className={styles["btn-label"]}>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles["product-grid"]}>
        {filtered.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className={animating ? styles["card-exit"] : styles["card-enter"]}
            style={{ "--stagger": index }}
          >
            <Link
              href={`/biometric-products/${product.slug}`}
              className={styles["product-card"]}
            >
              {/* Image */}
              <div className={styles["product-image-wrap"]}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 440px) 100vw, (max-width: 720px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className={styles["product-image"]}
                />
              </div>

              {/* Badge Wrapper */}
              <div className={styles["product-badge-wrap"]}>
                <span className={styles["product-badge"]}>
                  {product.badge}
                </span>
              </div>

              {/* Info */}
              <div className={styles["product-info"]}>
                <p className={styles["product-name"]}>{product.name}</p>
                <p className={styles["product-desc"]}>{product.desc}</p>
              </div>

            </Link>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className={styles["no-products"]}>No products found.</p>
        )}
      </div>
    </section>
  );
}