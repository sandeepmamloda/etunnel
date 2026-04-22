import styles from "./kisa-certified.module.css";

const Kisacertified = () => {
  return (
    <div className={styles["kisacertified-wrapper"]}>
      
      <div className={styles["kisacertified-content"]}>
        
        <h2>Get KISA-Certified Security</h2>

        <p>
          Discover how ETUNNEL's KISA-certified biometric solutions can meet your compliance requirements and secure your infrastructure.
        </p>

        <div className={styles["kisacertified-buttons"]}>
          
          {/* Black Button */}
          <div className={styles["btn-dark"]}>
            <span>Request a Demo</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.16602 10H15.8327" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Light Button */}
          <div className={styles["btn-light"]}>
            <span>Download Brochure</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Kisacertified;