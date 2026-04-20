"use client";
import styles from "./newsmidia.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Newsmidia = function () {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const toggleRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightTopRef = useRef(null);
  const rightBottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        }
      });

      tl.fromTo(
        [titleRef.current, descRef.current, toggleRef.current],
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "power2.inOut", stagger: 0.15 }
      )
        .fromTo(leftCardRef.current,
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: "power2.inOut" },
          "-=0.6"
        )
        .fromTo(rightTopRef.current,
          { clipPath: "inset(0 0 0 100%)" },
          { clipPath: "inset(0 0 0 0%)", duration: 1.4, ease: "power2.inOut" },
          "-=1.1"
        )
        .fromTo(rightBottomRef.current,
          { clipPath: "inset(0 0 0 100%)" },
          { clipPath: "inset(0 0 0 0%)", duration: 1.4, ease: "power2.inOut" },
          "-=0.9"
        );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className={styles["newsmidia-wrapper"]} ref={sectionRef}>
        <div className={styles["newsmidia-top"]}>
          <div className={styles["newsmidia-top-tcontent"]}>
            <h2 ref={titleRef}>News & Media</h2>
          </div>
          <div className={styles["newsmidia-top-mcontent"]}>
            <p ref={descRef}>Introducing our news and media coverage from all over the world</p>
            <Link ref={toggleRef} href="/" className={styles["newsmidia-top-toggle"]}>
              <span>See More News</span>
            </Link>
          </div>
        </div>

        <div className={styles["newsmidia-bottom"]}>
          <div ref={leftCardRef} className={styles["newsmidia-bottom-left"]}>
            <div className={styles["newsmidia-bottom-left-img"]}>
              <Image src="/images/newsmidia/left.jpg" alt="Hero Image" fill priority className={styles["img"]} />
            </div>
            <div className={styles["newsmidia-bottom-left-text-wrapper"]}>
              <h4>"Eternal Opens a Passwordless Future": Global Export of Fingerprint Hardware Wallet</h4>
            </div>
          </div>

          <div className={styles["newsmidia-bottom-right"]}>
            <div ref={rightTopRef} className={styles["newsmidia-bottom-right-top"]}>
              <div className={styles["newsmidia-bottom-right-top-img"]}>
                <Image src="/images/newsmidia/right-top.jpg" alt="Hero Image" fill priority className={styles["img"]} />
              </div>
              <div className={styles["newsmidia-bottom-right-top-text"]}>
                <h4>Eternal Presents Finger Vein Authentication-Based PC Logon Solution</h4>
              </div>
            </div>

            <div ref={rightBottomRef} className={styles["newsmidia-bottom-right-bottom"]}>
              <div className={styles["newsmidia-bottom-right-bottom-img"]}>
                <Image src="/images/newsmidia/right-bottom.jpg" alt="Hero Image" fill priority className={styles["img"]} />
              </div>
              <div className={styles["newsmidia-bottom-right-bottom-text"]}>
                <h4>ETUNNEL wins contract to supply biometric smart cards for UN organizations</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsmidia;