import ConvenienceReliability from "@/components/biometric-products/common/convencereliability/convencereliability";
import Heroproduct from "@/components/biometric-products/common/heroproduct/heroproduct";
import Productspecifications from "@/components/biometric-products/common/productspecifications/productspecifications";
import Requestademo from "@/components/biometric-products/common/request-a-demo/requestademo";
import Securitytechnology from "@/components/biometric-products/common/securitytechnology/securitytechnology";
const st100v=function(){
    return (
        <>
            <Heroproduct 
                image="/images/biometric-products/st-100v/st-100v.png"
                title="ETUNNEL"
                highlight="ST-100V"
                description="An embedded finger vein recognition module optimized for authentication devices. Compact, powerful, and built for seamless integration."
                brochureUrl="/brochures/st-100v.pdf"
            />
            <Securitytechnology/>
            <ConvenienceReliability
                sectionLabel="FEATURES"
                headingLine1="Enhance convenience and reliability"
                headingLine2="with the ETUNNEL-ST-100V"
                cards={[
                  {
                    title: "Purpose",
                    description: "ETUNNEL-ST-100V is a biometric authentication product that recognizes the unique finger vein patterns of individuals, offering high security and accuracy. It serves as the foundation for passwordless, contact-free identity verification.",
                  },
                  {
                    title: "Reliability",
                    description: "Integrated with a server-based system, it provides a stable and fast authentication environment, making it the optimal choice that satisfies both user convenience and enterprise-grade security requirements.",
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
                  { icon: "/images/productspecifications/C-MOS Sensor.png", label: "C-MOS Sensor", detail: "PAG7820LT (SD, Gray Scale, 3.0 x 3.0 ㎛, Global Shutter)" },
                  { icon: "/images/productspecifications/Main Chip.png", label: "Main Chip", detail: "ARM Cortex-H7" },
                  { icon: "/images/productspecifications/Interface.png", label: "Interface", detail: "Bluetooth / HID Connection" },
                  { icon: "/images/productspecifications/Operating System.png", label: "Operating System", detail: "Embedded system (Free RTOS, Bare Metal) — Recommended: Windows 10/11 Connection" },
                  { icon: "/images/productspecifications/Authentication-Speed.png", label: "Authentication Speed", detail: "Less than 1 second (Based on Local Max 2 Fingers, 5 users)" },
                  { icon: "/images/productspecifications/Operating-Temp-Humidity.png", label: "Operating Temp / Humidity", detail: "-20°C ~ 85°C / up to 90%" },
                  { icon: "/images/productspecifications/Authentication-Method.png", label: "Authentication Method", detail: "1:1 Local (Stand-alone) / Up to 1,000 users registered" },
                  { icon: "/images/productspecifications/Product-Dimensions.png", label: "Product Dimensions", detail: "33(W) × 65(L) × 52(H) mm" },
                  { icon: "/images/productspecifications/Product-Weight.png", label: "Product Weight", detail: "45 g" },
                  
                ]}
              />
              <Requestademo
                heading="Ready to integrate the ST-100V?"
                description="Get in touch to learn how the ETUNNEL-ST-100V can enhance your security infrastructure with finger vein biometric authentication."
                brochureUrl="/brochures/st-100v.pdf"
              />
        </>
    );
}
export default st100v;