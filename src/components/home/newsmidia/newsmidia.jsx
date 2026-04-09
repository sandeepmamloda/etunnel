import styles from "./newsmidia.module.css";
import Image from "next/image";
const Newsmidia=function(){
    return (
        <>
           <div className={styles["newsmidia-wrapper"]}>
            <div className={styles["newsmidia-top"]}>
               <div className={styles["newsmidia-top-tcontent"]}>
                 <p>News & Media</p>
               </div>
               <div className={styles["newsmidia-top-mcontent"]}>
                 <p>Introducing our news and media coverage from all over the world</p>
                 <div className={styles["newsmidia-top-toggle"]}>
                   <p>See More News</p>
                 </div>
               </div>
            </div>
            <div className={styles["newsmidia-bottom"]}>
                <div className={styles["newsmidia-bottom-left"]}>
                    <div className={styles["newsmidia-bottom-left-img"]}>
                        <Image
                          src="/images/newsmidia/left.jpg"
                          alt="Hero Image"
                          fill
                          priority
                          className={styles["img"]}
                        />
                    </div>
                    <div className={styles["newsmidia-bottom-left-text-wrapper"]}>
                        <p>"Eternal Opens a Passwordless Future": Global Export of Fingerprint <br/>Hardware Wallet</p>
                    </div>
                </div>
                <div className={styles["newsmidia-bottom-right"]}>
                    <div className={styles["newsmidia-bottom-right-top"]}>
                        <div className={styles["newsmidia-bottom-right-top-img"]}>
                            <Image
                              src="/images/newsmidia/right-top.jpg"
                              alt="Hero Image"
                              fill
                              priority
                              className={styles["img"]}
                            />
                        </div>
                        <div className={styles["newsmidia-bottom-right-top-text"]}>
                            <p>Eternal Presents Finger Vein Authentication-Based PC Logon Solution</p>
                        </div>
                    </div>
                    <div className={styles["newsmidia-bottom-right-bottom"]}>
                        <div className={styles["newsmidia-bottom-right-bottom-img"]}>
                            <Image
                              src="/images/newsmidia/right-bottom.jpg"
                              alt="Hero Image"
                              fill
                              priority
                              className={styles["img"]}
                            />
                        </div>
                        <div className={styles["newsmidia-bottom-right-bottom-text"]}>
                            <p>ETUNNEL wins contract to supply biometric smart cards for UN <br/>organizations</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
}
export default Newsmidia;