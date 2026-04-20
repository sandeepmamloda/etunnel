import styles from "./nextgeneration-autho.module.css";

const Nextgeneration = function () {
  return (
    <>
      <section className={styles["nextgen-wrapper"]}>
        <div className={styles["nextget-main"]}>
          {/* 👇 Content Wrapper */}
          <div className={styles["nextgen-content"]}>
  
            <div className={styles["nextgen-heading"]}>
              <h2>
                The finger vein authentication technology developed by ETUNNEL is a new technology
                with excellent security, versatility, and immunity to hacking.
              </h2>
            </div>
  
            <div className={styles["nextgen-description"]}>
              <p>
                ETUNNEL has filed global patents in the US, Japan, Europe, South Korea, and more. The technology is currently being used by the Ministry of
                Defense, government offices, and various companies.
              </p>
            </div>
  
            <div className={styles["nextgen-description"]}>
              <p>
                Passwords and fingerprints have long been used for identity verification, but several issues with these methods have been identified. Finger vein
                authentication works by verifying the vein pattern beneath the skin, making it virtually impossible to replicate.
              </p>
            </div>
  
          </div>
  
          {/* 👇 Direct Child (future use ke liye) */}
          <div className={styles["nextgen-extra"]}>
            <p>
              With its excellent security, it is replacing traditional methods and emerging as the best alternative to prevent hacking and cybercrimes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nextgeneration;