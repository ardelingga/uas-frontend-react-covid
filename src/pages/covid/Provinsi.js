import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CovidForm from "../../components/CovidForm/CovidForm";
import GlobalCovid from "../../components/GlobalCovid/GlobalCovid";
import Provinces from "../../components/Provinces/Provinces";
import { useState } from "react"
import data from "../../utils/constants/provinces"

function Provinsi(){
    const [listProvinces, setListProvinces] = useState(data.provinces);
    return(
        <>
            <main>
                <Hero />
                <Provinces provinces={listProvinces} setProvinces={setListProvinces} />
                <CovidForm provinces={listProvinces} setProvinces={setListProvinces} />
            </main>
        </>
    );
}

export default Provinsi;