import Image from "next/image";
import Link from "next/link";
import styles from "./pkl-solutions.module.css";

const Pklsolutions = () => {
  return (
    <div className={styles["pkl-solutions-wrapper"]}>
      <div className={styles["pkl-solutions-img"]}>
        <Image
          src="/images/solutions/solutions/pkl-solutions/pkl-solutions.jpg"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["pkl-solutions-img-overlay"]}>
          <div className={styles["pkl-solutions-img-overlay-text"]}>
            <div className={styles["pkl-solutions-img-overlay-text-top"]}>
              <div className={styles["pkl-solutions-img-overlay-text-top-1"]}>
                <h3>Solution</h3>
                <h2>PKI Solution</h2>
              </div>

              <div className={styles["pkl-solutions-img-overlay-text-top-2"]}>
                <p>We provide strong <span>public key infrastructure (PKI) security</span> through <span>electronic signature solutions, certificate management systems</span>, and <span>security tokens/cards.</span> Ensure data integrity and reliability to build a secure digital authentication environment.</p>
              </div>
            </div>

            <Link 
              href="/" 
              className={styles["pkl-solutions-img-overlay-text-bottom"]}
            >
              <span>See More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pklsolutions;