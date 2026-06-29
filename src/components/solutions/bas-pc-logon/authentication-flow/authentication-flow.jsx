import styles from "./authentication-flow.module.css";

const steps = [
  {
    id: "01",
    title: "User Registration",
    desc: "Administrator enrolls the user's finger vein data via ETL_FVMasterProgram.exe. Data is encrypted and stored securely — no raw biometric data ever leaves the managed environment.",
  },
  {
    id: "02",
    title: "Logon Trigger",
    desc: "When the PC is locked or started, the Credential Provider DLL automatically activates. The PC Logon Program launches and the ETUNNEL-PL-101V device awaits a finger scan.",
  },
  {
    id: "03",
    title: "Authentication & Access",
    desc: "The finger vein pattern is captured and matched on-device. On success, Windows receives the authentication signal and grants access. All events are logged with user identity and timestamp.",
  },
];

const tableRows = [
  {
    component: "ETL_FVMasterProgram.exe",
    role: "Administrator Program",
    keyFunction: "Encrypted enrollment, modification, deletion of vein data",
  },
  {
    component: "Credential Provider DLL",
    role: "Windows OS Bridge",
    keyFunction: "Lock screen hook → launches logon program → relays result to Windows",
  },
  {
    component: "PCLogon_EXE.exe",
    role: "PC Logon Program",
    keyFunction: "Device control, result processing, full authentication audit log",
  },
  {
    component: "ETUNNEL-PL-101V",
    role: "Biometric Hardware",
    keyFunction: "Contactless finger vein capture with liveness detection",
  },
];

const AuthenticationFlow = function () {
  return (
    <section className={styles["authflow-wrapper"]} aria-labelledby="af-heading">
      <div className={styles["authflow-main"]}>

        <div className={styles["af-top-line"]}></div>

        <div className={styles["af-content"]}>
          <header className={styles["af-header"]}>
            <h2 id="af-heading" className={styles["af-title"]} data-anim="af-title">
              Authentication Flow
            </h2>
            <p className={styles["af-subtitle"]} data-anim="af-subtitle">
              From enrollment to access — a three-step process that ties every login to a verified individual.
            </p>
          </header>

          <div className={styles["af-steps-grid"]}>
            {steps.map((step) => (
              <article key={step.id} className={styles["af-step-card"]} data-anim="af-step-card">
                <span className={styles["af-step-number"]} aria-hidden="true">{step.id}</span>
                <h3 className={styles["af-step-title"]}>{step.title}</h3>
                <p className={styles["af-step-desc"]}>{step.desc}</p>
              </article>
            ))}
          </div>

          <div className={styles["af-table-wrapper"]}>
            <table className={styles["af-table"]}>
              <thead>
                <tr>
                  <th className={styles["af-th"]}>COMPONENT</th>
                  <th className={styles["af-th"]}>ROLE</th>
                  <th className={styles["af-th"]}>KEY FUNCTION</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, idx) => (
                  <tr key={idx} className={styles["af-tr"]}>
                    <td className={styles["af-td"]}>
                      <code className={styles["af-code"]}>{row.component}</code>
                    </td>
                    <td className={styles["af-td"]}>{row.role}</td>
                    <td className={styles["af-td"]}>{row.keyFunction}</td>
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

export default AuthenticationFlow;