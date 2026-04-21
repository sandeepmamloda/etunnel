import styles from "./authentication.module.css";
import Image from "next/image";
const Authentication = function () {
  return (
    <>
      <div className={styles["authentication-wrapper"]}>
        <div className={styles["authentication-top"]}>
            <h2>Patents for Finger Vein Authentication System</h2>
            <p>U.S., Europe (3057034), Japan (5951871), Republic of Korea (10-1496852)</p>
        </div>
        <div className={styles["authentication-bottom"]}>
            <Image 
                src="/images/companyoverview/authentication/image.png"    
                alt="Hero Image" 
                fill={true}
                priority
                className={styles["img"]}                  
            />
        </div>
      </div>
    </>
  );
};

export default Authentication;