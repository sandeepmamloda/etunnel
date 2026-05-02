"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./biometric-solutions.module.css";

gsap.registerPlugin(ScrollTrigger);

const Biometricsolutions = () => {
  const wrapperRef = useRef(null);
  const h3Ref      = useRef(null);
  const h2Ref      = useRef(null);
  const pRef       = useRef(null);
  const btnRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(h3Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: h3Ref.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(h2Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(pRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 30,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(btnRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 20,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.45,
        scrollTrigger: {
          trigger: btnRef.current,
          start: "top 88%",
          once: true,
        },
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef} className={styles["biometric-solutions-wrapper"]}>
      <div className={styles["biometric-solutions-img"]}>
        <Image
          src="/images/solutions/solutions/biometric-authentication-solutions/biometric-authentication-solutions.jpg"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["biometric-solutions-img-overlay"]}>
          <div className={styles["biometric-solutions-img-overlay-text"]}>
            <div className={styles["biometric-solutions-img-overlay-text-top"]}>
              <div className={styles["biometric-solutions-img-overlay-text-top-1"]}>
                <h3 ref={h3Ref}>Solution</h3>
                <h2 ref={h2Ref}>Biometric Authentication Solution</h2>
              </div>

              <div className={styles["biometric-solutions-img-overlay-text-top-2"]}>
                <p ref={pRef}>We provide strong <span>biometric authentication-based security</span> through the <span>Smart ID project, PC logon, ID verification solution</span>, and <span>GKNOT Wallet</span>. Build a trusted security system with a more secure authentication environment and easy access control.</p>
              </div>
            </div>
            <Link
              ref={btnRef}
              href="/solutions/biometric-authentication-solutions"
              className={styles["biometric-solutions-img-overlay-text-bottom"]}
            >
              <span>See More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biometricsolutions;