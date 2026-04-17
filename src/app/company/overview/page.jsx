import Herocoverview from "@/components/companyoverview/herocoverview/herocoverview";
import Coretechnology from "@/components/companyoverview/coretechnology/coretechnology";
import Authentication from "@/components/companyoverview/authentication/authentication";
import Tagsbar from "@/components/companyoverview/tagsbar/tagsbar";
import Ourpartners from "@/components/companyoverview/ourpartners/ourpartners";
const Overview = () => {
  return (
    <>
      <Herocoverview />
      <Coretechnology/>
      <Authentication/>
      <Ourpartners/>
      <Tagsbar title="Public Sector"/>
      <Tagsbar title="Private Sector"/>
    </>
  );
};

export default Overview;