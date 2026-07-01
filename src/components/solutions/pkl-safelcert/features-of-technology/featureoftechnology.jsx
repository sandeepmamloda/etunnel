import Image from "next/image";
import styles from "./featureoftechnology.module.css";

const features = [
  {
    id: 1,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/biometric.png",
    title: "Centralized Management and Control of Business Certificates",
    desc: "The administrator can register business certificates for users and manage the list of approval websites. This allows control so that users can only use the certificates when accessing authorized sites.",
  },
  {
    // enhance-security.png
    id: 2,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/user-specif.png",
    title: "Certificate Usage History Management",
    desc: "The administrator can centrally monitor the history of certificate usage by users and check which certificate was used on which website.",
  },
  {
    id: 3,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/enhance-security.png",
    title: "Secure Certificate Distribution Management",
    desc: "The original certificate password registered on the server is not shared. Instead, a temporary password is assigned to each user during distribution, preventing leakage of the certificate password.",
  },
  {
    // multy-organization.png
    id: 4,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/user-specif.png",
    title: "Block Unauthorized Program Access",
    desc: "Even when using certificates authorized for the user, unauthorized programs are blocked from accessing them.",
  },
  {
    id: 5,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/migration.png",
    title: "Authorized Site Management",
    desc: "Even when using authorized programs, certificates can only be used when accessing authorized sites, thereby preventing illegal use of certificates.",
  },
  {
    // trusted.png
    id: 6,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/multy-organization.png",
    title: "Certificate/Site Usage Approval Management",
    desc: "Users can select the site they wish to access and the certificate they intend to use to request usage approval, and administrators are provided with the functionality to review and approve or reject the request.",
  },
  {
    id: 7,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/trusted.png",
    title: "Administrator Activity Audit Function",
    desc: "Administrator access history and activity logs are stored to track and audit the administrator’s operational activities.",
  },
  {
    id: 8,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/trusted.png",
    title: "Support for Various Browsers",
    desc: "The real-time detection feature for accessed site URLs supports various browsers including Chrome, Edge, and Whale.",
  },
];

const Featureoftechnology = function () {
  return (
    <>
      <section className={styles["featureoftechnology-wrapper"]}>
        <div className={styles["featuretechnology-main"]}>

          <div className={styles["featuretechnology-header"]}>
            <p className={styles["header-sub"]} data-anim="feat-sub">Safelcert Project</p>
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