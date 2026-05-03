"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./herokisacertificate.module.css";

gsap.registerPlugin(ScrollTrigger);

const Herokisacertificate = function () {
  const sectionRef = useRef(null);
  const h1Ref      = useRef(null);
  const middleRef  = useRef(null);
  const bottomRef  = useRef(null);

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

      // ── 1. H1: bottom reveal ──
      tl.from(h1Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.2,
      });

      // ── 2. Middle p: bottom reveal ──
      tl.from(middleRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 30,
        duration: 1.1,
      }, "-=0.7");

      // ── 3. Bottom contact: left-to-right wipe ──
      tl.from(bottomRef.current, {
        clipPath: "inset(0% 100% 0% 0%)",
        duration: 1.1,
        ease: "expo.out",
      }, "-=0.7");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className={styles["herokisacertificate-wrapper"]}>
        <div className={styles["herokisacertificate-main"]}>

          {/* TOP */}
          <div className={styles["herokisacertificate-top"]}>
            <h1 ref={h1Ref}>
              <span className={styles["kisa-orange"]}>KISA</span>
              <span>&nbsp;</span>
              <span className={styles["kisa-black"]}>Biometric Certification</span>
            </h1>
          </div>

          {/* MIDDLE */}
          <div ref={middleRef} className={styles["herokisacertificate-middle"]}>
            <p>
              Biometric technology proven through reliable authentication.
              ETUNNEL's finger vein and facial authentication solution verified
              with <span>KISA (Korea Internet & Security Agency)</span>{" "}
              certification.
            </p>
          </div>

          {/* BOTTOM */}
          <div ref={bottomRef} className={styles["herokisacertificate-bottom"]}>
            <div className={styles["herokisacertificate-bottom-wrapper"]}>
              <Link href="/contact" className={styles["contact-link"]}>
                <span>
                  Contact Us
                  <Image
                    src="/images/coretech/kisa-certification/herokisacertificate/herokisacertificate.png"
                    fill={true}
                    alt="P2N2 AI Biometric Engine module"
                    priority
                    className={styles["img"]}
                  />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Herokisacertificate;