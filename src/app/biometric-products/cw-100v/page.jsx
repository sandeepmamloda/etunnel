"use client"
import ConvenienceReliability from "@/components/biometric-products/common/convencereliability/convencereliability";
import Heroproduct from "@/components/biometric-products/common/heroproduct/heroproduct";
import Productspecifications from "@/components/biometric-products/common/productspecifications/productspecifications";
import Requestademo from "@/components/biometric-products/common/request-a-demo/requestademo";
import Securitytechnology from "@/components/biometric-products/common/securitytechnology/securitytechnology";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const cw100v=function(){
  const pathname = usePathname();
    // Har navigation pe scroll top
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);
    return (
        <>
          <Heroproduct 
              image="/images/biometric-products/cw-100v/cw-100v.png"
              title="ETUNNEL"
              highlight=" CW-100V"
              description="An embedded finger vein authentication module optimized for digital asset management via Finger Vein authentication."
            />
            <Securitytechnology/>
            <ConvenienceReliability
                sectionLabel="FEATURES"
                headingLine1="Experience enhanced security and seamless authentication"
                headingLine2="with the ETUNNEL-CW-100V."
                cards={[
                  {
                    title: "Purpose",
                    description: "ETUNNEL-CW-100V is a biometric authentication device that recognizes the user’s finger vein pattern to provide secure access and authentication for hardware wallets.",
                  },
                  {
                    title: "Reliability",
                    description: "It ensures high security and accuracy through unique vein information, safely protecting personal keys and digital assets from external threats.",
                  },
                  {
                    title: "Future Scalability",
                    description: "With its contactless design, it offers hygienic and convenient use, and is an optimized security solution for financial and blockchain-based service environments.",
                  },
                ]}
              />
              <Productspecifications
                title="Product Specifications"
                specs={[
                  { icon: "/images/productspecifications/C-MOS Sensor.png", label: "C-MOS Sensor", detail: "SD, Gray Scale, 3.0 × 3.0 µm, Global Shutter" },
                  { icon: "/images/productspecifications/Main Chip.png", label: "Main Chip", detail: "ARM Cortex-H7" },
                  { icon: "/images/productspecifications/Interface.png", label: "Interface", detail: "Bluetooth Connection" },
                  { icon: "/images/productspecifications/Operating System.png", label: "Operating System", detail: "Embedded system (Free RTOS, Bare Metal) — Recommended: Android / iOS(App) Connection" },
                  { icon: "/images/productspecifications/Authentication-Speed.png", label: "Authentication Speed", detail: "Less than 1 second (Based on Local Max 2 Fingers, 5 users)" },
                  { icon: "/images/productspecifications/Operating-Temp-Humidity.png", label: "Operating Temp / Humidity", detail: "-20°C ~ 85°C / up to 90%" },
                  { icon: "/images/productspecifications/Authentication-Method.png", label: "Authentication Method", detail: "1:1 Local (Stand-alone)" },
                  { icon: "/images/productspecifications/Product-Dimensions.png", label: "Product Dimensions", detail: "67(W) × 40(L) × 65.3(H) mm" },
                  { icon: "/images/productspecifications/Product-Weight.png", label: "Product Weight", detail: "70 g" },
                  { icon: "/images/productspecifications/battery.png", label: "Battery", detail: "Lithium Battery 550mAh / Full Charging Time : Within 2 hours" },
                  { icon: "/images/productspecifications/authentication.png", label: "Number of Authentications Available", detail: "More than 50 times" },
                  
                ]}
              />
              <Requestademo
                heading="Secure your digital assets today"
                description="Discover how the ETUNNEL CW-100V can transform your software wallet security with wireless finger vein biometric authentication."
                brochureUrl="/brochures/st-100v.pdf"
              />
        </>
    );
}
export default cw100v;