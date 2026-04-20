import Image from "next/image";
import Link from "next/link";     // ← Sirf yeh line add ki hai
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
                <h4>Company Overview</h4>
                <h2>ETUNNEL</h2>
              </div>

              <div className={styles["companyoverview-img-overlay-text-top-2"]}>
                <h3>Pioneering the future of biometric security.</h3>

                <div
                  className={
                    styles["companyoverview-img-overlay-text-top-2-inner"]
                  }
                >
                  <p>
                    Enhanced Biometric Tunnel, the innovative symbol of ETUNNEL.
                    Maximizing
                    security and convenience with advanced biometric recognition
                    technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Sirf yahan Link add kiya hai - baaki sab same */}
            <Link 
              href="/about" 
              className={styles["companyoverview-img-overlay-text-bottom"]}
            >
              <p>About us</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companyoverview;