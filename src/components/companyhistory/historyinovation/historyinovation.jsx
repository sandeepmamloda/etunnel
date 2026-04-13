"use client"
import { useState } from "react";
import styles from "./historyinovation.module.css";

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

    const handleToggle = (year) => {
        setOpenYear(prev => prev === year ? null : year);
    };

    return (
        <>
            <section className={styles["historyinovation-section"]}>

                {/* ------top heading area------ */}
                <div className={styles["historyinovation-heading-wrapper"]}>
                    <h2 className={styles["historyinovation-heading-title"]}>History of Innovation</h2>
                    <p className={styles["historyinovation-heading-desc"]}>
                        Continuing innovation for a safer, more convenient future with<br />
                        enhanced biometric technology and advanced security solutions.
                    </p>
                </div>

                {/* ------accordion------ */}
                <div className={styles["historyinovation-section-wrapper"]}>
                    {accordionData.map((item) => (
                        <div key={item.year} className={styles["historyinovation-accordion-item"]}>
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