"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./heronewsmedia.module.css";

gsap.registerPlugin(ScrollTrigger);

const Heronewsmedia = function () {
    const sectionRef = useRef(null);
    const h1Ref      = useRef(null);
    const pRef       = useRef(null);
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

            // ── 2. P: clip-path bottom reveal ──
            tl.from(pRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
            }, "-=0.85");

            // ── 3. BUTTON: left-to-right clip wipe ──
            tl.from(btnRef.current, {
                clipPath: "inset(0% 100% 0% 0%)",
                duration: 0.9,
                ease: "expo.out",
            }, "-=0.6");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles["heronewsmedia-section"]}>
            <div className={styles["heronewsmedia-section-wrapper"]}>

                <div className={styles["heronewsmedia-section-img"]}>
                    <Image
                        src="/images/newsmidia-2/hero-n-m.jpg"
                        alt="Hero Image"
                        fill
                        priority
                        className={styles["img"]}
                    />
                    <div className={styles["heronewsmedia-section-img-overlay"]} />
                </div>

                <div className={styles["heronewsmedia-section-text-wrapper"]}>
                    <h1 ref={h1Ref}>We share our Story</h1>
                    <p ref={pRef}>
                        A media space that embodies our technology, philosophy, and future.
                    </p>
                    <Link
                        ref={btnRef}
                        href="/brochures/demo.pdf"
                        download="ETUNNEL-Brochure.pdf"
                        className={styles["download-brocher"]}
                    >
                        <span>Download Company Brochure</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Heronewsmedia;