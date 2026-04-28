// "use client";
// import Image from 'next/image';
// import styles from "./hero.module.css";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Hero = function () {
//     const imgRef = useRef(null);
//     const headingRef = useRef(null);
//     const subtextRef = useRef(null);
//     const buttonRef = useRef(null);

//     useEffect(() => {
//     const ctx = gsap.context(() => {

//         const tl = gsap.timeline();

//         tl.fromTo(imgRef.current,
//             { scale: 1.04, opacity: 0 },
//             { scale: 1, opacity: 1, duration: 2.5, ease: "power1.inOut" }
//         )
//         .fromTo(
//             headingRef.current.querySelectorAll("span"),
//             { opacity: 0, y: "80%" },
//             { opacity: 1, y: "0%", duration: 1, ease: "power2.inOut", stagger: 0.1 },
//             "-=1.6"
//         )
//         .fromTo(subtextRef.current,
//             { opacity: 0 },
//             { opacity: 1, duration: 1.2, ease: "power1.inOut" },
//             "-=0.3"
//         )
//         .fromTo(buttonRef.current,
//             { opacity: 0, y: 10 },
//             { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
//             "-=0.6"
//         );

//     });
//     return () => ctx.revert();
//     }, []);

//     const headingWords = "Secure Identity. Zero Compromise.".split(" ");

//     return (
//         <section className={styles["hero-section"]}>
//             <div className={styles["hero-section-wrapper"]}>

//                 <div ref={imgRef} className={styles["hero-section-img"]} style={{ opacity: 0 }}>
//                     <Image
//                         src="/images/hero.png"
//                         alt="Hero Image"
//                         fill={true}
//                         priority
//                         className={styles["img"]}
//                     />
//                 </div>

//                 <div className={styles["hero-section-text-wrapper"]}>
//                     <p>
//                         <span
//                             ref={headingRef}
//                             style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center", gap: "0.3em" }}
//                         >
//                             {headingWords.map((word, i) => (
//                                 <span key={i} style={{ display: "inline-block", overflow: "hidden" }}>
//                                     {word}
//                                 </span>
//                             ))}
//                         </span>
//                     </p>

//                     <p ref={subtextRef} style={{ opacity: 0 }}>
//                         <span>ETUNNEL delivers AI-powered biometric authentication systems trusted by global institutions</span>
//                         <span>governments, enterprises, and critical infrastructure.</span>
//                     </p>

//                     <div ref={buttonRef} className={styles["request-a-demo"]} style={{ opacity: 0 }}>
//                         <span>Request a Demo</span>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Hero;

// ===================================================
"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./hero.module.css";

const Hero = function () {
    const imgRef = useRef(null);
    const headingRef = useRef(null);
    const subtextRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
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
            }
        `;

        document.body.appendChild(script);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(
                imgRef.current,
                { scale: 1.04, opacity: 0 },
                { scale: 1, opacity: 1, duration: 2.5, ease: "power1.inOut" }
            )
            .fromTo(
                headingRef.current.querySelectorAll("span"),
                { opacity: 0, y: "80%" },
                {
                    opacity: 1,
                    y: "0%",
                    duration: 1,
                    ease: "power2.inOut",
                    stagger: 0.1,
                },
                "-=1.6"
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

        return () => {
            document.body.removeChild(script);
            ctx.revert();
        };
    }, []);

    const headingWords = "Secure Identity. Zero Compromise.".split(" ");

    return (
        <section
            className={styles["hero-section"]}
            aria-label="Hero section - ETUNNEL biometric authentication"
        >
            <div className={styles["hero-section-wrapper"]}>

                <div
                    ref={imgRef}
                    className={styles["hero-section-img"]}
                    style={{ opacity: 0 }}
                    role="presentation"
                >
                    <canvas
                        id="hero-canvas"
                        className={styles["canvas"]}
                        aria-hidden="true"
                    />
                </div>

                <div className={styles["hero-section-text-wrapper"]}>

                    {/* ✅ h1 — main page heading, crawlable by Google */}
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

                    {/* ✅ p — description, Google reads this as page summary */}
                    <p ref={subtextRef} style={{ opacity: 0 }}>
                        ETUNNEL delivers AI-powered biometric authentication systems trusted by global institutions, governments, enterprises , and critical infrastructure.
                    </p>

                    {/* ✅ Link — crawlable CTA */}
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