import Herotech from "@/components/coretech/p2n2/herotech-p2n2/herotech";
import Nextgeneration from "@/components/coretech/p2n2/nextgeneration/nextgeneration"
import Authentication from "@/components/coretech/p2n2/authentication/authentication";
import Featureoftechnology from "@/components/coretech/p2n2/feature-of-technology/featureoftechnology";
import Integrate from "@/components/coretech/p2n2/integrate/integrate";
import P2n2info from "@/components/coretech/p2n2/p2n2info/p2n2info";
const P2n2 = () => {
  return (
    <>
      <Herotech />
      <Nextgeneration />
      <Authentication />
      <P2n2info/>
      <Featureoftechnology />
      <Integrate />
    </>
  );
};

export default P2n2;