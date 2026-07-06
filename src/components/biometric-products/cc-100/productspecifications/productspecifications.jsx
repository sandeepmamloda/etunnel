"use client";

import { useEffect, useRef } from "react";
import styles from "./productspecifations.module.css";

const ProductSpecsReplica = function () {
  const specs = [
    {
      label: "Material",
      detail: "Polycarbonate + Acrylonitrile Butadiene Styrene(ABS)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z"
            fill="#F5F5F5"
          />
          <path
            d="M10 12.6667V11.3333C10 10.9797 10.1405 10.6406 10.3905 10.3905C10.6406 10.1405 10.9797 10 11.3333 10H12.6667"
            stroke="#525252"
            strokeWidth={1.33333}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.332 10H20.6654C21.019 10 21.3581 10.1405 21.6082 10.3905C21.8582 10.6406 21.9987 10.9797 21.9987 11.3333V12.6667"
            stroke="#525252"
            strokeWidth={1.33333}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.9987 19.334V20.6673C21.9987 21.0209 21.8582 21.3601 21.6082 21.6101C21.3581 21.8602 21.019 22.0007 20.6654 22.0007H19.332"
            stroke="#525252"
            strokeWidth={1.33333}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6667 22.0007H11.3333C10.9797 22.0007 10.6406 21.8602 10.3905 21.6101C10.1405 21.3601 10 21.0209 10 20.6673V19.334"
            stroke="#525252"
            strokeWidth={1.33333}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Composition",
      detail: "· 105(W) × 63(H) × 10(T) mm· Battery : CR2016· Color : Customizable",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z"
            fill="#F5F5F5"
          />
        
          <g clipPath="url(#clip0_3_8189)">
            <path
              d="M20.0013 10.666H12.0013C11.2649 10.666 10.668 11.263 10.668 11.9993V19.9993C10.668 20.7357 11.2649 21.3327 12.0013 21.3327H20.0013C20.7377 21.3327 21.3346 20.7357 21.3346 19.9993V11.9993C21.3346 11.263 20.7377 10.666 20.0013 10.666Z"
              stroke="#525252"
              strokeWidth={1.33333}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.3333 14H14.6667C14.2985 14 14 14.2985 14 14.6667V17.3333C14 17.7015 14.2985 18 14.6667 18H17.3333C17.7015 18 18 17.7015 18 17.3333V14.6667C18 14.2985 17.7015 14 17.3333 14Z"
              stroke="#525252"
              strokeWidth={1.33333}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 9.33398V10.6673"
              stroke="#525252"
              strokeWidth={1.33333}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 21.334V22.6673"
              stroke="#525252"
              strokeWidth={1.33333}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.33203 18H10.6654"
              stroke="#525252"
              strokeWidth={1.33333}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.33203 14H10.6654"
              stroke="#525252"
              strokeWidth={1.33333}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.332 18H22.6654"
              stroke="#525252"
              strokeWidth={1.33333}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.332 14H22.6654"
              stroke="#525252"
              strokeWidth={1.33333}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 9.33398V10.6673"
              stroke="#525252"
              strokeWidth={1.33333}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 21.334V22.6673"
              stroke="#525252"
              strokeWidth={1.33333}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        
          <defs>
            <clipPath id="clip0_3_8189">
              <rect
                width={16}
                height={16}
                fill="white"
                transform="translate(8 8)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  const wrapperRef   = useRef(null);
  const labelWrapRef = useRef(null);
  const titleWrapRef = useRef(null);
  const tableWrapRef = useRef(null);
  const rowRefs      = useRef([]);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap }          = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        gsap.from(labelWrapRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 20,
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: {
            trigger: labelWrapRef.current,
            start: "top 85%",
            once: true,
          },
        });

        gsap.from(titleWrapRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 24,
          duration: 1.7,
          ease: "expo.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: titleWrapRef.current,
            start: "top 85%",
            once: true,
          },
        });

        gsap.from(tableWrapRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 30,
          duration: 1.8,
          ease: "expo.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: tableWrapRef.current,
            start: "top 85%",
            once: true,
          },
        });

        rowRefs.current.forEach((row, i) => {
          if (!row) return;
          gsap.from(row, {
            clipPath: "inset(100% 0% 0% 0%)",
            y: 16,
            duration: 1.4,
            ease: "expo.out",
            delay: 0.05 * i,
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              once: true,
            },
          });
        });

      }, wrapperRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles["ps-wrapper"]} ref={wrapperRef}>
      <div className={styles["ps-container"]}>

        <div className={styles["ps-heading"]}>
          <div ref={labelWrapRef} style={{ overflow: "hidden" }}>
            <span className={styles["ps-label"]}>KEY FEATURES</span>
          </div>

          <div ref={titleWrapRef} style={{ overflow: "hidden" }}>
            <h2 className={styles["ps-title"]}>Product Specifications</h2>
          </div>
        </div>

        <div ref={tableWrapRef} style={{ padding: "0 2px 16px", margin: "0 -2px -16px" }}>
          <div className={styles["ps-table"]}>
            <div className={styles["ps-table-header"]}>
              <span>SPECIFICATION</span>
              <span>DETAILS</span>
            </div>

            <div className={styles["ps-table-body"]}>
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className={styles["ps-row"]}
                  ref={(el) => (rowRefs.current[index] = el)}
                >
                  <div className={styles["ps-row-left"]}>
                    <span className={styles["ps-icon"]}>{spec.icon}</span>
                    <span className={styles["ps-spec-label"]}>{spec.label}</span>
                  </div>
                  <div className={styles["ps-row-right"]}>
                    <span className={styles["ps-detail"]} style={{ whiteSpace: "pre-line" }}>
                      {spec.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={styles["ps-footer"]}
              ref={(el) => (rowRefs.current[specs.length] = el)}
            >
              <span className={styles["ps-footer-text"]}>
                <strong>· Designed to be compatible with existing smart card readers,</strong> reducing additional infrastructure costs.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSpecsReplica;