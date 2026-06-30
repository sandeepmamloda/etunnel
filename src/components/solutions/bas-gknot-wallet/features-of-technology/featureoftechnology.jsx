import Image from "next/image";
import styles from "./featureoftechnology.module.css";

const features = [
  {
    id: 1,
    icon: "/images/solutions/bas-gknot-wallet/feature-of-technology/biometric.png",
    title: "The Pinnacle of Biometric Technology, Finger Vein Authentication",
    desc: "It enables counterfeit-proof identity verification using the vein pattern in the finger.",
  },
  {
    id: 2,
    icon: "/images/solutions/bas-gknot-wallet/feature-of-technology/user-specif.png",
    title: "A Trusted Personal Asset Wallet, Anywhere in the World",
    desc: "With just your finger vein, you can securely open your wallet anytime, anywhere.",
  },
  {
    id: 3,
    icon: "/images/solutions/bas-gknot-wallet/feature-of-technology/enhance-security.png",
    title: "Perfectly Compatible with ETUNNEL Hardware Wallet",
    desc: "It allows integrated management with a single app in both mobile and offline environments.",
  },
  {
    id: 4,
    icon: "/images/solutions/bas-gknot-wallet/feature-of-technology/user-specif.png",
    title: "A Security System for the Real User, Free from Hacking, Proxy Use, and Phishing Concerns",
    desc: "Finger vein authentication, accessible only by the real user, blocks external threats at the source.",
  },
  // {
  //   id: 5,
  //   icon: "/images/solutions/bas-smart-id-project/feature-of-technology/privacy-by-design.png",
  //   title: "Easy Migration from Existing RFID Systems",
  //   desc: "Fully compatible with standard RFID infrastructure. Only the card needs replacing — existing card readers remain in use with zero hardware upgrades.",
  // },
  // {
  //   id: 6,
  //   icon: "/images/solutions/bas-smart-id-project/feature-of-technology/trusted.png",
  //   title: "Multi-Organization Interoperability",
  //   desc: "One card grants access across headquarters, branches, and affiliated institutions — enabling seamless yet secure movement across multiple sites.",
  // },
  // {
  //   id: 7,
  //   icon: "/images/solutions/bas-smart-id-project/feature-of-technology/user-specif.png",
  //   title: "Trusted & Deployed by UN ITU",
  //   desc: "Field-proven in high-security, real-world international environments — demonstrating reliability and robust performance at global scale.",
  // },
];

const Featureoftechnology = function () {
  return (
    <>
      <div className={styles["featureoftechnology-wrapper"]}>
        <div className={styles["featuretechnology-main"]}>

          <div className={styles["featuretechnology-header"]}>
            <span className={styles["header-sub"]} data-anim="feat-sub">PC Logon</span>
            <span className={styles["header-title"]} data-anim="feat-title">Features of Technology</span>
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
      </div>
    </>
  );
};

export default Featureoftechnology;