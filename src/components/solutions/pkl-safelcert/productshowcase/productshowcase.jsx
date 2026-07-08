"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./productshowcase.module.css";

// ── Accordion data (dynamic) ──
// className yahan original CSS class names se match karti hai
// (p2n2 / finger-vein-authentication / kisa-certification) — isse
// design/CSS me koi bhi change nahi karna padta.
const accordionData = [
  {
    id: "SafeICert-Server",
    className: "p2n2",
    title: "SafeICert Server",
    content:
      "The SafeICert Server is an integrated server that provides functions for both the administrator web and user web, as well as agent integration. It is responsible for registering and managing business certificates that will be distributed to designated users.",
  },
  {
    id: "SafeICert-Agent",
    className: "finger-vein-authentication",
    title: "SafeICert Agent",
    content:
      "This is an executable program installed and run on the user’s PC, serving as the core software of the SafeICert solution. The agent monitors the URLs of websites accessed through the browser in real time and controls whether the certificate can be used.",
  },
  {
    id: "SafeICert-Admin",
    className: "finger-vein-authentication",
    title: "SafeICert Admin",
    content:
      "You can register and manage business certificates, as well as handle approvals for certificate usage by designated users and manage certificate usage policies.",
  },
  {
    id: "SafeICert-User-Web",
    className: "kisa-certification",
    title: "SafeICert User Web",
    content:
      "You can request approval for the certificate and site you wish to use, as well as perform actions such as launching, closing, and updating the Agent.",
  },
];

const Productshowcase = function () {
  const [openSection, setOpenSection] = useState(accordionData[0]?.id ?? null);
  const bodyRefs = useRef({});
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const accordionRef = useRef(null);
  const imageRef = useRef(null);
  const mobileImageRef = useRef(null);

  useEffect(() => {
    const applyHeights = () => {
      accordionData.forEach(({ id }) => {
        const el = bodyRefs.current[id];
        if (!el) return;
        el.style.maxHeight = id === openSection ? el.scrollHeight + "px" : "0px";
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
          <span className={styles["reason-label"]}>CORE</span>
          <h2 className={styles["reason-heading"]}>Technical Components</h2>
        </div>
      </div>

      <div className={styles["productshowcase-wrapper"]}>
        <div className={`${styles["productshowcase-left"]} ${styles["manual-size"]}`}>
          <div className={styles["mobile-image"]} ref={mobileImageRef}>
            <div className={styles["productshowcase-right-img"]}>
              <Image src="/images/solutions/pkl-cqkms/productshowcase.png" alt="Hero Image" fill priority className={styles["img"]} />
            </div>
          </div>

          <div ref={accordionRef} className={styles["accordion"]}>
            {accordionData.map((item) => (
              <div
                key={item.id}
                className={`${styles[item.className]} ${openSection === item.id ? styles["active"] : ""}`}
              >
                <div className={styles["header"]} onClick={() => toggle(item.id)}>
                  <h3>{item.title}</h3>
                  <span className={`${styles["toggle-icon"]} ${openSection === item.id ? styles["rotate"] : ""}`}>+</span>
                </div>
                <div
                  ref={(el) => (bodyRefs.current[item.id] = el)}
                  className={`${styles["body"]} ${openSection === item.id ? styles["open"] : ""}`}
                >
                  <div className={styles["productshowcase-body-content"]}>
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={imageRef} className={`${styles["productshowcase-right"]} ${styles["desktop-image"]} ${styles["manual-size"]}`}>
          <div className={`${styles["productshowcase-right-img"]} ${styles["manual-size"]}`}>
            <Image src="/images/solutions/pkl-safelcert/productshowcase.png" alt="Hero Image" fill priority className={styles["img"]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productshowcase;