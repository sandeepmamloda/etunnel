import styles from "./coretechnology.module.css";
import Image from "next/image";
const Coretechnology = function () {
  return (
    <>
      <div className={styles["coretechnology-wrapper"]}>
        <div className={styles["coretechnology-top"]}>
            <span>Core Technology of ETUNNEL</span>
            <span>Building a trustworthy future with enhanced biometric authentication and unique security technology.</span>
        </div>
        <div className={styles["coretechnology-bottom"]}>
            <div className={styles["coretechnology-left"]}>
              <div className={styles["coretechnology-left-text-wrapper"]}>
                <div className={styles["coretechnology-left-text-wrapper-top"]}>
                  <span>P2N2</span>
                  <div>
                    <span>At the heart of ETUNNEL is the P2N2 Biometric Authentication Integration Module. It is a
                    </span> 
                    <span>
                        single AI engine designed to handle multiple biometric methods, without complexity.
                    </span>
                  </div>
                </div>
                <div className={styles["coretechnology-left-text-wrapper-bottom"]}>
                                <span>How P2N2 Works</span>
                </div>
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
                  <span>Finger Vein Authentication</span>
                  <div>
                    <span>The finger vein authentication technology developed by ETUNNEL
                    </span> 
                    <span>
                        is a new technology with excellent security, versatility,and immunity to hacking.
                    </span>
                  </div>
                </div>
                <div className={styles["coretechnology-right-text-wrapper-bottom"]}>
                                <span>How Finger Vein Authentication Works</span>
                </div>
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