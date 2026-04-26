import Image from "next/image";
import Link from "next/link";
import styles from "./safelcert.module.css";

const Safelcert = () => {
  return (
    <div className={styles["safelcert-wrapper"]}>
      <div className={styles["safelcert-img"]}>
        <Image
          src="/images/solutions/pklsolutions/safelsert/safelsert.png"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["safelcert-img-overlay"]}>
          <div className={styles["safelcert-img-overlay-text"]}>
            <div className={styles["safelcert-img-overlay-text-top"]}>
              <div className={styles["safelcert-img-overlay-text-top-1"]}>
                <h3>PKI Solution</h3>
                <h2>SafeICert 
(Certificate Management Solution for Business)</h2>
              </div>

              <div className={styles["safelcert-img-overlay-text-top-2"]}>
                <p>A security solution for electronic signature and certificate management, it ensures data integrity and prevents tampering with powerful authentication features. By creating a secure digital environment, it provides a convenient yet thorough security system</p>
              </div>
            </div>

            <Link 
              href="/" 
              className={styles["safelcert-img-overlay-text-bottom"]}
            >
              <span>See More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safelcert;