"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./requestademo.module.css";

const RequestADemo = ({
  heading     = "Ready to integrate P2N2?",
  description = "Discover how ETUNNEL's AI Engine P2N2 can transform your biometric security infrastructure.",
  brochureUrl = "/brochures/etunnel.pdf",
}) => {
  const wrapperRef     = useRef(null);
  const headingRef     = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef     = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        // ── Heading + description + buttons — fade up stagger ──
        gsap.from(
          [headingRef.current, descriptionRef.current, buttonsRef.current],
          {
            opacity: 0,
            y: 40,
            duration: 0.75,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top 80%",
            },
          }
        );

      }, wrapperRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <div className={styles["integrate-wrapper"]} ref={wrapperRef}>
      <div className={styles["integrate-content"]}>

        <h2 ref={headingRef}>{heading}</h2>
        <p  ref={descriptionRef}>{description}</p>

        <div className={styles["integrate-buttons"]} ref={buttonsRef}>

          <Link href="/contact" className={styles["btn-dark"]}>
            <span className={styles["stair"]}></span>
            <span className={styles["stair"]}></span>
            <span className={styles["stair"]}></span>
            <span className={styles["stair"]}></span>
            <span>Request a Demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className={styles["btn-icon"]}>
              <path d="M4.16602 10H15.8327" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <a href={brochureUrl} download className={styles["btn-light"]}>
            <span className={styles["stair"]}></span>
            <span className={styles["stair"]}></span>
            <span className={styles["stair"]}></span>
            <span className={styles["stair"]}></span>
            <span>Download Brochure</span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default RequestADemo;