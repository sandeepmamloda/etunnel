import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = function () {
  return (
    <div className={styles["footer-wrapper"]}>
      {/* TOP */}
      <div className={styles["footer-top"]}>
        <Link href="/about" className={styles["footer-top-links"]}>
          <span>About Us</span>
          <span>↗</span>
        </Link>
        <Link href="/coretech/p2n2" className={styles["footer-top-links"]}>
          <span>Core Technology</span>
          <span>↗</span>
        </Link>
        <Link href="/biometric-products/products" className={styles["footer-top-links"]}>
          <span>Biometric Products</span>
          <span>↗</span>
        </Link>
        <Link href="/solutions/solutions" className={styles["footer-top-links"]}>
          <span>Our Solutions</span>
          <span>↗</span>
        </Link>
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
              <a
                href="https://maps.google.com/?q=#1011-1015,+Building+C,+H+Business+Park,+26+Beopwon-ro+9-gil,+Songpa-gu,+Seoul+05836,+South+Korea"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["footer-left-value"]}
              >
                <>
                  #1011-1015, Building C, H Business Park, 26 Beopwon-ro 9-gil,
                  <br />
                  Songpa-gu, Seoul 05836, South Korea
                </>
              </a>
            </div>

            <div className={styles["footer-left-item"]}>
              <span className={styles["footer-left-label"]}>Business Registration Number</span>
              <a
                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2708702480"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["footer-left-value"]}
              >
                270-87-02480
              </a>
            </div>

            <div className={styles["footer-left-item"]}>
              <span className={styles["footer-left-label"]}>E-commerce Registration</span>
              <span className={styles["footer-left-value"]}>2023-SeoulSongpa-1127</span>
            </div>

          </div>

          {/* CENTER (LOGO) */}
          <div className={styles["footer-center"]}>
            <Link href="/">
              <Image
                src="/images/footer/footer-logo.png"
                alt="Footer Logo"
                width={300}
                height={50}
                priority
                className={styles["footer-logo"]}
              />
            </Link>
          </div>

          {/* RIGHT */}
          <div className={styles["footer-right"]}>

            <div className={styles["footer-right-item"]}>
              <span className={styles["footer-right-label"]}>Telephone</span>
              <a href="tel:18991959" className={styles["footer-right-value"]}>
                +82 1899 1959
              </a>
            </div>

            <div className={styles["footer-right-item"]}>
              <span className={styles["footer-right-label"]}>Customer Support</span>
              <a href="tel:16681873" className={styles["footer-right-value"]}>
                +82 1668 1873
              </a>
            </div>

            <div className={styles["footer-right-item"]}>
              <span className={styles["footer-right-label"]}>Fax</span>
              <a href="tel:+82262818777" className={styles["footer-right-value"]}>
                +82 2 6281 8777
              </a>
            </div>

            <div className={styles["footer-right-item"]}>
              <span className={styles["footer-right-label"]}>Sales Inquiries</span>
              <a href="mailto:sales@etunnel.net" className={styles["footer-right-value"]}>
                sales@etunnel.net
              </a>
            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className={styles["footer-bar"]}>
          <span>Copyright © ETUNNEL All rights reserved.</span>
          <div>
            <Link href="/privacy-policy">
              <span>Privacy Policy</span>
            </Link>
            <Link href="/contact">
              <span>Customer Inquiry</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;