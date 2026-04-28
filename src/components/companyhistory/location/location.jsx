import styles from "./location.module.css";
import Image from "next/image";

const Location = function () {
    return (
        <section className={styles["location-section"]}>
            <div className={styles["location-section-wrapper"]}>

                {/* ------heading------ */}
                <h2 className={styles["location-heading"]}>Our Location</h2>

                {/* ------card------ */}
                <div className={styles["location-card"]}>

                    {/* ------left: image + map button------ */}
                    <div className={styles["location-card-img-wrapper"]}>
                        <Image
                            src="/images/companyhistory/location/location.jpg"
                            alt="Head Office Location"
                            fill
                            className={styles["location-card-img"]}
                        />
                        
                        <a href="https://www.google.com/maps?q=1011-1013+Building+G+H+Business+Park+26+Beopwon-ro+9-gil+Songpa-gu+Seoul+05836+South+Korea"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles["location-card-map-btn"]}
                        >
                            View on Google Maps
                        </a>
                    </div>

                    {/* ------right: address------ */}
                    <div className={styles["location-card-content"]}>
                        <h3 className={styles["location-card-title"]}>HEAD OFFICE</h3>
                        <p className={styles["location-card-address"]}>
                            #1011-1013, Building G, H Business Park, 26 Beopwon-ro 9-gil,
                            Songpa-gu, Seoul 05836, South Korea
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Location;