"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./securitytechnology.module.css";

const cards = [
  {
    image: "/images/biometric-products/st-100v/securitytechnology/securitytechnology-left.png",
    title: "Most Secure Biometric Authentication",
    description: "Finger vein patterns are internal biometric data that cannot be replicated or stolen, providing the highest level of security against fraud and spoofing attacks.",
  },
  {
    image: "/images/biometric-products/st-100v/securitytechnology/securitytechnology-middle.png",
    title: "Unaffected by External Factors",
    description: "Unlike fingerprint technology, finger vein recognition is not affected by cuts, dryness, dirt, or other surface contaminants — delivering consistent results every time.",
  },
  {
    image: "/images/biometric-products/st-100v/securitytechnology/securitytechnology-right.png",
    title: "Most Accurate Authentication",
    description: "With a True Acceptance Rate of 99.7% and a False Acceptance Rate of less than 0.001%, the ST-100V delivers near-perfect identification accuracy.",
  },
];

const CircleIcon = ({ src }) => (
  <div className={styles["icon-wrapper"]}>
    <div className={styles["icon-ring-outer"]}>
      <div className={styles["icon-ring-inner"]}>
        <div className={styles["icon-circle"]}>
          <Image src={src} alt="icon" fill className={styles["icon-img"]} />
        </div>
      </div>
    </div>
  </div>
);

const Securitytechnology = function () {
  const wrapperRef  = useRef(null);
  const labelRef    = useRef(null);
  const headingRef  = useRef(null);
  const subRef      = useRef(null);
  const dividerRef  = useRef(null);
  const cardsRef    = useRef([]);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        // ── label ──
        gsap.from(labelRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 30,
          duration: 1.0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: labelRef.current,
            start: "top 85%",
            once: true,
          }
        });

        // ── heading ──
        gsap.from(headingRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 40,
          duration: 1.1,
          ease: "power4.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          }
        });

        // ── subheading ──
        gsap.from(subRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 40,
          duration: 1.1,
          ease: "power4.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: subRef.current,
            start: "top 85%",
            once: true,
          }
        });

        // ── divider ──
        gsap.from(dividerRef.current, {
          clipPath: "inset(0% 100% 0% 0%)",
          duration: 1.0,
          ease: "power4.out",
          delay: 0.45,
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 88%",
            once: true,
          }
        });

        // ── har card individually ──
        cardsRef.current.forEach((card) => {
          if (!card) return;
          gsap.from(card, {
            clipPath: "inset(100% 0% 0% 0%)",
            y: 40,
            duration: 1.0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            }
          });
        });

      }, wrapperRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles["securitytechnology-wrapper"]} ref={wrapperRef}>
      <div className={styles["securitytechnology-main"]}>

        <div className={styles["securitytechnology-top"]}>
          <span className={styles["label"]}      ref={labelRef}>CORE TECHNOLOGY</span>
          <h2   className={styles["heading"]}     ref={headingRef}>Core Elements of Security Technology</h2>
          <p    className={styles["subheading"]}  ref={subRef}>The trusted technology developed by ETUNNEL sets a new global standard in security.</p>
          <div  className={styles["divider"]}     ref={dividerRef}></div>
        </div>

        <div className={styles["securitytechnology-bottom"]}>
          {cards.map((card, index) => (
            <div
              className={styles["card"]}
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <CircleIcon src={card.image} />
              <h3 className={styles["card-title"]}>{card.title}</h3>
              <p className={styles["card-description"]}>{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Securitytechnology;