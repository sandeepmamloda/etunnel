import styles from "./nextgeneration.module.css";

const Nextgeneration = function () {
  return (
    <>
      <section className={styles["nextgeneration-wrapper"]}>
        <div className={styles["nextgeneration-main"]}>

          <div className={styles["nextgeneration-top"]}>
            <h2 data-anim="ng-h2">
              The SafeICert Certificate Management Solution for Businesses allows various types of corporate digital certificates to be registered on a central server, where only authorized users can download and use them as needed.
            </h2>
          </div>

          <div className={styles["nextgeneration-bottom"]}>
            <p data-anim="ng-p">
              It provides various access control features such as preventing unauthorized use and blocking use on unauthorized websites.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Nextgeneration;