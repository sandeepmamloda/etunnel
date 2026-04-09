import styles from "./footer.module.css";
import Image from "next/image";

const Footer = function () {
  return (
    <div className={styles["footer-wrapper"]}>
      
      {/* TOP */}
      <div className={styles["footer-top"]}>
        <div className={styles["footer-top-links"]}>
          <span>About Us</span>
          <span>↗</span>
        </div>
        <div className={styles["footer-top-links"]}>
          <span>Core Technology</span>
          <span>↗</span>
        </div>
        <div className={styles["footer-top-links"]}>
          <span>Biometric Products</span>
          <span>↗</span>
        </div>
        <div className={styles["footer-top-links"]}>
          <span>Our Solutions</span>
          <span>↗</span>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles["footer-bottom"]}>

        <div className={styles["footer-content"]}>

          {/* LEFT */}
          <div className={styles["footer-left"]}>

            <div className={styles["footer-left-item"]}>
              <span className={styles["footer-left-label"]}>CEO</span>
              <span className={styles["footer-left-value"]}>Youngkuk Kim, Sangjoon Lee</span>
            </div>

            <div className={styles["footer-left-item"]}>
              <span className={styles["footer-left-label"]}>Head Office</span>
              <span className={styles["footer-left-value"]}>#1011-1015, Building C, H Business Park, 26 Beopwon-ro 9-gil,<br/> Songpa-gu, Seoul 05836, South Korea</span>
            </div>

            <div className={styles["footer-left-item"]}>
              <span className={styles["footer-left-label"]}>Business Registration Number</span>
              <span className={styles["footer-left-value"]}>270-87-02480</span>
            </div>

            <div className={styles["footer-left-item"]}>
              <span className={styles["footer-left-label"]}>E-commerce Registration</span>
              <span className={styles["footer-left-value"]}>2023-SeoulSongpa-1127</span>
            </div>

          </div>

          {/* CENTER (LOGO) */}
          <div className={styles["footer-center"]}>
            <Image
              src="/images/footer/footer-logo.png"
              alt="Footer Logo"
              width={300}
              height={50}
              priority
              className={styles["footer-logo"]}
            />
          </div>

          {/* RIGHT */}
          <div className={styles["footer-right"]}>

            <div className={styles["footer-right-item"]}>
              <span className={styles["footer-right-label"]}>Telephone</span>
              <span className={styles["footer-right-value"]}>+82 1899 1959</span>
            </div>

            <div className={styles["footer-right-item"]}>
              <span className={styles["footer-right-label"]}>Customer Support</span>
              <span className={styles["footer-right-value"]}>+82 1668 1873</span>
            </div>

            <div className={styles["footer-right-item"]}>
              <span className={styles["footer-right-label"]}>Fax</span>
              <span className={styles["footer-right-value"]}>+82 2 6281 8777</span>
            </div>

            <div className={styles["footer-right-item"]}>
              <span className={styles["footer-right-label"]}>Sales Inquiries</span>
              <span className={styles["footer-right-value"]}>sales@etunnel.net</span>
            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className={styles["footer-bar"]}>
          <span>Copyright © ETUNNEL All rights reserved.</span>
          <div>
            <span>Privacy Policy</span>
            <span>Customer Inquiry</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;