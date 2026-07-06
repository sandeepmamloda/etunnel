"use client";
import Productspecifications from "@/components/biometric-products/cc-100/productspecifications/productspecifications";
import ConvenienceReliability from "@/components/biometric-products/common/convencereliability/convencereliability";
import Heroproduct from "@/components/biometric-products/common/heroproduct/heroproduct";
import Requestademo from "@/components/biometric-products/common/request-a-demo/requestademo";
import Securitytechnology from "@/components/biometric-products/cc-100/securitytechnology/securitytechnology";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Cc100client = function () {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);

    return (
        <>
            <Heroproduct
                image="/images/biometric-products/cc-100/cc-100.png"
                title="ETUNNEL"
                highlight="CC-100"
                description="A case that provides power for the Fingerprint Smart ID Card with embedded fingerprint recognition functionality for identity verification and security."
            />
            <Securitytechnology />
            <ConvenienceReliability
                sectionLabel="FEATURES"
                headingLine1="Experience enhanced security and seamless authentication"
                headingLine2="with the ETUNNEL-CC-100."
                cards={[
                    {
                        title: "Purpose",
                        description: "ETUNNEL-CC-100 (Fingerprint Smart ID Card Holder) is a dedicated case that supplies power to the Fingerprint Smart ID Card, ensuring the smooth operation of the fingerprint recognition feature.",
                    },
                    {
                        title: "Reliability",
                        description: "Designed for convenience in portability and use, it provides a reliable fingerprint authentication environment anytime and anywhere.",
                    },
                    {
                        title: "Future Scalability",
                        description: "Use it together with the Fingerprint Smart ID Card to create a safer and more convenient security authentication system.",
                    },
                ]}
            />
            <Productspecifications />
            <Requestademo
                heading="Secure your digital assets today"
                description="Discover how the ETUNNEL CC-100V can transform your software wallet security with wireless finger vein biometric authentication."
                brochureUrl="/brochures/st-100v.pdf"
            />
        </>
    );
};

export default Cc100client;