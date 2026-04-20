import styles from "./secure.module.css";

const Secure = () => {
  return (
    <div className={styles["integrate-wrapper"]}>
      
      <div className={styles["integrate-content"]}>
        
        <h2>Secure your systems with Finger Vein</h2>

        <p>
          Discover how ETUNNEL's patented finger vein technology can eliminate credential fraud and strengthen your security infrastructure.
        </p>

        <div className={styles["integrate-buttons"]}>
          
          {/* Black Button */}
          <div className={styles["btn-dark"]}>
            <span>Request a Demo</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.16602 10H15.8327" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
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

export default Secure;