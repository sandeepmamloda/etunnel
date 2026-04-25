"use client";
import Image from "next/image";
import styles from "./securitytechnology.module.css";

const cards = [
  {
    image: "/images/biometric-products/st-100v/securitytechnology/securitytechnology-left.png",
    title: "Most Secure Biometric Authentication",
    description:
      "Finger vein patterns are internal biometric data that cannot be replicated or stolen, providing the highest level of security against fraud and spoofing attacks.",
  },
  {
    image: "/images/biometric-products/st-100v/securitytechnology/securitytechnology-middle.png",
    title: "Unaffected by External Factors",
    description:
      "Unlike fingerprint technology, finger vein recognition is not affected by cuts, dryness, dirt, or other surface contaminants — delivering consistent results every time.",
  },
  {
    image: "/images/biometric-products/st-100v/securitytechnology/securitytechnology-right.png",
    title: "Most Accurate Authentication",
    description:
      "With a True Acceptance Rate of 99.7% and a False Acceptance Rate of less than 0.001%, the ST-100V delivers near-perfect identification accuracy.",
  },
];

const CircleIcon = ({ src }) => (
  <div className={styles["icon-wrapper"]}>
    <div className={styles["icon-ring-outer"]}>
      <div className={styles["icon-ring-inner"]}>
        <div className={styles["icon-circle"]}>
          <Image
            src={src}
            alt="icon"
            fill
            className={styles["icon-img"]}
          />
        </div>
      </div>
    </div>
  </div>
);

const Securitytechnology = function () {
  return (
    <div className={styles["securitytechnology-wrapper"]}>
      <div className={styles["securitytechnology-main"]}>

        <div className={styles["securitytechnology-top"]}>
          <span className={styles["label"]}>CORE TECHNOLOGY</span>
          <h2 className={styles["heading"]}>Core Elements of Security Technology</h2>
          <p className={styles["subheading"]}>
            The trusted technology developed by ETUNNEL sets a new global standard in security.
          </p>
          <div className={styles["divider"]}></div>
        </div>

        <div className={styles["securitytechnology-bottom"]}>
          {cards.map((card, index) => (
            <div className={styles["card"]} key={index}>
              <CircleIcon src={card.image} />
              <h3 className={styles["card-title"]}>{card.title}</h3>
              <p className={styles["card-description"]}>{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Securitytechnology;