"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./familysite.module.css";

gsap.registerPlugin(ScrollTrigger);

const Familysite = () => {
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
    <section ref={wrapperRef} className={styles["familysite-wrapper"]}>
      <div className={styles["familysite-img"]}>
        <Image
          src="/images/about/familysite/familysite.png"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["familysite-img-overlay"]}>
          <div className={styles["familysite-img-overlay-text"]}>
            <div className={styles["familysite-img-overlay-text-top"]}>
              <div className={styles["familysite-img-overlay-text-top-1"]}>
                <h3 ref={h3Ref}>FAMILY SITE</h3>
                <h2 ref={h2Ref}>G-KNOT</h2>
              </div>

              <div className={styles["familysite-img-overlay-text-top-2"]}>
                <p ref={pRef}>
                  ETUNNEL's partner G-Knot enhances physical access, blockchain
                  wallet, data, and password security through exclusive
                  technology. At the forefront of technological access
                  protection, we are creating a safe and convenient digital
                  environment.
                </p>
              </div>
            </div>

            <Link
              ref={btnRef}
              href="/"
              className={styles["familysite-img-overlay-text-bottom"]}
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Familysite;