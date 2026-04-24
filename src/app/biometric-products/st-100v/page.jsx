import Heroproduct from "@/components/biometric-products/common/heroproduct/heroproduct";
import Securitytechnology from "@/components/biometric-products/common/securitytechnology/securitytechnology";
const st100v=function(){
    return (
        <>
          <Heroproduct 
              image="/images/biometric-products/st-100v/st-100v.png"
              title="ETUNNEL"
              highlight="ST-100V"
              description="An embedded finger vein recognition module optimized for authentication devices. Compact, powerful, and built for seamless integration."
            />
            <Securitytechnology/>
        </>
    );
}
export default st100v;