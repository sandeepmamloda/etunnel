"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./importance.module.css";

gsap.registerPlugin(ScrollTrigger);

const Importance = function () {
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 600;

      const baseAnim = {
        clipPath: "inset(100% 0% 0% 0%)",
        y: isMobile ? 24 : 40,
        duration: isMobile ? 0.9 : 1.1,
        ease: "power4.out",
      };

      // Title
      gsap.from(titleRef.current, {
        ...baseAnim,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // Subtitle
      gsap.from(subtitleRef.current, {
        ...baseAnim,
        delay: 0.15,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // Cards stagger
      gsap.from(itemsRef.current, {
        ...baseAnim,
        stagger: 0.15,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
          once: true,
        },
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={wrapperRef} className={styles["importance-wrapper"]}>
        <div className={styles["importance-main"]}>

          {/* Left: Title + subtitle */}
          <div className={styles["importance-left"]}>
            <h2 ref={titleRef} className={styles["importance-title"]}>
              Why is KISA certification important?
            </h2>
            <p ref={subtitleRef} className={styles["importance-subtitle"]}>
              KISA certification, which combines public trust and legal validity,
              sets the standard for technology adoption.
            </p>
          </div>

          {/* Right: 3 cards */}
          <div className={styles["importance-right"]}>

            <div
              ref={(el) => (itemsRef.current[0] = el)}
              className={styles["importance-items"]}
            >
              <h3 className={styles["items-heading"]}>
                The most trusted authentication testing and certification agency in Korea
              </h3>
              <p className={styles["items-desc"]}>
                KISA (Korea Internet & Security Agency) is the institution that conducts the most rigorous and systematic testing and certification of domestic biometric technologies. This certification signifies that the technology has been officially recognized for its accuracy, stability, and security. Certified solutions are recognized as reliable technologies in both domestic and international markets.
              </p>
            </div>

            <div
              ref={(el) => (itemsRef.current[1] = el)}
              className={styles["importance-items"]}
            >
              <h3 className={styles["items-heading"]}>
                Essential standards for e-Government frameworks and public procurement integration
              </h3>
              <p className={styles["items-desc"]}>
                KISA certification is a mandatory requirement for integration with government procurement projects and e-Government systems. Only certified solutions can participate in public procurement platforms like the Korea On-line E-Procurement System, procurement registration, and public institution bids, reducing the B2G entry barrier for businesses and accelerating the commercialization of technology.
              </p>
            </div>

            <div
              ref={(el) => (itemsRef.current[2] = el)}
              className={styles["importance-items"]}
            >
              <h3 className={styles["items-heading"]}>
                Compliance with legal regulations such as the Electronic Signature Act
                and Information Security Act
              </h3>
              <p className={styles["items-desc"]}>
                Biometric technology deals with sensitive information, so it must comply with various legal regulations. KISA certification proves that the technology complies with relevant laws such as the Electronic Signature Act and the Personal Information Protection Act. Additionally, it ensures legal compliance in cases of auditing, supervision, and legal disputes.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Importance;