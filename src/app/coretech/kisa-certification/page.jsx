import Biometriccertification from "@/components/coretech/kisa-certification/biometric-certification/biometriccertification";
import Evaluationframework from "@/components/coretech/kisa-certification/evaluation-framework/evaluationframework";
import Herokisacertificate from "@/components/coretech/kisa-certification/herokisacertificate/herokisacertificate";
const Kisacertification = () => {
  return (
    <>
      <Herokisacertificate/>
      <Biometriccertification/>
      <Evaluationframework/>
    </>
  );
};

export default Kisacertification;