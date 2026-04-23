// import Herotech from "@/components/coretech/p2n2/herotech-p2n2/herotech";
// import Nextgeneration from "@/components/coretech/p2n2/nextgeneration/nextgeneration"
// import Authentication from "@/components/coretech/p2n2/authentication/authentication";
// import Featureoftechnology from "@/components/coretech/p2n2/feature-of-technology/featureoftechnology";
// import Integrate from "@/components/coretech/p2n2/integrate/integrate";
// import P2n2info from "@/components/coretech/p2n2/p2n2info/p2n2info";
// const P2n2 = () => {
//   return (
//     <>
//       <Herotech />
//       <Nextgeneration />
//       <Authentication />
//       <P2n2info/>
//       <Featureoftechnology />
//       <Integrate />
//     </>
//   );
// };

// export default P2n2;
// -------------------------------------------------------------------------
"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Herotech from "@/components/coretech/p2n2/herotech-p2n2/herotech";
import Nextgeneration from "@/components/coretech/p2n2/nextgeneration/nextgeneration";
import Authentication from "@/components/coretech/p2n2/authentication/authentication";
import Featureoftechnology from "@/components/coretech/p2n2/feature-of-technology/featureoftechnology";
import Integrate from "@/components/coretech/p2n2/integrate/integrate";
import P2n2info from "@/components/coretech/p2n2/p2n2info/p2n2info";

gsap.registerPlugin(ScrollTrigger);

const P2n2 = () => {

    useEffect(() => {
        ScrollTrigger.refresh();

        const animateLetters = (el, delay = 0) => {
            if (!el) return;
            const text = el.innerText;
            el.innerHTML = text
                .split("")
                .map((ch) =>
                    ch === " "
                        ? `<span style="display:inline-block">&nbsp;</span>`
                        : `<span style="display:inline-block">${ch}</span>`
                )
                .join("");

            gsap.fromTo(
                el.querySelectorAll("span"),
                { opacity: 0, y: 18, rotate: 4 },
                {
                    opacity: 1, y: 0, rotate: 0,
                    duration: 0.45,
                    ease: "back.out(1.4)",
                    stagger: 0.028,
                    delay,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 70%",
                        toggleActions: "play none none none",
                    },
                }
            );
        };

        const animateFadeUp = (el, delay = 0) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    delay,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 75%",
                        toggleActions: "play none none none",
                    },
                }
            );
        };

        const animateSlideLeft = (el, delay = 0) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { opacity: 0, x: -40 },
                {
                    opacity: 1, x: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    delay,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 75%",
                        toggleActions: "play none none none",
                    },
                }
            );
        };

        const animateSlideRight = (el, delay = 0) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { opacity: 0, x: 40 },
                {
                    opacity: 1, x: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    delay,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 75%",
                        toggleActions: "play none none none",
                    },
                }
            );
        };

        // ── Nextgeneration ──
        animateLetters(document.querySelector("[data-anim='ng-h2']"), 0);
        animateLetters(document.querySelector("[data-anim='ng-p']"), 0.15);

        // ── Authentication ──
        animateLetters(document.querySelector("[data-anim='auth-h2']"), 0);
        animateFadeUp(document.querySelector("[data-anim='auth-p1']"), 0.2);
        animateSlideLeft(document.querySelector("[data-anim='auth-img']"), 0.1);
        animateFadeUp(document.querySelector("[data-anim='auth-p2']"), 0.3);
        animateFadeUp(document.querySelector("[data-anim='auth-p3']"), 0.45);

        // ── P2n2info ──
        animateSlideLeft(document.querySelector("[data-anim='p2n2info-text']"), 0);
        animateSlideRight(document.querySelector("[data-anim='p2n2info-img']"), 0.2);
        animateLetters(document.querySelector("[data-anim='p2n2info-h2']"), 0.1);
        animateFadeUp(document.querySelector("[data-anim='p2n2info-p']"), 0.4);

        // ── Featureoftechnology ──
        animateLetters(document.querySelector("[data-anim='feat-title']"), 0);
        animateFadeUp(document.querySelector("[data-anim='feat-sub']"), 0.1);
        document.querySelectorAll("[data-anim='feat-row']").forEach((el, i) => {
            animateFadeUp(el, i * 0.08);
        });

        // ── Integrate ──
        animateLetters(document.querySelector("[data-anim='int-h2']"), 0);
        animateFadeUp(document.querySelector("[data-anim='int-p']"), 0.2);
        animateFadeUp(document.querySelector("[data-anim='int-btns']"), 0.35);

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <>
            <Herotech />
            <Nextgeneration />
            <Authentication />
            <P2n2info />
            <Featureoftechnology />
            <Integrate />
        </>
    );
};

export default P2n2;