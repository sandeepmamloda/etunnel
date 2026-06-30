import Image from "next/image";
import styles from "./featureoftechnology.module.css";

const features = [
  {
    id: 1,
    icon: "/images/solutions/bas-id-verification-solution/feature-of-technology/biometric.png",
    title: "Dual Biometric Comparison",
    desc: "Verify the identity by comparing the biometric information registered on the ID card with the real user’s biometric data",
  },
  {
    id: 2,
    icon: "/images/solutions/bas-id-verification-solution/feature-of-technology/privacy-by-design.png",
    title: "ID Card Authenticity Verification",
    desc: "Tampering detection and built-in electronic authenticity verification feature",
  },
  {
    id: 3,
    icon: "/images/solutions/bas-id-verification-solution/feature-of-technology/enhance-security.png",
    title: "Support for Various Biometric Methods",
    desc: "Various authentication methods, such as fingerprint and facial recognition, can be applied",
  },
  {
    id: 4,
    icon: "/images/solutions/bas-id-verification-solution/feature-of-technology/privacy-by-design.png",
    title: "Implementation of Contactless Method",
    desc: "Identity verification can be done contactlessly without the need for a responsible staff member",
  },
];

const Featureoftechnology = function () {
  return (
    <>
      <section className={styles["featureoftechnology-wrapper"]}>
        <div className={styles["featuretechnology-main"]}>

          <div className={styles["featuretechnology-header"]}>
            <span className={styles["header-sub"]} data-anim="feat-sub">Identity Verification Solution</span>
            <span className={styles["header-title"]} data-anim="feat-title">Benefits of Technology</span>
          </div>

          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-anim="feat-row"
              className={`${styles["featuretechnology"]} ${
                index === features.length - 1 ? styles["featuretechnology-last"] : ""
              }`}
            >
              <div className={styles["featureoftechnology-left"]}>
                <div className={styles["icon-wrapper"]}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className={styles["img"]}
                  />
                </div>
                <span className={styles["feature-title"]}>{feature.title}</span>
              </div>

              <div className={styles["featuretechnology-right"]}>
                <span className={styles["feature-desc"]}>{feature.desc}</span>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
};

export default Featureoftechnology;