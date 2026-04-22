import Biometriccertification from "@/components/coretech/kisa-certification/biometric-certification/biometriccertification";
import Evaluationframework from "@/components/coretech/kisa-certification/evaluation-framework/evaluationframework";
import Herokisacertificate from "@/components/coretech/kisa-certification/herokisacertificate/herokisacertificate";
import Authenticationprocess from "@/components/coretech/kisa-certification/authentication-products/authentication-products"
import Importance from "@/components/coretech/kisa-certification/importance/importance";
import Kisacertified from "@/components/coretech/kisa-certification/kisa-certified/kisa-certified";
const Kisacertification = () => {
  return (
    <>
      <Herokisacertificate/>
      <Biometriccertification/>
      <Evaluationframework/>
      <Authenticationprocess/>
      <Importance/>
      <Kisacertified/>
    </>
  );
};

export default Kisacertification;