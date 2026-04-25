import styles from "./productspecifications.module.css";
import Image from "next/image";

const Productspecifications = function ({ title = "Product Specifications", specs = [] }) {
  return (
    <section className={styles["ps-wrapper"]}>
      <div className={styles["ps-container"]}>

        <div className={styles["ps-heading"]}>
          <span className={styles["ps-label"]}>KEY FEATURES</span>
          <h2 className={styles["ps-title"]}>{title}</h2>
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
                  <span className={styles["ps-icon"]}>
                    {spec.icon && (
                      <Image
                        src={spec.icon}
                        alt={spec.label}
                        width={20}
                        height={20}
                      />
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