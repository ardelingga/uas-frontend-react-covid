import { useState } from "react";
import CovidForm from "../../components/CovidForm/CovidForm";
import GlobalCovid from "../../components/GlobalCovid/GlobalCovid";
import Hero from "../../components/Hero/Hero";
import data from "../../utils/constants/provinces";

function Indonesia(){
    const [listProvinces, setListProvinces] = useState(data.provinces);
    return(
        <>
            <main>
                <Hero />
                <GlobalCovid />
                <CovidForm provinces={listProvinces} setProvinces={setListProvinces} />
            </main>
        </>
    );
}

export default Indonesia;