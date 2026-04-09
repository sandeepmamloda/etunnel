import Hero from "@/components/home/hero/hero"
import Tagsbar from "@/components/home/tagsbar/tagsbar";
import SecurityFeatures from '@/components/home/securityfeatures/securityfeatures';
import Productshowcase from "@/components/home/productshowcase/productshowcase";
import Seeussection from "@/components/home/see-us-section/seeussection";
import Newsmidia from "@/components/home/newsmidia/newsmidia";
const Home=function(){
    return(
        <>
           <Hero/>
           <Tagsbar/>
           <SecurityFeatures/>
           <Productshowcase/>
           <Seeussection/>
           <Newsmidia/>
        </>
    );
}
export default Home;