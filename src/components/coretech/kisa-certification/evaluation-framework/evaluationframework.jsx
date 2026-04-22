import styles from "./evaluationframework.module.css";
import Image from "next/image";

const Evaluationframework = function () {
  return (
    <div className={styles["evaluationframework-wrapper"]}>

      {/* ===================== HEADER ===================== */}
      <div className={styles["evaluationframework-header"]}>
        <h3 className={styles["header-title"]}>Evaluation Framework</h3>
        <p className={styles["header-desc"]}>ETUNNEL has received official KISA biometric certification for both finger vein and facial recognition technologies.</p>
      </div>

      {/* ===================== GRID ===================== */}
      <div className={styles["evaluationframework-main"]}>

        <div className={`${styles["evaluationframework-items"]} ${styles["true-acceptance-rate"]}`}>
          <div className={styles["content"]}>
            <h3 className={styles["content-title"]}>True Acceptance Rate</h3>
            <p className={styles["content-desc"]}>The rate at which the system correctly recognizes the legitimate user.</p>
          </div>
          <div className={styles["image"]}>
            <Image src="/images/coretech/kisa-certification/evaluationframework/true-acceptance.png" fill={true} alt="True Acceptance Rate" priority className={styles["img"]} />
          </div>
        </div>

        <div className={`${styles["evaluationframework-items"]} ${styles["false-acceptance-rate"]}`}>
          <div className={styles["image"]}>
            <Image src="/images/coretech/kisa-certification/evaluationframework/false-acceptance.png" fill={true} alt="False Acceptance Rate" priority className={styles["img"]} />
          </div>
          <div className={styles["content"]}>
            <h3 className={styles["content-title"]}>False Acceptance Rate</h3>
            <p className={styles["content-desc"]}>The rate at which the system incorrectly recognizes someone else as the user.</p>
          </div>
        </div>

        <div className={`${styles["evaluationframework-items"]} ${styles["tampering-resistance"]}`}>
          <div className={styles["content"]}>
            <h3 className={styles["content-title"]}>Tampering Resistance</h3>
            <p className={styles["content-desc"]}>The ability to detect photos, videos and replicas.</p>
          </div>
          <div className={styles["image"]}>
            <Image src="/images/coretech/kisa-certification/evaluationframework/tampering-resistance.png" fill={true} alt="Tampering Resistance" className={styles["img"]} />
          </div>
        </div>

        <div className={`${styles["evaluationframework-items"]} ${styles["user-convenience"]}`}>
          <div className={styles["image"]}>
            <Image src="/images/coretech/kisa-certification/evaluationframework/user-convenience.png" fill={true} alt="User Convenience" className={styles["img"]} />
          </div>
          <div className={styles["content"]}>
            <h3 className={styles["content-title"]}>User Convenience</h3>
            <p className={styles["content-desc"]}>Easy to use by anyone in various environments.</p>
          </div>
        </div>

        <div className={`${styles["evaluationframework-items"]} ${styles["circle"]}`}>
          <div className={styles["image"]}>
            <Image src="/images/coretech/kisa-certification/evaluationframework/circle.png" fill={true} alt="KISA Circle" className={styles["img"]} />
          </div>
        </div>

        <div className={`${styles["evaluationframework-items"]} ${styles["tampering-resistance-2"]}`}>
          <div className={styles["image"]}>
            <Image src="/images/coretech/kisa-certification/evaluationframework/tampering-resistance-2.png" fill={true} alt="Tampering Resistance 2" className={styles["img"]} />
          </div>
          <div className={styles["content"]}>
            <h3 className={styles["content-title"]}>Tampering Resistance</h3>
            <p className={styles["content-desc"]}>The ability to detect photos, videos and replicas.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Evaluationframework;