import ConvenienceReliability from "@/components/biometric-products/common/convencereliability/convencereliability";
import Heroproduct from "@/components/biometric-products/common/heroproduct/heroproduct";
import Requestademo from "@/components/biometric-products/common/request-a-demo/requestademo";
import Securitytechnology from "@/components/biometric-products/common/securitytechnology/securitytechnology";
import Productspecifications from "@/components/biometric-products/sc-100p/productspecifications/productspecifications";
const sc100p=function(){
    return (
        <>
            <Heroproduct
                image="/images/biometric-products/sc-100p/sc-100p.png"
                title="ETUNNEL"
                highlight="SC-100P"
                description="A smart authentication card equipped with fingerprint recognition functionality for identity verification and security."
            />
            <Securitytechnology/>
            <ConvenienceReliability
                sectionLabel="FEATURES"
                headingLine1="Enhance convenience and reliability"
                headingLine2="with the ETUNNEL SC-100P"
                cards={[
                  {
                    title: "Purpose",
                    description: "Fingerprint Smart ID Card safely stores fingerprint information on the card and verifies identity through fingerprint recognition",
                  },
                  {
                    title: "Reliability",
                    description: "It enables simple and accurate authentication using only the fingerprint, without the need for a password, while fundamentally preventing tampering and theft, offering high security.",
                  },
                  {
                    title: "Future Scalability",
                    description: "This next-generation security authentication solution can be applied in various fields, including finance, access control, and electronic payments.",
                  },
                ]}
              />
              <Productspecifications/>
              <Requestademo
                heading="Ready to integrate the SC-100P?"
                description="Get in touch to learn how the ETUNNEL-SC-100P can enhance your security infrastructure with finger vein biometric authentication."
                brochureUrl="/brochures/st-100v.pdf"
              />
        </>
    );
}
export default sc100p;