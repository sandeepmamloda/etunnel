import styles from "./biometriccertification.module.css";

const Biometriccertification = function () {
    return (
        <>
            <div className={styles["biometriccertification-wrapper"]}>
                <div className={styles["biometriccertification-main"]}>
                    <div className={styles["biometriccertification-left"]}></div>
                    <div className={styles["biometriccertification-right"]}></div>
                </div>
            </div>
        </>
    );
}

export default Biometriccertification;