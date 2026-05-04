"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./kisa-certified.module.css";

gsap.registerPlugin(ScrollTrigger);

const Kisacertified = () => {
    const wrapperRef = useRef(null);
    const h2Ref = useRef(null);
    const pRef = useRef(null);
    const btnDarkRef = useRef(null);
    const btnLightRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(h2Ref.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: h2Ref.current,
                    start: "top 85%",
                    once: true,
                }
            });

            gsap.from(pRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
                ease: "power4.out",
                delay: 0.15,
                scrollTrigger: {
                    trigger: pRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

            gsap.from(btnDarkRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 20,
                duration: 1.0,
                ease: "power4.out",
                delay: 0.3,
                scrollTrigger: {
                    trigger: btnDarkRef.current,
                    start: "top 88%",
                    once: true,
                }
            });

            gsap.from(btnLightRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 20,
                duration: 1.0,
                ease: "power4.out",
                delay: 0.45,
                scrollTrigger: {
                    trigger: btnLightRef.current,
                    start: "top 88%",
                    once: true,
                }
            });

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={wrapperRef} className={styles["kisacertified-wrapper"]}>

            <div className={styles["kisacertified-content"]}>

                <h2 ref={h2Ref}>Get KISA-Certified Security</h2>

                <p ref={pRef}>
                    Discover how ETUNNEL's KISA-certified biometric solutions can meet your compliance requirements and secure your infrastructure.
                </p>

                <div className={styles["kisacertified-buttons"]}>

                    {/* Black Button */}
                    <Link ref={btnDarkRef} href="/contact" className={styles["btn-dark"]}>
                        <span className={styles["stair"]}></span>
                        <span className={styles["stair"]}></span>
                        <span className={styles["stair"]}></span>
                        <span className={styles["stair"]}></span>
                        <span>Request a Demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16602 10H15.8327" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>

                    {/* Light Button */}
                    <Link ref={btnLightRef} href="/brochures/demo.pdf"
                            download="ETUNNEL-Brochure.pdf" className={styles["btn-light"]}>
                        <span className={styles["stair"]}></span>
                        <span className={styles["stair"]}></span>
                        <span className={styles["stair"]}></span>
                        <span className={styles["stair"]}></span>
                        <span>Download Brochure</span>
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default Kisacertified;