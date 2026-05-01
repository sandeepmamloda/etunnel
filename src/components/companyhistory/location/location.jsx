"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./location.module.css";

gsap.registerPlugin(ScrollTrigger);

const Location = function () {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const imgWrapperRef = useRef(null);
    const cardTitleRef = useRef(null);
    const cardAddressRef = useRef(null);
    const cardContentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth <= 800;

            // ------heading: Global Network wala exact------
            gsap.from(headingRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 40,
                duration: 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

            // ------image: left se right curtain------
            gsap.from(imgWrapperRef.current, {
                clipPath: "inset(0% 100% 0% 0%)",
                duration: 1.4,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: imgWrapperRef.current,
                    start: "top 80%",
                    once: true,
                }
            });

            // ------right content block------
            // mobile pe: bottom se top (kyunki stacked hai)
            // desktop pe: right se left curtain
            gsap.from(cardContentRef.current, {
                clipPath: isMobile
                    ? "inset(100% 0% 0% 0%)"
                    : "inset(0% 0% 0% 100%)",
                y: isMobile ? 30 : 0,
                duration: 1.4,
                ease: "power4.out",
                delay: isMobile ? 0.1 : 0.2,
                scrollTrigger: {
                    trigger: cardContentRef.current,
                    start: isMobile ? "top 90%" : "top 80%",
                    once: true,
                }
            });

            // ------card title------
            gsap.from(cardTitleRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 30,
                duration: 1.1,
                ease: "power4.out",
                delay: isMobile ? 0.25 : 0.5,
                scrollTrigger: {
                    trigger: cardTitleRef.current,
                    start: "top 88%",
                    once: true,
                }
            });

            // ------card address------
            gsap.from(cardAddressRef.current, {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 30,
                duration: 1.1,
                ease: "power4.out",
                delay: isMobile ? 0.4 : 0.7,
                scrollTrigger: {
                    trigger: cardAddressRef.current,
                    start: "top 88%",
                    once: true,
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles["location-section"]}>
            <div className={styles["location-section-wrapper"]}>

                {/* ------heading------ */}
                <h2 ref={headingRef} className={styles["location-heading"]}>
                    Our Location
                </h2>

                {/* ------card------ */}
                <div className={styles["location-card"]}>

                    {/* ------left: image + map button------ */}
                    <div
                        ref={imgWrapperRef}
                        className={styles["location-card-img-wrapper"]}
                    >
                        <Image
                            src="/images/companyhistory/location/location.jpg"
                            alt="Head Office Location"
                            fill
                            className={styles["location-card-img"]}
                        />
                        <a
                        
                            href="https://www.google.com/maps?q=1011-1013+Building+G+H+Business+Park+26+Beopwon-ro+9-gil+Songpa-gu+Seoul+05836+South+Korea"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles["location-card-map-btn"]}
                        >
                            View on Google Maps
                        </a>
                    </div>

                    {/* ------right: address------ */}
                    <div
                        ref={cardContentRef}
                        className={styles["location-card-content"]}
                    >
                        <h3
                            ref={cardTitleRef}
                            className={styles["location-card-title"]}
                        >
                            HEAD OFFICE
                        </h3>
                        <p
                            ref={cardAddressRef}
                            className={styles["location-card-address"]}
                        >
                            #1011-1013, Building G, H Business Park, 26 Beopwon-ro 9-gil,
                            Songpa-gu, Seoul 05836, South Korea
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Location;