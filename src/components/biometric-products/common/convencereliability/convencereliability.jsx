"use client";

import { DM_Mono, DM_Sans, Sora } from "next/font/google";
import styles from "./convencereliability.module.css";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"] });

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ number, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardNumberRow}>
        <span className={`${dmMono.className} ${styles.cardNumber}`}>
          {String(number).padStart(2, "0")}
        </span>
        <div className={styles.cardNumberLine} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={`${sora.className} ${styles.cardTitle}`}>{title}</h3>
        <p className={`${dmSans.className} ${styles.cardDescription}`}>
          {description}
        </p>
      </div>
      <div className={styles.cardAccentBar} />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
/**
 * ConvenienceReliability — Features Section
 *
 * @param {string} sectionLabel  - e.g. "FEATURES"
 * @param {string} headingLine1  - main heading
 * @param {string} headingLine2  - subheading (gold color)
 * @param {Array}  cards         - Array of { title, description }
 *
 * Example:
 * <ConvenienceReliability
 *   sectionLabel="FEATURES"
 *   headingLine1="Secure your crypto with biometrics"
 *   headingLine2="Powered by finger vein technology"
 *   cards={[
 *     { title: "Purpose", description: "Uniquely identifies users via finger vein patterns." },
 *     { title: "Reliability", description: "Works in all lighting conditions." },
 *     { title: "Future Scalability", description: "Ready for multi-chain expansion." },
 *   ]}
 * />
 */
export default function ConvenienceReliability({
  sectionLabel = "FEATURES",
  headingLine1 = "",
  headingLine2 = "",
  cards = [
    { title: "Purpose", description: "" },
    { title: "Reliability", description: "" },
    { title: "Future Scalability", description: "" },
  ],
}) {
  return (
    <section className={styles.section}>
      <p className={`${dmMono.className} ${styles.sectionLabel}`}>
        {sectionLabel}
      </p>

      <div className={styles.headingWrapper}>
        <h2 className={`${sora.className} ${styles.headingBlack}`}>
          {headingLine1}
        </h2>
        <h2 className={`${sora.className} ${styles.headingGold}`}>
          {headingLine2}
        </h2>
      </div>

      <div className={styles.cardsWrapper}>
        {cards.map((card, i) => (
          <FeatureCard
            key={i}
            number={i + 1}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}