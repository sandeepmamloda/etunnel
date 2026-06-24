"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./intro.module.css";

const FEATURES = [
  {
    key: "press-release",
    title: "Press Release",
    description:"We provide press releases containing our core technology, key activities, and future vision. Check out various articles introduced in the media to experience our reliability and innovation firsthand.",
    image: "/images/coretech/overview/p2n2.png",
    href: "/coretech/p2n2",
  },
  {
    key: "notice",
    title: "Notice",
    description:
      "We provide our announcements and official notices.Check for service operation updates and the latest notice.",
    image: "/images/coretech/overview/finger-vein.jpg",
    href: "/coretech/fingervein",
  },
  {
    key: "biometric-news",
    title: "Biometric News",
    description:
      "Check out articles from major outlets covering biometric authentication technology and market reactions.We have gathered various news about biometric authentication featured in domestic and international press.",
    image: "/images/coretech/overview/kisa-biometric-certification.jpg",
    href: "/coretech/kisa-certification",
  },
  {
    key: "video",
    title: "Video",
    description:
      "We provide various technical content to help customers understand, including product demonstrations, feature introductions, and demo videos. Watch videos to experience our security technology and products firsthand.",
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
          <h2>News and Media</h2>
          <p>
            We offer full coverage of what is going on in VSE and Stock Markets.
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
                  <span>Contact Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.16406 10H15.8307" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
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