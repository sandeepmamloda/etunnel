"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "@/components/home/hero/hero";
import Tagsbar from "@/components/home/tagsbar/tagsbar";
import SecurityFeatures from '@/components/home/securityfeatures/securityfeatures';
import Productshowcase from "@/components/home/productshowcase/productshowcase";
import Seeussection from "@/components/home/see-us-section/seeussection";
import Newsmidia from "@/components/home/newsmidia/newsmidia";

gsap.registerPlugin(ScrollTrigger);

const Home = function () {

    useEffect(() => {
        // ScrollTrigger ko Next.js ke saath sync karna
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <>
            <Hero />
            <Tagsbar />
            <SecurityFeatures />
            <Productshowcase />
            <Seeussection />
            <Newsmidia />
        </>
    );
}

export default Home;