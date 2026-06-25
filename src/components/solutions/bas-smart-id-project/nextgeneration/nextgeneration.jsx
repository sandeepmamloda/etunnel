import styles from "./nextgeneration.module.css";

const Nextgeneration = function () {
  return (
    <>
      <section className={styles["nextgeneration-wrapper"]}>
        <div className={styles["nextgeneration-main"]}>

          <div className={styles["nextgeneration-top"]}>
            <h2 data-anim="ng-h2">
              The Smart ID Project is an integrated biometric authentication solution based on Fingerprint Smart ID Cards, applicable to various security environments such as access control, PC logon, and electronic payments.
            </h2>
          </div>

          <div className={styles["nextgeneration-bottom"]}>
            <p data-anim="ng-p">
              PIt provides the same authentication system across the organization, achieving both enhanced security levels and cost reduction.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Nextgeneration;