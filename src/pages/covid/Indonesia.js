/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import CovidForm from "../../components/CovidForm/CovidForm";
import CovidStatus from "../../components/CovidStatus/CovidStatus";
import Hero from "../../components/Hero/Hero";
import data from "../../utils/constants/provinces";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoint";
import { useDispatch } from "react-redux";
import { setCovidStatus } from "../../feature/covidSlice";
import SummaryCovid from "../../components/SummaryCovid/SummaryCovid";

function Indonesia(){
    const dispatch = useDispatch();

    useEffect(async() => {
        getDataIndonesiaCovid();
    }, []);
    
    async function getDataIndonesiaCovid(){
        // Fetch data menggunakan axios
        const response = await axios.get(ENDPOINTS.INDONESIA_COVID);
        // console.log(response.data);
        
        const newCovidStatus = [
        {
            status: "confirmed",
            total: response.data.confirmed.value,
        },
        {
            status: "recovered",
            total: response.data.recovered.value,
        },
        {
            status: "deaths",
            total: response.data.deaths.value,
        },
        ];

        dispatch(setCovidStatus(newCovidStatus));
    }

    return(
        <>
            <main>
                <Hero />
                <CovidStatus type={'indonesia'} />
                <SummaryCovid type={"indonesia"} />
            </main>
        </>
    );
}

export default Indonesia;