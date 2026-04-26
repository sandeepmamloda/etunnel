import Image from "next/image";
import Link from "next/link";
import styles from "./pclogin.module.css";

const Pclogin = () => {
  return (
    <div className={styles["pclogin-wrapper"]}>
      <div className={styles["pclogin-img"]}>
        <Image
          src="/images/solutions/biometric-authentication-solutions/pclogin/pclogin.png"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["pclogin-img-overlay"]}>
          <div className={styles["pclogin-img-overlay-text"]}>
            <div className={styles["pclogin-img-overlay-text-top"]}>
              <div className={styles["pclogin-img-overlay-text-top-1"]}>
                <h3>Solution</h3>
                <h2>PC Logon</h2>
              </div>

              <div className={styles["pclogin-img-overlay-text-top-2"]}>
                <p>A secure logon solution using finger vein authentication, providing fast and secure authentication without a password. It strengthens PC security for both business and individuals, effectively preventing unauthorized access.</p>
              </div>
            </div>

            <Link 
              href="/" 
              className={styles["pclogin-img-overlay-text-bottom"]}
            >
              <span>See More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pclogin;