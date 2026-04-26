import Image from "next/image";
import Link from "next/link";
import styles from "./herosolutions.module.css";

const Herosolutions = function () {
    return (
        <>
            <section className={styles["herosolutions-section"]}>
                <div className={styles["herosolutions-section-wrapper"]}>
                    <div className={styles["herosolutions-section-img"]}>
                        <Image
                            src="/images/solutions/solutions/herosolutions/herosolutions.jpg"
                            alt="Hero Image"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["herosolutions-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["herosolutions-section-text-wrapper"]}>
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

export default Herosolutions;