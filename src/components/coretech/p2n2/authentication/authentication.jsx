import styles from "./authentication.module.css";
import Image from "next/image";

const Authentication = function () {
  return (
    <>
      <div className={styles["authentication-wrapper"]}>
        
        <div className={styles["authentication-main"]}>
            <div className={styles["authentication-top"]}>
            
            <div className={styles["authentication-top-1"]}>
              <h2>How P2N2 Works</h2>
            </div>
  
            <div className={styles["authentication-top-2"]}>
              <p>
                A three-step AI pipeline that processes all biometric modalities through a
                single unified engine.
              </p>
            </div>
  
          </div>
  
          <div className={styles["authentication-bottom"]}>
            
            <div className={styles["authentication-bottom-img"]}>
              <Image
                src="/images/coretech/p2n2/authentication/authentication.png"
                alt="Authentication Diagram"
                fill
                className={styles["img"]}
              />
            </div>
  
            <div className={styles["authentication-bottom-content"]}>
              
              <div className={styles["authentication-bottom-content-top"]}>
                <p>
                  Existing biometric authentication systems required independent algorithms and processes for each type of biometric authentication, which limited system
                  scalability and processing speed.
                </p>
              </div>
  
              <span className={styles["authentication-bottom-content-medium"]}></span>
  
              <div className={styles["authentication-bottom-content-bottom"]}>
                <p>
                  However, with the development of P2N2, these structural limitations have been overcome, and a perfectly integrated platform has been created that supports
                  various biometric authentication methods using a single AI engine.
                </p>
              </div>
  
            </div>
  
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Authentication;