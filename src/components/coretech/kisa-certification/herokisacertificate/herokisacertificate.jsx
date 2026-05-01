import Image from "next/image";
import styles from "./herokisacertificate.module.css";
const Herokisacertificate = function () {
    return (
        <>
            <section className={styles["herokisacertificate-wrapper"]}>
                <div className={styles["herokisacertificate-main"]}>
                    <div className={styles["herokisacertificate-top"]}>
                        <h1><span>KISA</span> Biometric Certification</h1>
                    </div>
                    <div className={styles["herokisacertificate-middle"]}>
                        <p>Biometric technology proven through reliable authentication. ETUNNEL's finger vein and facial authentication solution verified with <span>KISA (Korea Internet & Security Agency)</span> certification.</p>
                    </div>
                    <div className={styles["herokisacertificate-bottom"]}>
                        <div className={styles["herokisacertificate-bottom-wrapper"]}>
                            <span>Contact Us 
                                <Image
                                    src="/images/coretech/kisa-certification/herokisacertificate/herokisacertificate.png"
                                    fill={true}
                                    alt="P2N2 AI Biometric Engine module"
                                    priority
                                    className={styles["img"]}
                                /></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Herokisacertificate;