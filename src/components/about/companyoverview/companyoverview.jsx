"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./companyoverview.module.css";

gsap.registerPlugin(ScrollTrigger);

const Companyoverview = () => {
  const wrapperRef = useRef(null);
  const h4Ref      = useRef(null);
  const h2Ref      = useRef(null);
  const h3Ref      = useRef(null);
  const pRef       = useRef(null);
  const btnRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(h4Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: h4Ref.current,
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

      gsap.from(h3Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 40,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: h3Ref.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(pRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: 30,
        duration: 1.0,
        ease: "power4.out",
        delay: 0.45,
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
        delay: 0.6,
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
    <section ref={wrapperRef} className={styles["companyoverview-wrapper"]}>
      <div className={styles["companyoverview-img"]}>
        <Image
          src="/images/about/companyoverview/companyoverview.png"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["companyoverview-img-overlay"]}>
          <div className={styles["companyoverview-img-overlay-text"]}>
            <div className={styles["companyoverview-img-overlay-text-top"]}>
              <div className={styles["companyoverview-img-overlay-text-top-1"]}>
                <h4 ref={h4Ref}>Company Overview</h4>
                <h2 ref={h2Ref}>ETUNNEL</h2>
              </div>

              <div className={styles["companyoverview-img-overlay-text-top-2"]}>
                <h3 ref={h3Ref}>Pioneering the future of biometric security.</h3>

                <div className={styles["companyoverview-img-overlay-text-top-2-inner"]}>
                  <p ref={pRef}>
                    Enhanced Biometric Tunnel, the innovative symbol of ETUNNEL.
                    Maximizing security and convenience with advanced biometric
                    recognition technology.
                  </p>
                </div>
              </div>
            </div>

            <Link
              ref={btnRef}
              href="/company/overview"
              className={styles["companyoverview-img-overlay-text-bottom"]}
            >
              <p>About us</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companyoverview;