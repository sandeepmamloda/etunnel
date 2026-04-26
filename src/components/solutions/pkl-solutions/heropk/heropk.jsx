import Image from "next/image";
import Link from "next/link";
import styles from "./heropk.module.css";

const Heropk = function () {
    return (
        <>
            <section className={styles["heropk-section"]}>
                <div className={styles["heropk-section-wrapper"]}>
                    <div className={styles["heropk-section-img"]}>
                        <Image
                            src="/images/solutions/pklsolutions/heropk/heropk.jpg"
                            alt="Hero Image"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["heropk-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["heropk-section-text-wrapper"]}>
                        <h1>The Standard of Trust for the Digital Age, PKI Security Solution</h1>
                        <p>
                            Our PKI-based security technology creates a reliable digital authentication environment.
                        </p>
                        <Link href="/" className={styles["download-brocher"]}>
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Heropk;