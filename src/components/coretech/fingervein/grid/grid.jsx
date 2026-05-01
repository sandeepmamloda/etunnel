"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./grid.module.css";

gsap.registerPlugin(ScrollTrigger);

const Grid = function () {
    const items = [
        {
            image: "first",
            heading: "Uniqueness",
            description: "Finger vein patterns are unique to each individual — even identical twins have different vein structures — which ensures a high level of security."
        },
        {
            image: "second",
            heading: "Fast Authentication Speed",
            description: "The authentication process is completed within seconds, greatly reducing wait time for real-time authentication."
        },
        {
            image: "third",
            heading: "Anti-Spoofing Protection",
            description: "Finger vein structures are stored within the body, making them virtually impossible to replicate or forge compared to fingerprints or facial features."
        },
        {
            image: "fourth",
            heading: "Biological Response Verification",
            description: "The system verifies whether blood is actively flowing through the veins to prevent authentication with artificial or deceased specimens."
        },
        {
            image: "fifth",
            heading: "Resistance to Environmental Factors",
            description: "Since veins are located beneath the skin, they are unaffected by external factors such as humidity, temperature, dirt, or surface skin conditions."
        },
        {
            image: "sixth",
            heading: "High-Security Authentication Area",
            description: "Once authorized, no additional security measures are required. The system allows restricted access to secure areas seamlessly."
        },
        {
            image: "seventh",
            heading: "High Accuracy",
            description: "The authentication process has extremely low false acceptance rates (FAR) and false rejection rates (FRR), ensuring high reliability."
        },
        {
            image: "eight",
            heading: "Multi-Factor Authentication (MFA)",
            description: "Finger vein authentication can be integrated with other security measures such as passwords or ID to enhance overall security levels."
        },
    ];

    const wrapperRef = useRef(null);
    const h2Ref = useRef(null);
    const pRef = useRef(null);
    const itemsRef = useRef([]);
    const gridBottomRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ------h2 clip path reveal------
            gsap.from(h2Ref.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: h2Ref.current,
                    start: "top 85%",
                    once: true,
                }
            });

            // ------p clip path reveal------
            gsap.from(pRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
                ease: "power4.out",
                delay: 0.15,
                scrollTrigger: {
                    trigger: pRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

            // ------pehle sab items hide karo------
            gsap.set(itemsRef.current, {
                opacity: 0,
                y: 40,
                scale: 0.95,
            });

            // ------har item ka apna scroll trigger------
            itemsRef.current.forEach((item, index) => {
                if (!item) return;

                gsap.to(item, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 88%",
                        once: true,
                    },
                    delay: index % 2 === 0 ? 0 : 0.12, // same row ke items mein thoda gap
                });
            });

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={wrapperRef} className={styles["grid-wrapper"]}>
            <div className={styles["grid-main"]}>

                <div className={styles["grid-top"]}>
                    <h2 ref={h2Ref}>Features of Technology</h2>
                </div>

                <div className={styles["grid-medium"]}>
                    <p ref={pRef}>
                        Eight pillars that make finger vein authentication the most robust biometric modality.
                    </p>
                </div>

                <div ref={gridBottomRef} className={styles["grid-bottom"]}>
                    {items.map((item, index) => (
                        <div
                            key={item.image}
                            ref={(el) => itemsRef.current[index] = el}
                            className={styles["grid-items"]}
                        >
                            <div className={styles["top"]}>
                                <div className={styles["logo"]}>
                                    <Image
                                        alt={item.heading}
                                        src={`/images/coretech/fingervein/grid/${item.image}.png`}
                                        fill={true}
                                        style={{ objectFit: "contain" }}
                                        className={styles["img"]}
                                    />
                                </div>
                            </div>
                            <div className={styles["medium"]}>
                                <h4>{item.heading}</h4>
                            </div>
                            <div className={styles["bottom"]}>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Grid;