import Image from "next/image";
import Link from "next/link";
import styles from "./biometric-solutions.module.css";

const Biometricsolutions = () => {
  return (
    <div className={styles["biometric-solutions-wrapper"]}>
      <div className={styles["biometric-solutions-img"]}>
        <Image
          src="/images/solutions/solutions/biometric-authentication-solutions/biometric-authentication-solutions.jpg"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["biometric-solutions-img-overlay"]}>
          <div className={styles["biometric-solutions-img-overlay-text"]}>
            <div className={styles["biometric-solutions-img-overlay-text-top"]}>
              <div className={styles["biometric-solutions-img-overlay-text-top-1"]}>
                <h3>Solution</h3>
                <h2>Biometric Authentication Solution</h2>
              </div>

              <div className={styles["biometric-solutions-img-overlay-text-top-2"]}>
                <p>We provide strong <span>biometric authentication-based security</span> through the <span>Smart ID project, PC logon, ID verification solution</span>, and <span>GKNOT Wallet</span>. Build a trusted security system with a more secure authentication environment and easy access control.</p>
              </div>
            </div>

            <Link 
              href="/solutions/biometric-authentication-solutions" 
              className={styles["biometric-solutions-img-overlay-text-bottom"]}
            >
              <span>See More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biometricsolutions;