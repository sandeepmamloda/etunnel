// import styles from "./herochistory.module.css";
// import Image from "next/image";
// import Link from "next/link";

// const Herochistory = function () {
//     return (
//         <>
//             <section className={styles["herochistory-section"]}>
//                 <div className={styles["herochistory-section-wrapper"]}>
//                     <div className={styles["herochistory-section-img"]}>
//                         <Image
//                             src="/images/companyhistory/herohistory/herohistory.jpg"
//                             alt="Hero Image"
//                             fill={true}
//                             priority
//                             className={styles["img"]}
//                         />
//                         <div className={styles["herochistory-section-img-overlay"]}></div>
//                     </div>
//                     <div className={styles["herochistory-section-text-wrapper"]}>
//                         <h1>Company History</h1>
//                         <p>
//                             Introducing ETUNNEL's journey towards a safer life with enhanced biometric recognition technology.
//                         </p>
//                         <Link href="/" className={styles["download-brocher"]}>
//                             <span>Download Company Brochure</span>
//                         </Link>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Herochistory;
// ------------------------------------------------
"use client"
import { useEffect, useRef } from "react";
import styles from "./herochistory.module.css";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ------helper: text ko chars mein split karo------
const splitToChars = (el) => {
    const text = el.innerText;
    el.innerHTML = text
        .split("")
        .map(char => char === " "
            ? `<span style="display:inline-block;">&nbsp;</span>`
            : `<span style="display:inline-block;">${char}</span>`
        )
        .join("");
    return el.querySelectorAll("span");
};

const Herochistory = function () {
    const sectionRef = useRef(null);
    const h1Ref = useRef(null);
    const pRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ------h1 letter by letter------
            const h1Chars = splitToChars(h1Ref.current);
            gsap.from(h1Chars, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.03,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                }
            });

            // ------p letter by letter------
            const pChars = splitToChars(pRef.current);
            gsap.from(pChars, {
                opacity: 0,
                y: 15,
                duration: 0.4,
                stagger: 0.015,
                ease: "power3.out",
                delay: 0.6,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                }
            });

            // ------button fade in------
            gsap.from(btnRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power3.out",
                delay: 1.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className={styles["herochistory-section"]}
            >
                <div className={styles["herochistory-section-wrapper"]}>
                    <div className={styles["herochistory-section-img"]}>
                        <Image
                            src="/images/companyhistory/herohistory/herohistory.jpg"
                            alt="Hero Image"
                            fill={true}
                            priority
                            className={styles["img"]}
                        />
                        <div className={styles["herochistory-section-img-overlay"]}></div>
                    </div>
                    <div className={styles["herochistory-section-text-wrapper"]}>
                        <h1 ref={h1Ref}>Company History</h1>
                        <p ref={pRef}>
                            Introducing ETUNNEL's journey towards a safer life with enhanced biometric recognition technology.
                        </p>
                        <Link
                            ref={btnRef}
                            href="/"
                            className={styles["download-brocher"]}
                        >
                            <span>Download Company Brochure</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Herochistory;