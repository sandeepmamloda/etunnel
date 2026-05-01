"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./authenticationprocess.module.css";

gsap.registerPlugin(ScrollTrigger);

const Authenticationprocess = () => {
    const wrapperRef = useRef(null);
    const h2Ref = useRef(null);
    const h3Ref = useRef(null);
    const pRef = useRef(null);
    const imgRef = useRef(null);

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

            // ------h3 clip path reveal------
            gsap.from(h3Ref.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
                ease: "power4.out",
                delay: 0.15,
                scrollTrigger: {
                    trigger: h3Ref.current,
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
                delay: 0.3,
                scrollTrigger: {
                    trigger: pRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

            // ------image: bottom se top curtain------
            gsap.from(imgRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                duration: 1.3,
                ease: "power4.out",
                delay: 0.45,
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
        <section ref={wrapperRef} className={styles["authentication-process-wrapper"]}>
            <div className={styles["authentication-process-main"]}>
                <div className={styles["authentication-process-top"]}>

                    <div className={styles["authentication-process-top-tcontent"]}>
                        <h2 ref={h2Ref}>End to End</h2>
                    </div>

                    <div className={styles["authentication-process-top-mcontent"]}>
                        <h3 ref={h3Ref}>Authentication Process</h3>
                    </div>

                    <div className={styles["authentication-process-top-bcontent"]}>
                        <p ref={pRef}>
                            The process of extracting finger vein patterns and verifying them against stored finger vein patterns for authentication.
                        </p>
                    </div>
                </div>

                <div
                    ref={imgRef}
                    className={styles["authentication-process-bottom"]}
                >
                    <Image
                        src="/images/coretech/fingervein/authenticationprocess/authentication.png"
                        alt="Authentication Process"
                        fill={true}
                        className={styles["img"]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Authenticationprocess;