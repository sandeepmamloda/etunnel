import ConvenienceReliability from "@/components/biometric-products/common/convencereliability/convencereliability";
import Heroproduct from "@/components/biometric-products/common/heroproduct/heroproduct";
import Productspecifications from "@/components/biometric-products/common/productspecifications/productspecifications";
import Requestademo from "@/components/biometric-products/common/request-a-demo/requestademo";
import Securitytechnology from "@/components/biometric-products/common/securitytechnology/securitytechnology";
const sw100v=function(){
    return (
        <>
          <Heroproduct 
              image="/images/biometric-products/sw-100v/sw-100v.png"
              title="ETUNNEL"
              highlight="SW-100V"
              description="An embedded finger vein authentication module optimized for managing mobile software wallets through biometric authentication. Wireless, portable, and built for digital asset security."
            />
            <Securitytechnology/>
            <ConvenienceReliability
              sectionLabel="FEATURES"
              headingLine1="Experience enhanced security and seamless authentication"
              headingLine2="with the ETUNNEL-SW-100V."
              cards={[
                {
                  title: "Purpose",
                  description: "ETUNNEL-SW-100V is a biometric authentication device that recognizes the user's finger vein pattern to support secure access and authentication for software wallets. It serves as a physical key to your digital assets.",
                },
                {
                  title: "Reliability",
                  description: "It provides high security and accuracy by utilizing unique vein information, ensuring the safe protection of personal keys and assets. The wireless design enables on-the-go authentication anywhere.",
                },
                {
                  title: "Future Scalability",
                  description: "With a contactless design, it offers hygienic and convenient use, making it an optimized solution for financial services and digital asset management environments across mobile ecosystems.",
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
                  { icon: "/images/productspecifications/Authentication-Method.png", label: "Authentication Method", detail: "1:1 Local (Stand-alone) / Up to 1,000 users registered" },
                  { icon: "/images/productspecifications/Product-Dimensions.png", label: "Product Dimensions", detail: "33(W) × 65(L) × 52(H) mm" },
                  { icon: "/images/productspecifications/Product-Weight.png", label: "Product Weight", detail: "70 g (Base Model 45g + Wireless Pack 25g)" },
                  { icon: "/images/productspecifications/battery.png", label: "Battery", detail: "Lithium Battery 550mAh / Full Charging Time : Within 2 hours" },
                  { icon: "/images/productspecifications/authentication.png", label: "Number of Authentications Available", detail: "More than 60 times" },
                  
                ]}
              />
              <Requestademo
                heading="Secure your digital assets today"
                description="Discover how the ETUNNEL-SW-100V can transform your software wallet security with wireless finger vein biometric authentication."
                brochureUrl="/brochures/st-100v.pdf"
              />
        </>
    );
}
export default sw100v;