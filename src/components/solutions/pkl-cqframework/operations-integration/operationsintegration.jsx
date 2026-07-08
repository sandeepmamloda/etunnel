import styles from "./operationsintegration.module.css";

const cards = [
  {
    id: 1,
    title: "CQFrameworkAPI",
    specs: [
      "Browser : Chrome, Microsoft Edge, Whale, Safari",
    ],
  },
  {
    id: 2,
    title: "CQFrameworkSVC(EXE)",
    specs: [
      "OS : Windows 8 or later",
    ],
  },
  {
    id: 3,
    title: "CQFrameworkSVC(JAR)",
    specs: [
      "OS : Windows 8 or later",
      "JAVA : JDK 8 or later",
    ],
  },
  {
    id: 4,
    title: "Supported Algorithms",
    specs: [
      "Symmetric Key Encryption : SEED 256, AES 256",
      "Hash Algorithm : SHA 128/256/384/512",
      "Public Key Encryption : RSA 1024/2048/4096(JAVA)"
    ],
  },
  {
    id: 5,
    title: "Supported Formats and Other Features",
    specs: [
      "DER, PKCS#8",
      "PC MAC Address Acquisition"
    ],
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
              Supported Environment
            </h2>
            <p className={styles["oi-subtitle"]} data-anim="oi-subtitle">
              ENGINEERED TO SUPPORT
            </p>
          </header>

          <div className={styles["oi-border-box"]}>
            <div className={styles["oi-grid"]}>
              {cards.map((card) => (
                <article key={card.id} className={styles["oi-card"]} data-anim="oi-card">
                  <span className={styles["oi-dash"]} aria-hidden="true"></span>
                  <h3 className={styles["oi-card-title"]}>{card.title}</h3>
                  <div className={styles["oi-card-desc-list"]}>
                    {card.specs.map((line, index) => (
                      <p key={index} className={styles["oi-card-desc"]}>
                        {line}
                      </p>
                    ))}
                  </div>
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