import styles from "./nextgeneration.module.css";

const Nextgeneration = function () {
  return (
    <>
      <section className={styles["nextgeneration-wrapper"]}>
        <div className={styles["nextgeneration-main"]}>

          <div className={styles["nextgeneration-top"]}>
            <h2 data-anim="ng-h2">
              GKNOT is a finger vein authentication-based cryptocurrency wallet application developed by ETUNNEL Inc.
              It is the world’s first biometric authentication wallet,
              applying finger vein authentication throughout the entire process, from wallet creation to transactions.
            </h2>
          </div>

          <div className={styles["nextgeneration-bottom"]}>
            <p data-anim="ng-p">
              Finger veins are unique to each person and cannot be replicated, offering superior security and convenience compared to traditional password or fingerprint-based wallets.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Nextgeneration;