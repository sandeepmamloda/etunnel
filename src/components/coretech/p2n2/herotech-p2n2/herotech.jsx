import styles from "./herotech.module.css";
import Image from "next/image";
import Link from "next/link";

const Herotech = function () {
  return (
    <section
      className={styles["herotech-p2n2-wrapper"]}
      aria-label="P2N2 AI Engine - Core Biometric Technology"
    >
      <div className={styles["herotech-p2n2-main"]}>

        <div className={styles["herotech-p2n2-left"]}>

          <div className={styles["herotech-p2n2-left-top"]}>

            <div className={styles["core-tech-button"]}>
              <span aria-hidden="true"></span>
              <span>CORE TECHNOLOGY</span>
            </div>

            <h1 className={styles["biometric-text"]}>
              <span>Biometric Authentication Integration Module</span>
              {/* <span>Module</span> */}
            </h1>

          </div>

          <div className={styles["herotech-p2n2-left-bottom"]}>

            <h2 className={styles["ai-engine"]}>
              <span>AI Engine P2N2</span>
            </h2>

            <p className={styles["simple-text"]}>
              <span>It is a state-of-the-art solution that can handle all forms of biometric authentication within a single module.</span>
            </p>

            <div className={styles["links"]}>

              <Link
                href="/contact"
                className={styles["contact-us"]}
                aria-label="Contact ETUNNEL"
              >
                <span>Contact Us</span>
                <svg className={styles["arrow"]} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link
                href="/coretech/p2n2"
                className={styles["learn-more"]}
                aria-label="Learn more about P2N2 AI Engine"
              >
                <span>Learn More</span>
                <svg className={styles["arrow-dark"]} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

            </div>
          </div>
        </div>

        <div className={styles["herotech-p2n2-right"]}>
          <div className={styles["herotech-p2n2-right-inner"]}>
            <div className={styles["herotech-p2n2-right-outer"]}></div>
          </div>
          <div className={styles["herotech-p2n2-right-img"]}>
            <div className={styles["ai-powered"]}>
              <span>AI-Powered</span>
            </div>
            <Image
              src="/images/coretech/p2n2/p2n2.png"
              fill={true}
              alt="P2N2 AI Biometric Engine module"
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