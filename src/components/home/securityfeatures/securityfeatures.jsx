import styles from "./securityfeatures.module.css";
import Image from 'next/image';
const Securityfeatures=function(){
  return(
    <>
    <div className={styles["security-feature-wrapper"]}>
        <div className={styles["security-feature-top"]}>
          <div className={styles["security-feature-top-tcontent"]}>
            <p>Biometric Security Built for the Real World</p>
          </div>
          <div className={styles["security-feature-top-mcontent"]}>
            <p>ETUNNEL replaces weak credentials with secure biometric authentication powered by AI. Our systems verify identity using unique human features<br/> that cannot be copied or transferred.</p>
            <div className={styles["security-feature-wrapper-toggle"]}>
              <p>Learn More About Us</p>
            </div>
          </div>
        </div>
        <div className={styles["security-feature-cart-wrapper"]}>
          <div className={styles["security-feature-cart"]}>
            <div className={styles["security-feature-cart-top"]}>
              <p>Secure Identity Verification</p>
              <div>
                <span>ETUNNEL authenticates users using Biometric</span>
                <span>data such as fingerprint, finger vein, and facial</span> 
                <span>recognition. Each identity is verified against</span> 
                <span>encrypted biometric templates, ensuring that</span>
                <span>access is granted only to the rightful individua</span>
              </div>
            </div>
            <div className={styles["security-feature-cart-bottom"]}>
              <Image 
                  src="/images/security/unnamed.png"    
                  alt="Hero Image" 
                  fill={true}
                  priority
                  className={styles["img"]}                  
              />
            </div>
          </div>
          <div className={styles["security-feature-cart"]}>
            <div className={styles["security-feature-cart-top"]}>
              <p>Fast and Frictionless Access</p>
              <div>
                <span>Using the P2N2 AI Engine, biometric data is</span>
                <span>processed quickly and accurately. This allows</span> 
                <span>users to authenticate in seconds without</span> 
                <span>passwords, PINs, or complex procedures while</span>
                <span>maintaining high security.</span>
              </div>
            </div>
            <div className={styles["security-feature-cart-bottom"]}>
              <Image 
                  src="/images/security/tunnel.jpg"    
                  alt="Hero Image" 
                  fill={true}
                  priority
                  className={styles["img"]}                  
              />
            </div>
          </div>
          <div className={styles["security-feature-cart"]}>
            <div className={styles["security-feature-cart-top"]}>
              <p>Protection Against Fraud and <br/>Spoofing</p>
              <div>
                <span>ETUNNEL’s biometric systems are designed to</span>
                <span>prevent impersonation and fraud.</span> 
                <span>Technologies such as finger vein recognition</span> 
                <span>require a live human presence, making spoofing,</span>
                <span>duplication, or replay attacks extremely difficult.</span>
              </div>
            </div>
            <div className={styles["security-feature-cart-bottom"]}>
              <Image 
                  src="/images/security/fingerprint.png"    
                  alt="Hero Image" 
                  fill={true}
                  priority
                  className={styles["img"]}                  
              />
            </div>
          </div>
          <div className={styles["security-feature-cart"]}>
            <div className={styles["security-feature-cart-top"]}>
              <p>Seamless Physical and<br />Digital Security</p>
              <div>
                <span>ETUNNEL solutions work across both physica</span>
                <span>access points and digital systems. The same</span> 
                <span>biometric identity can be used for facility access</span> 
                <span>system login, secure transactions, and identity</span>
                <span>verification creating a unified and consistent</span>
                <span>security experience.</span>
              </div>
            </div>
            <div className={styles["security-feature-cart-bottom"]}>
              <Image 
                  src="/images/security/globe.png"    
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
  )
}
export default Securityfeatures;