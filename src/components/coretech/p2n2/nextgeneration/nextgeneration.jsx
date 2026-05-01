// "use client";
// import styles from "./nextgeneration.module.css";
// import { useEffect, useRef } from "react";

// const Nextgeneration = function () {
//   const h2Ref = useRef(null);
//   const pRef = useRef(null);

//   useEffect(() => {
//     let gsap, ScrollTrigger;

//     const init = async () => {
//       const g = await import("gsap");
//       const st = await import("gsap/ScrollTrigger");
//       gsap = g.gsap;
//       ScrollTrigger = st.ScrollTrigger;
//       gsap.registerPlugin(ScrollTrigger);

//       const animateLetters = (el, delay = 0) => {
//         const text = el.innerText;
//         el.innerHTML = text
//           .split("")
//           .map((ch) =>
//             ch === " "
//               ? `<span class="${styles["lc-letter"]}" style="display:inline-block">&nbsp;</span>`
//               : `<span class="${styles["lc-letter"]}">${ch}</span>`
//           )
//           .join("");

//         gsap.fromTo(
//           el.querySelectorAll(`.${styles["lc-letter"]}`),
//           {
//             opacity: 0,
//             y: 18,
//             rotate: 4,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             rotate: 0,
//             duration: 0.45,
//             ease: "back.out(1.4)",
//             stagger: 0.028,
//             delay,
//             scrollTrigger: {
//               trigger: el,
//               start: "top 65%",
//               toggleActions: "play none none none",
//             },
//           }
//         );
//       };

//       animateLetters(h2Ref.current, 0);
//       animateLetters(pRef.current, 0.15);
//     };

//     init();

//     return () => {
//       if (typeof ScrollTrigger !== "undefined") {
//         ScrollTrigger.getAll().forEach((t) => t.kill());
//       }
//     };
//   }, []);

//   return (
//     <>
//       <div className={styles["nextgeneration-wrapper"]}>
//         <div className={styles["nextgeneration-main"]}>

//           <div className={styles["nextgeneration-top"]}>
//             <h2 ref={h2Ref}>
//               ETUNNEL Inc. has developed the AI Engine P2N2, which leads innovation in next-generation biometric
//               authentication security technology.
//             </h2>
//           </div>

//           <div className={styles["nextgeneration-bottom"]}>
//             <p ref={pRef}>
//               P2N2 is an advanced integrated biometric authentication algorithm designed to process various types of biometric
//               information, such as face, fingerprint, finger vein, iris, and palm vein, in a unified manner within a single AI engine.
//             </p>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Nextgeneration;
// --------------------------------------------------------------------------------------
import styles from "./nextgeneration.module.css";

const Nextgeneration = function () {
  return (
    <>
      <section className={styles["nextgeneration-wrapper"]}>
        <div className={styles["nextgeneration-main"]}>

          <div className={styles["nextgeneration-top"]}>
            <h2 data-anim="ng-h2">
              ETUNNEL Inc. has developed the AI Engine P2N2, which leads innovation in next-generation biometric
              authentication security technology.
            </h2>
          </div>

          <div className={styles["nextgeneration-bottom"]}>
            <p data-anim="ng-p">
              P2N2 is an advanced integrated biometric authentication algorithm designed to process various types of biometric
              information, such as face, fingerprint, finger vein, iris, and palm vein, in a unified manner within a single AI engine.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Nextgeneration;