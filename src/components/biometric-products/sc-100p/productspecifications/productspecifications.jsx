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

  return (
    <section className={styles["ps-wrapper"]}>
      <div className={styles["ps-container"]}>

        <div className={styles["ps-heading"]}>
          <span className={styles["ps-label"]}>KEY FEATURES</span>
          <h2 className={styles["ps-title"]}>Product Specifications</h2>
        </div>

        <div className={styles["ps-table"]}>
          <div className={styles["ps-table-header"]}>
            <span>SPECIFICATION</span>
            <span>DETAILS</span>
          </div>

          <div className={styles["ps-table-body"]}>
            {specs.map((spec, index) => (
              <div key={index} className={styles["ps-row"]}>
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
    </section>
  );
};

export default ProductspecificationsHardcoded;