import styles from "./info.module.css";
import Image from "next/image";

const Info = function () {
    return (
        <div className={styles["p2n2info-wrapper"]}>
            <div className={styles["p2n2info-main"]}>
                <div className={styles["p2n2info-main-left"]} data-anim="p2n2info-text">
                    <div className={styles["p2n2info-main-left-text-wrapper"]}>
                        <div className={styles["top-content"]}>
                            <Image
                                src="/images/coretech/p2n2/p2n2info/comma.png"
                                fill={true}
                                alt="P2N2 AI Biometric Engine module"
                                priority
                                className={styles["img"]}
                            />
                        </div>
                        <div className={styles["medium-content"]}>
                            <h2 data-anim="p2n2info-h2">
                                One framework, built in layers. Together, unshakable.
                            </h2>
                        </div>
                        <div className={styles["bottom-content"]}>
                            <p data-anim="p2n2info-p">CQFramework — Secure architecture, reimagined.</p>
                        </div>
                    </div>
                </div>
                <div className={styles["p2n2info-main-right"]} data-anim="p2n2info-img">
                    <Image
                        src="/images/solutions/pkl-cqkms/info.png"
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

export default Info;