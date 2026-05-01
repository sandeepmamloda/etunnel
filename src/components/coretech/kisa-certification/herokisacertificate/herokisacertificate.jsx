"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./herokisacertificate.module.css";

// Letter Cascade with Framer Motion
const LetterCascade = ({ text, className, delay = 0 }) => {
  return (
    <span className={className}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: delay + i * 0.03,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
};

const Herokisacertificate = function () {
  return (
    <>
      <section className={styles["herokisacertificate-wrapper"]}>
        <div className={styles["herokisacertificate-main"]}>

          {/* TOP — Letter Cascade on H1 */}
          <div className={styles["herokisacertificate-top"]}>
            <h1>
              <LetterCascade
                text="KISA"
                className={styles["kisa-orange"]}
                delay={0.1}
              />
              <span>&nbsp;</span>
              <LetterCascade
                text="Biometric Certification"
                className={styles["kisa-black"]}
                delay={0.4}
              />
            </h1>
          </div>

          {/* MIDDLE — Fade Up */}
          <motion.div
            className={styles["herokisacertificate-middle"]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 }}
          >
            <p>
              Biometric technology proven through reliable authentication.
              ETUNNEL's finger vein and facial authentication solution verified
              with <span>KISA (Korea Internet & Security Agency)</span>{" "}
              certification.
            </p>
          </motion.div>

          {/* BOTTOM — Fade Up */}
          <motion.div
            className={styles["herokisacertificate-bottom"]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
          >
            <div className={styles["herokisacertificate-bottom-wrapper"]}>
              <span>
                Contact Us
                <Image
                  src="/images/coretech/kisa-certification/herokisacertificate/herokisacertificate.png"
                  fill={true}
                  alt="P2N2 AI Biometric Engine module"
                  priority
                  className={styles["img"]}
                />
              </span>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Herokisacertificate;