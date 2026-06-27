"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./solutions-components.module.css";

gsap.registerPlugin(ScrollTrigger);

const solutionComponentsData = [
  {
    id: "etunnel-sc-100p",
    image: "/images/solutions/bas-smart-id-project/sc-100p.png",
    alt: "ETUNNEL-SC-100P",
    title: "ETUNNEL-SC-100P",
    desc: "Identity verification withthe built-in fingerprint sensor",
  },
  {
    id: "etunnel-cc-100",
    image: "/images/solutions/bas-smart-id-project/cc-100.png",
    alt: "ETUNNEL-CC-100",
    title: "ETUNNEL-CC-100",
    desc: "Case for power supplyand system integration",
  },
  {
    id: "etunnel-cr-100",
    image: "/images/solutions/bas-smart-id-project/cr-100.png",
    alt: "ETUNNEL-CR-100",
    title: "ETUNNEL-CR-100",
    desc: "User fingerprint registration and storage",
  },
  {
    id: "central-auth-server",
    image: "/images/solutions/bas-smart-id-project/server.png",
    alt: "Central Authentication Server and API",
    title: "Central Authentication Server and API",
    desc: "Integration with access control, PC, and electronic document approval systems",
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
            <h2 ref={headingRef}>ETUNNEL offers a complete hardware and software ecosystem for Smart ID deployment.</h2>
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