import styles from "./grid.module.css";
const Grid = function () {
    return (
        <>
            <section className={styles["grid-wrapper"]}>
                <div className={styles["grid-items"]}></div>
                <div className={styles["grid-items"]}></div>
                <div className={styles["grid-items"]}></div>
                <div className={styles["grid-items"]}></div>
                <div className={styles["grid-items"]}></div>
                <div className={styles["grid-items"]}></div>
                <div className={styles["grid-items"]}></div>
                <div className={styles["grid-items"]}></div>
            </section>
        </>
    );
}
export default Grid;