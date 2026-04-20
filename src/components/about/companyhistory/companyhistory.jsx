import Image from "next/image";
import Link from "next/link";     // ← Sirf yeh line add ki hai
import styles from "./companyhistory.module.css";

const Companyhistory = () => {
  return (
    <div className={styles["companyhistory-wrapper"]}>
      <div className={styles["companyhistory-img"]}>
        <Image
          src="/images/about/companyhistory/companyhistory.jpg"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["companyhistory-img-overlay"]}>
          <div className={styles["companyhistory-img-overlay-text"]}>
            <div className={styles["companyhistory-img-overlay-text-top"]}>
              <div className={styles["companyhistory-img-overlay-text-top-1"]}>
                <p>Company History</p>
                <p>The Journey of ETUNNEL</p>
              </div>

              <div className={styles["companyhistory-img-overlay-text-top-2"]}>
                <p>For a world that is enjoyable and safe for everyone, we share the journey that ETUNNEL has embarked on.</p>
              </div>
            </div>

            {/* Sirf yahan Link add kiya hai - baaki sab same */}
            <Link 
              href="/company-history" 
              className={styles["companyhistory-img-overlay-text-bottom"]}
            >
              <p>Our Journey</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companyhistory;