import Authenticationprocess from "@/components/coretech/fingervein/authenticationprocess/authenticationprocess";
import Fingerveininfo from "@/components/coretech/fingervein/fingerveininfo/fingerveininfo";
import Grid from "@/components/coretech/fingervein/grid/grid";
import Herotech from "@/components/coretech/fingervein/herotech-fingervein/herotech-fingervein";
import Nextgeneration from "@/components/coretech/fingervein/nextgeneration/nextgeneration-autho";
import Operatingprinciple from "@/components/coretech/fingervein/operating-principle/operatingprinciple";
import Secure from "@/components/coretech/fingervein/secure/secure";
const Fingervein = () => {
    return (
        <>
            <Herotech />
            <Nextgeneration />
            <Operatingprinciple/>
            <Grid />
            <Fingerveininfo/>
            <Authenticationprocess/>
            <Secure/>
        </>
    );
};

export default Fingervein;
