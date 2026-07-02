"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./intro.module.css";

const FEATURES = [
  {
    key: "p2n2",
    title: "P2N2",
    description:
      "P2N2 is an advanced integrated biometric authentication algorithm designed to process various types of biometric information, such as face, fingerprint, finger vein, iris, and palm vein, in a unified manner within a single AI engine.",
    image: "/images/coretech/overview/p2n2.png",
    href: "/coretech/p2n2",
  },
  {
    key: "fva",
    title: "Finger Vein Technology",
    description:
      "Accurate and counterfeit-proof authentication is achieved with Finger Vein Recognition  the most secure biometric modality available today.",
    image: "/images/coretech/overview/finger-vein.jpg",
    href: "/coretech/fingervein",
  },
  {
    key: "kisa",
    title: "KISA Biometric Certification",
    description:
      "Biometric technology proven through reliable authentication. ETUNNEL's finger vein and facial authentication solution verified with KISA (Korea Internet & Security Agency) certification.",
    image: "/images/coretech/overview/kisa-biometric-certification.jpg",
    href: "/coretech/kisa-certification",
  },
];

const ProductFeatures = function () {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      rowRefs.current.forEach((row) => {
        if (!row) return;
        const text = row.querySelector(`.${styles["feature-text"]}`);
        const image = row.querySelector(`.${styles["feature-image"]}`);

        gsap
          .timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
              once: true,
            },
          })
          .fromTo(
            text,
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "power2.inOut" }
          )
          .fromTo(
            image,
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 1.3, ease: "power2.inOut" },
            "-=0.9"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles["productfeatures-section"]} ref={sectionRef}>
      <div className={styles["productfeatures-wrapper"]}>
        <div ref={headerRef} className={styles["productfeatures-header"]}>
          <h2>One AI Engine. Every Biometric.</h2>
          <p>
            ETUNNEL offers a full range of biometric solutions designed to work
            together.
          </p>
        </div>

        <div className={styles["productfeatures-list"]}>
          {FEATURES.map((feature, index) => (
            <div
              key={feature.key}
              ref={(el) => (rowRefs.current[index] = el)}
              className={styles["feature-row"]}
            >
              <div className={`${styles["feature-text"]} ${styles[feature.key]}`}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link
                  href={feature.href}
                  className={styles["productfeatures-toggle"]}
                >
                  <span>Learn more</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              <div className={`${styles["feature-image"]} ${styles[`${feature.key}-image`]}`}>
                <div className={styles["feature-image-inner"]}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    priority={index === 0}
                    className={styles["img"]}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;