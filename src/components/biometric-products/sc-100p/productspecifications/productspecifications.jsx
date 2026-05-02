"use client";

import { useEffect, useRef } from "react";
import styles from "./productspecifications.module.css";

const ProductspecificationsHardcoded = function () {
  const specs = [
    { label: "Power Source", detail: "Energy Harvesting from RFID Field" },
    { label: "Cycle Life", detail: "RF IC Read/Write 100,000 times" },
    { label: "Main Chip", detail: "ISO 7816-1\ntype ID-1\n85.6(W)*54(H)*0.74×0.040mm" },
    { label: "Sensing Area", detail: "4×4mm\n56×56 pixel" },
    { label: "Sensor Pixel Size", detail: "70×70 μm" },
    { label: "Special Resolution", detail: "363 DPI" },
    { label: "ADC Pixel Resolution", detail: "14 Bits Gray Scale" },
    { label: "FRR/FAR", detail: "2%\n0.01%" },
    { label: "ESD", detail: "+/- 8kV(Contact mode)" },
    { label: "Operating Temperature", detail: "0°C~45°C" },
    { label: "Extended Humidity", detail: "33(W) × 65(L) × 52(H) mm" },
    { label: "Contactless RFID chips", detail: "HID iClass\ni-code SLI\nTag-it\nMifare Classic\nBy\nDesFire EV1\nFelCa" },
    {
      label: "Operation Method",
      detail: (
        <>
          When the registered fingerprint matches, <span className={styles["ps-detail-green"]}>the green LED lights up</span>, and access is granted.{"\n"}
          When it does not match, <span className={styles["ps-detail-red"]}>the red LED lights up</span>, and access is denied.
        </>
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
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductspecificationsHardcoded;