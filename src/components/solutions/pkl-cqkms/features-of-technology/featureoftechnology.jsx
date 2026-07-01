import Image from "next/image";
import styles from "./featureoftechnology.module.css";

const features = [
  {
    id: 1,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/biometric.png",
    title: "Secure Delegation and Storage of Private Keys",
    desc: "CQKMS supports the secure delegation, storage, and management of private keys, which require the highest level of security in a PKI environment.",
  },
  {
    // enhance-security.png
    id: 2,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/user-specif.png",
    title: "Secure Retrieval of Private Keys",
    desc: "CQKMS supports the secure retrieval of delegated private keys through a protected process. Only authorized users can perform the retrieval, and it may require approval from an administrator.",
  },
  {
    id: 3,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/enhance-security.png",
    title: "Management of Stored Private Keys",
    desc: "The CQKMS administrator can view basic information of stored private keys (such as storage date, delegating entity, and related certificate information) and access the list of private key retrieval requests.",
  },
  {
    // multy-organization.png
    id: 4,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/user-specif.png",
    title: "Private Key Retrieval Approval",
    desc: "The CQKMS administrator can view private key retrieval requests and either approve or reject each request. Both manual and automatic approvals are supported.",
  },
  {
    id: 5,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/migration.png",
    title: "Easy Migration from Existing RFID Systems",
    desc: "All data transmitted between the CQKMS Client SDK and the CQKMS Master Server, including private keys, is encrypted using the RSA 2048-bit public key encryption algorithm. In addition, SSL (Secure Socket Layer) is applied to provide an extra layer of network security.",
  },
  {
    // trusted.png
    id: 6,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/multy-organization.png",
    title: "Administrator Notification Function",
    desc: "One card grants access across headquarters, branches, and affiliated institutions — enabling seamless yet secure movement across multiple sites.",
  },
  {
    id: 7,
    icon: "/images/solutions/bas-smart-id-project/feature-of-technology/trusted.png",
    title: "Trusted & Deployed by UN ITU",
    desc: "In the case of manual approval by an administrator, when a private key retrieval request is received, a notification email is sent to the registered email address of the administrators of the Master, Slave 1, and Slave 2 servers. Once the administrator approves the retrieval, a confirmation email is sent to the requester, allowing the private key retrieval process to proceed smoothly.",
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