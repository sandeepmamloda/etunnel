import Image from "next/image";
import styles from "./fingerveininfo.module.css";

const Fingerveininfo = function () {
    return (
        <div className={styles["fingervein-wrapper"]}>
            <div className={styles["fingervein-main"]}>
                <div className={styles["fingervein-main-left"]}>
                    <div className={styles["fingervein-main-left-text-wrapper"]}>
                        <div className={styles["top-content"]}>
                            <Image
                                src="/images/coretech/p2n2/p2n2info/comma.png"
                                fill={true}
                                alt="P2N2 AI Biometric Engine module"
                                priority
                                className={styles["img"]}/>
                        </div>
                        <div className={styles["medium-content"]}>
                            <h2>Your veins are your password. Invisible, unique, and impossible to forge.</h2>
                        </div>
                        <div className={styles["bottom-content"]}>
                            <p>ETUNNEL's Finger Vein Technology replaces traditional authentication with the most secure biometric method available — beneath the skin.</p>
                        </div>
                    </div>
                </div>
                <div className={styles["fingervein-main-right"]}>
                    <Image
                        src="/images/coretech/fingervein/fingerveininfo/fingerveininfo.jpg"
                        fill={true}
                        alt="P2N2 AI Biometric Engine module"
                        priority
                        className={styles["img"]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Fingerveininfo;