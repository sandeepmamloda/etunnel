import styles from "./herochistory.module.css";
import Image from "next/image";
import Link from "next/link";

const Herochistory = function () {
    return (
        <>
            <section className={styles["herochistory-section"]}>
                <div className={styles["herochistory-section-wrapper"]}>
                    <div className={styles["herochistory-section-img"]}>
                        <Image
                            src="/images/companyhistory/herohistory/herohistory.jpg"
                            alt="Hero Image"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["herochistory-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["herochistory-section-text-wrapper"]}>
                        <h1>Company History</h1>
                        <p>
                            Introducing ETUNNEL's journey towards a safer life with enhanced biometric recognition technology.
                        </p>
                        <Link href="/" className={styles["download-brocher"]}>
                            <span>Download Company Brochure</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Herochistory;