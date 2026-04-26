import Image from "next/image";
import Link from "next/link";
import styles from "./cqframework.module.css";

const Cqframework = () => {
  return (
    <div className={styles["cqframework-wrapper"]}>
      <div className={styles["cqframework-img"]}>
        <Image
          src="/images/solutions/pklsolutions/cqframework/cqframework.png"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["cqframework-img-overlay"]}>
          <div className={styles["cqframework-img-overlay-text"]}>
            <div className={styles["cqframework-img-overlay-text-top"]}>
              <div className={styles["cqframework-img-overlay-text-top-1"]}>
                <h3>PKI Solution</h3>
                <h2>CQFramework(Web-Linked Security Framework)</h2>
              </div>

              <div className={styles["cqframework-img-overlay-text-top-2"]}>
                <p>It is a modular framework for building high-performance security systems. Based on a flexible architecture, it can be applied to various environments and provides strong encryption and authentication features.</p>
              </div>
            </div>

            <Link 
              href="/" 
              className={styles["cqframework-img-overlay-text-bottom"]}
            >
              <span>See More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cqframework;