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
        { label: "Power", detail: "220VAC 60Hz 12V DC 3A", isHalf: true },
      ],
    },
    {
      groupLabel: "Face",
      specs: [
        { label: "Power", detail: "220VAC 60Hz 12V DC 3A", isGhost: true },
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

  return (
    <section className={styles["ps-wrapper"]}>
      <div className={styles["ps-container"]}>

        <div className={styles["ps-heading"]}>
          <span className={styles["ps-label"]}>KEY FEATURES</span>
          <h2 className={styles["ps-title"]}>Product Specifications</h2>
        </div>

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
                    if (spec.isGhost) {
                      return (
                        <div
                          key={sIndex}
                          className={`${styles["ps-row"]} ${styles["ps-row-ghost"]}`}
                        >
                          <div className={styles["ps-row-left"]} />
                          <div className={styles["ps-row-right"]} />
                        </div>
                      );
                    }
                    return (
                      <div
                        key={sIndex}
                        className={`${styles["ps-row"]}${spec.isHalf ? ` ${styles["ps-row-half"]}` : ""}`}
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
    </section>
  );
};

export default ProductspecificationsGrouped;