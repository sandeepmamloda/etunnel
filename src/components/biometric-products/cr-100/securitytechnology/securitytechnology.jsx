"use client";
import { useEffect, useRef } from "react";
import styles from "./securitytechnology.module.css";

// ── SVG Icon 1: Most Secure Biometric Authentication ──
const IconSecure = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
    <path d="M70 133C104.794 133 133 104.794 133 70C133 35.2061 104.794 7 70 7C35.2061 7 7 35.2061 7 70C7 104.794 35.2061 133 70 133Z" stroke="#FFD2AA" strokeWidth="1.75" strokeDasharray="7 4.67"/>
    <path opacity="0.08" d="M70.0013 121.333C98.3519 121.333 121.335 98.35 121.335 69.9993C121.335 41.6487 98.3519 18.666 70.0013 18.666C41.6507 18.666 18.668 41.6487 18.668 69.9993C18.668 98.35 41.6507 121.333 70.0013 121.333Z" fill="#FFD2AA"/>
    <path d="M70.0013 121.333C98.3519 121.333 121.335 98.35 121.335 69.9993C121.335 41.6487 98.3519 18.666 70.0013 18.666C41.6507 18.666 18.668 41.6487 18.668 69.9993C18.668 98.35 41.6507 121.333 70.0013 121.333Z" stroke="#FFD2AA" strokeWidth="1.16667"/>
    <path d="M69.9987 32.666L95.6654 46.666V72.3327C95.6654 90.9993 83.9987 104.999 69.9987 111.999C55.9987 104.999 44.332 90.9993 44.332 72.3327V46.666L69.9987 32.666Z" fill="white" stroke="black" strokeWidth="1.86667"/>
    <path opacity="0.15" d="M69.9987 42L88.6654 52.5V72.3333C88.6654 86.3333 79.332 98 69.9987 102.667C60.6654 98 51.332 86.3333 51.332 72.3333V52.5L69.9987 42Z" fill="#FFD2AA"/>
    <path d="M75.8346 67.666H64.168C62.235 67.666 60.668 69.233 60.668 71.166V80.4993C60.668 82.4323 62.235 83.9993 64.168 83.9993H75.8346C77.7676 83.9993 79.3346 82.4323 79.3346 80.4993V71.166C79.3346 69.233 77.7676 67.666 75.8346 67.666Z" fill="black"/>
    <path d="M70 78.166C71.933 78.166 73.5 76.599 73.5 74.666C73.5 72.733 71.933 71.166 70 71.166C68.067 71.166 66.5 72.733 66.5 74.666C66.5 76.599 68.067 78.166 70 78.166Z" fill="#FFD2AA"/>
    <path d="M71.168 74.666H68.8346C68.1903 74.666 67.668 75.1884 67.668 75.8327V79.3327C67.668 79.977 68.1903 80.4993 68.8346 80.4993H71.168C71.8123 80.4993 72.3346 79.977 72.3346 79.3327V75.8327C72.3346 75.1884 71.8123 74.666 71.168 74.666Z" fill="#FFD2AA"/>
    <path d="M63 67.666V60.666C63 54.8327 77 54.8327 77 60.666V67.666" stroke="black" strokeWidth="1.86667"/>
    <path d="M70.0013 11.6667C71.29 11.6667 72.3346 10.622 72.3346 9.33333C72.3346 8.04467 71.29 7 70.0013 7C68.7126 7 67.668 8.04467 67.668 9.33333C67.668 10.622 68.7126 11.6667 70.0013 11.6667Z" fill="#FFD2AA"/>
    <path opacity="0.5" d="M116.668 48.416C117.634 48.416 118.418 47.6325 118.418 46.666C118.418 45.6995 117.634 44.916 116.668 44.916C115.701 44.916 114.918 45.6995 114.918 46.666C114.918 47.6325 115.701 48.416 116.668 48.416Z" fill="#FFD2AA"/>
    <path opacity="0.5" d="M23.332 48.416C24.2985 48.416 25.082 47.6325 25.082 46.666C25.082 45.6995 24.2985 44.916 23.332 44.916C22.3655 44.916 21.582 45.6995 21.582 46.666C21.582 47.6325 22.3655 48.416 23.332 48.416Z" fill="#FFD2AA"/>
  </svg>
);

// ── SVG Icon 2: Unaffected by External Factors ──
const IconExternal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
    <path d="M70 133C104.794 133 133 104.794 133 70C133 35.2061 104.794 7 70 7C35.2061 7 7 35.2061 7 70C7 104.794 35.2061 133 70 133Z" stroke="#FFD2AA" strokeWidth="1.75" strokeDasharray="7 4.67"/>
    <path opacity="0.08" d="M70.0013 121.333C98.3519 121.333 121.335 98.35 121.335 69.9993C121.335 41.6487 98.3519 18.666 70.0013 18.666C41.6507 18.666 18.668 41.6487 18.668 69.9993C18.668 98.35 41.6507 121.333 70.0013 121.333Z" fill="#FFD2AA"/>
    <path d="M70.0013 121.333C98.3519 121.333 121.335 98.35 121.335 69.9993C121.335 41.6487 98.3519 18.666 70.0013 18.666C41.6507 18.666 18.668 41.6487 18.668 69.9993C18.668 98.35 41.6507 121.333 70.0013 121.333Z" stroke="#FFD2AA" strokeWidth="1.16667"/>
    <path d="M70.0021 65.1992C68.7291 65.1992 67.5082 65.7049 66.608 66.6051C65.7078 67.5053 65.2021 68.7262 65.2021 69.9992C65.2021 72.4472 64.9621 76.0232 64.5781 79.5992" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M74.7945 72.6875C74.7945 78.3995 74.7945 87.9995 72.3945 93.9995" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M82.6953 91.6464C82.9833 90.2064 83.7273 86.1264 83.8953 84.3984" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M46 70C46 64.9628 47.5849 60.0533 50.5302 55.967C53.4755 51.8806 57.6318 48.8245 62.4105 47.2316C67.1892 45.6387 72.348 45.5898 77.156 47.0917C81.9641 48.5936 86.1777 51.5703 89.2 55.6" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M46 79.5996H46.024" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M93.5195 79.5992C93.9995 74.7992 93.8339 66.7496 93.5195 65.1992" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M53.1992 87.9992C54.3992 84.3992 55.5992 77.1992 55.5992 69.9992C55.5968 68.3645 55.8727 66.7413 56.4152 65.1992" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M61.9609 93.9992C62.4649 92.4152 63.0409 90.8312 63.3289 89.1992" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M62.7969 57.5191C64.9866 56.2548 67.4707 55.5894 69.9992 55.5898C72.5277 55.5902 75.0115 56.2564 77.2009 57.5214C79.3902 58.7863 81.2079 60.6055 82.4711 62.7958C83.7343 64.9862 84.3985 67.4706 84.3969 69.9991V74.7991" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    <g opacity="0.4">
      <path d="M35 61.832C36.933 61.832 38.5 60.265 38.5 58.332C38.5 56.399 36.933 54.832 35 54.832C33.067 54.832 31.5 56.399 31.5 58.332C31.5 60.265 33.067 61.832 35 61.832Z" fill="#E0E0E0"/>
      <path d="M31.5 54.832L38.5 61.832" stroke="#999999" strokeWidth="1.16667"/>
      <path d="M104.999 47.2493C106.61 47.2493 107.915 45.9435 107.915 44.3327C107.915 42.7219 106.61 41.416 104.999 41.416C103.388 41.416 102.082 42.7219 102.082 44.3327C102.082 45.9435 103.388 47.2493 104.999 47.2493Z" fill="#E0E0E0"/>
      <path d="M102.668 42L107.335 46.6667" stroke="#999999" strokeWidth="1.16667"/>
    </g>
  </svg>
);

// ── SVG Icon 3: Most Accurate Authentication ──
const IconAccurate = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
    <path d="M70 133C104.794 133 133 104.794 133 70C133 35.2061 104.794 7 70 7C35.2061 7 7 35.2061 7 70C7 104.794 35.2061 133 70 133Z" stroke="#FFD2AA" strokeWidth="1.75" strokeDasharray="7 4.67"/>
    <path opacity="0.08" d="M70.0013 121.333C98.3519 121.333 121.335 98.35 121.335 69.9993C121.335 41.6487 98.3519 18.666 70.0013 18.666C41.6507 18.666 18.668 41.6487 18.668 69.9993C18.668 98.35 41.6507 121.333 70.0013 121.333Z" fill="#FFD2AA"/>
    <path d="M83.6 91.5992V86.7992C83.6 84.2531 82.5886 81.8113 80.7882 80.011C78.9879 78.2106 76.5461 77.1992 74 77.1992H59.6C57.0539 77.1992 54.6121 78.2106 52.8118 80.011C51.0114 81.8113 50 84.2531 50 86.7992V91.5992" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M66.7992 67.5984C72.1012 67.5984 76.3992 63.3004 76.3992 57.9984C76.3992 52.6965 72.1012 48.3984 66.7992 48.3984C61.4973 48.3984 57.1992 52.6965 57.1992 57.9984C57.1992 63.3004 61.4973 67.5984 66.7992 67.5984Z" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M86 60.3984L98 72.3984" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M98 60.3984L86 72.3984" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const cards = [
  {
    Icon: IconSecure,
    title: "High Security Storage",
    description: "Fingerprint data is securely encrypted and stored directly on the card, ensuring it never leaves your physical possession.",
  },
  {
    Icon: IconExternal,
    title: "Password Less Verification",
    description: "Easy identity verification using just your fingerprint. No passwords to remember, no PINs to forget.",
  },
  {
    Icon: IconAccurate,
    title: "Anti Theft Protection",
    description: "Tamper-proof design prevents unauthorized access. If the card is lost, data remains inaccessible to others.",
  },
  
];

const CircleIcon = ({ Icon }) => (
  <div className={styles["icon-wrapper"]}>
    <div className={styles["icon-ring-outer"]}>
      <div className={styles["icon-ring-inner"]}>
        <div className={styles["icon-circle"]}>
          <Icon />
        </div>
      </div>
    </div>
  </div>
);

const Securitytechnology = function () {
  const wrapperRef  = useRef(null);
  const labelRef    = useRef(null);
  const headingRef  = useRef(null);
  const subRef      = useRef(null);
  const dividerRef  = useRef(null);
  const cardsRef    = useRef([]);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        // ── label ──
        gsap.from(labelRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 30,
          duration: 1.0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: labelRef.current,
            start: "top 85%",
            once: true,
          }
        });

        // ── heading ──
        gsap.from(headingRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 40,
          duration: 1.1,
          ease: "power4.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          }
        });

        // ── subheading ──
        gsap.from(subRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 40,
          duration: 1.1,
          ease: "power4.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: subRef.current,
            start: "top 85%",
            once: true,
          }
        });

        // ── divider ──
        gsap.from(dividerRef.current, {
          clipPath: "inset(0% 100% 0% 0%)",
          duration: 1.0,
          ease: "power4.out",
          delay: 0.45,
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 88%",
            once: true,
          }
        });

        // ── har card individually ──
        cardsRef.current.forEach((card) => {
          if (!card) return;
          gsap.from(card, {
            clipPath: "inset(100% 0% 0% 0%)",
            y: 40,
            duration: 1.0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            }
          });
        });

      }, wrapperRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles["securitytechnology-wrapper"]} ref={wrapperRef}>
      <div className={styles["securitytechnology-main"]}>

        <div className={styles["securitytechnology-top"]}>
          <span className={styles["label"]}      ref={labelRef}>CORE TECHNOLOGY</span>
          <h2   className={styles["heading"]}     ref={headingRef}>Core Elements of Security Technology</h2>
          <p    className={styles["subheading"]}  ref={subRef}>The trusted technology developed by ETUNNEL sets a new global standard in security.</p>
          <div  className={styles["divider"]}     ref={dividerRef}></div>
        </div>

        <div className={styles["securitytechnology-bottom"]}>
          {cards.map((card, index) => (
            <div
              className={styles["card"]}
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <CircleIcon Icon={card.Icon} />
              <h3 className={styles["card-title"]}>{card.title}</h3>
              <p className={styles["card-description"]}>{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Securitytechnology;