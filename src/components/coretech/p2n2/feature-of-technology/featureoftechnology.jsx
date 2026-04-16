import styles from "./featureoftechnology.module.css";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: "/images/coretech/p2n2/newfeatureoftechnology/first.png",
    title: "All in One Solution",
    desc: "The P2N2 AI Engine processes all types of biometric authentication within a single module.",
  },
  {
    id: 2,
    icon: "/images/coretech/p2n2/newfeatureoftechnology/second.png",
    title: "Improved Efficiency",
    desc: "It reduces learning time by more than half compared to traditional neural network technologies.",
  },
  {
    id: 3,
    icon: "/images/coretech/p2n2/newfeatureoftechnology/third.png",
    title: "Advanced Technology",
    desc: "Developed in-house by ETUNNEL, it operates on a neural network algorithm optimized for biometric authentication.",
  },
  {
    id: 4,
    icon: "/images/coretech/p2n2/newfeatureoftechnology/fourth.png",
    title: "Enhanced Accuracy",
    desc: "The integrated P2N controller reduces training time and improves recognition accuracy.",
  },
  {
    id: 5,
    icon: "/images/coretech/p2n2/newfeatureoftechnology/fifth.png",
    title: "High Performance",
    desc: "The biometric data processing speed is more than twice as fast compared to existing technologies.",
  },
  {
    id: 6,
    icon: "/images/coretech/p2n2/newfeatureoftechnology/sixth.png",
    title: "Adaptability",
    desc: "It is optimized for various authentication methods including face, fingerprint, finger vein, palm vein, and iris systems.",
  },
  {
    id: 7,
    icon: "/images/coretech/p2n2/newfeatureoftechnology/seventh.png",
    title: "Versatility",
    desc: "It supports face, fingerprint, finger vein, palm vein, and iris recognition without the need for additional modifications.",
  },
];

const Featureoftechnology = function () {
  return (
    <>
      <div className={styles["featureoftechnology-wrapper"]}>
        <div className={styles["featuretechnology-main"]}>

          {/* ── Header ── */}
          <div className={styles["featuretechnology-header"]}>
            <span className={styles["header-sub"]}>AI ENGINE P2N2</span>
            <span className={styles["header-title"]}>Features of Technology</span>
          </div>

          {features.map((feature, index) => (
            <div
              key={feature.id}
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