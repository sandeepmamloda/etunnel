import Image from "next/image";
import styles from "./pc-logon.module.css";

const PcLogonSolution = function () {
  return (
    <section className={styles["pls-wrapper"]} aria-labelledby="pls-heading">
      <div className={styles["pls-bg"]}>
        <Image
          src="/images/solutions/bas-pc-logon/pc-logon.jpg"
          fill={true}
          alt="Modern office corridor representing PC Logon Solution"
          priority
          className={styles["pls-img"]}
        />
        <div className={styles["pls-overlay"]} aria-hidden="true"></div>
      </div>

      <div className={styles["pls-content"]}>
        <h1 id="pls-heading" className={styles["pls-title"]} data-anim="pls-title">
          PC Logon Solution
        </h1>
        <p className={styles["pls-subtitle"]} data-anim="pls-subtitle">
          Adaptable to Various Authentication Environments
        </p>
      </div>
    </section>
  );
};

export default PcLogonSolution;