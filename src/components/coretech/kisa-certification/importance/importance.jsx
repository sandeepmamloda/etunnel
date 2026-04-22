import styles from "./importance.module.css";

const Importance = function () {
  return (
    <>
      <div className={styles["importance-wrapper"]}>
        <div className={styles["importance-main"]}>

          {/* Left: Title + subtitle */}
          <div className={styles["importance-left"]}>
            <h2 className={styles["importance-title"]}>
              Why is KISA certification important?
            </h2>
            <p className={styles["importance-subtitle"]}>
              KISA certification, which combines public trust and legal validity,
              sets the standard for technology adoption.
            </p>
          </div>

          {/* Right: 3 cards */}
          <div className={styles["importance-right"]}>

            <div className={styles["importance-items"]}>
              <h3 className={styles["items-heading"]}>
                The most trusted authentication testing and certification agency in Korea
              </h3>
              <p className={styles["items-desc"]}>
                KISA (Korea Internet & Security Agency) is the institution that conducts the most rigorous and systematic testing and certification of domestic biometric technologies. This certification signifies that the technology has been officially recognized for its accuracy, stability, and security. Certified solutions are recognized as reliable technologies in both domestic and international markets.
              </p>
            </div>

            <div className={styles["importance-items"]}>
              <h3 className={styles["items-heading"]}>
                Essential standards for e-Government frameworks and public procurement integration
              </h3>
              <p className={styles["items-desc"]}>
                KISA certification is a mandatory requirement for integration with government procurement projects and e-Government systems. Only certified solutions can participate in public procurement platforms like the Korea On-line E-Procurement System, procurement registration, and public institution bids, reducing the B2G entry barrier for businesses and accelerating the commercialization of technology.
              </p>
            </div>

            <div className={styles["importance-items"]}>
              <h3 className={styles["items-heading"]}>
                Compliance with legal regulations such as the Electronic Signature Act
                and Information Security Act
              </h3>
              <p className={styles["items-desc"]}>
                Biometric technology deals with sensitive information, so it must comply with various legal regulations. KISA certification proves that the technology complies with relevant laws such as the Electronic Signature Act and the Personal Information Protection Act. Additionally, it ensures legal compliance in cases of auditing, supervision, and legal disputes.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Importance;