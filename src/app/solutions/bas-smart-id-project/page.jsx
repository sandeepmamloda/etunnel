"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import Info from "@/components/solutions//bas-smart-id-project/info/info";
import Featureoftechnology from "@/components/solutions/bas-smart-id-project/features-of-technology/featureoftechnology";
import Herobassmartid from "@/components/solutions/bas-smart-id-project/herosmartid/herosmartid";
import Nextgeneration from "@/components/solutions/bas-smart-id-project/nextgeneration/nextgeneration";
import Operationsintegration from "@/components/solutions/bas-smart-id-project/operations-integration/operationsintegration";
import Productshowcase from "@/components/solutions/bas-smart-id-project/productshowcase/productshowcase";
import Solutioncomponents from "@/components/solutions/bas-smart-id-project/solution-components/solutions-components";
import WorkingOfSmartid from "@/components/solutions/bas-smart-id-project/working-of-smartid/working-of-smartid";

gsap.registerPlugin(ScrollTrigger);

const P2n2 = () => {

    useEffect(() => {
        ScrollTrigger.refresh();

        // ── CHANGED: letter-by-letter hata, clean clip-path reveal ──
        const animateClipReveal = (el, delay = 0) => {
            if (!el) return;
            gsap.fromTo(
                el,
                {
                    clipPath: "inset(100% 0% 0% 0%)",
                    y: 40,
                },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    y: 0,
                    duration: 1.1,
                    ease: "power4.out",
                    delay,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 70%",
                        toggleActions: "play none none none",
                    },
                }
            );
        };

        // ── SAME: baaki animations unchanged ──
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
        animateClipReveal(document.querySelector("[data-anim='ng-h2']"), 0);
        animateClipReveal(document.querySelector("[data-anim='ng-p']"), 0.15);

        // ── Authentication ──
        animateClipReveal(document.querySelector("[data-anim='auth-h2']"), 0);
        animateFadeUp(document.querySelector("[data-anim='auth-p1']"), 0.2);
        animateSlideLeft(document.querySelector("[data-anim='auth-img']"), 0.1);
        animateFadeUp(document.querySelector("[data-anim='auth-p2']"), 0.3);
        animateFadeUp(document.querySelector("[data-anim='auth-p3']"), 0.45);

        // ── P2n2info ──
        animateSlideLeft(document.querySelector("[data-anim='p2n2info-text']"), 0);
        animateSlideRight(document.querySelector("[data-anim='p2n2info-img']"), 0.2);
        animateClipReveal(document.querySelector("[data-anim='p2n2info-h2']"), 0.1);
        animateFadeUp(document.querySelector("[data-anim='p2n2info-p']"), 0.4);

        // ── Featureoftechnology ──
        animateClipReveal(document.querySelector("[data-anim='feat-title']"), 0);
        animateFadeUp(document.querySelector("[data-anim='feat-sub']"), 0.1);
        document.querySelectorAll("[data-anim='feat-row']").forEach((el, i) => {
            animateFadeUp(el, i * 0.08);
        });

        // ── Integrate ──
        animateClipReveal(document.querySelector("[data-anim='int-h2']"), 0);
        animateFadeUp(document.querySelector("[data-anim='int-p']"), 0.2);
        animateFadeUp(document.querySelector("[data-anim='int-btns']"), 0.35);

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <>
            <Herobassmartid />
            <Nextgeneration/>
            <Productshowcase/>
            <Info/>
            <Solutioncomponents/>
            <WorkingOfSmartid/>
            <Featureoftechnology/>
            <Operationsintegration/>
        </>
    );
};

export default P2n2;