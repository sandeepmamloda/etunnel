import Image from "next/image";
import styles from "./featureoftechnology.module.css";

const features = [
  {
    id: 1,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/biometric.png",
    title: "Support for Various Browsers",
    desc: "The system operates through a localhost method via a JavaScript-based integration API, making it compatible with various browsers such as Chrome, MS Edge, and Whale.",
  },
  {
    // enhance-security.png
    id: 2,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/user-specif.png",
    title: "Supports HTTP/HTTPS communication",
    desc: "If security is not required, communicators can be integrated via HTTP, while HTTPS is supported for environments that require security. For HTTPS, an SSL certificate can be registered through the installation program to ensure compliance with browser security policies.",
  },
  {
    id: 3,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/enhance-security.png",
    title: "Checks Running Status and Launching",
    desc: "The API is provided to check if the CQFrameworkSVC module is running. If it is not running, it can be launched using a Custom URL Scheme (RFC 4395).",
  },
  {
    // multy-organization.png
    id: 4,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/user-specif.png",
    title: "Cross-Origin Resource Sharing support",
    desc: "It supports preventing CORS issues that may arise when switching to localhost communication on a webpage executed through the customer’s website.",
  },
  {
    id: 5,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/migration.png",
    title: "Built-in Basic Security Features",
    desc: "The CQFrameworkCrypto module supports basic encryption and hashing algorithms. The Java version also supports the asymmetric encryption algorithm RSA. ",
  },
  {
    // trusted.png
    id: 6,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/multy-organization.png",
    title: "Support for Service Separation",
    desc: "In the EXE format, the system can be divided into a service and an agent, where the service handles communication, and the agent performs external integration or UI-related functions.",
  },
  {
    id: 7,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/trusted.png",
    title: "Support for External Module Integration",
    desc: "If integration with DLL/JAR/EXE or other external modules is required, it can be customized to integrate the desired external modules.",
  },
];

const Featureoftechnology = function () {
  return (
    <>
      <section className={styles["featureoftechnology-wrapper"]}>
        <div className={styles["featuretechnology-main"]}>

          <div className={styles["featuretechnology-header"]}>
            <p className={styles["header-sub"]} data-anim="feat-sub">Smart ID Project</p>
            <h2 className={styles["header-title"]} data-anim="feat-title">Features of Technology</h2>
          </div>

          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-anim="feat-row"
              className={`${styles["featuretechnology"]} ${
                index === features.length - 1 ? styles["featuretechnology-last"] : ""
              }`}
            >
              <div className={styles["featureoftechnology-left"]}>
                <div className={styles["icon-wrapper"]}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className={styles["img"]}
                  />
                </div>
                <h3 className={styles["feature-title"]}>{feature.title}</h3>
              </div>

              <div className={styles["featuretechnology-right"]}>
                <p className={styles["feature-desc"]}>{feature.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
};

export default Featureoftechnology;