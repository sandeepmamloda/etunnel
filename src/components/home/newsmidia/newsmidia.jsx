"use client";
import styles from "./newsmidia.module.css";
import Image from "next/image";
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

      // Title + desc + toggle - bottom to top
      tl.fromTo(
        [titleRef.current, descRef.current, toggleRef.current],
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "power2.inOut", stagger: 0.15 }
      )
      // Left card - left to right
      .fromTo(leftCardRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: "power2.inOut" },
        "-=0.6"
      )
      // Right top - right to left
      .fromTo(rightTopRef.current,
        { clipPath: "inset(0 0 0 100%)" },
        { clipPath: "inset(0 0 0 0%)", duration: 1.4, ease: "power2.inOut" },
        "-=1.1"
      )
      // Right bottom - right to left
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
      <div className={styles["newsmidia-wrapper"]} ref={sectionRef}>
        <div className={styles["newsmidia-top"]}>
          <div className={styles["newsmidia-top-tcontent"]}>
            <p ref={titleRef}>News & Media</p>
          </div>
          <div className={styles["newsmidia-top-mcontent"]}>
            <p ref={descRef}>Introducing our news and media coverage from all over the world</p>
            <div ref={toggleRef} className={styles["newsmidia-top-toggle"]}>
              <p>See More News</p>
            </div>
          </div>
        </div>

        <div className={styles["newsmidia-bottom"]}>
          <div ref={leftCardRef} className={styles["newsmidia-bottom-left"]}>
            <div className={styles["newsmidia-bottom-left-img"]}>
              <Image src="/images/newsmidia/left.jpg" alt="Hero Image" fill priority className={styles["img"]} />
            </div>
            <div className={styles["newsmidia-bottom-left-text-wrapper"]}>
              <p>"Eternal Opens a Passwordless Future": Global Export of Fingerprint <br />Hardware Wallet</p>
            </div>
          </div>

          <div className={styles["newsmidia-bottom-right"]}>
            <div ref={rightTopRef} className={styles["newsmidia-bottom-right-top"]}>
              <div className={styles["newsmidia-bottom-right-top-img"]}>
                <Image src="/images/newsmidia/right-top.jpg" alt="Hero Image" fill priority className={styles["img"]} />
              </div>
              <div className={styles["newsmidia-bottom-right-top-text"]}>
                <p>Eternal Presents Finger Vein Authentication-Based PC Logon Solution</p>
              </div>
            </div>

            <div ref={rightBottomRef} className={styles["newsmidia-bottom-right-bottom"]}>
              <div className={styles["newsmidia-bottom-right-bottom-img"]}>
                <Image src="/images/newsmidia/right-bottom.jpg" alt="Hero Image" fill priority className={styles["img"]} />
              </div>
              <div className={styles["newsmidia-bottom-right-bottom-text"]}>
                <p>ETUNNEL wins contract to supply biometric smart cards for UN <br />organizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsmidia;