import Image from "next/image";
import Link from "next/link"; // ← Sirf yeh line add ki hai
import styles from "./companyhistory.module.css";

const Companyhistory = () => {
  return (
    <section className={styles["companyhistory-wrapper"]}>
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
                <h3>Company History</h3>
                <h2>The Journey of ETUNNEL</h2>
              </div>

              <div className={styles["companyhistory-img-overlay-text-top-2"]}>
                <p>For a world that is enjoyable and safe for everyone, we share the journey that ETUNNEL has embarked on.</p>
              </div>
            </div>

            {/* Sirf yahan Link add kiya hai - baaki sab same */}
            <Link 
              href="/company/history" 
              className={styles["companyhistory-img-overlay-text-bottom"]}
            >
              <span>Our Journey</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companyhistory;