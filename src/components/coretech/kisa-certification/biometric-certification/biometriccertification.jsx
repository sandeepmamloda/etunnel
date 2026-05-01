"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./biometriccertification.module.css";

gsap.registerPlugin(ScrollTrigger);

const Biometriccertification = function () {
    const wrapperRef = useRef(null);
    const paraRef = useRef(null);
    const headingRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth <= 600;

            gsap.from(paraRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: isMobile ? 24 : 40,
                duration: isMobile ? 0.9 : 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: paraRef.current,
                    start: "top 88%",
                    once: true,
                },
            });

            gsap.from(headingRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: isMobile ? 24 : 40,
                duration: isMobile ? 0.9 : 1.1,
                ease: "power4.out",
                delay: isMobile ? 0.1 : 0.15,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 88%",
                    once: true,
                },
            });

            gsap.from(rightRef.current, {
                clipPath: isMobile ? "inset(100% 0% 0% 0%)" : "inset(0% 100% 0% 0%)",
                y: isMobile ? 24 : 0,
                duration: isMobile ? 1 : 1.3,
                ease: "power4.out",
                delay: isMobile ? 0.2 : 0.3,
                scrollTrigger: {
                    trigger: rightRef.current,
                    start: "top 88%",
                    once: true,
                },
            });

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={wrapperRef} className={styles["biometriccertification-wrapper"]}>
                <div className={styles["biometriccertification-main"]}>
                    <div className={styles["biometriccertification-left"]}>
                        <p ref={paraRef}>
                            The <span>KISA Biometric Certification System</span> is an official certification program that objectively verifies the reliability and security of biometric technology. It comprehensively evaluates various biometric authentication technologies, including fingerprint, facial, and finger vein recognition, based on accuracy, tampering resistance, usability, and other factors, and <span>awards certification to solutions with excellent technology and quality.</span>
                        </p>
                        <h3 ref={headingRef}>
                            ETUNNEL's products have obtained KISA certification for finger vein and facial recognition-based biometric technology, officially proving their security and reliability required for application in public institutions and the financial sector.
                        </h3>
                    </div>
                    <div
                        ref={rightRef}
                        className={styles["biometriccertification-right"]}
                        style={{ overflow: "hidden" }}
                    >
                        <Image
                            src="/images/coretech/kisa-certification/biometric-certification/biometric-certification.png"
                            fill={true}
                            alt="P2N2 AI Biometric Engine module"
                            priority
                            className={styles["img"]}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Biometriccertification;