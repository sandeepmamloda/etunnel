"use client";

import { DM_Mono, DM_Sans, Sora } from "next/font/google";
import { forwardRef, useEffect, useRef } from "react";
import styles from "./convencereliability.module.css";

const sora   = Sora({ subsets: ["latin"], weight: ["400", "600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"] });

const FeatureCard = forwardRef(function FeatureCard({ number, title, description }, ref) {
  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.cardNumberRow}>
        <span className={`${dmMono.className} ${styles.cardNumber}`}>
          {String(number).padStart(2, "0")}
        </span>
        <div className={styles.cardNumberLine} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={`${sora.className} ${styles.cardTitle}`}>{title}</h3>
        <p className={`${dmSans.className} ${styles.cardDescription}`}>{description}</p>
      </div>
      <div className={styles.cardAccentBar} />
    </div>
  );
});

export default function ConvenienceReliability({
  sectionLabel = "FEATURES",
  headingLine1 = "",
  headingLine2 = "",
  cards = [
    { title: "Purpose",            description: "" },
    { title: "Reliability",        description: "" },
    { title: "Future Scalability", description: "" },
  ],
}) {
  const sectionRef  = useRef(null);
  const labelRef    = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const cardsRef    = useRef([]);

  useEffect(() => {
    let ctx;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        const topEls = [
          labelRef.current,
          heading1Ref.current,
          heading2Ref.current,
        ].filter(Boolean); // ✅ null refs filter out

        const cardEls = cardsRef.current.filter(Boolean);

        if (topEls.length) {
          gsap.fromTo(
            topEls,
            { opacity: 0, x: -50 },
            {
              opacity: 1,   // ✅ explicit end state
              x: 0,
              duration: 0.75,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: topEls[0],
                start: "top 90%",  // ✅ thoda pehle trigger
                once: true,        // ✅ ek baar hi chale
              },
            }
          );
        }

        if (cardEls.length) {
          gsap.fromTo(
            cardEls,
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,   // ✅ explicit end state
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardEls[0],
                start: "top 90%",  // ✅ thoda pehle trigger
                once: true,        // ✅ ek baar hi chale
              },
            }
          );
        }

      }, sectionRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <p className={`${dmMono.className} ${styles.sectionLabel}`} ref={labelRef}>
        {sectionLabel}
      </p>

      <div className={styles.headingWrapper}>
        <h2 className={`${sora.className} ${styles.headingBlack}`} ref={heading1Ref}>
          {headingLine1}
        </h2>
        <h2 className={`${sora.className} ${styles.headingGold}`} ref={heading2Ref}>
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
            ref={(el) => (cardsRef.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
}