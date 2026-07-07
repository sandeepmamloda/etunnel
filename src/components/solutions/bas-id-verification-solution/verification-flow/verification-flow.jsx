import styles from "./verification-flow.module.css";

const steps = [
  {
    id: "01",
    title: "ID Card Reading",
    desc: "ETUNNEL-IV-100M reads the biometric data stored on the ID card chip — fingerprint, face image, or both — via secure NFC or contact interface. The chip's digital signature is verified to confirm card authenticity before any biometric comparison begins.",
  },
  {
    id: "02",
    title: "Live Biometric Capture",
    desc: "Simultaneously, the device captures the real user's live biometric — face via camera or fingerprint via sensor. The P2N2 AI Engine applies liveness detection to confirm a genuine human presence and prevent spoofing with photos or synthetic replicas.",
  },
  {
    id: "03",
    title: "Real-Time Dual Match",
    desc: "The stored biometric from the card and the captured live biometric are compared in real-time by the P2N2 engine. Both the card and the person must pass simultaneously. The result is logged with full audit trail — user identity, timestamp, and match score.",
  },
];

const tableRows = [
  {
    Method: "ID Card Check",
    Traditional: "Visual inspection only",
    "ETUNNEL IDV": "Electronic chip authenticity verified",
  },
  {
    Method: "User Verification",
    Traditional: "Photo comparison by staff",
    "ETUNNEL IDV": "Real-time live biometric match",
  },
  {
    Method: "Proxy Detection",
    Traditional: "Staff judgement, error-prone",
    "ETUNNEL IDV": "Structurally impossible — biometric bound",
  },
  {
    Method: "Forgery Detection",
    Traditional: "Visual / UV light",
    "ETUNNEL IDV": "Chip digital signature + biometric mismatch",
  },
  {
    Method: "Non-Face-to-Face",
    Traditional: "Not supported",
    "ETUNNEL IDV": "Contactless face & fingerprint recognition",
  },
];

const VerificationFlow = function () {
  return (
    <section className={styles["verificationflow-wrapper"]} aria-labelledby="vf-heading">
      <div className={styles["verificationflow-main"]}>

        <div className={styles["vf-top-line"]}></div>

        <div className={styles["vf-content"]}>
          <header className={styles["vf-header"]}>
            <h2 id="vf-heading" className={styles["vf-title"]} data-anim="vf-title">
              Verification Flow
            </h2>
            <p className={styles["vf-subtitle"]} data-anim="vf-subtitle">
              A three-step dual-biometric process that ties every verification to both a confirmed document and a confirmed person.
            </p>
          </header>

          <div className={styles["vf-steps-grid"]}>
            {steps.map((step) => (
              <article key={step.id} className={styles["vf-step-card"]} data-anim="vf-step-card">
                <span className={styles["vf-step-number"]} aria-hidden="true">{step.id}</span>
                <h3 className={styles["vf-step-title"]}>{step.title}</h3>
                <p className={styles["vf-step-desc"]}>{step.desc}</p>
              </article>
            ))}
          </div>

          <div className={styles["vf-table-wrapper"]}>
            <table className={styles["vf-table"]}>
              <thead>
                <tr>
                  <th className={styles["vf-th"]}>Method</th>
                  <th className={styles["vf-th"]}>Traditional</th>
                  <th className={styles["vf-th"]}>ETUNNEL IDV</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, idx) => (
                  <tr key={idx} className={styles["vf-tr"]}>
                    <td className={styles["vf-td"]}>
                      <code className={styles["vf-code"]}>{row.Method}</code>
                    </td>
                    <td className={styles["vf-td"]}>{row.Traditional}</td>
                    <td className={styles["vf-td"]}>{row["ETUNNEL IDV"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VerificationFlow;