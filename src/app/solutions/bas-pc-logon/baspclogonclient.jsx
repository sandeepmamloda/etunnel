"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import Heropc from "@/components/solutions/bas-pc-logon/heropc/heropc";
import Nextgeneration from "@/components/solutions/bas-pc-logon/nextgeneration/nextgeneration";
import Productshowcase from "@/components/solutions/bas-pc-logon/productshowcase/productshowcase";
import Solutionscomponents from "@/components/solutions/bas-pc-logon/solution-components/solutions-components";
import Operationintegration from "@/components/solutions/bas-pc-logon/operations-integration/operationsintegration";
import Authenticationflow from "@/components/solutions/bas-pc-logon/authentication-flow/authentication-flow";
import Featureoftechnology from "@/components/solutions/bas-pc-logon/features-of-technology/featureoftechnology";
import Pclogon from "@/components/solutions/bas-pc-logon/pc-logon/pc-logon";

gsap.registerPlugin(ScrollTrigger);

const Baspclogonclient = () => {

    useEffect(() => {
        ScrollTrigger.refresh();

        const animateClipReveal = (el, delay = 0) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { clipPath: "inset(100% 0% 0% 0%)", y: 40 },
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
            <Heropc />
            <Nextgeneration />
            <Productshowcase />
            <Pclogon />
            <Solutionscomponents />
            <Authenticationflow />
            <Featureoftechnology />
            <Operationintegration />
        </>
    );
};

export default Baspclogonclient;