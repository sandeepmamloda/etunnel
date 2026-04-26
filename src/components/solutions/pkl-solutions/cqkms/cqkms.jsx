import Image from "next/image";
import Link from "next/link";
import styles from "./cqkms.module.css";

const Cqkms = () => {
  return (
    <div className={styles["cqkms-wrapper"]}>
      <div className={styles["cqkms-img"]}>
        <Image
          src="/images/solutions/pklsolutions/cqkms/cqkms.png"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["cqkms-img-overlay"]}>
          <div className={styles["cqkms-img-overlay-text"]}>
            <div className={styles["cqkms-img-overlay-text-top"]}>
              <div className={styles["cqkms-img-overlay-text-top-1"]}>
                <h3>PKI Solution</h3>
                <h2>CQKMS 
                  (Key Management System, KMS)
                </h2>
              </div>

              <div className={styles["cqkms-img-overlay-text-top-2"]}>
                <p>It is an advanced Key Management System (KMS) that supports secure key generation, distribution, storage, and disposal. By enhancing the integrity and security of encryption keys, it safely protects the data of businesses and institutions.</p>
              </div>
            </div>

            <Link 
              href="/" 
              className={styles["cqkms-img-overlay-text-bottom"]}
            >
              <span>See More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cqkms;