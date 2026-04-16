import styles from "./nextgeneration.module.css";

const Nextgeneration = function () {
  return (
    <>
      <div className={styles["nextgeneration-wrapper"]}>
        
        <div className={styles["nextgeneration-top"]}>
          <span>
            ETUNNEL Inc. has developed the AI Engine P2N2, which leads innovation in next-generation biometric
          </span>
          <span>
            authentication security technology.
          </span>
        </div>

        <div className={styles["nextgeneration-bottom"]}>
          <span>
            P2N2 is an advanced integrated biometric authentication algorithm designed to process various types of biometric
          </span>
          <span>
            information, such as face, fingerprint, finger vein, iris, and palm vein, in a unified manner within a single AI engine.
          </span>
        </div>

      </div>
    </>
  );
};

export default Nextgeneration;