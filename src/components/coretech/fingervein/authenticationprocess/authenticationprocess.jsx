import Image from "next/image";
import styles from "./authenticationprocess.module.css";
const Authenticationprocess = () => {
  return (
    <div className={styles["authentication-process-wrapper"]}>
      <div className={styles["authentication-process-main"]}>
        <div className={styles["authentication-process-top"]}>
          <div className={styles["authentication-process-top-tcontent"]}>
            <h2>End to End</h2>
          </div>

          <div className={styles["authentication-process-top-mcontent"]}>
            <h3>Authentication Process</h3>
          </div>

          <div className={styles["authentication-process-top-bcontent"]}>
            <p>
              The process of extracting finger vein patterns and verifying them against stored finger vein patterns for authentication.
            </p>
          </div>
        </div>

        <div className={styles["authentication-process-bottom"]}>
            <Image
                src="/images/coretech/fingervein/authenticationprocess/authentication.png"
                fill={true}
                className={styles["img"]}
            />
        </div>
      </div>
    </div>
  );
};

export default Authenticationprocess;