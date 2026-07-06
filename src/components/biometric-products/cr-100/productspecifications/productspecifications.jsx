"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./productspecifications.module.css";

const ProductHighlight = function () {
  const cards = [
    {
      image: "/images/productspecifications/cc-100/left.png",
      title: "High Security Storage",
      description:
        "Fingerprint data is securely encrypted and stored directly on the card, ensuring it never leaves your physical possession.",
    },
    {
      image: "/images/productspecifications/cc-100/left.png",
      title: "Fingerprint Registration Terminal",
      description:
        "A dedicated terminal where users insert the fingerprint ID card and register their fingerprint using a contact-based method.",
    },
  ];

  const wrapperRef   = useRef(null);
  const labelWrapRef = useRef(null);
  const titleWrapRef = useRef(null);
  const cardRefs     = useRef([]);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        // ── label ──
        gsap.from(labelWrapRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 20,               // 30 → 20
          duration:   3.6,       // 1.4 → 1.6
          ease: "expo.out",    // power4.out → expo.out
          scrollTrigger: {
            trigger: labelWrapRef.current,
            start: "top 85%",
            once: true,
          }
        });

        // ── title ──
        gsap.from(titleWrapRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 24,               // 40 → 24
          duration: 3.7,       // 1.5 → 1.7
          ease: "expo.out",    // power4.out → expo.out
          delay: 0.2,          // 0.25 → 0.2
          scrollTrigger: {
            trigger: titleWrapRef.current,
            start: "top 85%",
            once: true,
          }
        });

        // ── har card individually ──
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          gsap.from(card, {
            clipPath: "inset(100% 0% 0% 0%)",
            y: 24,             // 40 → 24
            duration: 3.6,     // 1.4 → 1.6
            ease: "expo.out",  // power4.out → expo.out
            delay: 0.2 * i,    // 0.25 → 0.2
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            }
          });
        });

      }, wrapperRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles["ph-wrapper"]} ref={wrapperRef}>
      <div className={styles["ph-container"]}>

        <div className={styles["ph-heading"]}>

          <div ref={labelWrapRef} style={{ overflow: "hidden" }}>
            <span className={styles["ph-label"]}>KEY FEATURES</span>
          </div>

          <div ref={titleWrapRef} style={{ overflow: "hidden" }}>
            <h2 className={styles["ph-title"]}>Product Specifications</h2>
          </div>

        </div>

        <div className={styles["ph-cards"]}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={styles["ph-card"]}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className={styles["ph-image-wrapper"]}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className={styles["ph-card-title"]}>{card.title}</h3>
              <p className={styles["ph-card-description"]}>{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductHighlight;