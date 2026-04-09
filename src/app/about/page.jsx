import Heroabout from "@/components/about/heroabout/heroabout";
import Tagsbar from "@/components/about/tagsbar/tagsbar";
import Companyoverview from "@/components/about/companyoverview/companyoverview";
import Companyhistory from "@/components/about/companyhistory/companyhistory";
import Familysite from "@/components/about/familysite/familysite";
const About = () => {
  return (
    <>
      <Heroabout />
      <Tagsbar />
      <Companyoverview />
      <Companyhistory/>
      <Familysite/>
    </>
  );
};

export default About;