"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./nextgeneration-autho.module.css";

gsap.registerPlugin(ScrollTrigger);

const Nextgeneration = function () {
    const wrapperRef = useRef(null);
    const h2Ref      = useRef(null);
    const p1Ref      = useRef(null);
    const p2Ref      = useRef(null);
    const extraPRef  = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 80%",
                    once: true,
                },
                defaults: { ease: "power4.out" },
            });

            // ── h2: clip-path bottom reveal ──
            tl.from(h2Ref.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.2,
            });

            // ── p1: clip-path bottom reveal ──
            tl.from(p1Ref.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 30,
                duration: 1.1,
            }, "-=0.7");

            // ── p2: clip-path bottom reveal ──
            tl.from(p2Ref.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 30,
                duration: 1.1,
            }, "-=0.7");

            // ── extra p: clip-path bottom reveal ──
            tl.from(extraPRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 30,
                duration: 1.1,
            }, "-=0.7");

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={wrapperRef} className={styles["nextgen-wrapper"]}>
                <div className={styles["nextget-main"]}>

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