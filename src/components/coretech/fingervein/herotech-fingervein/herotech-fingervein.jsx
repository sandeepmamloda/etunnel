import Image from "next/image";
import styles from "./herotech-fingervein.module.css";

const Herotech = function () {
    return (
        <>
            <div className={styles["herotech-fingervein-wrapper"]}>
                <div className={styles["herotech-fingervein-main"]}>

                    <div className={styles["herotech-fingervein-left"]}>

                        <div className={styles["herotech-fingervein-left-top"]}>

                            <div className={styles["core-tech-button"]}>
                                <span></span>
                                <span>CORE TECHNOLOGY</span>
                            </div>

                            <div className={styles["biometric-text"]}>
                                <span>Biometric Authentication Integration</span>
                                <span>Module</span>
                            </div>

                        </div>

                        <div className={styles["herotech-fingervein-left-bottom"]}>

                            <div className={styles["finger-vein"]}>
                                <span>Finger Vein</span><span>Technology</span>
                            </div>

                            <div className={styles["simple-text"]}>
                                <span>
                                    Accurate and counterfeit-proof authentication is achieved with Finger Vein Recognition <br />the most secure biometric modality available today.
                                </span>
                            </div>

                            <div className={styles["links"]}>
                                <div className={styles["contact-us"]}>
                                    <span>Contact Us</span>

                                    <svg className={styles["arrow"]} viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M5 12H19M19 12L13 6M19 12L13 18"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div className={styles["learn-more"]}>
                                    <span>Learn More</span>

                                    <svg className={styles["arrow-dark"]} viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M9 6L15 12L9 18"
                                            stroke="black"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles["herotech-fingervein-right"]}>
                        <div className={styles["herotech-fingervein-right-inner"]}>
                            <div className={styles["herotech-fingervein-right-outer"]}></div>
                        </div>

                        <div className={styles["herotech-fingervein-right-img"]}>
                            <div className={styles["ai-powered"]}>
                                <span>AI-Powered</span>
                            </div>

                            <Image
                                src="/images/coretech/fingervein/hero-tech/hero-tech.png"
                                fill={true}
                                className={styles["img"]}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Herotech;