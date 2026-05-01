"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./nextgeneration-autho.module.css";

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

const Nextgeneration = function () {
    const wrapperRef = useRef(null);
    const h2Ref = useRef(null);
    const p1Ref = useRef(null);
    const p2Ref = useRef(null);
    const extraPRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 80%",
                    once: true,
                }
            });

            // ------h2: letter by letter wave------
            const h2Chars = splitToChars(h2Ref.current);
            tl.from(h2Chars, {
                opacity: 0,
                y: 40,
                rotation: -10,
                transformOrigin: "50% 0%",
                duration: 0.3,
                stagger: {
                    each: 0.025,
                    ease: "power1.inOut",
                },
                ease: "power4.out",
            });

            // ------p1: letter by letter wave------
            const p1Chars = splitToChars(p1Ref.current);
            tl.from(p1Chars, {
                opacity: 0,
                y: 30,
                rotation: -8,
                transformOrigin: "50% 0%",
                duration: 0.45,
                stagger: {
                    each: 0.015,
                    ease: "power1.inOut",
                },
                ease: "power4.out",
            }, "-=0.2");

            // ------p2: letter by letter wave------
            const p2Chars = splitToChars(p2Ref.current);
            tl.from(p2Chars, {
                opacity: 0,
                y: 30,
                rotation: -8,
                transformOrigin: "50% 0%",
                duration: 0.45,
                stagger: {
                    each: 0.015,
                    ease: "power1.inOut",
                },
                ease: "power4.out",
            }, "-=0.2");

            // ------extra p: letter by letter wave------
            const extraChars = splitToChars(extraPRef.current);
            tl.from(extraChars, {
                opacity: 0,
                y: 30,
                rotation: -8,
                transformOrigin: "50% 0%",
                duration: 0.45,
                stagger: {
                    each: 0.015,
                    ease: "power1.inOut",
                },
                ease: "power4.out",
            }, "-=0.2");

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={wrapperRef} className={styles["nextgen-wrapper"]}>
                <div className={styles["nextget-main"]}>

                    {/* ------content wrapper------ */}
                    <div className={styles["nextgen-content"]}>

                        <div className={styles["nextgen-heading"]}>
                            <h2 ref={h2Ref}>
                                The finger vein authentication technology developed by ETUNNEL is a new technology
                                with excellent security, versatility, and immunity to hacking.
                            </h2>
                        </div>

                        <div className={styles["nextgen-description"]}>
                            <p ref={p1Ref}>
                                ETUNNEL has filed global patents in the US, Japan, Europe, South Korea, and more. The technology is currently being used by the Ministry of
                                Defense, government offices, and various companies.
                            </p>
                        </div>

                        <div className={styles["nextgen-description"]}>
                            <p ref={p2Ref}>
                                Passwords and fingerprints have long been used for identity verification, but several issues with these methods have been identified. Finger vein
                                authentication works by verifying the vein pattern beneath the skin, making it virtually impossible to replicate.
                            </p>
                        </div>

                    </div>

                    {/* ------extra------ */}
                    <div className={styles["nextgen-extra"]}>
                        <p ref={extraPRef}>
                            With its excellent security, it is replacing traditional methods and emerging as the best alternative to prevent hacking and cybercrimes.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Nextgeneration;