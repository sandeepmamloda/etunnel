import Herochistory from "@/components/companyhistory/herochistory/herochistory";
import Historyinovation from "@/components/companyhistory/historyinovation/historyinovation";
import Globe from "@/components/companyhistory/globe/globe";
import Globalnetwork from "@/components/companyhistory/globalnetwork/globalnetwork";
import Location from "@/components/companyhistory/location/location"

const Companyhistory = function () {
    return (
        <>
            <Herochistory />
            <Historyinovation />
            <Globalnetwork/>
            <Globe />
            <Location/>
        </>
    );
}

export default Companyhistory;