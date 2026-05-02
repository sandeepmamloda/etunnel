"use client";

import { useEffect, useRef } from "react";
import styles from "./productspecifications.module.css";

const ProductspecificationsGrouped = function () {
  const groups = [
    {
      groupLabel: "Scanner",
      specs: [
        { label: "Card Size", detail: "ISO/IEC 77810 ID-1 (85.60×53.98 mm)" },
        { label: "Scan Method", detail: "Double-sided CIS" },
        { label: "Scan Speed", detail: "<3s" },
        { label: "Color Information", detail: "24 bit color\n8 bit grayscale" },
        { label: "Resolution", detail: "300 DPI" },
      ],
    },
    {
      groupLabel: "VD",
      specs: [
        { label: "Dimension", detail: "204(W)*376(H)*214(D) mm" },
        { label: "CPU", detail: "Broadcom BCM2712 2.4GHz quad-core 64-bit Arm Cortex-A76" },
        { label: "Memory", detail: "8GB RAM + 32GB Flash" },
        { label: "LCD", detail: '10.1" Color LCD' },
        { label: "LCD Resolution", detail: "800×1280" },
        { label: "Power", detail: "220VAC 60Hz 12V DC 3A" },
      ],
    },
    {
      groupLabel: "Face",
      specs: [
        { label: "Matching Speed", detail: "<0.8s" },
        { label: "Verification Method", detail: "1:1" },
        { label: "Certification", detail: "KISA" },
        { label: "EER", detail: "<1.5s" },
      ],
    },
    {
      groupLabel: "Fingerprint",
      specs: [
        { label: "Matching Speed", detail: "<1.5s" },
        { label: "Verification Method", detail: "1:1" },
        { label: "Certification", detail: "KISA (On going)" },
        { label: "EER", detail: "<1%" },
      ],
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

        // ── label ──
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

        // ── title ──
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

        // ── table wrapper ──
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

        // ── har row individually staggered ──
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

  let globalRowIndex = 0;

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

        <div ref={tableWrapRef} style={{ overflow: "hidden" }}>
          <div className={styles["ps-table"]}>
            <div className={styles["ps-table-layout"]}>

              <div className={styles["ps-left-column"]}>
                {groups.map((group, gIndex) => (
                  <div key={gIndex} className={styles["ps-group-label-wrapper"]}>
                    <span className={styles["ps-group-label-text"]}>{group.groupLabel}</span>
                  </div>
                ))}
              </div>

              <div className={styles["ps-right-column"]}>
                <div className={styles["ps-table-header"]}>
                  <span>SPECIFICATION</span>
                  <span>DETAILS</span>
                </div>

                {groups.map((group, gIndex) => (
                  <div key={gIndex} className={styles["ps-group"]}>
                    {group.specs.map((spec, sIndex) => {
                      const refIndex = globalRowIndex++;
                      return (
                        <div
                          key={sIndex}
                          className={styles["ps-row"]}
                          ref={(el) => (rowRefs.current[refIndex] = el)}
                        >
                          <div className={styles["ps-row-left"]}>
                            <span className={styles["ps-spec-label"]}>{spec.label}</span>
                          </div>
                          <div className={styles["ps-row-right"]}>
                            <span
                              className={styles["ps-detail"]}
                              style={{ whiteSpace: "pre-line" }}
                            >
                              {spec.detail}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductspecificationsGrouped;