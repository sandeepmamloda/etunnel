import styles from "./evaluationframework.module.css";

const Evaluationframework = function () {
  return (
    <div className={styles["evaluationframework-wrapper"]}>
      <div className={styles["evaluationframework-main"]}>
        <div className={styles["evaluationframework-items"]}></div>
        <div className={styles["evaluationframework-items"]}></div>
        <div className={styles["evaluationframework-items"]}></div>
        <div className={styles["evaluationframework-items"]}></div>
        <div className={styles["evaluationframework-items"]}></div>
        <div className={styles["evaluationframework-items"]}></div>
      </div>
    </div>
  );
};

export default Evaluationframework;