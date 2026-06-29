"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./solutions-components.module.css";

gsap.registerPlugin(ScrollTrigger);

const solutionComponentsData = [
  {
    id: "ETUNNEL-PL-101V",
    image: "/images/solutions/pc-logon/pl-101v.png",
    alt: "ETUNNEL-PL-101V",
    title: "ETUNNEL-PL-101V",
    desc: "Identity verification withthe built-in fingerprint sensor",
  },
  {
    id: "Credential-provider-dLL-file",
    image: "/images/solutions/pc-logon/credential.png",
    alt: "Credential Provider DLL File",
    title: "Credential Provider DLL File",
    desc: "Integrated with the Windows lockscreen to handle user authentication",
  },
  {
    id: "administrator-program",
    image: "/images/solutions/pc-logon/administrator-program.png",
    alt: "administrator-program",
    title: "Administrator Program",
    desc: "Software for managingfinger vein data",
  },
  {
    id: "PC-logon-program",
    image: "/images/solutions/pc-logon/pc-logon-program.png",
    alt: "PC-logon-program",
    title: "PC Logon Program",
    desc: "Send the finger veinauthentication result to the PC",
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
            <h2 ref={headingRef}>ETUNNEL offers a complete hardware and software ecosystem for PC Logon Solution.</h2>
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