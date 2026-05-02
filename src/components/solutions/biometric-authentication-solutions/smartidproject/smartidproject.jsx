"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./smartidproject.module.css";

gsap.registerPlugin(ScrollTrigger);

const Smartidproject = () => {
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
    <section ref={wrapperRef} className={styles["smartidproject-wrapper"]}>
      <div className={styles["smartidproject-img"]}>
        <Image
          src="/images/solutions/biometric-authentication-solutions/smartidproject/smartidproject.png"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["smartidproject-img-overlay"]}>
          <div className={styles["smartidproject-img-overlay-text"]}>
            <div className={styles["smartidproject-img-overlay-text-top"]}>
              <div className={styles["smartidproject-img-overlay-text-top-1"]}>
                <h3 ref={h3Ref}>Solution</h3>
                <h2 ref={h2Ref}>Smart ID Project</h2>
              </div>

              <div className={styles["smartidproject-img-overlay-text-top-2"]}>
                <p ref={pRef}>It is an innovative authentication solution that combines biometric authentication and smart ID technology. Through fingerprint registration and security features, fast and secure identity verification is possible without a password</p>
              </div>
            </div>

            <Link
              ref={btnRef}
              href="/"
              className={styles["smartidproject-img-overlay-text-bottom"]}
            >
              <span>See More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smartidproject;