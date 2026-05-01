"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";

const Hero = function () {
    const headingRef = useRef(null);
    const subtextRef = useRef(null);
    const buttonRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // ✅ Check viewport width
        const checkMobile = () => setIsMobile(window.innerWidth <= 1026);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return; // mobile pe canvas nahi, script bhi nahi

        const script = document.createElement("script");
        script.type = "module";
        script.innerHTML = `
            import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.27/build/backgrounds/liquid1.min.js';

            const canvas = document.getElementById('hero-canvas');
            if (canvas) {
                const app = LiquidBackground(canvas);
                app.loadImage('/images/hero.png');
                app.liquidPlane.material.metalness = 0.6;
                app.liquidPlane.material.roughness = 0.3;
                app.liquidPlane.uniforms.displacementScale.value = 2;
                app.setRain(false);

                // ✅ Touch → Mouse fix for tablet
                function touchToMouse(e) {
                    e.preventDefault();
                    const touch = e.touches[0] || e.changedTouches[0];
                    const map = { touchstart: 'mousedown', touchmove: 'mousemove', touchend: 'mouseup' };
                    canvas.dispatchEvent(new MouseEvent(map[e.type], {
                        bubbles: true, cancelable: true,
                        clientX: touch.clientX, clientY: touch.clientY,
                        screenX: touch.screenX, screenY: touch.screenY,
                        button: 0, buttons: e.type === 'touchend' ? 0 : 1,
                    }));
                }
                canvas.addEventListener('touchstart', touchToMouse, { passive: false });
                canvas.addEventListener('touchmove',  touchToMouse, { passive: false });
                canvas.addEventListener('touchend',   touchToMouse, { passive: false });
            }
        `;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) document.body.removeChild(script);
        };
    }, [isMobile]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // ✅ imgRef animation REMOVED — yahi brightness ka cause tha
            tl.fromTo(
                headingRef.current.querySelectorAll("span"),
                { opacity: 0, y: "80%" },
                {
                    opacity: 1,
                    y: "0%",
                    duration: 1,
                    ease: "power2.inOut",
                    stagger: 0.1,
                }
            )
            .fromTo(
                subtextRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1.2, ease: "power1.inOut" },
                "-=0.3"
            )
            .fromTo(
                buttonRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
                "-=0.6"
            );
        });

        return () => ctx.revert();
    }, []);

    const headingWords = "Secure Identity. Zero Compromise.".split(" ");

    return (
        <section
            className={styles["hero-section"]}
            aria-label="Hero section - ETUNNEL biometric authentication"
        >
            <div className={styles["hero-section-wrapper"]}>

                {/* ✅ 1026px+ pe canvas, usse kam pe simple image */}
                {isMobile ? (
                    <img
                        src="/images/hero.png"
                        alt="ETUNNEL hero background"
                        className={styles["hero-section-img-static"]}
                    />
                ) : (
                    <canvas
                        id="hero-canvas"
                        className={styles["canvas"]}
                        aria-hidden="true"
                    />
                )}

                <div className={styles["hero-section-text-wrapper"]}>

                    <h1>
                        <span
                            ref={headingRef}
                            style={{
                                display: "inline-flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: "0.3em",
                            }}
                        >
                            {headingWords.map((word, i) => (
                                <span key={i} style={{ display: "inline-block", overflow: "hidden" }}>
                                    {word}
                                </span>
                            ))}
                        </span>
                    </h1>

                    <p ref={subtextRef} style={{ opacity: 0 }}>
                        ETUNNEL delivers AI-powered biometric authentication systems trusted by global institutions, governments, enterprises, and critical infrastructure.
                    </p>

                    <div
                        ref={buttonRef}
                        className={styles["request-a-demo"]}
                        style={{ opacity: 0 }}
                    >
                        <Link href="/contact" aria-label="Request a demo of ETUNNEL biometric authentication">
                            <span>Request a Demo</span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;