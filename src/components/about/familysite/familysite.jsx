import Image from "next/image";
import Link from "next/link";        // ← Sirf yeh line add ki hai
import styles from "./familysite.module.css";

const Familysite = () => {
  return (
    <div className={styles["familysite-wrapper"]}>
      <div className={styles["familysite-img"]}>
        <Image
          src="/images/about/familysite/familysite.png"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["familysite-img-overlay"]}>
          <div className={styles["familysite-img-overlay-text"]}>
            <div className={styles["familysite-img-overlay-text-top"]}>
              <div className={styles["familysite-img-overlay-text-top-1"]}>
                <h3>FAMILY SITE</h3>
                <h2>G-KNOT</h2>
              </div>

              <div className={styles["familysite-img-overlay-text-top-2"]}>
                <p>ETUNNEL’s partner G-Knot enhances physical access, blockchain wallet, data, and password security through exclusive technology. At the forefront of technological access protection, we are creating  a safe and convenient digital environment.</p>
              </div>
            </div>

            {/* Sirf yahan Link add kiya hai - baaki sab same */}
            <Link 
              href="/" 
              className={styles["familysite-img-overlay-text-bottom"]}
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Familysite;