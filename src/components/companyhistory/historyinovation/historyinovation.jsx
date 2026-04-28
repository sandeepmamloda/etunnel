// "use client"
// import { useState } from "react";
// import styles from "./historyinovation.module.css";

// const accordionData = [
//     {
//         year: "2025",
//         image: "/images/companyhistory/historyinovation/historyinovation.png",
//         content: [
//             {
//                 text: "Signed a Business Agreement with RaonSecure for Biometric Authentication Platform Collaboration.",
//                 bullets: []
//             },
//             {
//                 text: "Signed a Business Agreement with G-Knot for Global Market Expansion.",
//                 bullets: []
//             },
//             {
//                 text: "Participated in CES Las Vegas U.S.",
//                 bullets: [
//                     "Launched a new version of finger vein authentication.",
//                     "Launched the world's first finger vein hardware wallet."
//                 ]
//             }
//         ]
//     },
//     { year: "2024", image: "/images/history/2024.jpg", content: [] },
//     { year: "2023", image: "/images/history/2023.jpg", content: [] },
//     { year: "2022", image: "/images/history/2022.jpg", content: [] },
//     { year: "2021", image: "/images/history/2021.jpg", content: [] },
// ];

// const Historyinovation = function () {
//     const [openYear, setOpenYear] = useState("2025");

//     const handleToggle = (year) => {
//         setOpenYear(prev => prev === year ? null : year);
//     };

//     return (
//         <>
//             <section className={styles["historyinovation-section"]}>

//                 {/* ------top heading area------ */}
//                 <div className={styles["historyinovation-heading-wrapper"]}>
//                     <h2 className={styles["historyinovation-heading-title"]}>History of Innovation</h2>
//                     <p className={styles["historyinovation-heading-desc"]}>
//                         Continuing innovation for a safer, more convenient future with<br />
//                         enhanced biometric technology and advanced security solutions.
//                     </p>
//                 </div>

//                 {/* ------accordion------ */}
//                 <div className={styles["historyinovation-section-wrapper"]}>
//                     {accordionData.map((item) => (
//                         <div key={item.year} className={styles["historyinovation-accordion-item"]}>
//                             <input
//                                 type="checkbox"
//                                 id={`accordion-${item.year}`}
//                                 className={styles["historyinovation-accordion-checkbox"]}
//                                 checked={openYear === item.year}
//                                 onChange={() => handleToggle(item.year)}
//                             />
//                             <label
//                                 htmlFor={`accordion-${item.year}`}
//                                 className={styles["historyinovation-accordion-label"]}
//                             >
//                                 <span className={styles["historyinovation-accordion-label-icon"]}></span>
//                                 <span className={styles["historyinovation-accordion-label-year"]}>{item.year}</span>
//                             </label>
//                             <div className={styles["historyinovation-accordion-body"]}>
//                                 <div className={styles["historyinovation-accordion-body-inner"]}>
//                                     <div className={styles["historyinovation-accordion-body-row"]}>
//                                         <div className={styles["historyinovation-accordion-body-img-wrapper"]}>
//                                             <img
//                                                 src={item.image}
//                                                 alt={`${item.year} image`}
//                                                 className={styles["historyinovation-accordion-body-img"]}
//                                             />
//                                         </div>
//                                         <div className={styles["historyinovation-accordion-body-content"]}>
//                                             {item.content.map((block, i) => (
//                                                 <div key={i} className={styles["historyinovation-accordion-body-content-block"]}>
//                                                     <p className={styles["historyinovation-accordion-body-content-text"]}>
//                                                         {block.text}
//                                                     </p>
//                                                     {block.bullets.length > 0 && (
//                                                         <ul className={styles["historyinovation-accordion-body-content-list"]}>
//                                                             {block.bullets.map((b, j) => (
//                                                                 <li key={j} className={styles["historyinovation-accordion-body-content-list-item"]}>
//                                                                     {b}
//                                                                 </li>
//                                                             ))}
//                                                         </ul>
//                                                     )}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </section>
//         </>
//     );
// };

// export default Historyinovation;
// ------------------------------------------------
"use client"
import { useEffect, useRef } from "react";
import { useState } from "react";
import styles from "./historyinovation.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const splitToChars = (el) => {
    const text = el.innerText;
    el.innerHTML = text
        .split("")
        .map(char => char === " "
            ? `<span style="display:inline-block;">&nbsp;</span>`
            : `<span style="display:inline-block;">${char}</span>`
        )
        .join("");
    return el.querySelectorAll("span");
};

const accordionData = [
    {
        year: "2025",
        image: "/images/companyhistory/historyinovation/historyinovation.png",
        content: [
            {
                text: "Signed a Business Agreement with RaonSecure for Biometric Authentication Platform Collaboration.",
                bullets: []
            },
            {
                text: "Signed a Business Agreement with G-Knot for Global Market Expansion.",
                bullets: []
            },
            {
                text: "Participated in CES Las Vegas U.S.",
                bullets: [
                    "Launched a new version of finger vein authentication.",
                    "Launched the world's first finger vein hardware wallet."
                ]
            }
        ]
    },
    { year: "2024", image: "/images/history/2024.jpg", content: [] },
    { year: "2023", image: "/images/history/2023.jpg", content: [] },
    { year: "2022", image: "/images/history/2022.jpg", content: [] },
    { year: "2021", image: "/images/history/2021.jpg", content: [] },
];

const Historyinovation = function () {
    const [openYear, setOpenYear] = useState("2025");
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const accordionItemsRef = useRef([]);

    const handleToggle = (year) => {
        setOpenYear(prev => prev === year ? null : year);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ------title letter by letter------
            const titleChars = splitToChars(titleRef.current);
            gsap.from(titleChars, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.025,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

            // ------desc letter by letter------
            const descChars = splitToChars(descRef.current);
            gsap.from(descChars, {
                opacity: 0,
                y: 15,
                duration: 0.4,
                stagger: 0.01,
                ease: "power3.out",
                delay: 0.4,
                scrollTrigger: {
                    trigger: descRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

            // ------accordion items stagger------
            gsap.from(accordionItemsRef.current, {
                opacity: 0,
                x: -40,
                duration: 0.6,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    once: true,
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
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
                                        <div className={styles["historyinovation-accordion-body-img-wrapper"]}>
                                            <img
                                                src={item.image}
                                                alt={`${item.year} image`}
                                                className={styles["historyinovation-accordion-body-img"]}
                                            />
                                        </div>
                                        <div className={styles["historyinovation-accordion-body-content"]}>
                                            {item.content.map((block, i) => (
                                                <div key={i} className={styles["historyinovation-accordion-body-content-block"]}>
                                                    <p className={styles["historyinovation-accordion-body-content-text"]}>
                                                        {block.text}
                                                    </p>
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
        </>
    );
};

export default Historyinovation;