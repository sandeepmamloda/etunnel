// import styles from "./p2n2.module.css";
// import Image from "next/image";

// const P2n2info = function () {
//     return (
//         <div className={styles["p2n2info-wrapper"]}>
//             <div className={styles["p2n2info-main"]}>
//                 <div className={styles["p2n2info-main-left"]}>
//                     <div className={styles["p2n2info-main-left-text-wrapper"]}>
//                         <div className={styles["top-content"]}>
//                             <Image
//                                 src="/images/coretech/p2n2/p2n2info/comma.png"
//                                 fill={true}
//                                 alt="P2N2 AI Biometric Engine module"
//                                 priority
//                                 className={styles["img"]}/>
//                         </div>
//                         <div className={styles["medium-content"]}>
//                             <h2>Within a single chip, we've captured the answer to all forms of biometric recognition.</h2>
//                         </div>
//                         <div className={styles["bottom-content"]}>
//                             <p>AI ENGINE P2N2 is the future of integrated technology.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles["p2n2info-main-right"]}>
//                     <Image
//                         src="/images/coretech/p2n2/p2n2info/p2n2info.jpg"
//                         fill={true}
//                         alt="P2N2 AI Biometric Engine module"
//                         priority
//                         className={styles["img"]}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default P2n2info;
// ----------------------------------------------------------------------------------------------
import styles from "./p2n2.module.css";
import Image from "next/image";

const P2n2info = function () {
    return (
        <div className={styles["p2n2info-wrapper"]}>
            <div className={styles["p2n2info-main"]}>
                <div className={styles["p2n2info-main-left"]} data-anim="p2n2info-text">
                    <div className={styles["p2n2info-main-left-text-wrapper"]}>
                        <div className={styles["top-content"]}>
                            <Image
                                src="/images/coretech/p2n2/p2n2info/comma.png"
                                fill={true}
                                alt="P2N2 AI Biometric Engine module"
                                priority
                                className={styles["img"]}
                            />
                        </div>
                        <div className={styles["medium-content"]}>
                            <h2 data-anim="p2n2info-h2">
                                Within a single chip, we've captured the answer to all forms of biometric recognition.
                            </h2>
                        </div>
                        <div className={styles["bottom-content"]}>
                            <p data-anim="p2n2info-p">AI ENGINE P2N2 is the future of integrated technology.</p>
                        </div>
                    </div>
                </div>
                <div className={styles["p2n2info-main-right"]} data-anim="p2n2info-img">
                    <Image
                        src="/images/coretech/p2n2/p2n2info/p2n2info.jpg"
                        fill={true}
                        alt="P2N2 AI Biometric Engine module"
                        priority
                        className={styles["img"]}
                    />
                </div>
            </div>
        </div>
    );
};

export default P2n2info;