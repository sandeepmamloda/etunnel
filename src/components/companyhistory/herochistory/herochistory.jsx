"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./herochistory.module.css";

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

const Herochistory = function () {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const h1Ref = useRef(null);
    const pRef = useRef(null);
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
                duration: 0.85,
                stagger: {
                    each: 0.04,
                    ease: "power1.inOut",
                },
                ease: "power4.out",
            }, "-=0.2");

            // ------step 3: p wave — h1 khatam hone ke baad------
            const pChars = splitToChars(pRef.current);
            tl.from(pChars, {
                opacity: 0,
                y: 55,
                rotation: -8,
                transformOrigin: "50% 0%",
                duration: 0.65,
                stagger: {
                    each: 0.018,
                    ease: "power1.inOut",
                },
                ease: "power4.out",
            }, "-=0.1");

            // ------step 4: button — p khatam hone ke baad------
            tl.from(btnRef.current, {
                clipPath: "inset(0% 0% 100% 0%)",
                y: -15,
                opacity: 0,
                duration: 0.8,
                ease: "power4.out",
            }, "-=0.1");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className={styles["herochistory-section"]}
            >
                <div className={styles["herochistory-section-wrapper"]}>
                    <div className={styles["herochistory-section-img"]}>
                        <Image
                            ref={imgRef}
                            src="/images/companyhistory/herohistory/herohistory.jpg"
                            alt="Hero Image"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["herochistory-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["herochistory-section-text-wrapper"]}>
                        <h1 ref={h1Ref}>Company History</h1>
                        <p ref={pRef}>
                            Introducing ETUNNEL's journey towards a safer life with enhanced biometric recognition technology.
                        </p>
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

export default Herochistory;