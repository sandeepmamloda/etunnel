import styles from "./heroproducts.module.css";
import Image from "next/image";
import Link from "next/link"

const Heroproducts = function () {
    return (
        <>
            <section className={styles["heroproducts-section"]}>
                <div className={styles["heroproducts-section-wrapper"]}>
                    <div className={styles["heroproducts-section-img"]}>
                        <Image
                            src="/images/biometric-products/products/heroproducts/heroproducts.jpg"
                            alt="Company Overview - Biometric Authentication Solutions"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["heroproducts-section-img-overlay"]}></div>
                    </div>

                    <div className={styles["heroproducts-section-text-wrapper"]}>
                        <h1>Biometric Security Chosen by the World</h1>

                        <p>
                            Protect the future with ETUNNEL's global biometric authentication solutions.
                            From finger vein terminals to AI-powered identity verification.
                        </p>

                        <div className={styles["data-container"]}>
                           <div className={styles["content-box"]}>
                            <h2>8</h2>
                            <p>Products</p>
                           </div>
                           <div className={styles["content-box"]}>
                            <h2>3</h2>
                            <p>Biometric Types</p>
                           </div>
                           <div className={styles["content-box"]}>
                            <h2>KISA</h2>
                            <p>certified</p>
                           </div>
                        </div>

                        <Link href="/" className={styles["download-brocher"]}>
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Heroproducts;