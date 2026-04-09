import Image from "next/image";
import styles from "./companyoverview.module.css";

const Companyoverview = () => {
  return (
    <div className={styles["companyoverview-wrapper"]}>
      <div className={styles["companyoverview-img"]}>
        <Image
          src="/images/about/companyoverview/companyoverview.png"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["companyoverview-img-overlay"]}>
          <div className={styles["companyoverview-img-overlay-text"]}>
            <div className={styles["companyoverview-img-overlay-text-top"]}>
              <div className={styles["companyoverview-img-overlay-text-top-1"]}>
                <p>Company Overview</p>
                <p>ETUNNEL</p>
              </div>

              <div className={styles["companyoverview-img-overlay-text-top-2"]}>
                <p>Pioneering the future of biometric security.</p>

                <div
                  className={
                    styles["companyoverview-img-overlay-text-top-2-inner"]
                  }
                >
                  <span>
                    Enhanced Biometric Tunnel, the innovative symbol of ETUNNEL.
                    Maximizing
                  </span>
                  <span>
                    security and convenience with advanced biometric recognition
                    technology.
                  </span>
                </div>
              </div>
            </div>

            <div
              className={styles["companyoverview-img-overlay-text-bottom"]}
            >
              <p>About us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companyoverview;