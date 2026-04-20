// import Image from 'next/image';
// import styles from "./heroabout.module.css";

// const Heroabout = function () {
//     return (
//         <>
//             <section className={styles["heroabout-section"]}>
//                 <div className={styles["heroabout-section-wrapper"]}>
//                     <div className={styles["heroabout-section-img"]}>
//                         <Image 
//                             src="/images/about/heroabout/hero-about.jpg"    
//                             alt="Hero Image" 
//                             fill={true}
//                             priority
//                             className={styles["img"]}                  
//                         />
//                         <div className={styles["heroabout-section-img-overlay"]}></div>
//                     </div>
//                     <div className={styles["heroabout-section-text-wrapper"]}>
//                         <p>Building a Safer Biometric Authentication Environment</p>
//                         <p> 
//                             <span>Through Continuous R&D and Innovation</span>
//                         </p>
//                         <div className={styles["request-a-demo"]}>
//                             <span>Download Company Brochure</span>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Heroabout;

// ========================================================
"use client";

import { useEffect } from "react";
import styles from "./heroabout.module.css";

const Heroabout = function () {

    useEffect(() => {
        const script = document.createElement("script");

        script.type = "module"; // ✅ FIX
        script.innerHTML = `
            import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.27/build/backgrounds/liquid1.min.js';

            const app = LiquidBackground(document.getElementById('canvas'));

            app.loadImage('/images/about/heroabout/hero-about.jpg');
            app.liquidPlane.material.metalness = 0.75;
            app.liquidPlane.material.roughness = 0.25;
            app.liquidPlane.uniforms.displacementScale.value = 5;
            app.setRain(false);
        `;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className={styles["heroabout-section"]}>
            <div className={styles["heroabout-section-wrapper"]}>
                
                <div className={styles["heroabout-section-img"]}>
                    <canvas id="canvas" className={styles["canvas"]}></canvas>
                    <div className={styles["heroabout-section-img-overlay"]}></div>
                </div>

                <div className={styles["heroabout-section-text-wrapper"]}>
                    <p>Building a Safer Biometric Authentication Environment</p>
                    <p>
                        <span>Through Continuous R&D and Innovation</span>
                    </p>
                    <div className={styles["request-a-demo"]}>
                        <span>Download Company Brochure</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Heroabout;