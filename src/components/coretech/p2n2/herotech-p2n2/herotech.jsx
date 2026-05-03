"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./herotech.module.css";

gsap.registerPlugin(ScrollTrigger);

const Herotech = function () {
  const sectionRef = useRef(null);
  const coreBtnRef = useRef(null);
  const h1Ref      = useRef(null);
  const h2Ref      = useRef(null);
  const pRef       = useRef(null);
  const linksRef   = useRef(null);
  const rightRef   = useRef(null);
  const aiPowRef   = useRef(null);

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

      // ── 1. Right section: left-to-right clip wipe ──
      tl.from(rightRef.current, {
        clipPath: "inset(0% 100% 0% 0%)",
        duration: 1.2,
        ease: "expo.inOut",
      });

      // ── 2. AI-Powered badge: bottom reveal ──
      tl.from(aiPowRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 16,
        duration: 0.7,
      }, "-=0.4");

      // ── 3. Core Tech button: bottom reveal ──
      tl.from(coreBtnRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 20,
        duration: 0.8,
      }, "-=0.8");

      // ── 4. H1: bottom reveal ──
      tl.from(h1Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.1,
      }, "-=0.6");

      // ── 5. H2: bottom reveal ──
      tl.from(h2Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.0,
      }, "-=0.7");

      // ── 6. P: bottom reveal ──
      tl.from(pRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 30,
        duration: 0.9,
      }, "-=0.7");

      // ── 7. Links: left-to-right wipe ──
      tl.from(linksRef.current, {
        clipPath: "inset(0% 100% 0% 0%)",
        duration: 0.9,
        ease: "expo.out",
      }, "-=0.6");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles["herotech-p2n2-wrapper"]}
      aria-label="P2N2 AI Engine - Core Biometric Technology"
    >
      <div className={styles["herotech-p2n2-main"]}>

        <div className={styles["herotech-p2n2-left"]}>

          <div className={styles["herotech-p2n2-left-top"]}>
            <div ref={coreBtnRef} className={styles["core-tech-button"]}>
              <span aria-hidden="true"></span>
              <span>CORE TECHNOLOGY</span>
            </div>

            <h1 ref={h1Ref} className={styles["biometric-text"]}>
              Biometric Authentication Integration Module
            </h1>
          </div>

          <div className={styles["herotech-p2n2-left-bottom"]}>
            <h2 ref={h2Ref} className={styles["ai-engine"]}>
              AI Engine P2N2
            </h2>

            <p ref={pRef} className={styles["simple-text"]}>
              <span>It is a state-of-the-art solution that can handle all forms of biometric authentication within a single module.</span>
            </p>

            <div ref={linksRef} className={styles["links"]}>
              <Link href="/contact" className={styles["contact-us"]} aria-label="Contact ETUNNEL">
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span>Contact Us</span>
                <svg className={styles["arrow"]} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link href="/coretech/fingervein" className={styles["learn-more"]} aria-label="Learn more about P2N2 AI Engine">
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span>Learn More</span>
                <svg className={styles["arrow-dark"]} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div ref={rightRef} className={styles["herotech-p2n2-right"]}>
          <div className={styles["herotech-p2n2-right-inner"]}>
            <div className={styles["herotech-p2n2-right-outer"]}></div>
          </div>
          <div className={styles["herotech-p2n2-right-img"]}>
            <div ref={aiPowRef} className={styles["ai-powered"]}>
              <span>AI-Powered</span>
            </div>
            <Image
              src="/images/coretech/p2n2/p2n2.png"
              fill={true}
              alt="P2N2 AI Biometric Engine module"
              priority
              className={styles["img"]}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Herotech;