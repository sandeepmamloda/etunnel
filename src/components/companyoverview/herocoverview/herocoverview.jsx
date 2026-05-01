"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./herocoverview.module.css";

gsap.registerPlugin(ScrollTrigger);

const splitToChars = (el) => {
    const text = el.innerText;
    el.innerHTML = text
        .split("")
        .map(char =>
            char === " "
                ? `<span style="display:inline-block;">&nbsp;</span>`
                : `<span style="display:inline-block;">${char}</span>`
        )
        .join("");
    return el.querySelectorAll("span");
};

const Herocoverview = function () {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const h1Ref = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                }
            });

            // ------step 1: image Ken Burns------
            tl.from(imgRef.current, {
                scale: 1.08,
                duration: 1.2,
                ease: "power2.out",
            });

            // ------step 2: h1 wave — image khatam hone ke baad------
            const h1Chars = splitToChars(h1Ref.current);
            tl.from(h1Chars, {
                opacity: 0,
                y: 55,
                rotation: -12,
                transformOrigin: "50% 0%",
                duration: 0.7,
                stagger: {
                    each: 0.04,
                    ease: "power1.inOut",
                },
                ease: "power4.out",
            }, "-=0.3"); // image ke last 0.3s ke saath overlap

            // ------step 3: button — h1 khatam hone ke baad------
            tl.from(btnRef.current, {
                clipPath: "inset(0% 0% 100% 0%)",
                y: -15,
                opacity: 0,
                duration: 0.8,
                ease: "power4.out",
            }, "-=0.2"); // h1 ke last 0.2s ke saath overlap

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
                            ref={imgRef}
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