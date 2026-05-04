"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./heroabout.module.css";

gsap.registerPlugin(ScrollTrigger);

const Heroabout = function () {
    const wrapperRef = useRef(null);
    const h1Ref      = useRef(null);
    const btnRef     = useRef(null);

    // ── Liquid Background ──
    useEffect(() => {
        const script = document.createElement("script");

        script.type = "module";
        script.innerHTML = `
            import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.27/build/backgrounds/liquid1.min.js';

            const app = LiquidBackground(document.getElementById('canvas'));

            app.loadImage('/images/about/heroabout/hero-about.jpg');
            app.liquidPlane.material.metalness = 0.75;
            app.liquidPlane.material.roughness = 0.25;
            app.liquidPlane.uniforms.displacementScale.value = 5;
            app.setRain(false);
        `;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // ── GSAP clipPath animations ──
    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();

            const ctx = gsap.context(() => {

                // h1
                gsap.from(h1Ref.current, {
                    clipPath: "inset(100% 0% 0% 0%)",
                    y: 40,
                    duration: 1.1,
                    ease: "power4.out",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: h1Ref.current,
                        start: "top 90%",
                        once: true,
                    },
                });

                // button
                gsap.from(btnRef.current, {
                    clipPath: "inset(100% 0% 0% 0%)",
                    y: 20,
                    duration: 1.0,
                    ease: "power4.out",
                    delay: 0.3,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: btnRef.current,
                        start: "top 92%",
                        once: true,
                    },
                });

            }, wrapperRef);

            return () => {
                ctx.revert();
                ScrollTrigger.getAll().forEach((t) => t.kill());
            };
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            ref={wrapperRef}
            className={styles["heroabout-section"]}
            aria-label="About ETUNNEL - Biometric Authentication"
        >
            <div className={styles["heroabout-section-wrapper"]}>

                <div
                    className={styles["heroabout-section-img"]}
                    role="presentation"
                >
                    <canvas
                        id="canvas"
                        className={styles["canvas"]}
                        aria-hidden="true"
                    />
                    <div className={styles["heroabout-section-img-overlay"]} aria-hidden="true" />
                </div>

                <div className={styles["heroabout-section-text-wrapper"]}>
                    <h1 ref={h1Ref}>
                        Building a Safer Biometric Authentication Environment<br />
                        Through Continuous R&amp;D and Innovation
                    </h1>

                    <div ref={btnRef} className={styles["request-a-demo"]}>
                        <Link
                            href="/brochures/demo.pdf"
                            download="ETUNNEL-Brochure.pdf"
                            className={styles["request-a-demo-link"]}
                            aria-label="Download ETUNNEL Company Brochure"
                        >
                            <span>Download Company Brochure</span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Heroabout;