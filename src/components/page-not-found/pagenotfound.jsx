"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./pagenotfound.module.css";

const PageNotFound = function () {
  const wrapperRef = useRef(null);
  const codeRef    = useRef(null);
  const headingRef = useRef(null);
  const subRef     = useRef(null);
  const dividerRef = useRef(null);
  const actionRef  = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(codeRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 30,
          duration: 1.0,
        });

        tl.from(headingRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 40,
          duration: 1.1,
        }, "-=0.7");

        tl.from(dividerRef.current, {
          clipPath: "inset(0% 100% 0% 0%)",
          duration: 1.0,
        }, "-=0.6");

        tl.from(subRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 30,
          duration: 1.0,
        }, "-=0.6");

        tl.from(actionRef.current, {
          clipPath: "inset(0% 100% 0% 0%)",
          duration: 1.0,
          ease: "expo.out",
        }, "-=0.6");
      }, wrapperRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section ref={wrapperRef} className={styles["notfound-wrapper"]}>
      <div className={styles["notfound-main"]}>
        <span ref={codeRef} className={styles["notfound-code"]}>404</span>
        <h1 ref={headingRef} className={styles["notfound-heading"]}>
          Page Not Found
        </h1>
        <div ref={dividerRef} className={styles["divider"]}></div>
        <p ref={subRef} className={styles["notfound-subheading"]}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div ref={actionRef} className={styles["notfound-actions"]}>
          <Link href="/" className={styles["back-home"]}>
            <span className={styles["back-home-label"]}>Back to Home</span>
            <span className={styles["back-home-icon"]}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;