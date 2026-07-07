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
          <h2 className={styles["reason-heading"]}>A New Solution That Fills the Gaps in Traditional Authentication</h2>
        </div>
      </div>

      <div className={styles["productshowcase-wrapper"]}>
        <div className={`${styles["productshowcase-left"]} ${styles["manual-size"]}`}>
          <div className={styles["mobile-image"]} ref={mobileImageRef}>
            <div className={styles["productshowcase-right-img"]}>
              <Image src="/images/solutions/bas-smart-id-project/productshowcase.png" alt="Hero Image" fill priority className={styles["img"]} />
            </div>
          </div>

          <div ref={accordionRef} className={styles["accordion"]}>
            {/* P2N2 */}
            <div className={`${styles["p2n2"]} ${openSection === "p2n2" ? styles["active"] : ""}`}>
              <div className={styles["header"]} onClick={() => toggle("p2n2")}>
                <h3>Limitations of Password-based Logon</h3>
                <span className={`${styles["toggle-icon"]} ${openSection === "p2n2" ? styles["rotate"] : ""}`}>+</span>
              </div>
              <div ref={(el) => (bodyRefs.current["p2n2"] = el)} className={`${styles["body"]} ${openSection === "p2n2" ? styles["open"] : ""}`}>
                <div className={styles["productshowcase-body-content"]}>
                  <p>Password-based authentication places a heavy dependence on user memory, requiring individuals to remember and manage complex passwords on their own. This often reduces work efficiency due to frequent input errors and repeated password reset requests.
                  In addition, passwords present significant security vulnerabilities, as they can be easily compromised through keylogging, phishing, and social engineering attacks. Once a              password is exposed externally, unauthorized users can gain access, making the authentication process ineffective.
                  
                  Password systems also create inconvenience for users. Regular password change policies can cause stress and frustration, while reusing the same password across multiple              services further increases security risks and the likelihood of unauthorized access.</p>
                </div>
              </div>
            </div>

            {/* FVA */}
            <div className={`${styles["finger-vein-authentication"]} ${openSection === "fva" ? styles["active"] : ""}`}>
              <div className={styles["header"]} onClick={() => toggle("fva")}>
                <h3>Risks of Shared PC Usage / Proxy Use</h3>
                <span className={`${styles["toggle-icon"]} ${openSection === "fva" ? styles["rotate"] : ""}`}>+</span>
              </div>
              <div ref={(el) => (bodyRefs.current["fva"] = el)} className={`${styles["body"]} ${openSection === "fva" ? styles["open"] : ""}`}>
                <div className={styles["productshowcase-body-content"]}>
                  <p>Password-based authentication is often unable to verify the actual identity of the user, as passwords alone cannot confirm who is accessing the system. Proxy logins are also possible, making it difficult to maintain security accountability and accurately trace user actions.
                  
                  Unauthorized access becomes a major risk when passwords are shared or compromised. In such cases, unauthorized individuals can freely access the system, which can lead to                   critical security incidents, especially in environments where sensitive or confidential information is stored.
                  
                  Additionally, password-based systems have limitations in auditing and tracking user activities. Since activity records are not always clearly separated by individual users,                   tracing access histories becomes challenging. In the event of a security incident, identifying the root cause and the responsible party can take significant time and effort.
                  </p>
               </div>
              </div>
            </div>

            {/* KISA */}
            <div className={`${styles["kisa-certification"]} ${openSection === "kisa" ? styles["active"] : ""}`}>
              <div className={styles["header"]} onClick={() => toggle("kisa")}>
                <h3>Expected Benefits of the PC Logon Solution</h3>
                <span className={`${styles["toggle-icon"]} ${openSection === "kisa" ? styles["rotate"] : ""}`}>+</span>
              </div>
              <div ref={(el) => (bodyRefs.current["kisa"] = el)} className={`${styles["body"]} ${openSection === "kisa" ? styles["open"] : ""}`}>
                <div className={styles["productshowcase-body-content"]}>
                  <p>The biometric-based PC Logon Solution enables fast and seamless system access without passwords, improving both convenience and security. Using high-precision finger vein recognition, it prevents proxy usage and unauthorized access while simplifying authentication management and reducing operational costs.

                  This solution enhances security by preventing unauthorized access through biometric authentication. Since finger vein data is highly difficult to counterfeit or alter, it provides a reliable and robust layer of protection.
                  
                  User convenience is improved as individuals can quickly log in using finger vein recognition without remembering passwords. This provides a fast and intuitive authentication experience.
                  
                  The solution also increases management efficiency by allowing centralized control of authentication histories and user permissions, making security policy updates easier and reducing administrative effort.
                  
                  Additionally, operational costs are reduced by minimizing password reset support and lowering the need for separate authentication tools such as physical keys or security cards.
                  </p>
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