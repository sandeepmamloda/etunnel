"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./heropk.module.css";

gsap.registerPlugin(ScrollTrigger);

const Heropk = function () {
    const wrapperRef = useRef(null);
    const h1Ref      = useRef(null);
    const pRef       = useRef(null);
    const btnRef     = useRef(null);

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
                },
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
                },
            });

            gsap.from(btnRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 20,
                duration: 1.0,
                ease: "power4.out",
                delay: 0.3,
                scrollTrigger: {
                    trigger: btnRef.current,
                    start: "top 88%",
                    once: true,
                },
            });

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={wrapperRef} className={styles["heropk-section"]}>
                <div className={styles["heropk-section-wrapper"]}>
                    <div className={styles["heropk-section-img"]}>
                        <Image
                            src="/images/solutions/pklsolutions/heropk/heropk.jpg"
                            alt="Hero Image"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["heropk-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["heropk-section-text-wrapper"]}>
                        <h1 ref={h1Ref}>The Standard of Trust for the Digital Age, PKI Security Solution</h1>
                        <p ref={pRef}>
                            Our PKI-based security technology creates a reliable digital authentication environment.
                        </p>
                        <Link ref={btnRef} href="/contact" className={styles["download-brocher"]}>
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Heropk;