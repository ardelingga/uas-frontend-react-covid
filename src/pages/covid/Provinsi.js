import Hero from "../../components/Hero/Hero";
import CovidForm from "../../components/CovidForm/CovidForm";
import Provinces from "../../components/Provinces/Provinces";
import { useSelector } from "react-redux";

function Provinsi(){
    const provincesCovidStatus = useSelector(store => store.covidStatus.provincesCovidStatus);
    return(
        <>
            <main>
                <Hero />
                <Provinces provinces={provincesCovidStatus} />
                <CovidForm provinces={provincesCovidStatus} />
            </main>
        </>
    );
}

export default Provinsi;