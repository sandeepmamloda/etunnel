"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./globalnetwork.module.css";

gsap.registerPlugin(ScrollTrigger);

const Globalnetwork = function () {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ------title clip path reveal------
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

            // ------desc: same animation as title, thoda delay------
            gsap.from(descRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
                ease: "power4.out",
                delay: 0.15,
                scrollTrigger: {
                    trigger: descRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles["historyinovation-section"]}>
            <div className={styles["historyinovation-heading-wrapper"]}>
                <h2
                    ref={titleRef}
                    className={styles["historyinovation-heading-title"]}
                >
                    Global Network
                </h2>
                <p
                    ref={descRef}
                    className={styles["historyinovation-heading-desc"]}
                >
                    We provide biometric security solutions based on a strong global network.
                </p>
            </div>
        </section>
    );
};

export default Globalnetwork;