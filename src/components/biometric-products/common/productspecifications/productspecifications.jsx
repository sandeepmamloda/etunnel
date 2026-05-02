"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./productspecifications.module.css";

const Productspecifications = function ({ title = "Product Specifications", specs = [] }) {
  const wrapperRef  = useRef(null);
  const labelRef    = useRef(null);
  const titleRef    = useRef(null);
  const tableRef    = useRef(null);
  const rowsRef     = useRef([]);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        // ── Label + Title — fade up ──
        gsap.from([labelRef.current, titleRef.current], {
          opacity: 0,
          y: 30,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: labelRef.current,
            start: "top 85%",
          },
        });

        // ── Table — fade in + slight scale ──
        gsap.from(tableRef.current, {
          opacity: 0,
          y: 40,
          scale: 0.98,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 85%",
          },
        });

        // ── Rows — stagger in one by one ──
        gsap.from(rowsRef.current, {
          opacity: 0,
          x: -20,
          duration: 0.8,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 80%",
          },
        });

      }, wrapperRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section className={styles["ps-wrapper"]} ref={wrapperRef}>
      <div className={styles["ps-container"]}>

        <div className={styles["ps-heading"]}>
          <span className={styles["ps-label"]} ref={labelRef}>KEY FEATURES</span>
          <h2   className={styles["ps-title"]} ref={titleRef}>{title}</h2>
        </div>

        <div className={styles["ps-table"]} ref={tableRef}>
          <div className={styles["ps-table-header"]}>
            <span>SPECIFICATION</span>
            <span>DETAILS</span>
          </div>

          <div className={styles["ps-table-body"]}>
            {specs.map((spec, index) => (
              <div
                key={index}
                className={styles["ps-row"]}
                ref={(el) => (rowsRef.current[index] = el)}
              >
                <div className={styles["ps-row-left"]}>
                  <span className={styles["ps-icon"]}>
                    {spec.icon && (
                      <Image src={spec.icon} alt={spec.label} width={20} height={20} />
                    )}
                  </span>
                  <span className={styles["ps-spec-label"]}>{spec.label}</span>
                </div>
                <div className={styles["ps-row-right"]}>
                  <span className={styles["ps-detail"]}>{spec.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Productspecifications;