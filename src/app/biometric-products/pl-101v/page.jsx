"use client"
import ConvenienceReliability from "@/components/biometric-products/common/convencereliability/convencereliability";
import Heroproduct from "@/components/biometric-products/common/heroproduct/heroproduct";
import Productspecifications from "@/components/biometric-products/common/productspecifications/productspecifications";
import Requestademo from "@/components/biometric-products/common/request-a-demo/requestademo";
import Securitytechnology from "@/components/biometric-products/common/securitytechnology/securitytechnology";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const pl101v=function(){
  const pathname = usePathname();
  // Har navigation pe scroll top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
    return (
        <>
          <Heroproduct 
              image="/images/biometric-products/pl-101v/pl-101v.png"
              title="ETUNNEL"
              highlight=" PL-101V"
              description="An embedded finger vein authentication module optimized for PC logon via Finger Vein authentication."
            />
            <Securitytechnology/>
            <ConvenienceReliability
                sectionLabel="FEATURES"
                headingLine1="Enhance convenience and reliability"
                headingLine2="with the ETUNNEL PL-101 V"
                cards={[
                {
                    title: "Purpose",
                    description: "ETUNNEL-PL-101V is a biometric authentication product that leverages the unique finger vein patterns of individuals, offering high security and accuracy for passwordless login across enterprise environments.",
                },
                {
                    title: "Reliability",
                    description: "Integrated with a server-based system, it provides a stable and fast authentication environment. The 1:N matching capability identifies users from up to 2,000 stored templates — optimal for multi-user workstations.",
                },
                {
                    title: "Future Scalability",
                    description: "It operates in a contactless manner ensuring hygiene, and can be applied in various fields such as finance, security, access control, and electronic payments — scaling effortlessly with your infrastructure.",
                },
            ]}
            />
            <Productspecifications
                title="Product Specifications"
                specs={[
                  { icon: "/images/productspecifications/C-MOS Sensor.png", label: "C-MOS Sensor", detail: "SD, Gray Scale, 3.0 × 3.0 µm, Global Shutter" },
                  { icon: "/images/productspecifications/Main Chip.png", label: "Main Chip", detail: "ARM Cortex-H7" },
                  { icon: "/images/productspecifications/interface.png", label: "Interface", detail: " USB 2.0 / HID Connection" },
                  { icon: "/images/productspecifications/Operating System.png", label: "Operating System", detail: "Embedded system (Free RTOS, Bare Metal) — Recommended: Windows 10/11 Connection" },
                  { icon: "/images/productspecifications/Authentication-Speed.png", label: "Authentication Speed", detail: "Less than 1 second (Based on Local Max 2 Fingers, 5 users)" },
                  { icon: "/images/productspecifications/Operating-Temp-Humidity.png", label: "Operating Temp / Humidity", detail: "-20°C ~ 85°C / up to 90%" },
                  { icon: "/images/productspecifications/Authentication-Method.png", label: "Authentication Method", detail: "1:1 Local (Stand-alone) / Up to 1,000 users registered" },
                  { icon: "/images/productspecifications/Product-Dimensions.png", label: "Product Dimensions", detail: "33(W) × 65(L) × 52(H) mm" },
                  { icon: "/images/productspecifications/Product-Weight.png", label: "Product Weight", detail: "60 g (Base Model 45g + Cradle 15g)" },
                  
                ]}
              />
              <Requestademo
                heading="Ready to go password less?"
                description="Discover how the ETUNNEL PL-101V can transform your organization's login experience with finger vein biometric authentication."
                brochureUrl="/brochures/st-100v.pdf"
              />
        </>
    );
}
export default pl101v;