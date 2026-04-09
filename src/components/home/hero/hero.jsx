import Image from 'next/image';   // yeh import karo
import styles from "./hero.module.css";

const Hero = function () {
    return (
        <>
            <section className={styles["hero-section"]}>
                <div className={styles["hero-section-wrapper"]}>
                    <div className={styles["hero-section-img"]}>
                        <Image 
                            src="/images/hero.png"    
                            alt="Hero Image" 
                            fill={true}
                            priority
                            className={styles["img"]}                  
                        />
                    </div>
                    <div className={styles["hero-section-text-wrapper"]}>
                        <p>Secure Identity. Zero Compromise.</p>
                        <p> 
                            <span>ETUNNEL delivers AI-powered biometric authentication systems trusted by global institutions</span>
                            <span>governments, enterprises, and critical infrastructure.</span>
                        </p>
                        <div className={styles["request-a-demo"]}>
                            <span>Request a Demo</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;