import styles from "./nextgeneration.module.css";

const Nextgeneration = function () {
  return (
    <>
      <section className={styles["nextgeneration-wrapper"]}>
        <div className={styles["nextgeneration-main"]}>

          <div className={styles["nextgeneration-top"]}>
            <h2 data-anim="ng-h2">
              ETUNNEL’s Identity Verification Solution compares the biometric information stored on the user’s ID card(such as fingerprint, face, etc.) with the biometric information measured in real-time, enabling simultaneous verification of both the authenticity of the ID card and the identity of the real user.
            </h2>
          </div>

          <div className={styles["nextgeneration-bottom"]}>
            <p data-anim="ng-p">
              ETUNNEL’s Identity Verification Solution, built on the IVD, is a next-generation security platform that goes beyond simple identity verification to achieve proxy authentication prevention, anti-forgery, and enhanced contactless security.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Nextgeneration;