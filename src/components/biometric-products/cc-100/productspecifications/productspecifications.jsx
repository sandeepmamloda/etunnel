import Image from "next/image";
import styles from "./productspecifications.module.css";

const ProductHighlight = function () {
  const cards = [
    {
      image: "/images/productspecifications/cc-100/left.png",
      title: "High Security Storage",
      description:
        "Fingerprint data is securely encrypted and stored directly on the card, ensuring it never leaves your physical possession.",
    },
    {
      image: "/images/productspecifications/cc-100/left.png",
      title: "Fingerprint Registration Terminal",
      description:
        "A dedicated terminal where users insert the fingerprint ID card and register their fingerprint using a contact-based method.",
    },
  ];

  return (
    <section className={styles["ph-wrapper"]}>
      <div className={styles["ph-container"]}>

        <div className={styles["ph-heading"]}>
          <span className={styles["ph-label"]}>KEY FEATURES</span>
          <h2 className={styles["ph-title"]}>Product Specifications</h2>
        </div>

        <div className={styles["ph-cards"]}>
          {cards.map((card, index) => (
            <div key={index} className={styles["ph-card"]}>
              <div className={styles["ph-image-wrapper"]}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className={styles["ph-card-title"]}>{card.title}</h3>
              <p className={styles["ph-card-description"]}>{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductHighlight;