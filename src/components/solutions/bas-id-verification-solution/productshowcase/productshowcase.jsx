"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./productshowcase.module.css";

const Productshowcase = function () {
  const [openSection, setOpenSection] = useState("p2n2");
  const bodyRefs = useRef({});
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const accordionRef = useRef(null);
  const imageRef = useRef(null);
  const mobileImageRef = useRef(null);

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        }
      });

      tl.fromTo(textRef.current, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.3, ease: "power2.inOut" })
        .fromTo(accordionRef.current, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.3, ease: "power2.inOut" }, "-=0.9")
        .fromTo([imageRef.current, mobileImageRef.current].filter(Boolean), { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: "power2.inOut" }, "-=1.0");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <section className={styles["productshowcase-section"]} ref={sectionRef}>
      <div ref={textRef} className={styles["reason-wrapper"]}>
        <div className={styles["reason-text-wrapper"]}>
          <span className={styles["reason-label"]}>The Reason</span>
          <h2 className={styles["reason-heading"]}>The Urgent Need for ID Verification Solutions</h2>
        </div>
      </div>

      <div className={styles["productshowcase-wrapper"]}>
        <div className={`${styles["productshowcase-left"]} ${styles["manual-size"]}`}>
          <div className={styles["mobile-image"]} ref={mobileImageRef}>
            <div className={styles["productshowcase-right-img"]}>
              <Image src="/images/solutions/bas-id-verification-solution/productshowcase.png" alt="Hero Image" fill priority className={styles["img"]} />
            </div>
          </div>

          <div ref={accordionRef} className={styles["accordion"]}>
            {/* P2N2 */}
            <div className={`${styles["p2n2"]} ${openSection === "p2n2" ? styles["active"] : ""}`}>
              <div className={styles["header"]} onClick={() => toggle("p2n2")}>
                <h3>The real user may not match the ID card holder</h3>
                <span className={`${styles["toggle-icon"]} ${openSection === "p2n2" ? styles["rotate"] : ""}`}>+</span>
              </div>
              <div ref={(el) => (bodyRefs.current["p2n2"] = el)} className={`${styles["body"]} ${openSection === "p2n2" ? styles["open"] : ""}`}>
                <div className={styles["productshowcase-body-content"]}>
                  <p>ID cards alone cannot guarantee identity verification, as stolen or forged cards may be used by unauthorized individuals. This can lead to proxy actions such as unauthorized access, exams, or contracts, and may also enable identity-based crimes like fraud, illegal account creation, and other financial or legal misuse.</p>
                </div>
              </div>
            </div>

            {/* FVA */}
            <div className={`${styles["finger-vein-authentication"]} ${openSection === "fva" ? styles["active"] : ""}`}>
              <div className={styles["header"]} onClick={() => toggle("fva")}>
                <h3>Despite biometric information being registered, it is still not secure</h3>
                <span className={`${styles["toggle-icon"]} ${openSection === "fva" ? styles["rotate"] : ""}`}>+</span>
              </div>
              <div ref={(el) => (bodyRefs.current["fva"] = el)} className={`${styles["body"]} ${openSection === "fva" ? styles["open"] : ""}`}>
                <div className={styles["productshowcase-body-content"]}>
                  <p>Although biometric information is stored on ID cards, it is often not actively verified and remains limited to simple card presentation. If biometric data is leaked, it cannot be changed like a password, creating long-term security risks. Additionally, offline-based ID systems lack real-time verification, making it difficult to detect forged or tampered biometric data.
                  </p>
               </div>
              </div>
            </div>

            {/* KISA */}
            <div className={`${styles["kisa-certification"]} ${openSection === "kisa" ? styles["active"] : ""}`}>
              <div className={styles["header"]} onClick={() => toggle("kisa")}>
                <h3>Expected Benefits of Identity Verification Solution</h3>
                <span className={`${styles["toggle-icon"]} ${openSection === "kisa" ? styles["rotate"] : ""}`}>+</span>
              </div>
              <div ref={(el) => (bodyRefs.current["kisa"] = el)} className={`${styles["body"]} ${openSection === "kisa" ? styles["open"] : ""}`}>
                <div className={styles["productshowcase-body-content"]}>
                  <p>This identity verification solution compares the biometric data stored on an ID card with the user’s live biometric information in real time to ensure accurate authentication. It prevents ID theft, proxy authentication, and forgery while enabling fast, AI-powered verification without human error. The solution also improves service efficiency and supports secure identity verification in both face-to-face and remote environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={imageRef} className={`${styles["productshowcase-right"]} ${styles["desktop-image"]} ${styles["manual-size"]}`}>
          <div className={`${styles["productshowcase-right-img"]} ${styles["manual-size"]}`}>
            <Image src="/images/solutions/bas-id-verification-solution/productshowcase.png" alt="Hero Image" fill priority className={styles["img"]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productshowcase;