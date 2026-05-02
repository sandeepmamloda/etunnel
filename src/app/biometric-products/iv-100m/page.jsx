"use client"
import ConvenienceReliability from "@/components/biometric-products/common/convencereliability/convencereliability";
import Heroproduct from "@/components/biometric-products/common/heroproduct/heroproduct";
import Securitytechnology from "@/components/biometric-products/common/securitytechnology/securitytechnology";
import Productspecifications from "@/components/biometric-products/iv-100m/productspecifications/productspecifications";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const iv100m=function(){
  const pathname = usePathname();
    // Har navigation pe scroll top
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);
    return (
        <>
            <Heroproduct 
                image="/images/biometric-products/iv-100m/iv-100m.png"
                title="ETUNNEL"
                highlight="IV-100M"
                description="A high-performance identity authentication device that verifies real users by matching ID cards with biometric information."
              />
            <Securitytechnology/>
            <ConvenienceReliability
                sectionLabel="FEATURES"
                headingLine1="Enhance convenience and reliability"
                headingLine2="with the ETUNNEL IV-100M"
                cards={[
                  {
                    title: "Purpose",
                    description: "ETUNNEL-IV-100M (IVD-Identity Verification Device) is a next-generation identity authentication device that accurately and securely verifies the real user’s identity by matching an identification card (such as an ID card or passport) with the user’s biometric information (face, fingerprint).",
                  },
                  {
                    title: "Reliability",
                    description: "Equipped with AI-based facial recognition and high-performance fingerprint sensors, it prevents tampered or forged identification cards and proxy authentication.",
                  },
                  {
                    title: "Future Scalability",
                    description: "It is an optimized solution for environments that require high-trust authentication, such as finance, public institutions, and access control.",
                  },
                ]}
              />
              <Productspecifications/>
        </>
    );
}
export default iv100m;