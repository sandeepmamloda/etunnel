import Image from "next/image";
import Link from "next/link";
import styles from "./smartidproject.module.css";

const Smartidproject = () => {
  return (
    <div className={styles["smartidproject-wrapper"]}>
      <div className={styles["smartidproject-img"]}>
        <Image
          src="/images/solutions/biometric-authentication-solutions/smartidproject/smartidproject.png"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["smartidproject-img-overlay"]}>
          <div className={styles["smartidproject-img-overlay-text"]}>
            <div className={styles["smartidproject-img-overlay-text-top"]}>
              <div className={styles["smartidproject-img-overlay-text-top-1"]}>
                <h3>Solution</h3>
                <h2>Smart ID Project</h2>
              </div>

              <div className={styles["smartidproject-img-overlay-text-top-2"]}>
                <p>It is an innovative authentication solution that combines biometric authentication and smart ID technology. Through fingerprint registration and security features, fast and secure identity verification is possible without a password</p>
              </div>
            </div>

            <Link 
              href="/" 
              className={styles["smartidproject-img-overlay-text-bottom"]}
            >
              <span>See More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smartidproject;