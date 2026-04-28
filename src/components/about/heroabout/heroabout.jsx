"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./heroabout.module.css";

const Heroabout = function () {

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

    return (
        <section
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
                    <h1>
                        Building a Safer Biometric Authentication Environment<br />
                        Through Continuous R&amp;D and Innovation
                    </h1>

                    <div className={styles["request-a-demo"]}>
                        <Link
                            href="/"
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