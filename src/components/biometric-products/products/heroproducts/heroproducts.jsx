"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./heroproducts.module.css";

gsap.registerPlugin(ScrollTrigger);

const Heroproducts = function () {
    const wrapperRef = useRef(null);
    const h1Ref = useRef(null);
    const pRef = useRef(null);
    const dataContainerRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(h1Ref.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: h1Ref.current,
                    start: "top 85%",
                    once: true,
                }
            });

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

            gsap.from(dataContainerRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 30,
                duration: 1.0,
                ease: "power4.out",
                delay: 0.3,
                scrollTrigger: {
                    trigger: dataContainerRef.current,
                    start: "top 88%",
                    once: true,
                }
            });

            gsap.from(btnRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 20,
                duration: 1.0,
                ease: "power4.out",
                delay: 0.45,
                scrollTrigger: {
                    trigger: btnRef.current,
                    start: "top 88%",
                    once: true,
                }
            });

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={wrapperRef} className={styles["heroproducts-section"]}>
                <div className={styles["heroproducts-section-wrapper"]}>
                    <div className={styles["heroproducts-section-img"]}>
                        <Image
                            src="/images/biometric-products/products/heroproducts/heroproducts.jpg"
                            alt="Company Overview - Biometric Authentication Solutions"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["heroproducts-section-img-overlay"]}></div>
                    </div>

                    <div className={styles["heroproducts-section-text-wrapper"]}>
                        <h1 ref={h1Ref}>Biometric Security Chosen by the World</h1>

                        <p ref={pRef}>
                            Protect the future with ETUNNEL's global biometric authentication solutions.
                            From finger vein terminals to AI-powered identity verification.
                        </p>

                        <div ref={dataContainerRef} className={styles["data-container"]}>
                            <div className={styles["content-box"]}>
                                <h2>8</h2>
                                <p>Products</p>
                            </div>
                            <div className={styles["content-box"]}>
                                <h2>3</h2>
                                <p>Biometric Types</p>
                            </div>
                            <div className={styles["content-box"]}>
                                <h2>KISA</h2>
                                <p>certified</p>
                            </div>
                        </div>

                        <Link ref={btnRef} href="/contact" className={styles["download-brocher"]}>
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Heroproducts;