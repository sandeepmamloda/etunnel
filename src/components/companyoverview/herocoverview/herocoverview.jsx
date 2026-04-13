import Image from 'next/image';
import styles from "./herocoverview.module.css";

const Heroabout = function () {
    return (
        <>
            <section className={styles["heroabout-section"]}>
                <div className={styles["heroabout-section-wrapper"]}>
                    <div className={styles["heroabout-section-img"]}>
                        <Image 
                            src="/images/companyoverview/herocoverview/herocoverview.jpg"    
                            alt="Hero Image" 
                            fill={true}
                            priority
                            className={styles["img"]}                  
                        />
                        <div className={styles["heroabout-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["heroabout-section-text-wrapper"]}>
                        <p>Building a Safer Biometric Authentication Environment</p>
                        <p> 
                            <span>Through Continuous R&D and Innovation</span>
                        </p>
                        <div className={styles["request-a-demo"]}>
                            <span>Download Company Brochure</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Heroabout;