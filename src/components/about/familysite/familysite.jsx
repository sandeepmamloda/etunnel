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
                <p>FAMILY SITE</p>
                <p>G-KNOT</p>
              </div>

              <div className={styles["familysite-img-overlay-text-top-2"]}>
                <p>ETUNNEL’s partner G-Knot enhances physical access, blockchain wallet, data, and<br/>password security through exclusive technology. At the forefront of technological<br/>access protection, we are creating  a safe and convenient digital environment.</p>
              </div>
            </div>

            {/* Sirf yahan Link add kiya hai - baaki sab same */}
            <Link 
              href="/" 
              className={styles["familysite-img-overlay-text-bottom"]}
            >
              <p>Learn More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Familysite;