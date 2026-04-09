"use client";
import styles from './tagsbar.module.css';
import Image from 'next/image';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const logos = [
  { src: '/images/logos/coretrust.png',   alt: 'CoreTrust' },
  { src: '/images/logos/kica.png',        alt: 'KICA' },
  { src: '/images/logos/a3security.png',  alt: 'A3 Security' },
  { src: '/images/logos/lg.png',          alt: 'LG Electronics' },
  { src: '/images/logos/pps.png',         alt: 'Public Procurement Service' },
  { src: '/images/logos/daejeon.png',     alt: 'Daejeon University LINC' },
  { src: '/images/logos/koica.png',       alt: 'KOICA' },
];

const TagsBar = function () {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(
                itemsRef.current,
                { clipPath: "inset(0 100% 0 0)" },
                {
                    clipPath: "inset(0 0% 0 0)",
                    duration: 1.2,
                    ease: "power2.inOut",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        once: true,
                    },
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles['tagsbar-section']} ref={sectionRef}>
            <div className={styles['tagsbar-wrapper']}>
                <div className={styles['tagsbar-track']}>
                    {logos.map((logo, i) => (
                        <div
                            key={logo.alt}
                            className={styles['tagsbar-item']}
                            ref={(el) => (itemsRef.current[i] = el)}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill={true}
                                className={styles['tagsbar-img']}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TagsBar;