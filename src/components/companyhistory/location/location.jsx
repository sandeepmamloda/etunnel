"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./location.module.css";

const Location = function () {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const trigger = sectionRef.current;
        const imgEl = imgRef.current;
        const contentEl = contentRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // image — turant reveal
                        imgEl.style.clipPath = "inset(0 0 0% 0)";

                        // content — thoda baad
                        setTimeout(() => {
                            contentEl.style.clipPath = "inset(0 0 0% 0)";
                        }, 200);

                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
        );

        if (trigger) observer.observe(trigger);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles["location-section"]}>
            <div ref={sectionRef} className={styles["location-section-wrapper"]}>

                {/* ------heading------ */}
                <h2 className={styles["location-heading"]}>Our Location</h2>

                {/* ------card------ */}
                <div className={styles["location-card"]}>

                    {/* ------left: image + map button------ */}
                    <div
                        ref={imgRef}
                        className={styles["location-card-img-wrapper"]}
                        style={{
                            clipPath: "inset(0 0 100% 0)",
                            transition: "clip-path 1.0s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
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
                        ref={contentRef}
                        className={styles["location-card-content"]}
                        style={{
                            clipPath: "inset(0 0 100% 0)",
                            transition: "clip-path 1.0s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                    >
                        <h3 className={styles["location-card-title"]}>HEAD OFFICE</h3>
                        <p className={styles["location-card-address"]}>
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