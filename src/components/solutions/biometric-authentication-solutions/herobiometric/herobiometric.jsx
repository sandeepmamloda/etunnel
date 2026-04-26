import Image from "next/image";
import Link from "next/link";
import styles from "./herobiometric.module.css";

const Herobiometric = function () {
    return (
        <>
            <section className={styles["herobiometric-section"]}>
                <div className={styles["herobiometric-section-wrapper"]}>
                    <div className={styles["herobiometric-section-img"]}>
                        <Image
                            src="/images/solutions/biometric-authentication-solutions/herobiometric/herobiometric.jpg"
                            alt="Hero Image"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["herobiometric-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["herobiometric-section-text-wrapper"]}>
                        <h1>Experience Perfect Authentication Security with ETUNNEL</h1>
                        <p>
                            From biometric authentication to PKI solutions, we provide a secure digital environment with powerful security technology.
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

export default Herobiometric;