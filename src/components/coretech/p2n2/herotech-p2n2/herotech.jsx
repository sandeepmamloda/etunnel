import styles from "./herotech.module.css";
import Image from "next/image"
const Herotech = function () {
  return (
    <>
      <div className={styles["herotech-p2n2-wrapper"]}>
        <div className={styles["herotech-p2n2-main"]}>
          
          <div className={styles["herotech-p2n2-left"]}>
             
            <div className={styles["herotech-p2n2-left-top"]}>
                
              <div className={styles["core-tech-button"]}>
                <span></span>
                <span>CORE TECHNOLOGY</span>
              </div>
    
              <div className={styles["biometric-text"]}>
                <span>Biometric Authentication Integration</span>
                <span>Module</span>
              </div>
            
            </div>
    
            <div className={styles["herotech-p2n2-left-bottom"]}>
              
              <div className={styles["ai-engine"]}>
                <span>AI Engine P2N2</span>
              </div>

              <div className={styles["simple-text"]}>
                <span>It is a state-of-the-art solution that can handle all forms of biometric authentication within a single module.</span>
              </div>
              
              <div className={styles["links"]}>
                <div className={styles["contact-us"]}>
                  <span>Contact Us</span>
                
                  <svg
                    className={styles["arrow"]}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
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
                
                  <svg
                  className={styles["arrow-dark"]}
                  viewBox="0 0 24 24"
                  fill="none"
                  >
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
            
          <div className={styles["herotech-p2n2-right"]}>
            <div className={styles["herotech-p2n2-right-inner"]}>
                <div className={styles["herotech-p2n2-right-outer"]}></div>
            </div>
            <div className={styles["herotech-p2n2-right-img"]}>
                <div className={styles["ai-powered"]}>
                    <span>AI-Powered</span>
                </div>
                <Image
                  src="/images/coretech/p2n2/p2n2.png"
                  
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