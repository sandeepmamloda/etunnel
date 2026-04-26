import Image from "next/image";
import Link from "next/link";
import styles from "./idverificationsolutions.module.css";

const Idverificationsolutions = () => {
  return (
    <div className={styles["idverificationsolutions-wrapper"]}>
      <div className={styles["idverificationsolutions-img"]}>
        <Image
          src="/images/solutions/biometric-authentication-solutions/idverificationsolutions/idverificationsolutions.png"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["idverificationsolutions-img-overlay"]}>
          <div className={styles["idverificationsolutions-img-overlay-text"]}>
            <div className={styles["idverificationsolutions-img-overlay-text-top"]}>
              <div className={styles["idverificationsolutions-img-overlay-text-top-1"]}>
                <h3>Solution</h3>
                <h2>ID Verification Solution</h2>
              </div>

              <div className={styles["idverificationsolutions-img-overlay-text-top-2"]}>
                <p>It is an identity verification solution that utilizes biometric authentication and AI-based technology. It prevents tampering and forgery through real-time verification, providing a fast and secure identity authentication environment.</p>
              </div>
            </div>

            <Link 
              href="/" 
              className={styles["idverificationsolutions-img-overlay-text-bottom"]}
            >
              <span>See More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idverificationsolutions;