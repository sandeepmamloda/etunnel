"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./heroprivacy.module.css";

gsap.registerPlugin(ScrollTrigger);

const Herocqkms = function () {
  const sectionRef = useRef(null);
  const coreBtnRef = useRef(null);
  const h1Ref      = useRef(null);
  const h2Ref      = useRef(null);
  const subHeadRef = useRef(null);
  const pRef       = useRef(null);
  const linksRef   = useRef(null);
  const rightRef   = useRef(null);

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
        duration: 1.6,
        ease: "expo.inOut",
      });

      // ── 2. Core Tech button: bottom reveal ──
      tl.from(coreBtnRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 20,
        duration: 1.1,
      }, "-=0.9");

      // ── 3. H1: bottom reveal ──
      tl.from(h1Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.4,
      }, "-=0.7");

      // ── 4. H2: bottom reveal ──
      tl.from(h2Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.3,
      }, "-=0.9");

      // ── 5. Sub-heading: bottom reveal ──
      tl.from(subHeadRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 35,
        duration: 1.25,
      }, "-=0.9");

      // ── 6. P: bottom reveal ──
      tl.from(pRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 30,
        duration: 1.2,
      }, "-=0.9");

      // ── 7. Links: left-to-right wipe ──
      tl.from(linksRef.current, {
        clipPath: "inset(0% 100% 0% 0%)",
        duration: 1.2,
        ease: "expo.out",
      }, "-=0.8");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles["herocqkms-wrapper"]}
      aria-label="CQKMS - Core Biometric Technology"
    >
      <div className={styles["herocqkms-main"]}>

        <div className={styles["herocqkms-left"]}>

          <div className={styles["herocqkms-left-top"]}>
            <div ref={coreBtnRef} className={styles["core-tech-button"]}>
              <span aria-hidden="true"></span>
              <span>Legal</span>
            </div>

            <h1 ref={h1Ref} className={styles["biometric-text"]}>
              CQKMS Project
            </h1>
          </div>

          <div className={styles["herocqkms-left-bottom"]}>

            <h2 ref={h2Ref} className={styles["finger-vein"]}>
              <span className={styles["lc-orange"]}>Privacy</span>
              {" "}
              <span className={styles["lc-black"]}>Policy</span>
            </h2>

            <h3 ref={subHeadRef} className={styles["sub-heading"]}>
              How Kayana Ltd collects, uses, and protects personal data in connection with the Fiscal platform.
            </h3>

            {/* <p ref={pRef} className={styles["simple-text"]}>
              <span>
                With a single card, from access control to electronic payments,ETUNNEL connects global authentication
              </span>
            </p> */}

            {/* <div ref={linksRef} className={styles["links"]}>
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

              <Link href="/coretech/kisa-certification" className={styles["learn-more"]} aria-label="Learn more about Finger Vein Technology">
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span>Learn More</span>
                <svg className={styles["arrow-dark"]} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div> */}

          </div>
        </div>

        {/* <div ref={rightRef} className={styles["herocqkms-right"]}>
          <div className={styles["herocqkms-right-inner"]}>
            <div className={styles["herocqkms-right-outer"]}></div>
          </div>
          <div className={styles["herocqkms-right-img"]}>
            <Image
              src="/images/solutions/pkl-safelcert/herosafelcert.png"
              fill={true}
              alt="CQKMS biometric authentication module"
              priority
              className={styles["img"]}
            />
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Herocqkms;