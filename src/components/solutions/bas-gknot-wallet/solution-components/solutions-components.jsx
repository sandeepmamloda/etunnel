"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./solutions-components.module.css";

gsap.registerPlugin(ScrollTrigger);

const solutionComponentsData = [
  {
    id: "GKNOT-Wallet",
    image: "/images/solutions/bas-gknot-wallet/gknot-wallet.png",
    alt: "GKNOT Wallet",
    title: "GKNOT Wallet",
    desc: "Smartphone application",
  },
  {
    id: "ETUNNEL-SW-100V",
    image: "/images/solutions/bas-gknot-wallet/etunnel-sw-100v.png",
    alt: "ETUNNEL-SW-100V",
    title: "ETUNNEL-SW-100V",
    desc: "Finger vein authentication for wallet creation, transfer, and management",
  },
   {
    id: "ETUNNEL-CW-100V",
    image: "/images/solutions/bas-gknot-wallet/etunnel-cw-100v.png",
    alt: "ETUNNEL-CW-100V",
    title: "ETUNNEL-CW-100V",
    desc: "A hardware wallet that can be used in conjunction with the GKNOT wallet",
  },
];

const Solutioncomponents = function () {
  const wrapperRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const itemsRef = useRef([]);

  // ------ reset refs array before each render's collection ------
  itemsRef.current = [];

  const addItemRef = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 600;

      // ------ label ------
      gsap.from(labelRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: isMobile ? 18 : 26,
        duration: isMobile ? 0.8 : 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: labelRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // ------ h2 ------
      gsap.from(headingRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: isMobile ? 24 : 40,
        duration: isMobile ? 0.9 : 1.1,
        ease: "power4.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // ------ cards staggered (dynamic) ------
      itemsRef.current.forEach((el, i) => {
        gsap.from(el, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: isMobile ? 20 : 30,
          duration: isMobile ? 0.85 : 1,
          ease: "power4.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={wrapperRef} className={styles["solutioncomponents-wrapper"]}>
        <div className={styles["solutioncomponents-main"]}>

          {/* ---- Header ---- */}
          <div className={styles["solutioncomponents-top"]}>
            <span ref={labelRef} className={styles["label"]}>Solution Components</span>
            <h2 ref={headingRef}>ETUNNEL offers a complete hardware and software ecosystem for GKNOT Wallet.</h2>
          </div>

          {/* ---- Cards (dynamic) ---- */}
          <div className={styles["solutioncomponents-bottom"]}>
            {solutionComponentsData.map((item) => (
              <div
                key={item.id}
                ref={addItemRef}
                className={styles["solutioncomponents-items"]}
              >
                <div className={styles["image-wrapper"]}>
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className={styles["content"]}>
                  <span className={styles["title"]}>{item.title}</span>
                  <span className={styles["desc"]}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Solutioncomponents;