import styles from "./nextgeneration-autho.module.css";

const Nextgeneration = function () {
  return (
    <>
      <section className={styles["nextgen-wrapper"]}>

        {/* 👇 Content Wrapper */}
        <div className={styles["nextgen-content"]}>

          <div className={styles["nextgen-heading"]}>
            <span>
              The finger vein authentication technology developed by ETUNNEL is a new technology
            </span>
            <span>
              with excellent security, versatility, and immunity to hacking.
            </span>
          </div>

          <div className={styles["nextgen-description"]}>
            <span>
              ETUNNEL has filed global patents in the US, Japan, Europe, South Korea, and more. The technology is currently being used by the Ministry of
            </span>
            <span>
              Defense, government offices, and various companies.
            </span>
          </div>

          <div className={styles["nextgen-description"]}>
            <span>
              Passwords and fingerprints have long been used for identity verification, but several issues with these methods have been identified. Finger vein
            </span>
            <span>
              authentication works by verifying the vein pattern beneath the skin, making it virtually impossible to replicate.
            </span>
          </div>

        </div>

        {/* 👇 Direct Child (future use ke liye) */}
        <div className={styles["nextgen-extra"]}>
          <span>
            With its excellent security, it is replacing traditional methods and emerging as the best alternative to prevent hacking and cybercrimes.
          </span>
        </div>

      </section>
    </>
  );
};

export default Nextgeneration;