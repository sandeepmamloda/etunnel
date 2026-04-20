"use client";
import styles from "./seeussection.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Seeussection = function () {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const playBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        }
      });

      // Text - bottom to top
      tl.fromTo(textRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "power2.inOut" }
      )
        // Video - top to bottom curtain
        .fromTo(videoRef.current,
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 1.5, ease: "power2.inOut" },
          "-=0.7"
        )
        // Play button - bottom to top
        .fromTo(playBtnRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.9, ease: "power2.inOut" },
          "-=0.5"
        );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className={styles["seeussection-wrapper"]} ref={sectionRef}>
        <div ref={textRef} className={styles["seeussection-wrapper-text-content"]}>
          <h2>See Us in Action</h2>
          <p>Introducing ETUNNEL's integrated biometric authentication solution, AI Engine P2N2.</p>
        </div>
        <div ref={videoRef} className={styles["seeussection-wrapper-video"]}>
          <div ref={playBtnRef} className={styles["play-button"]}>
            <p>PLAY</p>
          </div>
          <Image
            src="/images/seeussection/seeussection-img.png"
            alt="Hero Image"
            fill
            priority
            className={styles["img"]}
          />
        </div>
      </section>
    </>
  );
};

export default Seeussection;