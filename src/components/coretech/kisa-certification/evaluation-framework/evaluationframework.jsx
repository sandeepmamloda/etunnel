"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./evaluationframework.module.css";

gsap.registerPlugin(ScrollTrigger);

const Evaluationframework = function () {
  const wrapperRef = useRef(null);
  const headerTitleRef = useRef(null);
  const headerDescRef = useRef(null);
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);
  const item4Ref = useRef(null);
  const circleRef = useRef(null);
  const item6Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 600;

      // ------ header title ------
      gsap.from(headerTitleRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: isMobile ? 24 : 40,
        duration: isMobile ? 0.9 : 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headerTitleRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // ------ header desc ------
      gsap.from(headerDescRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: isMobile ? 24 : 40,
        duration: isMobile ? 0.9 : 1.1,
        ease: "power4.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: headerDescRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // ------ grid items — staggered ------
      const gridItems = [
        item1Ref.current,
        item2Ref.current,
        item3Ref.current,
        item4Ref.current,
        item6Ref.current,
      ].filter(Boolean);

      gridItems.forEach((el, i) => {
        gsap.from(el, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: isMobile ? 20 : 30,
          duration: isMobile ? 0.85 : 1,
          ease: "power4.out",
          delay: i * 0.12,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      // ------ circle — scale + fade ------
      gsap.from(circleRef.current, {
        scale: 0.7,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 88%",
          once: true,
        },
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef} className={styles["evaluationframework-wrapper"]}>

      {/* ===================== HEADER ===================== */}
      <div className={styles["evaluationframework-header"]}>
        <h3 ref={headerTitleRef} className={styles["header-title"]}>Evaluation Framework</h3>
        <p ref={headerDescRef} className={styles["header-desc"]}>ETUNNEL has received official KISA biometric certification for both finger vein and facial recognition technologies.</p>
      </div>

      {/* ===================== GRID ===================== */}
      <div className={styles["evaluationframework-main"]}>

        <div ref={item1Ref} className={`${styles["evaluationframework-items"]} ${styles["true-acceptance-rate"]}`}>
          <div className={styles["content"]}>
            <h3 className={styles["content-title"]}>True Acceptance Rate</h3>
            <p className={styles["content-desc"]}>The rate at which the system correctly recognizes the legitimate user.</p>
          </div>
          <div className={styles["image"]} style={{ overflow: "hidden" }}>
            <Image src="/images/coretech/kisa-certification/evaluationframework/true-acceptance.png" fill={true} alt="True Acceptance Rate" priority className={styles["img"]} />
          </div>
        </div>

        <div ref={item2Ref} className={`${styles["evaluationframework-items"]} ${styles["false-acceptance-rate"]}`}>
          <div className={styles["image"]} style={{ overflow: "hidden" }}>
            <Image src="/images/coretech/kisa-certification/evaluationframework/false-acceptance.png" fill={true} alt="False Acceptance Rate" priority className={styles["img"]} />
          </div>
          <div className={styles["content"]}>
            <h3 className={styles["content-title"]}>False Acceptance Rate</h3>
            <p className={styles["content-desc"]}>The rate at which the system incorrectly recognizes someone else as the user.</p>
          </div>
        </div>

        <div ref={item3Ref} className={`${styles["evaluationframework-items"]} ${styles["tampering-resistance"]}`}>
          <div className={styles["content"]}>
            <h3 className={styles["content-title"]}>Tampering Resistance</h3>
            <p className={styles["content-desc"]}>The ability to detect photos, videos and replicas.</p>
          </div>
          <div className={styles["image"]} style={{ overflow: "hidden" }}>
            <Image src="/images/coretech/kisa-certification/evaluationframework/tampering-resistance.png" fill={true} alt="Tampering Resistance" className={styles["img"]} />
          </div>
        </div>

        <div ref={item4Ref} className={`${styles["evaluationframework-items"]} ${styles["user-convenience"]}`}>
          <div className={styles["image"]} style={{ overflow: "hidden" }}>
            <Image src="/images/coretech/kisa-certification/evaluationframework/user-convenience.png" fill={true} alt="User Convenience" className={styles["img"]} />
          </div>
          <div className={styles["content"]}>
            <h3 className={styles["content-title"]}>User Convenience</h3>
            <p className={styles["content-desc"]}>Easy to use by anyone in various environments.</p>
          </div>
        </div>

        <div ref={circleRef} className={`${styles["evaluationframework-items"]} ${styles["circle"]}`}>
          <div className={styles["image"]}>
            <Image src="/images/coretech/kisa-certification/evaluationframework/circle.png" fill={true} alt="KISA Circle" className={styles["img"]} />
          </div>
        </div>

        <div ref={item6Ref} className={`${styles["evaluationframework-items"]} ${styles["tampering-resistance-2"]}`}>
          <div className={styles["image"]} style={{ overflow: "hidden" }}>
            <Image src="/images/coretech/kisa-certification/evaluationframework/tampering-resistance-2.png" fill={true} alt="Tampering Resistance 2" className={styles["img"]} />
          </div>
          <div className={styles["content"]}>
            <h3 className={styles["content-title"]}>Tampering Resistance</h3>
            <p className={styles["content-desc"]}>The ability to detect photos, videos and replicas.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Evaluationframework;