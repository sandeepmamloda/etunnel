import styles from "./nextgeneration.module.css";

const Nextgeneration = function () {
  return (
    <>
      <section className={styles["nextgeneration-wrapper"]}>
        <div className={styles["nextgeneration-main"]}>

          <div className={styles["nextgeneration-top"]}>
            <h2 data-anim="ng-h2">
              CQFramework is a framework that enables integration between a web browser
              and native libraries or executable programs on a local PC system without using ActiveX.
            </h2>
          </div>

          <div className={styles["nextgeneration-bottom"]}>
            <p data-anim="ng-p">
              Basic security features such as encryption and digital signatures are supported through
              a built-in security library within CQFramework.
              Additionally, it allows seamless integration with external devices (e.g., USB drives, security tokens) when needed.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Nextgeneration;