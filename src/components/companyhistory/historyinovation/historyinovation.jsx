"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styles from "./historyinovation.module.css";

gsap.registerPlugin(ScrollTrigger);

const accordionData = [
    {
        year: "2025",
        image: "/images/companyhistory/historyinovation/2025.png",
        content: [
            {
                text: "",
                bullets: [
                    "Participated in CES Las Vegas U.S.",
                    "Launched a new version of finger vein authentication device.",
                    "Launched the world's first finger vein hardware wallet."
                ]
            }
        ]
    },
    {
        year: "2024",
        image: "/images/companyhistory/historyinovation/2024.png",
        content: [
            {
                text: "",
                bullets: [
                    "Opened the Rosedale center.",
                    "Participated in JAPAN IT Week Tokyo.",
                    "Selection of supplier for fingerprint authentication smart card for employee identification of ITU (International Telecommunication Union), a UN-affiliated organization.",
                    "Received certification from KISA for finger vein recognition algorithms.",
                    "Participated in Identity Week Europe Amsterdam.",
                    "Participated in InfoSecurity Europe London.",
                    "Participated in MWC 2024 Barcelona.",
                    "Signed a contract with GKNOT DMCC for \"the global marketing and supply of ETUNNEL's biometric authentication technology and security devices\"."
                ]
            }
        ]
    },
    {
        year: "2023",
        image: "/images/companyhistory/historyinovation/2023.png",
        content: [
            {
                text: "",
                bullets: [
                    "Developed \"Disposable fingerprint self-enrollment device\" for fingerprint payment cards.",
                    "Received certification from KISA for facial recognition algorithms.",
                    "Began development of the \"P2N2 AI Engine\" for integrated biometric algorithms.",
                    "Completion of the Proof of Concept (PoC) for fingerprint authentication smart card for employee identification of ITU (International Telecommunication Union), a UN-affiliated organization."
                ]
            }
        ]
    },
    {
        year: "2022",
        image: "/images/companyhistory/historyinovation/2022.png",
        content: [
            {
                text: "",
                bullets: [
                    "Dr. Obi Onyewu, MD resigned from his position as.",
                    "Won the Grand Prize at \"The 8th Korea Enterprise Awards\" in the field of R&D innovation.",
                    "Won the Grand Prize at \"The 14th Seoul Success Awards\" in the field of 4th industrial economy.",
                    "Signed an MOU with Busan for \"A leap from Smart City to Secure City\".",
                    "Participated in BWB 2022.",
                    "Signed an MOU with WaveOn Cor. for \"Strategic business collaboration\".",
                    "Signed an MOU with 4th Industrial Revolution Special Committee of the Ruling Party of the Republic of Korea.",
                    "Started development of finger vein authentication software wallet."
                ]
            }
        ]
    },
    {
        year: "2021",
        image: "/images/companyhistory/historyinovation/2021.png",
        content: [
            {
                text: "",
                bullets: [
                    "Launched the finger vein authentication security solution \"VEIN-X\".",
                    "Established e-Tunnel Inc."
                ]
            }
        ]
    },
];

const Historyinovation = function () {
    const [openYear, setOpenYear] = useState("2025");
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const accordionItemsRef = useRef([]);
    const bodyImgRefs = useRef([]);
    const bodyContentBlocksRefs = useRef([]);

    const handleToggle = (year) => {
        setOpenYear(prev => prev === year ? null : year);
    };

    // ------pehle accordion (2025) ka initial content animation------
    useEffect(() => {
        const index = 0;
        const imgEl = bodyImgRefs.current[index];
        const blocks = bodyContentBlocksRefs.current[index] || [];

        const ctx = gsap.context(() => {

            if (imgEl) {
                gsap.from(imgEl, {
                    clipPath: "inset(0% 100% 0% 0%)",
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: imgEl,
                        start: "top 88%",
                        once: true,
                    }
                });
            }

            blocks.forEach((block, i) => {
                if (!block) return;
                gsap.from(block, {
                    clipPath: "inset(100% 0% 0% 0%)",
                    y: 30,
                    duration: 1.0,
                    ease: "power4.out",
                    delay: 0.15 + i * 0.12,
                    scrollTrigger: {
                        trigger: block,
                        start: "top 90%",
                        once: true,
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // ------scroll trigger animations (mount pe ek baar)------
    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(titleRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

            gsap.from(descRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.0,
                ease: "power4.out",
                delay: 0.15,
                scrollTrigger: {
                    trigger: descRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

            accordionItemsRef.current.forEach((item) => {
                gsap.from(item, {
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: -10,
                    duration: 0.8,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 88%",
                        once: true,
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // ------openYear change hone pe body content animate karo------
    useEffect(() => {
        if (!openYear) return;

        const index = accordionData.findIndex(d => d.year === openYear);
        if (index === -1) return;

        // pehla accordion skip karo — uska animation alag useEffect se handle hota hai
        if (index === 0) return;

        const imgEl = bodyImgRefs.current[index];
        const blocks = bodyContentBlocksRefs.current[index] || [];

        const timer = setTimeout(() => {

            if (imgEl) {
                gsap.fromTo(imgEl,
                    { clipPath: "inset(0% 100% 0% 0%)" },
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1.2,
                        ease: "power4.out",
                    }
                );
            }

            blocks.forEach((block, i) => {
                if (!block) return;
                gsap.fromTo(block,
                    {
                        clipPath: "inset(100% 0% 0% 0%)",
                        y: 30,
                    },
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        y: 0,
                        duration: 1.0,
                        ease: "power4.out",
                        delay: 0.15 + i * 0.12,
                    }
                );
            });

        }, 80);

        return () => clearTimeout(timer);
    }, [openYear]);

    return (
        <section ref={sectionRef} className={styles["historyinovation-section"]}>

            <div className={styles["historyinovation-heading-wrapper"]}>
                <h2
                    ref={titleRef}
                    className={styles["historyinovation-heading-title"]}
                >
                    History of Innovation
                </h2>
                <p
                    ref={descRef}
                    className={styles["historyinovation-heading-desc"]}
                >
                    Continuing innovation for a safer, more convenient future with enhanced biometric technology and advanced security solutions.
                </p>
            </div>

            <div className={styles["historyinovation-section-wrapper"]}>
                {accordionData.map((item, index) => (
                    <div
                        key={item.year}
                        ref={el => accordionItemsRef.current[index] = el}
                        className={styles["historyinovation-accordion-item"]}
                    >
                        <input
                            type="checkbox"
                            id={`accordion-${item.year}`}
                            className={styles["historyinovation-accordion-checkbox"]}
                            checked={openYear === item.year}
                            onChange={() => handleToggle(item.year)}
                        />
                        <label
                            htmlFor={`accordion-${item.year}`}
                            className={styles["historyinovation-accordion-label"]}
                        >
                            <span className={styles["historyinovation-accordion-label-icon"]}></span>
                            <span className={styles["historyinovation-accordion-label-year"]}>{item.year}</span>
                        </label>

                        <div className={styles["historyinovation-accordion-body"]}>
                            <div className={styles["historyinovation-accordion-body-inner"]}>
                                <div className={styles["historyinovation-accordion-body-row"]}>

                                    {/* ------image------ */}
                                    <div
                                        ref={el => bodyImgRefs.current[index] = el}
                                        className={styles["historyinovation-accordion-body-img-wrapper"]}
                                    >
                                        <img
                                            src={item.image}
                                            alt={`${item.year} image`}
                                            className={styles["historyinovation-accordion-body-img"]}
                                        />
                                    </div>

                                    {/* ------text blocks------ */}
                                    <div className={styles["historyinovation-accordion-body-content"]}>
                                        {item.content.map((block, i) => (
                                            <div
                                                key={i}
                                                ref={el => {
                                                    if (!bodyContentBlocksRefs.current[index]) {
                                                        bodyContentBlocksRefs.current[index] = [];
                                                    }
                                                    bodyContentBlocksRefs.current[index][i] = el;
                                                }}
                                                className={styles["historyinovation-accordion-body-content-block"]}
                                            >
                                                {block.text && (
                                                    <p className={styles["historyinovation-accordion-body-content-text"]}>
                                                        {block.text}
                                                    </p>
                                                )}
                                                {block.bullets.length > 0 && (
                                                    <ul className={styles["historyinovation-accordion-body-content-list"]}>
                                                        {block.bullets.map((b, j) => (
                                                            <li key={j} className={styles["historyinovation-accordion-body-content-list-item"]}>
                                                                {b}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Historyinovation;