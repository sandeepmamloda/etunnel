"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./heroproduct.module.css";

/* ─── LetterCascade ─────────────────────────────────────────────────── */
const LetterCascade = ({ text, className, tag: Tag = "span", delay = 0 }) => {
  return (
    <Tag className={className}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className={styles["lc-letter"]}
          style={{ animationDelay: `${delay + i * 0.02}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </Tag>
  );
};

/* ─── Inner Component ───────────────────────────────────────────────── */
const HeroproductInner = function ({ image, title, highlight, description, brochureUrl }) {
  const brochureClass = `${styles["product-brochure"]} ${styles["anim-drop"]}`;

  return (
    <section className={styles["heroproduct-wrapper"]}>
      <div className={styles["heroproduct-main"]}>

        <div className={styles["heroproduct-left"]}>
          <div className={`${styles["heroproduct-img"]} ${styles["anim-img"]}`}>
            <Image src={image} alt="product image" fill />
          </div>
        </div>

        <div className={styles["heroproduct-right"]}>

          <div className={styles["heroproduct-right-top"]}>
            <div className={`${styles["heroproduct-button"]} ${styles["anim-drop"]}`}>
              <span className={styles["heroproduct-button-left"]}></span>
              <span>Biometric Product</span>
            </div>
          </div>

          <div className={styles["heroproduct-right-middle"]}>
            <h1>
              <LetterCascade
                text={`${title} `}
                className={styles["lc-line"]}
                tag="span"
                delay={0.1}
              />
              <span className={styles["heroproduct-highlight"]}>
                <LetterCascade
                  text={highlight}
                  className={styles["lc-line"]}
                  tag="span"
                  delay={0.1 + (`${title} `.length * 0.02)}
                />
              </span>
            </h1>
          </div>

          <div className={styles["heroproduct-right-bottom"]}>
            <p>
              <LetterCascade
                text={description}
                className={styles["lc-line"]}
                tag="span"
                delay={0.3}
              />
            </p>
          </div>

          <div className={styles["heroproduct-bottom-1"]}>
            <a href={brochureUrl} target="_blank" rel="noopener noreferrer" className={brochureClass}>
              <span className={styles["stair"]}></span>
              <span className={styles["stair"]}></span>
              <span className={styles["stair"]}></span>
              <span className={styles["stair"]}></span>
              <span>Product Brochure</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <Link
              href="/contact"
              className={`${styles["contact-us"]} ${styles["anim-drop"]}`}
            >
              <span className={styles["stair"]}></span>
              <span className={styles["stair"]}></span>
              <span className={styles["stair"]}></span>
              <span className={styles["stair"]}></span>
              <span>Contact Us</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ─── Wrapper ───────────────────────────────────────────────────────── */
const Heroproduct = (props) => {
  const pathname = usePathname();
  return <HeroproductInner key={pathname} {...props} />;
};

export default Heroproduct;
