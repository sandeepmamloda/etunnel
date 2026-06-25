import styles from "./working-of-smartid.module.css";
import Image from "next/image";

const WorkingOfSmartid = function () {
  return (
    <>
      <section className={styles["working-of-smartid-wrapper"]}>

        <div className={styles["working-of-smartid-main"]}>
          <div className={styles["working-of-smartid-top"]}>

            <div className={styles["working-of-smartid-top-1"]}>
              <h2 data-anim="auth-h2">How Smart ID Works</h2>
            </div>

            <div className={styles["working-of-smartid-top-2"]}>
              <p data-anim="auth-p1">
                A three-step process where fingerprint verification happens entirely within the card — zero external data transmission.
              </p>
            </div>

          </div>

          <div className={styles["working-of-smartid-bottom"]}>

            <div className={styles["working-of-smartid-bottom-img"]} data-anim="auth-img">
              <Image
                src="/images/solutions/bas-smart-id-project/workofsmartid.png"
                alt="Authentication Diagram"
                fill
                className={styles["img"]}
              />
            </div>

          </div>
        </div>

      </section>
    </>
  );
};

export default WorkingOfSmartid;