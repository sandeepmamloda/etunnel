import Productspecifications from "@/components/biometric-products/cc-100/productspecifications/productspecifications";
import ConvenienceReliability from "@/components/biometric-products/common/convencereliability/convencereliability";
import Heroproduct from "@/components/biometric-products/common/heroproduct/heroproduct";
import Requestademo from "@/components/biometric-products/common/request-a-demo/requestademo";
import Securitytechnology from "@/components/biometric-products/common/securitytechnology/securitytechnology";
const cc100=function(){
    return (
        <>
          <Heroproduct 
              image="/images/biometric-products/cc-100/cc-100.png"
              title="ETUNNEL"
              highlight="CC-100"
              description="With the ETUNNEL-CR-100(Fingerprint Registration Device and Software), users can conveniently and quickly register their fingerprints for the Fingerprint Smart ID Card."
            />
            <Securitytechnology/>
            <ConvenienceReliability
                sectionLabel="FEATURES"
                headingLine1="Leverage accessories to enhance convenience and reliability."
                headingLine2="with the ETUNNEL CC-100"
                cards={[
                  {
                    title: "Purpose",
                    description: "ETUNNEL-CR-100 (Fingerprint Registration Device and Software) is biometric enrollment solutions that securely register the user’s fingerprint information on the Fingerprint Smart ID Card.",
                  },
                  {
                    title: "Reliability",
                    description: "It captures accurate fingerprint images and safely stores the captured fingerprints in the secure area of the smart ID card. The easy and fast registration process enhances user convenience, and the registered fingerprint information is securely managed within the card, preventing external leakage.",
                  },
                  {
                    title: "Future Scalability",
                    description: "It enables the creation of a safe and reliable fingerprint-based authentication environment in various fields such as finance, access control, and electronic payments.",
                  },
                ]}
              />
              <Productspecifications/>
              <Requestademo
                heading="Secure your digital assets today"
                description="Discover how the ETUNNEL CW-100V can transform your software wallet security with wireless finger vein biometric authentication."
                brochureUrl="/brochures/st-100v.pdf"
              />
        </>
    );
}
export default cc100;