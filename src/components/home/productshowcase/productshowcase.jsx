"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./productshowcase.module.css";
import Image from "next/image";
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

      // Text - bottom to top reveal
      tl.fromTo(textRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1.3, ease: "power2.inOut" }
      )
      // Accordion - bottom to top reveal
      .fromTo(accordionRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1.3, ease: "power2.inOut" },
        "-=0.9"
      )
      // Image - left to right reveal
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
    <div className={styles["productshowcase-wrapper"]} ref={sectionRef}>
      <div className={`${styles["productshowcase-left"]} ${styles["manual-size"]}`}>

        <div ref={textRef} className={styles["productshowcase-text-wrapper"]}>
          <p>One AI Engine. Every Biometric.</p>
          <p>ETUNNEL offers a full range of biometric solutions designed to work together.</p>
        </div>

        <div ref={accordionRef} className={styles["accordion"]}>
          {/* P2N2 */}
          <div className={`${styles["p2n2"]} ${openSection === "p2n2" ? styles["active"] : ""}`}>
            <div className={styles["header"]} onClick={() => toggle("p2n2")}>
              <p>P2N2</p>
              <span className={`${styles["toggle-icon"]} ${openSection === "p2n2" ? styles["rotate"] : ""}`}>+</span>
            </div>
            <div ref={(el) => (bodyRefs.current["p2n2"] = el)} className={`${styles["body"]} ${openSection === "p2n2" ? styles["open"] : ""}`}>
              <div className={styles["productshowcase-body-content"]}>
                <p>At the heart of ETUNNEL is the P2N2 Biometric Authentication Integration Module</p>
                <p>It is a single AI engine designed to handle multiple biometric methods, without complexity.</p>
              </div>
              <div className={styles["productshowcase-wrapper-toggle"]}>
                <p>How P2N2 Works</p>
              </div>
            </div>
          </div>

          {/* FVA */}
          <div className={`${styles["finger-vein-authentication"]} ${openSection === "fva" ? styles["active"] : ""}`}>
            <div className={styles["header"]} onClick={() => toggle("fva")}>
              <p>Finger Vein Authentication</p>
              <span className={`${styles["toggle-icon"]} ${openSection === "fva" ? styles["rotate"] : ""}`}>+</span>
            </div>
            <div ref={(el) => (bodyRefs.current["fva"] = el)} className={`${styles["body"]} ${openSection === "fva" ? styles["open"] : ""}`}>
              <p>Experimental....</p>
              <p>content is remaining....</p>
            </div>
          </div>

          {/* KISA */}
          <div className={`${styles["kisa-certification"]} ${openSection === "kisa" ? styles["active"] : ""}`}>
            <div className={styles["header"]} onClick={() => toggle("kisa")}>
              <p>KISA Certification</p>
              <span className={`${styles["toggle-icon"]} ${openSection === "kisa" ? styles["rotate"] : ""}`}>+</span>
            </div>
            <div ref={(el) => (bodyRefs.current["kisa"] = el)} className={`${styles["body"]} ${openSection === "kisa" ? styles["open"] : ""}`}>
              <p>Experimental....</p>
              <p>content is remaining....</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={imageRef} className={`${styles["productshowcase-right"]} ${styles["manual-size"]}`}>
        <div className={`${styles["productshowcase-right-img"]} ${styles["manual-size"]}`}>
          <Image src="/images/productshowcase/p2n2.png" alt="Hero Image" fill priority className={styles["img"]} />
        </div>
      </div>
    </div>
  );
};

export default Productshowcase;