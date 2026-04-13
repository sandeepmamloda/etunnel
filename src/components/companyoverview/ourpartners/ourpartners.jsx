import styles from "./ourpartners.module.css";
// import Image from "next/image";
const Ourpartners = function () {
  return (
    <>
      <div className={styles["ourpartners-wrapper"]}>
        <div className={styles["ourpartners-top"]}>
            <span>Our Partners</span>
            <span>We maintain partnerships with various companies and institutions to popularize biometric security.</span>
        </div>
    </div>
    </>
  );
};

export default Ourpartners;