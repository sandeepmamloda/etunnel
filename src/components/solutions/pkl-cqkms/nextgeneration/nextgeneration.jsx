import styles from "./nextgeneration.module.css";

const Nextgeneration = function () {
  return (
    <>
      <section className={styles["nextgeneration-wrapper"]}>
        <div className={styles["nextgeneration-main"]}>

          <div className={styles["nextgeneration-top"]}>
            <h2 data-anim="ng-h2">
              CQKMS is an essential component of the Public Key Infrastructure (PKI). In electronic bidding systems, an encryption private key and certificate are generated for each bidding notice, and all bidding documents are encrypted and stored using the corresponding certificate.
            </h2>
          </div>

          <div className={styles["nextgeneration-bottom"]}>
            <p data-anim="ng-p">
              To ensure that these documents cannot be accessed before the bid
              opening, the encrypted bidding documents are decrypted using the encryption private key, which is securely stored in CQKMS. At the time of bid opening, the private key is              retrieved to decrypt the documents. Thus, CQKMS is a core software component responsible for the secure storage and retrieval of encryption private keys required for building              PKI-based electronic bidding systems.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Nextgeneration;