import styles from "./coretechnology.module.css";
import Image from "next/image";
import Link from "next/link";

const Coretechnology = function () {
  return (
    <>
      <div className={styles["coretechnology-wrapper"]}>
        <div className={styles["coretechnology-top"]}>
            <h1>Core Technology of ETUNNEL</h1>
            <p>Building a trustworthy future with enhanced biometric authentication and unique security technology.</p>
        </div>
        <div className={styles["coretechnology-bottom"]}>
            <div className={styles["coretechnology-left"]}>
              <div className={styles["coretechnology-left-text-wrapper"]}>
                <div className={styles["coretechnology-left-text-wrapper-top"]}>
                  <h2>P2N2</h2>
                  <div>
                    <p>At the heart of ETUNNEL is the P2N2 Biometric Authentication Integration Module. It is a
                        single AI engine designed to handle multiple biometric methods, without complexity.
                    </p>
                  </div>
                </div>
                <Link href="/" className={styles["coretechnology-left-text-wrapper-bottom"]}>
                    <span>How P2N2 Works</span>
                </Link>
              </div>
              <div className={styles["img"]}>
                 <Image 
                    src="/images/companyoverview/coretechnology/coretechnology.png"    
                    alt="Hero Image" 
                    fill={true}
                    priority
                    className={styles["img"]}                  
                />
              </div>
            </div>
            <div className={styles["coretechnology-right"]}>
                <div className={styles["coretechnology-right-text-wrapper"]}>
                <div className={styles["coretechnology-right-text-wrapper-top"]}>
                  <h2>Finger Vein Authentication</h2>
                  <div>
                    <p>The finger vein authentication technology developed by ETUNNEL
                        is a new technology with excellent security, versatility,and immunity to hacking.
                    </p>
                  </div>
                </div>
                <Link href="/" className={styles["coretechnology-right-text-wrapper-bottom"]}>
                    <span>How Finger Vein Authentication Works</span>
                </Link>
              </div>
              <div className={styles["img"]}>
                 <Image 
                    src="/images/companyoverview/coretechnology/coretechnology-right.png"    
                    alt="Hero Image" 
                    fill={true}
                    priority
                    className={styles["img"]}                  
                />
              </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Coretechnology;