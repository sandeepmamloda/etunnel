"use client";
import styles from "./seeussection.module.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const YOUTUBE_VIDEO_ID = "R5P5Z3O-2tM";

const Seeussection = function () {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

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
          <iframe
            className={styles["youtube-iframe"]}
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          {!isActive && (
            <div
              className={styles["iframe-overlay"]}
              onClick={() => setIsActive(true)}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Seeussection;