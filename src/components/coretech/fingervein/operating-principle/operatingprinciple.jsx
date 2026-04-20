import Image from "next/image";
import styles from "./operatingprinciple.module.css";
const Operatingprinciple = () => {
  return (
    <div className={styles["operating-principle-wrapper"]}>
      <div className={styles["operating-principle-main"]}>
        <div className={styles["operating-principle-top"]}>
          <div className={styles["operating-principle-top-tcontent"]}>
            <h2>How It Works</h2>
          </div>

          <div className={styles["operating-principle-top-mcontent"]}>
            <h3>Operating Principle</h3>
          </div>

          <div className={styles["operating-principle-top-bcontent"]}>
            <p>
              A three-step process from infrared illumination to authenticated
              identity.
            </p>
          </div>
        </div>

        <div className={styles["operating-principle-bottom"]}>
            <Image
                src="/images/coretech/fingervein/operating-principle/operating-principle.png"
                fill={true}
                className={styles["img"]}
            />
        </div>
      </div>
    </div>
  );
};

export default Operatingprinciple;