"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./coretechnology.module.css";

gsap.registerPlugin(ScrollTrigger);

const Coretechnology = function () {
    const wrapperRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const leftCardRef = useRef(null);
    const rightCardRef = useRef(null);
    const leftH2Ref = useRef(null);
    const leftPRef = useRef(null);
    const leftBtnRef = useRef(null);
    const rightH2Ref = useRef(null);
    const rightPRef = useRef(null);
    const rightBtnRef = useRef(null);

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

            // ------left card: left se right curtain------
            gsap.from(leftCardRef.current, {
                clipPath: "inset(0% 100% 0% 0%)",
                duration: 1.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: leftCardRef.current,
                    start: "top 82%",
                    once: true,
                }
            });

            // ------left h2------
            gsap.from(leftH2Ref.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 30,
                duration: 1.0,
                ease: "power4.out",
                delay: 0.4,
                scrollTrigger: {
                    trigger: leftCardRef.current,
                    start: "top 82%",
                    once: true,
                }
            });

            // ------left p------
            gsap.from(leftPRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 25,
                duration: 1.0,
                ease: "power4.out",
                delay: 0.6,
                scrollTrigger: {
                    trigger: leftCardRef.current,
                    start: "top 82%",
                    once: true,
                }
            });

            // ------left btn------
            gsap.from(leftBtnRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 20,
                duration: 0.9,
                ease: "power4.out",
                delay: 0.8,
                scrollTrigger: {
                    trigger: leftCardRef.current,
                    start: "top 82%",
                    once: true,
                }
            });

            // ------right card: right se left curtain------
            gsap.from(rightCardRef.current, {
                clipPath: "inset(0% 0% 0% 100%)",
                duration: 1.3,
                ease: "power4.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: rightCardRef.current,
                    start: "top 82%",
                    once: true,
                }
            });

            // ------right h2------
            gsap.from(rightH2Ref.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 30,
                duration: 1.0,
                ease: "power4.out",
                delay: 0.6,
                scrollTrigger: {
                    trigger: rightCardRef.current,
                    start: "top 82%",
                    once: true,
                }
            });

            // ------right p------
            gsap.from(rightPRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 25,
                duration: 1.0,
                ease: "power4.out",
                delay: 0.8,
                scrollTrigger: {
                    trigger: rightCardRef.current,
                    start: "top 82%",
                    once: true,
                }
            });

            // ------right btn------
            gsap.from(rightBtnRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 20,
                duration: 0.9,
                ease: "power4.out",
                delay: 1.0,
                scrollTrigger: {
                    trigger: rightCardRef.current,
                    start: "top 82%",
                    once: true,
                }
            });

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div ref={wrapperRef} className={styles["coretechnology-wrapper"]}>
                <div className={styles["coretechnology-top"]}>
                    <h1 ref={titleRef}>Core Technology of ETUNNEL</h1>
                    <p ref={descRef}>
                        Building a trustworthy future with enhanced biometric authentication and unique security technology.
                    </p>
                </div>
                <div className={styles["coretechnology-bottom"]}>

                    {/* ------left card------ */}
                    <div
                        ref={leftCardRef}
                        className={styles["coretechnology-left"]}
                    >
                        <div className={styles["coretechnology-left-text-wrapper"]}>
                            <div className={styles["coretechnology-left-text-wrapper-top"]}>
                                <h2 ref={leftH2Ref}>P2N2</h2>
                                <div>
                                    <p ref={leftPRef}>
                                        At the heart of ETUNNEL is the P2N2 Biometric Authentication Integration Module. It is a
                                        single AI engine designed to handle multiple biometric methods, without complexity.
                                    </p>
                                </div>
                            </div>
                            <Link
                                ref={leftBtnRef}
                                href="/coretech/p2n2"
                                className={styles["coretechnology-left-text-wrapper-bottom"]}
                            >
                                <span>How P2N2 Works</span>
                            </Link>
                        </div>
                        <div className={styles["img"]}>
                            <Image
                                src="/images/companyoverview/coretechnology/coretechnology.png"
                                alt="P2N2 Core Technology"
                                fill={true}
                                priority
                                className={styles["img"]}
                            />
                        </div>
                    </div>

                    {/* ------right card------ */}
                    <div
                        ref={rightCardRef}
                        className={styles["coretechnology-right"]}
                    >
                        <div className={styles["coretechnology-right-text-wrapper"]}>
                            <div className={styles["coretechnology-right-text-wrapper-top"]}>
                                <h2 ref={rightH2Ref}>Finger Vein Authentication</h2>
                                <div>
                                    <p ref={rightPRef}>
                                        The finger vein authentication technology developed by ETUNNEL
                                        is a new technology with excellent security, versatility, and immunity to hacking.
                                    </p>
                                </div>
                            </div>
                            <Link
                                ref={rightBtnRef}
                                href="/coretech/fingervein"
                                className={styles["coretechnology-right-text-wrapper-bottom"]}
                            >
                                <span>How Finger Vein Authentication Works</span>
                            </Link>
                        </div>
                        <div className={styles["img"]}>
                            <Image
                                src="/images/companyoverview/coretechnology/coretechnology-right.png"
                                alt="Finger Vein Authentication Technology"
                                fill={true}
                                priority
                                className={styles["img"]}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Coretechnology;