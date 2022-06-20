import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import CovidForm from "../components/CovidForm/CovidForm";
import Global from "../components/Global/Global";
import Provinces from "../components/Provinces/Provinces";
import { useState } from "react"
import data from "../utils/constants/provinces"

function Main() {

  const [listProvinces, setListProvinces] = useState(data.provinces);

  return (
    <main>
      <Hero />
      <Global />
      <Provinces provinces={listProvinces} setProvinces={setListProvinces} />
      <CovidForm provinces={listProvinces} setProvinces={setListProvinces} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
