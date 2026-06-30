import Image from "next/image";
import styles from "./bas-gknot-wallet.module.css";

const PcLogonSolution = function () {
  return (
    <section className={styles["bas-gknot-wallet-wrapper"]} aria-labelledby="bas-gknot-wallet-heading">
      <div className={styles["bas-gknot-wallet-bg"]}>
        <Image
          src="/images/solutions/bas-pc-logon/pc-logon.jpg"
          fill={true}
          alt="Modern office corridor representing PC Logon Solution"
          priority
          className={styles["bas-gknot-wallet-img"]}
        />
        <div className={styles["bas-gknot-wallet-overlay"]} aria-hidden="true"></div>
      </div>

      <div className={styles["bas-gknot-wallet-content"]}>
        <h1 id="bas-gknot-wallet-heading" className={styles["bas-gknot-wallet-title"]} data-anim="bas-gknot-wallet-title">
          GKNOT Wallet
        </h1>
        <p className={styles["bas-gknot-wallet-subtitle"]} data-anim="bas-gknot-wallet-subtitle">
          Adaptable to Various Authentication Environments
        </p>
      </div>
    </section>
  );
};

export default PcLogonSolution;