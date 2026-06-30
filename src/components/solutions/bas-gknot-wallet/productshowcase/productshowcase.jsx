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
          <h2 className={styles["reason-heading"]}>It’s time to change the way you authenticate.</h2>
        </div>
      </div>

      <div className={styles["productshowcase-wrapper"]}>
        <div className={`${styles["productshowcase-left"]} ${styles["manual-size"]}`}>
          <div className={styles["mobile-image"]} ref={mobileImageRef}>
            <div className={styles["productshowcase-right-img"]}>
              <Image src="/images/solutions/bas-gknot-wallet/productshowcase.png" alt="Hero Image" fill priority className={styles["img"]} />
            </div>
          </div>

          <div ref={accordionRef} className={styles["accordion"]}>
            {/* P2N2 */}
            <div className={`${styles["p2n2"]} ${openSection === "p2n2" ? styles["active"] : ""}`}>
              <div className={styles["header"]} onClick={() => toggle("p2n2")}>
                <h3>$200 million worth of Bitcoin, “frozen” after forgetting the password</h3>
                <span className={`${styles["toggle-icon"]} ${openSection === "p2n2" ? styles["rotate"] : ""}`}>+</span>
              </div>
              <div ref={(el) => (bodyRefs.current["p2n2"] = el)} className={`${styles["body"]} ${openSection === "p2n2" ? styles["open"] : ""}`}>
                <div className={styles["productshowcase-body-content"]}>
                  <p>A foreign investor bought a large amount of Bitcoin in early 2013 and stored it in a hardware wallet.
                    However, after losing the mnemonic (12-word recovery key) for wallet recovery,
                    the investor was no longer able to access worth approximately $200 million.
                    
                    The hardware wallet, having exhausted all 10 password entry attempts,
                    entered an automatic lock state. The user was quoted in an interview saying,
                    “Staring at the laptop is torture,” and expressed living the rest of their life in regret and despair.
                  </p>
                </div>
              </div>
            </div>

            {/* FVA */}
            <div className={`${styles["finger-vein-authentication"]} ${openSection === "fva" ? styles["active"] : ""}`}>
              <div className={styles["header"]} onClick={() => toggle("fva")}>
                <h3>Forgot the location where the paper
                    wallet was hidden, and it was “permanently
                    deleted” during a home renovation</h3>
                <span className={`${styles["toggle-icon"]} ${openSection === "fva" ? styles["rotate"] : ""}`}>+</span>
              </div>
              <div ref={(el) => (bodyRefs.current["fva"] = el)} className={`${styles["body"]} ${openSection === "fva" ? styles["open"] : ""}`}>
                <div className={styles["productshowcase-body-content"]}>
                  <p>A blogger in South Korea thought they had written the mnemonic on paper and hidden it in a secret space behind a bookshelf. However, during an interior renovation a few years later,the space was demolished, and they completely lost access to the wallet without any means of recovery.The wallet contained Ethereum worth approximately $7,200, and the blogger shared their storyon their blog, saying, “Even now, just thinking about that space makes my heart sink,”which resonated with readers and caused shock and sympathy.
                  </p>
               </div>
              </div>
            </div>

            {/* KISA */}
            <div className={`${styles["kisa-certification"]} ${openSection === "kisa" ? styles["active"] : ""}`}>
              <div className={styles["header"]} onClick={() => toggle("kisa")}>
                <h3>But, GKNOT is different</h3>
                <span className={`${styles["toggle-icon"]} ${openSection === "kisa" ? styles["rotate"] : ""}`}>+</span>
              </div>
              <div ref={(el) => (bodyRefs.current["kisa"] = el)} className={`${styles["body"]} ${openSection === "kisa" ? styles["open"] : ""}`}>
                <div className={styles["productshowcase-body-content"]}>
                  <p>GKNOT is the world’s first finger vein-based security wallet, designed to provide secure and seamless digital asset protection. It uses advanced biometric authentication for wallet creation, access, and transactions, eliminating the need for mnemonics or complex passwords while ensuring only authorized users can access and transfer assets. With hardware wallet integration, backup, and restore support, GKNOT offers a reliable and highly secure asset management solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={imageRef} className={`${styles["productshowcase-right"]} ${styles["desktop-image"]} ${styles["manual-size"]}`}>
          <div className={`${styles["productshowcase-right-img"]} ${styles["manual-size"]}`}>
            <Image src="/images/solutions/bas-gknot-wallet/productshowcase.png" alt="Hero Image" fill priority className={styles["img"]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productshowcase;