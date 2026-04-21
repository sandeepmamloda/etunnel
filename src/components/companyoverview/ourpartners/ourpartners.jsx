import styles from "./ourpartners.module.css";
// import Image from "next/image";
const Ourpartners = function () {
  return (
    <>
      <div className={styles["ourpartners-wrapper"]}>
        <div className={styles["ourpartners-top"]}>
            <h2>Our Partners</h2>
            <p>We maintain partnerships with various companies and institutions to popularize biometric security.</p>
        </div>
    </div>
    </>
  );
};

export default Ourpartners;