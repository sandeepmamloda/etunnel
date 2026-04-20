import styles from "./nextgeneration.module.css";

const Nextgeneration = function () {
  return (
    <>
      <div className={styles["nextgeneration-wrapper"]}>
        
        <div className={styles["nextgeneration-main"]}>
          <div className={styles["nextgeneration-top"]}>
            <h2>
              ETUNNEL Inc. has developed the AI Engine P2N2, which leads innovation in next-generation biometric
              authentication security technology.
            </h2>
          </div>
  
          <div className={styles["nextgeneration-bottom"]}>
            <p>
              P2N2 is an advanced integrated biometric authentication algorithm designed to process various types of biometric
              information, such as face, fingerprint, finger vein, iris, and palm vein, in a unified manner within a single AI engine.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Nextgeneration;