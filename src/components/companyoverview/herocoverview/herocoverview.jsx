"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./herocoverview.module.css";

gsap.registerPlugin(ScrollTrigger);

const Herocoverview = function () {
    const sectionRef = useRef(null);
    const h1Ref      = useRef(null);
    const btnRef     = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
                defaults: { ease: "power4.out" },
            });

            // ── 1. H1: clip-path bottom reveal ──
            tl.from(h1Ref.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
            });

            // ── 2. BUTTON: left-to-right clip wipe ──
            tl.from(btnRef.current, {
                clipPath: "inset(0% 100% 0% 0%)",
                duration: 0.9,
                ease: "expo.out",
            }, "-=0.6");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className={styles["herocoverview-section"]}
            >
                <div className={styles["herocoverview-section-wrapper"]}>
                    <div className={styles["herocoverview-section-img"]}>
                        <Image
                            src="/images/companyoverview/herocoverview/herocoverview.jpg"
                            alt="Company Overview - Biometric Authentication Solutions"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["herocoverview-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["herocoverview-section-text-wrapper"]}>
                        <h1 ref={h1Ref}>
                            Building a Safer Biometric Authentication Environment
                            Through Continuous R&D and Innovation
                        </h1>
                        <Link
                            ref={btnRef}
                            href="/"
                            className={styles["download-brocher"]}
                        >
                            <span>Download Company Brochure</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Herocoverview;