"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./fingerveininfo.module.css";

gsap.registerPlugin(ScrollTrigger);

const Fingerveininfo = function () {
    const wrapperRef = useRef(null);
    const commaRef = useRef(null);
    const h2Ref = useRef(null);
    const pRef = useRef(null);
    const rightImgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ------comma image: left se right curtain------
            gsap.from(commaRef.current, {
                clipPath: "inset(0% 100% 0% 0%)",
                duration: 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: commaRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

            // ------h2 clip path reveal------
            gsap.from(h2Ref.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
                ease: "power4.out",
                delay: 0.15,
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
                delay: 0.3,
                scrollTrigger: {
                    trigger: pRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

            // ------right image: right se left curtain------
            gsap.from(rightImgRef.current, {
                clipPath: "inset(0% 0% 0% 100%)",
                duration: 1.4,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: rightImgRef.current,
                    start: "top 82%",
                    once: true,
                }
            });

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={wrapperRef} className={styles["fingervein-wrapper"]}>
            <div className={styles["fingervein-main"]}>

                {/* ------left------ */}
                <div className={styles["fingervein-main-left"]}>
                    <div className={styles["fingervein-main-left-text-wrapper"]}>

                        <div
                            ref={commaRef}
                            className={styles["top-content"]}
                        >
                            <Image
                                src="/images/coretech/p2n2/p2n2info/comma.png"
                                fill={true}
                                alt="P2N2 AI Biometric Engine module"
                                priority
                                className={styles["img"]}
                            />
                        </div>

                        <div className={styles["medium-content"]}>
                            <h2 ref={h2Ref}>
                                Your veins are your password. Invisible, unique, and impossible to forge.
                            </h2>
                        </div>

                        <div className={styles["bottom-content"]}>
                            <p ref={pRef}>
                                ETUNNEL's Finger Vein Technology replaces traditional authentication with the most secure biometric method available — beneath the skin.
                            </p>
                        </div>

                    </div>
                </div>

                {/* ------right------ */}
                <div
                    ref={rightImgRef}
                    className={styles["fingervein-main-right"]}
                >
                    <Image
                        src="/images/coretech/fingervein/fingerveininfo/fingerveininfo.jpg"
                        fill={true}
                        alt="P2N2 AI Biometric Engine module"
                        priority
                        className={styles["img"]}
                    />
                </div>

            </div>
        </section>
    );
};

export default Fingerveininfo;