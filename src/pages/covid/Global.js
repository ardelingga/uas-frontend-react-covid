/* eslint-disable react-hooks/exhaustive-deps */
import Hero from "../../components/Hero/Hero";
import CovidForm from "../../components/CovidForm/CovidForm";
import CovidStatus from "../../components/CovidStatus/CovidStatus";
import Provinces from "../../components/Provinces/Provinces";
import { useEffect, useState } from "react"
import data from "../../utils/constants/provinces"
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoint";
import { useDispatch } from "react-redux";
import { setCovidStatus } from "../../feature/covidSlice";
import SummaryCovid from "../../components/SummaryCovid/SummaryCovid";


function Global() {
  
  const dispatch = useDispatch();

  useEffect(async() => {
    getDataGlobalCovid();
  }, []);
  
  async function getDataGlobalCovid(){
    // Fetch data menggunakan axios
    const response = await axios.get(ENDPOINTS.GLOBAL_COVID);
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
  
  const [listProvinces, setListProvinces] = useState(data.provinces);

  return (
    <>
      <main>
        <Hero />
        <CovidStatus type={"global"} />
        <SummaryCovid type={"global"} />
      </main>
    </>
  );
}

export default Global;
