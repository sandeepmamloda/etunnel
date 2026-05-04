"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./herosolutions.module.css";

gsap.registerPlugin(ScrollTrigger);

const Herosolutions = function () {
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
            <section ref={wrapperRef} className={styles["herosolutions-section"]}>
                <div className={styles["herosolutions-section-wrapper"]}>
                    <div className={styles["herosolutions-section-img"]}>
                        <Image
                            src="/images/solutions/solutions/herosolutions/herosolutions.jpg"
                            alt="Hero Image"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["herosolutions-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["herosolutions-section-text-wrapper"]}>
                        <h1 ref={h1Ref}>Experience Perfect Authentication Security with ETUNNEL</h1>
                        <p ref={pRef}>
                            From biometric authentication to PKI solutions, we provide a secure digital environment with powerful security technology.
                        </p>
                        <Link ref={btnRef} href="/brochures/demo.pdf"
                            download="ETUNNEL-Brochure.pdf" className={styles["download-brocher"]}>
                            <span>Download Company Brochure</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Herosolutions;