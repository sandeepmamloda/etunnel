"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./herobiometric.module.css";

gsap.registerPlugin(ScrollTrigger);

const Herobiometric = function () {
    const wrapperRef = useRef(null);
    const h1Ref      = useRef(null);
    const pRef       = useRef(null);
    const btnRef     = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(h1Ref.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: h1Ref.current,
                    start: "top 85%",
                    once: true,
                },
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
                },
            });

            gsap.from(btnRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 20,
                duration: 1.0,
                ease: "power4.out",
                delay: 0.3,
                scrollTrigger: {
                    trigger: btnRef.current,
                    start: "top 88%",
                    once: true,
                },
            });

        }, wrapperRef);

        // ── Redirect se wapas aane par fix ──
        // gsap.from() ka immediateRender:true hone ki wajah se, jab bhi
        // ye component mount hota hai (jaise back-navigation ke baad),
        // text turant hide ho jaata hai aur ScrollTrigger par depend
        // karta hai ki wo sahi se detect kare ki hum already is section
        // tak scroll ho chuke hain. Browser scroll position ko
        // asynchronously restore karta hai — kabhi-kabhi GSAP ke
        // trigger-position calculate hone ke BAAD. Isse trigger galat
        // calculate ho jaata hai aur reveal kabhi fire nahi hota.
        // Fix: mount ke thodi der baad + window "load" par
        // ScrollTrigger.refresh() call karo, taaki positions dobara
        // sahi (final scroll + layout ke hisaab se) calculate ho jayein.
        const refresh = () => ScrollTrigger.refresh();
        const rafId = requestAnimationFrame(refresh);
        const timeoutId = setTimeout(refresh, 300);
        window.addEventListener("load", refresh);

        // ── Browser back/forward cache (bfcache) fix ──
        // Jab browser is page ko bfcache se restore karta hai (page
        // dubara mount nahi hota), "pageshow" event ke event.persisted
        // se pata chalta hai aur hum manually refresh trigger kar
        // sakte hain.
        const handlePageShow = (event) => {
            if (event.persisted) {
                ScrollTrigger.refresh();
            }
        };
        window.addEventListener("pageshow", handlePageShow);

        return () => {
            cancelAnimationFrame(rafId);
            clearTimeout(timeoutId);
            window.removeEventListener("load", refresh);
            window.removeEventListener("pageshow", handlePageShow);
            ctx.revert();
        };
    }, []);

    return (
        <>
            <section ref={wrapperRef} className={styles["herobiometric-section"]}>
                <div className={styles["herobiometric-section-wrapper"]}>
                    <div className={styles["herobiometric-section-img"]}>
                        <Image
                            src="/images/solutions/biometric-authentication-solutions/herobiometric/herobiometric.jpg"
                            alt="Hero Image"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["herobiometric-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["herobiometric-section-text-wrapper"]}>
                        <h1 ref={h1Ref}>Experience Perfect Authentication Security with ETUNNEL</h1>
                        <p ref={pRef}>
                            From biometric authentication to PKI solutions, we provide a secure digital environment with powerful security technology.
                        </p>
                        <Link ref={btnRef} href="/brochures/demo.pdf"
                            download="ETUNNEL-Brochure.pdf" className={styles["download-brocher"]}>
                            <span>Download Company Brochure</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Herobiometric;