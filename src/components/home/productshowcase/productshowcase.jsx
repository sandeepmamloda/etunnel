"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./productshowcase.module.css";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Productshowcase = function () {
  const [openSection, setOpenSection] = useState("p2n2");
  const bodyRefs = useRef({});
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const accordionRef = useRef(null);
  const imageRef = useRef(null);

  // Accordion logic
  useEffect(() => {
    const sections = ["p2n2", "fva", "kisa"];
    const applyHeights = () => {
      sections.forEach((key) => {
        const el = bodyRefs.current[key];
        if (!el) return;
        el.style.maxHeight = key === openSection ? el.scrollHeight + "px" : "0px";
      });
    };
    const timer = setTimeout(applyHeights, 0);
    return () => clearTimeout(timer);
  }, [openSection]);

  // GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        }
      });

      tl.fromTo(textRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1.3, ease: "power2.inOut" }
      )
        .fromTo(accordionRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 1.3, ease: "power2.inOut" },
          "-=0.9"
        )
        .fromTo(imageRef.current,
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: "power2.inOut" },
          "-=1.0"
        );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <section className={styles["productshowcase-wrapper"]} ref={sectionRef}>
      <div className={`${styles["productshowcase-left"]} ${styles["manual-size"]}`}>

        <div ref={textRef} className={styles["productshowcase-text-wrapper"]}>
          <p>One AI Engine. Every Biometric.</p>
          <p>ETUNNEL offers a full range of biometric solutions designed to work together.</p>
        </div>

        <div ref={accordionRef} className={styles["accordion"]}>

          {/* ── P2N2 ── */}
          <div className={`${styles["p2n2"]} ${openSection === "p2n2" ? styles["active"] : ""}`}>
            <div className={styles["header"]} onClick={() => toggle("p2n2")}>
              <h3>P2N2</h3>
              <span className={`${styles["toggle-icon"]} ${openSection === "p2n2" ? styles["rotate"] : ""}`}>+</span>
            </div>
            <div
              ref={(el) => (bodyRefs.current["p2n2"] = el)}
              className={`${styles["body"]} ${openSection === "p2n2" ? styles["open"] : ""}`}
            >
              <div className={styles["productshowcase-body-content"]}>
                <p>At the heart of ETUNNEL is the P2N2 Biometric Authentication Integration Module.
                It is a single AI engine designed to handle multiple biometric methods, without complexity.</p>
              </div>
              <Link href="/" className={styles["productshowcase-wrapper-toggle"]}>
                <span>How P2N2 Works</span>
              </Link>
            </div>
          </div>

          {/* ── FVA ── */}
          <div className={`${styles["finger-vein-authentication"]} ${openSection === "fva" ? styles["active"] : ""}`}>
            <div className={styles["header"]} onClick={() => toggle("fva")}>
              <h3>Finger Vein Authentication</h3>
              <span className={`${styles["toggle-icon"]} ${openSection === "fva" ? styles["rotate"] : ""}`}>+</span>
            </div>
            <div
              ref={(el) => (bodyRefs.current["fva"] = el)}
              className={`${styles["body"]} ${openSection === "fva" ? styles["open"] : ""}`}
            >
              <div className={styles["productshowcase-body-content"]}>
                <p>Finger vein authentication captures the unique vascular pattern beneath the skin using near-infrared light.
                Internal and invisible, vein patterns cannot be forged or replicated.</p>
              </div>
              <Link href="/" className={styles["productshowcase-wrapper-toggle"]}>
                <p>How FVA Works</p>
              </Link>
            </div>
          </div>

          {/* ── KISA ── */}
          <div className={`${styles["kisa-certification"]} ${openSection === "kisa" ? styles["active"] : ""}`}>
            <div className={styles["header"]} onClick={() => toggle("kisa")}>
              <h3>KISA Certification</h3>
              <span className={`${styles["toggle-icon"]} ${openSection === "kisa" ? styles["rotate"] : ""}`}>+</span>
            </div>
            <div
              ref={(el) => (bodyRefs.current["kisa"] = el)}
              className={`${styles["body"]} ${openSection === "kisa" ? styles["open"] : ""}`}
            >
              <div className={styles["productshowcase-body-content"]}>
                <p>ETUNNEL is certified by KISA — Korea's Internet & Security Agency.
                Meeting government-level standards for digital identity verification and security.</p>
              </div>
              <Link href="/" className={styles["productshowcase-wrapper-toggle"]}>
                <span>View Certification</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div ref={imageRef} className={`${styles["productshowcase-right"]} ${styles["manual-size"]}`}>
        <div className={`${styles["productshowcase-right-img"]} ${styles["manual-size"]}`}>
          <Image src="/images/productshowcase/p2n2.png" alt="Hero Image" fill priority className={styles["img"]} />
        </div>
      </div>
    </section>
  );
};

export default Productshowcase;