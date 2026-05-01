"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./herotech-fingervein.module.css";

const LetterCascade = ({ text, className, tag: Tag = "span", delay = 0 }) => {
  return (
    <Tag className={className}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className={styles["lc-letter"]}
          style={{ animationDelay: `${delay + i * 0.03}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </Tag>
  );
};

const Herotech = function () {
  return (
    <section
      className={styles["herotech-fingervein-wrapper"]}
      aria-label="Finger Vein Technology - Core Biometric Technology"
    >
      <div className={styles["herotech-fingervein-main"]}>

        <div className={styles["herotech-fingervein-left"]}>

          <div className={styles["herotech-fingervein-left-top"]}>

            <div
              className={`${styles["core-tech-button"]} ${styles["anim-fade-up"]}`}
              style={{ animationDelay: "0s" }}
            >
              <span aria-hidden="true"></span>
              <span>CORE TECHNOLOGY</span>
            </div>

            <h1 className={styles["biometric-text"]}>
              <LetterCascade
                text="Biometric Authentication Integration Module"
                className={styles["lc-line"]}
                tag="span"
                delay={0.15}
              />
            </h1>

          </div>

          <div className={styles["herotech-fingervein-left-bottom"]}>

            <h2 className={styles["finger-vein"]}>
              <LetterCascade
                text="Finger Vein"
                className={`${styles["lc-line"]} ${styles["lc-orange"]}`}
                tag="span"
                delay={0.6}
              />
              <LetterCascade
                text="Technology"
                className={`${styles["lc-line"]} ${styles["lc-black"]}`}
                tag="span"
                delay={0.96}
              />
            </h2>

            <p
              className={`${styles["simple-text"]} ${styles["anim-fade-up"]}`}
              style={{ animationDelay: "0.9s" }}
            >
              <span>
                Accurate and counterfeit-proof authentication is achieved with Finger Vein Recognition 
                the most secure biometric modality available today.
              </span>
            </p>

            <div
              className={`${styles["links"]} ${styles["anim-fade-up"]}`}
              style={{ animationDelay: "1.1s" }}
            >

              <Link
                href="/contact"
                className={styles["contact-us"]}
                aria-label="Contact ETUNNEL"
              >
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span>Contact Us</span>
                <svg className={styles["arrow"]} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link
                href="/coretech/kisa-certification"
                className={styles["learn-more"]}
                aria-label="Learn more about Finger Vein Technology"
              >
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span className={styles["stair"]}></span>
                <span>Learn More</span>
                <svg className={styles["arrow-dark"]} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

            </div>
          </div>
        </div>

        <div
          className={`${styles["herotech-fingervein-right"]} ${styles["anim-slide-right"]}`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className={styles["herotech-fingervein-right-inner"]}>
            <div className={styles["herotech-fingervein-right-outer"]}></div>
          </div>
          <div className={styles["herotech-fingervein-right-img"]}>
            <Image
              src="/images/coretech/fingervein/hero-tech/hero-tech.png"
              fill={true}
              alt="Finger Vein biometric authentication module"
              priority
              className={styles["img"]}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Herotech;