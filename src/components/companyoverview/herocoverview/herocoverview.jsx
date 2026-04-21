import Image from 'next/image';
import Link from 'next/link';
import styles from "./herocoverview.module.css";

const Herocoverview = function () {
    return (
        <>
            <section className={styles["herocoverview-section"]}>
                <div className={styles["herocoverview-section-wrapper"]}>
                    <div className={styles["herocoverview-section-img"]}>
                        <Image 
                            src="/images/companyoverview/herocoverview/herocoverview.jpg"    
                            alt="Company Overview - Biometric Authentication Solutions" 
                            fill={true}
                            priority
                            className={styles["img"]}                  
                        />
                        <div className={styles["herocoverview-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["herocoverview-section-text-wrapper"]}>
                        <h1>Building a Safer Biometric Authentication Environment 
                            Through Continuous R&D and Innovation
                        </h1>
                        <Link href="/" className={styles["download-brocher"]}>
                            <span>Download Company Brochure</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Herocoverview;