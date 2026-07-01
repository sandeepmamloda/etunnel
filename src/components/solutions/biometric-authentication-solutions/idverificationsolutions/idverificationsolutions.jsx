"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./idverificationsolutions.module.css";

gsap.registerPlugin(ScrollTrigger);

const Idverificationsolutions = () => {
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

    // ── Redirect se wapas aane par fix ──
    // gsap.from() ka immediateRender:true hone ki wajah se, jab bhi ye
    // component mount hota hai (jaise back-navigation ke baad), text
    // turant hide ho jaata hai aur ScrollTrigger par depend karta hai
    // ki wo sahi se detect kare ki hum already is section tak scroll
    // ho chuke hain. Browser scroll position ko asynchronously restore
    // karta hai — kabhi-kabhi GSAP ke trigger-position calculate hone
    // ke BAAD. Isse trigger galat calculate ho jaata hai aur reveal
    // kabhi fire nahi hota — bilkul yehi wo section hai jisse aap
    // "See More" click karke gaye the.
    // Fix: mount ke thodi der baad + window "load" par
    // ScrollTrigger.refresh() call karo, taaki positions dobara sahi
    // (final scroll + layout ke hisaab se) calculate ho jayein.
    const refresh = () => ScrollTrigger.refresh();
    const rafId = requestAnimationFrame(refresh);
    const timeoutId = setTimeout(refresh, 300);
    window.addEventListener("load", refresh);

    // ── Browser back/forward cache (bfcache) fix ──
    const handlePageShow = (event) => {
      if (event.persisted) {
        ScrollTrigger.refresh();
      }
    };
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      window.removeEventListener("load", refresh);
      window.removeEventListener("pageshow", handlePageShow);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={wrapperRef} className={styles["idverificationsolutions-wrapper"]}>
      <div className={styles["idverificationsolutions-img"]}>
        <Image
          src="/images/solutions/biometric-authentication-solutions/idverificationsolutions/idverificationsolutions.png"
          alt="Hero Image"
          fill
          priority
          className={styles.img}
        />

        <div className={styles["idverificationsolutions-img-overlay"]}>
          <div className={styles["idverificationsolutions-img-overlay-text"]}>
            <div className={styles["idverificationsolutions-img-overlay-text-top"]}>
              <div className={styles["idverificationsolutions-img-overlay-text-top-1"]}>
                <h3 ref={h3Ref}>Solution</h3>
                <h2 ref={h2Ref}>ID Verification Solution</h2>
              </div>

              <div className={styles["idverificationsolutions-img-overlay-text-top-2"]}>
                <p ref={pRef}>It is an identity verification solution that utilizes biometric authentication and AI-based technology. It prevents tampering and forgery through real-time verification, providing a fast and secure identity authentication environment.</p>
              </div>
            </div>

            <Link
              ref={btnRef}
              href="/solutions/bas-id-verification-solution"
              className={styles["idverificationsolutions-img-overlay-text-bottom"]}
            >
              <span>See More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Idverificationsolutions;