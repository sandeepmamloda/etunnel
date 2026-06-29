import styles from "./operationsintegration.module.css";

const cards = [
  {
    id: 1,
    title: "Operations:",
    desc: "Reduces operational overhead with simple issuance and recovery process.",
  },
  {
    id: 2,
    title: "Integration",
    desc: "Seamless integration with existing access control policies.",
  },
];

const OperationsIntegration = function () {
  return (
    <section className={styles["operationsintegration-wrapper"]} aria-labelledby="oi-heading">
      <div className={styles["operationsintegration-main"]}>

        <div className={styles["oi-top-line"]}></div>

        <div className={styles["oi-content"]}>
          <header className={styles["oi-header"]}>
            <h2 id="oi-heading" className={styles["oi-title"]} data-anim="oi-title">
              Benefits of Technology
            </h2>
            <p className={styles["oi-subtitle"]} data-anim="oi-subtitle">
              The strategic pillars that make Smart ID a superior security platform at every scale.
            </p>
          </header>

          <div className={styles["oi-border-box"]}>
            <div className={styles["oi-grid"]}>
              {cards.map((card) => (
                <article key={card.id} className={styles["oi-card"]} data-anim="oi-card">
                  <span className={styles["oi-dash"]} aria-hidden="true"></span>
                  <h3 className={styles["oi-card-title"]}>{card.title}</h3>
                  <p className={styles["oi-card-desc"]}>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OperationsIntegration;