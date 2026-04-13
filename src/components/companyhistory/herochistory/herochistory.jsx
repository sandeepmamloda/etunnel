import styles from "./herochistory.module.css";
import Image from "next/image";

const Herochistory = function () {
    return (
        <>
            <section className={styles["herochistory-section"]}>
                <div className={styles["herochistory-section-wrapper"]}>
                    <div className={styles["herochistory-section-img"]}>
                        <Image
                            src="/images/about/heroabout/hero-about.jpg"
                            alt="Hero Image"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["herochistory-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["herochistory-section-text-wrapper"]}>
                        <p>Company History</p>
                        <p>
                            <span>Introducing ETUNNEL's journey towards a safer life with enhanced biometric recognition technology.</span>
                        </p>
                        <div className={styles["request-a-demo"]}>
                            <span>Download Company Brochure</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Herochistory;