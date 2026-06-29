import styles from "./nextgeneration.module.css";

const Nextgeneration = function () {
  return (
    <>
      <section className={styles["nextgeneration-wrapper"]}>
        <div className={styles["nextgeneration-main"]}>

          <div className={styles["nextgeneration-top"]}>
            <h2 data-anim="ng-h2">
              ETUNNEL’s PC Logon solution is a password-free biometric logon system based on finger vein recognition technology.
            </h2>
          </div>

          <div className={styles["nextgeneration-bottom"]}>
            <p data-anim="ng-p">
              Eliminates the inconvenience of complex passwords and security threats, while providing both user convenience and security.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Nextgeneration;