"use client";
import styles from "./securityfeatures.module.css";
import Image from 'next/image';
import Link from "next/link"; // ✅ add this
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Securityfeatures = function () {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const toggleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // ✅ important

    const ctx = gsap.context(() => {

      gsap.fromTo(
        [titleRef.current, descRef.current, toggleRef.current],
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power2.inOut",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.3,
          ease: "power2.inOut",
          stagger: 0.18,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            once: true
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      title: "Secure Identity Verification",
      spans: ["ETUNNEL authenticates users using biometric data such as fingerprint, finger vein, and facial recognition. Each identity is verified against encrypted biometric templates, ensuring that access is granted only to the rightful individual."],
      img: "/images/security/unnamed.png"
    },
    {
      title: "Fast and Frictionless Access",
      spans: ["Using the P2N2 AI Engine, biometric data is processed quickly and accurately. This allows users to authenticate in seconds without passwords, PINs, or complex procedures while maintaining high security."],
      img: "/images/security/tunnel.jpg"
    },
    {
      title: `Protection Against Fraud and Spoofing`,
      spans: ["ETUNNEL’s biometric systems are designed to prevent impersonation and fraud. Technologies such as finger vein recognition require a live human presence, making spoofing, duplication, or replay attacks extremely difficult."],
      img: "/images/security/fingerprint.png"
    },
    {
      title: "Seamless Physical and Digital Security",
      spans: ["ETUNNEL solutions work across both physical access points and digital systems. The same biometric identity can be used for facility access, system login, secure transactions, and identity verification creating a unified and consistent security experience."],
      img: "/images/security/globe.png"
    },
  ];

  return (
    <section className={styles["security-feature-wrapper"]} ref={sectionRef}>
      <div className={styles["security-feature-top"]}>

        <div className={styles["security-feature-top-tcontent"]}>
          <h2 ref={titleRef}>
            Biometric Security Built for the Real World
          </h2>
        </div>

        <div className={styles["security-feature-top-mcontent"]}>

          <p ref={descRef}>
            ETUNNEL replaces weak credentials with secure biometric authentication powered by AI. Our systems verify identity using unique human features that cannot be copied or transferred.
          </p>

          {/* ✅ Updated Button */}
          <div ref={toggleRef} className={styles["security-feature-wrapper-toggle"]}>
            <Link href="/about" className={styles["toggle-link"]}>
              Learn More About Us
            </Link>
          </div>

        </div>
      </div>

      <div className={styles["security-feature-cart-wrapper"]}>
        {cards.map((card, i) => (
          <div
            key={i}
            className={styles["security-feature-cart"]}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className={styles["security-feature-cart-top"]}>
               <h3>{card.title}</h3>
              <div>
                {card.spans.map((s, j) => (
                  <p key={j}>{s}</p>
                ))}
              </div>
            </div>
            <div className={styles["security-feature-cart-bottom"]}>
              <Image
                src={card.img}
                alt={card.title}
                fill
                priority
                className={styles["img"]}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Securityfeatures;