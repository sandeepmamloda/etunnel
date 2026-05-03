"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./heroproduct.module.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Inner Component ───────────────────────────────────────────────── */
const HeroproductInner = function ({ image, title, highlight, description, brochureUrl }) {

  const sectionRef = useRef(null);
  const imgRef     = useRef(null);
  const btnRef     = useRef(null);
  const h1Ref      = useRef(null);
  const pRef       = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "power4.out" },
      });

      // ── 1. Image: bottom reveal ──
      tl.from(imgRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.3,
      });

      // ── 2. Biometric Product button: bottom reveal ──
      tl.from(btnRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 20,
        duration: 1.0,
      }, "-=0.8");

      // ── 3. H1: bottom reveal ──
      tl.from(h1Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.2,
      }, "-=0.7");

      // ── 4. P: bottom reveal ──
      tl.from(pRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 30,
        duration: 1.1,
      }, "-=0.7");

      // ── 5. Action buttons: left-to-right wipe ──
      tl.from(actionsRef.current, {
        clipPath: "inset(0% 100% 0% 0%)",
        duration: 1.1,
        ease: "expo.out",
      }, "-=0.7");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles["heroproduct-wrapper"]}>
      <div className={styles["heroproduct-main"]}>

        <div className={styles["heroproduct-left"]}>
          <div ref={imgRef} className={styles["heroproduct-img"]}>
            <Image src={image} alt="product image" fill />
          </div>
        </div>

        <div className={styles["heroproduct-right"]}>

          <div className={styles["heroproduct-right-top"]}>
            <div ref={btnRef} className={styles["heroproduct-button"]}>
              <span className={styles["heroproduct-button-left"]}></span>
              <span>Biometric Product</span>
            </div>
          </div>

          <div className={styles["heroproduct-right-middle"]}>
            <h1 ref={h1Ref}>
              <span className={styles["lc-line"]}>{title} </span>
              <span className={styles["heroproduct-highlight"]}>
                <span className={styles["lc-line"]}>{highlight}</span>
              </span>
            </h1>
          </div>

          <div className={styles["heroproduct-right-bottom"]}>
            <p ref={pRef}>{description}</p>
          </div>

          <div ref={actionsRef} className={styles["heroproduct-bottom-1"]}>
            <a
              href={brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["product-brochure"]}
            >
              <span className={styles["stair"]}></span>
              <span className={styles["stair"]}></span>
              <span className={styles["stair"]}></span>
              <span className={styles["stair"]}></span>
              <span>Product Brochure</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <Link href="/contact" className={styles["contact-us"]}>
              <span className={styles["stair"]}></span>
              <span className={styles["stair"]}></span>
              <span className={styles["stair"]}></span>
              <span className={styles["stair"]}></span>
              <span>Contact Us</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ─── Wrapper ───────────────────────────────────────────────────────── */
const Heroproduct = (props) => {
  const pathname = usePathname();
  return <HeroproductInner key={pathname} {...props} />;
};

export default Heroproduct;