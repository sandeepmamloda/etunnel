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
          <h2 className={styles["reason-heading"]}>Why should we use a Smart ID?</h2>
        </div>
      </div>

      <div className={styles["productshowcase-wrapper"]}>
        <div className={`${styles["productshowcase-left"]} ${styles["manual-size"]}`}>
          <div className={styles["mobile-image"]} ref={mobileImageRef}>
            <div className={styles["productshowcase-right-img"]}>
              <Image src="/images/solutions/bas-smart-id-project/bas-smart-id-project.png" alt="Hero Image" fill priority className={styles["img"]} />
            </div>
          </div>

          <div ref={accordionRef} className={styles["accordion"]}>
            {/* P2N2 */}
            <div className={`${styles["p2n2"]} ${openSection === "p2n2" ? styles["active"] : ""}`}>
              <div className={styles["header"]} onClick={() => toggle("p2n2")}>
                <h3>Existing RF Card Access System Problems</h3>
                <span className={`${styles["toggle-icon"]} ${openSection === "p2n2" ? styles["rotate"] : ""}`}>+</span>
              </div>
              <div ref={(el) => (bodyRefs.current["p2n2"] = el)} className={`${styles["body"]} ${openSection === "p2n2" ? styles["open"] : ""}`}>
                <div className={styles["productshowcase-body-content"]}>
                  <p>Card Cloning Possibility· RFID card data is easy to clone or copy.· Low-cost systems lack encryption and are vulnerable to data sniffing or reader attacks.
                     Signal Interception· Wireless data transmission allows for signal interception and theft.
                     Lost Card· If the card is lost or stolen, it can be misused for unauthorized access.</p>
                </div>
              </div>
            </div>

            {/* FVA */}
            <div className={`${styles["finger-vein-authentication"]} ${openSection === "fva" ? styles["active"] : ""}`}>
              <div className={styles["header"]} onClick={() => toggle("fva")}>
                <h3>Fingerprint Recognition Access System Issues</h3>
                <span className={`${styles["toggle-icon"]} ${openSection === "fva" ? styles["rotate"] : ""}`}>+</span>
              </div>
              <div ref={(el) => (bodyRefs.current["fva"] = el)} className={`${styles["body"]} ${openSection === "fva" ? styles["open"] : ""}`}>
                <div className={styles["productshowcase-body-content"]}>
                  <p>Security vulnerabilities in fingerprint recognition systems include fake fingerprint issues, where advanced technologies can bypass the system by duplicating or counterfeiting fingerprints. Data leaks are another major concern, as fingerprint data is highly sensitive and cannot be changed once compromised, which could lead to serious security incidents. Server hacking also poses a risk, since if fingerprint data stored on a central server is breached, it may result in data leaks and service disruptions.

                 User inconvenience is also a factor, particularly regarding hygiene issues. Since multiple users often use the same fingerprint recognition sensor, this can raise hygiene concerns and cause discomfort, especially in cleanliness-sensitive environments such as hospitals and food manufacturing companies.
                 
                 Fingerprint recognition systems also face technical limitations. Recognition speed may decrease when multiple users access the system simultaneously, leading to longer wait times. Compatibility issues can also arise due to the use of different fingerprint recognition technologies, such as capacitive and optical systems, making integration between systems more challenging.</p>
               </div>
              </div>
            </div>

            {/* KISA */}
            <div className={`${styles["kisa-certification"]} ${openSection === "kisa" ? styles["active"] : ""}`}>
              <div className={styles["header"]} onClick={() => toggle("kisa")}>
                <h3>Expected Benefits of Smart ID Project</h3>
                <span className={`${styles["toggle-icon"]} ${openSection === "kisa" ? styles["rotate"] : ""}`}>+</span>
              </div>
              <div ref={(el) => (bodyRefs.current["kisa"] = el)} className={`${styles["body"]} ${openSection === "kisa" ? styles["open"] : ""}`}>
                <div className={styles["productshowcase-body-content"]}>
                  <p>This system provides a contactless access security solution designed for the post-COVID-19 era, replacing traditional fingerprint terminals touched by multiple users. It authenticates fingerprints through a personal smart ID card before granting access. The system offers convenience by working like an RFID card without requiring regular charging. It ensures strong security by allowing fingerprints to be registered and used only by the authorized user, preventing misuse even if the card is lost. Since fingerprint data is stored securely within the card, the risk of hacking is reduced. It also improves safety by enabling non-contact biometric authentication, reducing hygiene concerns and infection risks. Additionally, the system is highly scalable and can be integrated with various security applications, such as PC logon and NFC-based mobile office access.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={imageRef} className={`${styles["productshowcase-right"]} ${styles["desktop-image"]} ${styles["manual-size"]}`}>
          <div className={`${styles["productshowcase-right-img"]} ${styles["manual-size"]}`}>
            <Image src="/images/solutions/bas-smart-id-project/productshowcase.png" alt="Hero Image" fill priority className={styles["img"]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productshowcase;