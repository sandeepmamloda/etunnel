import Image from "next/image";
import styles from "./biometriccertification.module.css";
const Biometriccertification = function () {
    return (
        <>
            <div className={styles["biometriccertification-wrapper"]}>
                <div className={styles["biometriccertification-main"]}>
                    <div className={styles["biometriccertification-left"]}>
                        <p>The <span>KISA Biometric Certification System</span> is an official certification program that objectively verifies the reliability and security of biometric technology. It comprehensively evaluates various biometric authentication technologies, including fingerprint, facial, and finger vein recognition, based on accuracy, tampering resistance, usability, and other factors, and <span>awards certification to solutions with excellent technology and quality.</span></p>
                        <h3>ETUNNEL's products have obtained KISA certification for finger vein and facial recognition-based biometric technology, officially proving their security and reliability required for application in public institutions and the financial sector.</h3>
                    </div>
                    <div className={styles["biometriccertification-right"]}>
                        <Image
                            src="/images/coretech/kisa-certification/biometric-certification/biometric-certification.png"
                            fill={true}
                            alt="P2N2 AI Biometric Engine module"
                            priority
                            className={styles["img"]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Biometriccertification;