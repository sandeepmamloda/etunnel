"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./ourpartners.module.css";

gsap.registerPlugin(ScrollTrigger);

const Ourpartners = function () {
    const wrapperRef = useRef(null);
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

            // ------desc clip path reveal------
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

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div ref={wrapperRef} className={styles["ourpartners-wrapper"]}>
                <div className={styles["ourpartners-top"]}>
                    <h2 ref={titleRef}>Our Partners</h2>
                    <p ref={descRef}>
                        We maintain partnerships with various companies and institutions to popularize biometric security.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Ourpartners;