import Image from "next/image";
import Link from "next/link";
import styles from "./gknotwallet.module.css";

const Gknotwallet = () => {
  return (
    <div className={styles["gknotwallet-wrapper"]}>
      <div className={styles["gknotwallet-img"]}>
        <Image
          src="/images/solutions/solutions/biometric-authentication-solutions/biometric-authentication-solutions.jpg"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["gknotwallet-img-overlay"]}>
          <div className={styles["gknotwallet-img-overlay-text"]}>
            <div className={styles["gknotwallet-img-overlay-text-top"]}>
              <div className={styles["gknotwallet-img-overlay-text-top-1"]}>
                <h3>Solution</h3>
                <h2>GKNOT Wallet</h2>
              </div>

              <div className={styles["gknotwallet-img-overlay-text-top-2"]}>
                <p>It is a security-focused digital wallet solution based on finger vein authentication. It securely protects personal information and digital assets while providing convenient authentication and access control features.</p>
              </div>
            </div>

            <Link 
              href="/" 
              className={styles["gknotwallet-img-overlay-text-bottom"]}
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gknotwallet;