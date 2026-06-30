import Image from "next/image";
import styles from "./bas-id-verification.module.css";

const PcLogonSolution = function () {
  return (
    <section className={styles["bas-id-verification-wrapper"]} aria-labelledby="bas-id-verification-heading">
      <div className={styles["bas-id-verification-bg"]}>
        <Image
          src="/images/solutions/bas-pc-logon/pc-logon.jpg"
          fill={true}
          alt="Modern office corridor representing PC Logon Solution"
          priority
          className={styles["bas-id-verification-img"]}
        />
        <div className={styles["bas-id-verification-overlay"]} aria-hidden="true"></div>
      </div>

      <div className={styles["bas-id-verification-content"]}>
        <h1 id="bas-id-verification-heading" className={styles["bas-id-verification-title"]} data-anim="bas-id-verification-title">
          ID verification solution
        </h1>
        <p className={styles["bas-id-verification-subtitle"]} data-anim="bas-id-verification-subtitle">
          Adaptable to Various Authentication Environments
        </p>
      </div>
    </section>
  );
};

export default PcLogonSolution;