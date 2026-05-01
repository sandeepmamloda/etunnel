"use client";
import gsap from "gsap";
import Image from 'next/image';
import { useEffect, useRef } from "react";
import styles from './tagsbar.module.css';

const logos = [
  { src: '/images/logos/coretrust.png',   alt: 'CoreTrust' },
  { src: '/images/logos/kica.png',        alt: 'KICA' },
  { src: '/images/logos/a3security.png',  alt: 'A3 Security' },
  { src: '/images/logos/lg.png',          alt: 'LG Electronics' },
  { src: '/images/logos/pps.png',         alt: 'Public Procurement Service' },
  { src: '/images/logos/daejeon.png',     alt: 'Daejeon University LINC' },
  { src: '/images/logos/koica.png',       alt: 'KOICA' },
];

const TagsBar = function ({ title }) {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ------title: pure clip path reveal------
            if (titleRef.current) {
                gsap.from(titleRef.current, {
                    clipPath: "inset(0% 0% 100% 0%)",
                    duration: 1.1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                        once: true,
                    }
                });
            }

            // ------logos: left se right curtain, staggered------
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
            {title && (
                <h2
                    ref={titleRef}
                    className={styles['tagsbar-title']}
                >
                    {title}
                </h2>
            )}
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