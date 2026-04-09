import styles from "./seeussection.module.css";
import Image from "next/image";
const Seeussection=function(){
    return(
        <>
          <div className={styles["seeussection-wrapper"]}>
            <div className={styles["seeussection-wrapper-text-content"]}>
                <p>See Us in Action</p>
                <p>Introducing ETUNNEL's integrated biometric authentication solution, AI Engine P2N2.</p>
            </div>
            <div className={styles["seeussection-wrapper-video"]}>
                <div className={styles["play-button"]}>
                    <p>PLAY</p>
                </div>
                <Image
                  src="/images/seeussection/seeussection-img.png"
                  alt="Hero Image"
                  fill
                  priority
                  className={styles["img"]}
                />
            </div>
          </div>
        </>
    )
}
export default Seeussection;