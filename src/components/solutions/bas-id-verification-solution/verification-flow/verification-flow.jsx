import styles from "./verification-flow.module.css";

const steps = [
  {
    id: "01",
    title: "ID Card Reading",
    desc: "Administrator enrolls the user's finger vein data via ETL_FVMasterProgram.exe. Data is encrypted and stored securely — no raw biometric data ever leaves the managed environment.",
  },
  {
    id: "02",
    title: "Live Biometric Capture",
    desc: "When the PC is locked or started, the Credential Provider DLL automatically activates. The PC Logon Program launches and the ETUNNEL-PL-101V device awaits a finger scan.",
  },
  {
    id: "03",
    title: "Real-Time Dual Match",
    desc: "The finger vein pattern is captured and matched on-device. On success, Windows receives the authentication signal and grants access. All events are logged with user identity and timestamp.",
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
              Authentication Flow
            </h2>
            <p className={styles["vf-subtitle"]} data-anim="vf-subtitle">
              From enrollment to access — a three-step process that ties every login to a verified individual.
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