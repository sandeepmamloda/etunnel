"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./authentication-products.module.css";

gsap.registerPlugin(ScrollTrigger);

const Authenticationproducts = function () {
  const wrapperRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const fingerHeadingRef = useRef(null);
  const faceHeadingRef = useRef(null);
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);
  const item4Ref = useRef(null);
  const item5Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 600;

      // ------ h2 ------
      gsap.from(headingRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: isMobile ? 24 : 40,
        duration: isMobile ? 0.9 : 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // ------ p ------
      gsap.from(descRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: isMobile ? 24 : 40,
        duration: isMobile ? 0.9 : 1.1,
        ease: "power4.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // ------ finger vein heading ------
      gsap.from(fingerHeadingRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: isMobile ? 20 : 30,
        duration: isMobile ? 0.85 : 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: fingerHeadingRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // ------ facial recognition heading ------
      gsap.from(faceHeadingRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: isMobile ? 20 : 30,
        duration: isMobile ? 0.85 : 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: faceHeadingRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // ------ product items staggered ------
      const items = [
        item1Ref.current,
        item2Ref.current,
        item3Ref.current,
        item4Ref.current,
        item5Ref.current,
      ].filter(Boolean);

      items.forEach((el, i) => {
        gsap.from(el, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: isMobile ? 20 : 30,
          duration: isMobile ? 0.85 : 1,
          ease: "power4.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={wrapperRef} className={styles["authenticationproducts-wrapper"]}>
        <div className={styles["authenticationproducts-main"]}>

          {/* ---- Header ---- */}
          <div className={styles["authenticationproducts-top"]}>
            <h2 ref={headingRef}>Authentication Products</h2>
            <p ref={descRef}>KISA-certified biometric authentication devices for finger vein and facial recognition.</p>
          </div>

          <div className={styles["authenticationproducts-bottom"]}>

            {/* ---- Finger Vein Recognition ---- */}
            <div className={styles["authenticationproducts-bottom-1"]}>
              <div ref={fingerHeadingRef} className={styles["heading"]}>
                <span className={styles["heading-icon"]}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_173_3882)">
                      <path d="M7.99885 6.66602C7.64523 6.66602 7.30609 6.80649 7.05605 7.05654C6.806 7.30659 6.66552 7.64573 6.66552 7.99935C6.66552 8.67935 6.59885 9.67268 6.49219 10.666" stroke="#FFD2AA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.33464 8.74609C9.33464 10.3328 9.33464 12.9994 8.66797 14.6661" stroke="#FFD2AA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.5273 14.0133C11.6073 13.6133 11.814 12.48 11.8607 12" stroke="#FFD2AA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.33203 8.00065C1.33203 6.60143 1.77228 5.23769 2.59042 4.10258C3.40855 2.96748 4.5631 2.11857 5.89051 1.6761C7.21793 1.23362 8.65091 1.22003 9.98648 1.63723C11.3221 2.05443 12.4925 2.88128 13.332 4.00065" stroke="#FFD2AA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.33203 10.666H1.3387" stroke="#FFD2AA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.5332 10.666C14.6665 9.33268 14.6205 7.09668 14.5332 6.66602" stroke="#FFD2AA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.33203 12.9993C3.66536 11.9993 3.9987 9.99935 3.9987 7.99935C3.99802 7.54526 4.07468 7.09437 4.22536 6.66602" stroke="#FFD2AA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.76562 14.6673C5.90562 14.2273 6.06563 13.7873 6.14563 13.334" stroke="#FFD2AA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 4.53395C6.60827 4.18276 7.29828 3.99793 8.00064 3.99805C8.70301 3.99816 9.39296 4.18321 10.0011 4.53459C10.6093 4.88596 11.1142 5.39128 11.4651 5.99971C11.816 6.60815 12.0005 7.29825 12 8.00061V9.33395" stroke="#FFD2AA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_173_3882">
                        <rect width="16" height="16" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span>Finger Vein Recognition</span>
              </div>

              <div className={styles["section"]}>
                <div ref={item1Ref} className={styles["authenticationproducts-items"]}>
                  <div className={styles["image-wrapper"]}>
                    <img src="/images/coretech/kisa-certification/authenticationproducts/etunnel-r1-100v.png" alt="ETUNNEL-R1-100V"/>
                  </div>
                  <div className={styles["content"]}>
                    <span>ETUNNEL-R1-100V</span>
                  </div>
                </div>

                <div ref={item2Ref} className={styles["authenticationproducts-items"]}>
                  <div className={styles["image-wrapper"]}>
                    <img src="/images/coretech/kisa-certification/authenticationproducts/etunnel-pl-101v.png" alt="ETUNNEL-PL-101V"/>
                  </div>
                  <div className={styles["content"]}>
                    <span>ETUNNEL-PL-101V</span>
                  </div>
                </div>

                <div ref={item3Ref} className={styles["authenticationproducts-items"]}>
                  <div className={styles["image-wrapper"]}>
                    <img src="/images/coretech/kisa-certification/authenticationproducts/etunnel-sw-100v.png" alt="ETUNNEL-SW-100V"/>
                  </div>
                  <div className={styles["content"]}>
                    <span>ETUNNEL-SW-100V</span>
                  </div>
                </div>

                <div ref={item4Ref} className={styles["authenticationproducts-items"]}>
                  <div className={styles["image-wrapper"]}>
                    <img src="/images/coretech/kisa-certification/authenticationproducts/etunnel-cw-100v.png" alt="ETUNNEL-CW-100V"/>
                  </div>
                  <div className={styles["content"]}>
                    <span>ETUNNEL-CW-100V</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ---- Facial Recognition ---- */}
            <div className={styles["authenticationproducts-bottom-2"]}>
              <div ref={faceHeadingRef} className={styles["heading"]}>
                <span className={styles["heading-icon"]}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z" fill="black"/>
                    <g clipPath="url(#clip0_173_3917)">
                      <path d="M9.3737 16.2322C9.31814 16.0826 9.31814 15.9179 9.3737 15.7682C9.91483 14.4561 10.8334 13.3343 12.0129 12.5448C13.1924 11.7554 14.5797 11.334 15.999 11.334C17.4183 11.334 18.8057 11.7554 19.9852 12.5448C21.1647 13.3343 22.0832 14.4561 22.6244 15.7682C22.6799 15.9179 22.6799 16.0826 22.6244 16.2322C22.0832 17.5443 21.1647 18.6662 19.9852 19.4556C18.8057 20.2451 17.4183 20.6665 15.999 20.6665C14.5797 20.6665 13.1924 20.2451 12.0129 19.4556C10.8334 18.6662 9.91483 17.5443 9.3737 16.2322Z" stroke="#FFD2AA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z" stroke="#FFD2AA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_173_3917">
                        <rect width="16" height="16" fill="white" transform="translate(8 8)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span>Facial Recognition</span>
              </div>

              <div className={styles["section"]}>
                <div ref={item5Ref} className={styles["authenticationproducts-items"]}>
                  <div className={styles["image-wrapper"]}>
                    <img src="/images/coretech/kisa-certification/authenticationproducts/etunnel-iv-100m.png" alt="ETUNNEL-IV-100M"/>
                  </div>
                  <div className={styles["content"]}>
                    <span>ETUNNEL-IV-100M</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Authenticationproducts;