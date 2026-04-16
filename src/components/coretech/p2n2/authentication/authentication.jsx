import styles from "./authentication.module.css";
import Image from "next/image";

const Authentication = function () {
  return (
    <>
      <div className={styles["authentication-wrapper"]}>
        
        <div className={styles["authentication-top"]}>
          
          <div className={styles["authentication-top-1"]}>
            <span>How P2N2 Works</span>
          </div>

          <div className={styles["authentication-top-2"]}>
            <span>
              A three-step AI pipeline that processes all biometric modalities through a
            </span>
            <span>
              single unified engine.
            </span>
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
              <span>
                Existing biometric authentication systems required independent algorithms and processes for each type of biometric authentication, which limited system
              </span>
              <span>
                scalability and processing speed.
              </span>
            </div>

            <span className={styles["authentication-bottom-content-medium"]}></span>

            <div className={styles["authentication-bottom-content-bottom"]}>
              <span>
                However, with the development of P2N2, these structural limitations have been overcome, and a perfectly integrated platform has been created that supports
              </span>
              <span>
                various biometric authentication methods using a single AI engine.
              </span>
            </div>

          </div>

        </div>
      
      </div>
    </>
  );
};

export default Authentication;