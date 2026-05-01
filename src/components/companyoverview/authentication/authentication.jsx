"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./authentication.module.css";

gsap.registerPlugin(ScrollTrigger);

const Authentication = function () {
    const wrapperRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const imgRef = useRef(null);

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

            // ------image: bottom se top curtain------
            gsap.from(imgRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                duration: 1.3,
                ease: "power4.out",
                delay: 0.3,
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={wrapperRef} className={styles["authentication-wrapper"]}>
                <div className={styles["authentication-top"]}>
                    <h2 ref={titleRef}>
                        Patents for Finger Vein Authentication System
                    </h2>
                    <p ref={descRef}>
                        U.S., Europe (3057034), Japan (5951871), Republic of Korea (10-1496852)
                    </p>
                </div>
                <div
                    ref={imgRef}
                    className={styles["authentication-bottom"]}
                >
                    <Image
                        src="/images/companyoverview/authentication/image.png"
                        alt="Hero Image"
                        fill={true}
                        priority
                        className={styles["img"]}
                    />
                </div>
            </section>
        </>
    );
};

export default Authentication;