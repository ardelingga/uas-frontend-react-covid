import { useState } from "react"
import { useDispatch } from "react-redux";
import { updateDataProvincesStatus } from "../../feature/covidSlice";
import Alert from "../Alert/Alert";
import CovidFormStyled from "./CovidFormStyled";

function CovidForm(props){
    const dispatch = useDispatch();

    const [provinsi, setProvinsi] = useState("");
    const [status, setStatus] = useState("");
    const [jumlah, setJumlah] = useState("");

    const {provinces} = props;

    const statusCovid = ["Positif", "Sembuh", "Dirawat", "Meninggal"];

    // Membuat state:isTitleError, isDateError
    const [isProvinsiError, setIsProvinsiError] = useState(false);
    const [isStatusError, setIsStatusError] = useState(false);
    const [isJumlahError, setIsJumlahError] = useState(false);

    function handleProvinsi(e){
        setProvinsi(e.target.value);
    }

    function handleStatus(e){
        setStatus(e.target.value)
    }
    
    function handleJumlah(e){
        setJumlah(e.target.value);
    }

    function handleSubmit(e){
        // Cegah form agar tidak direfresh
        e.preventDefault();

        if(provinsi === ""){
            setIsProvinsiError(true)
            return
        }else if(status === ""){
            setIsStatusError(true)
            setIsProvinsiError(false)
        }else if(jumlah === ""){
            setIsJumlahError(true)
            setIsStatusError(false)
            setIsProvinsiError(false)
        }else{
            setIsProvinsiError(false)
            setIsStatusError(false)
            setIsJumlahError(false)
            
            let indexProvinceFinded = provinces.findIndex(province => province.kota === provinsi);
            let provinceFinded = provinces.find(province => province.kota === provinsi);

            const updateDataProvince = {
                kota: provinsi,
                kasus: parseInt(provinceFinded.kasus, 10) + (status === "Positif" ? parseInt(jumlah, 10) : 0),
                sembuh: parseInt(provinceFinded.sembuh, 10) + (status === "Sembuh" ? parseInt(jumlah, 10) : 0),
                meninggal: parseInt(provinceFinded.meninggal, 10) + (status === "Meninggal" ? parseInt(jumlah, 10) : 0),
                dirawat: parseInt(provinceFinded.dirawat, 10) + (status === "Dirawat" ? parseInt(jumlah, 10) : 0),
            }

            dispatch(updateDataProvincesStatus({index:indexProvinceFinded, data: updateDataProvince}));

            setProvinsi("")
            setStatus("")
            setJumlah("")
        }
    }
    return(
        <CovidFormStyled>
            <div className={`container`}>
                <section className={`form_section`}>
                    <div className={`form_section__right`}>
                        <img className={`form_section__image`} src={require('../../assets/images/Image_form.png')} alt="Gambar" />
                    </div>
                    <div className={`form_section__left`}>
                        <h2 className={`form_section__title`}>Form Covid</h2>
                        <form onSubmit={handleSubmit}>
                            <p>Provinsi</p>
                            <select name="type" id="type" value={provinsi} onChange={handleProvinsi} className={`form__input`}>
                                <option value="none">Select Item</option>
                                {
                                    provinces.map((province) => {
                                        return <option key={province.kota} value={province.kota}>{province.kota}</option>
                                    })
                                }
                            </select>
                            {isProvinsiError && <Alert>Provinsi Wajib Dipilih</Alert> }
                            <br />
                            
                            <p>Status</p>
                            <select name="type" id="type" value={status} onChange={handleStatus} className={`form__input`}>
                                <option value="none">Select Item</option>
                                {
                                    statusCovid.map((type) => {
                                        return <option key={type} value={type}>{type}</option>
                                    })
                                }
                            </select>
                            {isStatusError && <Alert>Status Wajib Dipilih</Alert> }
                            <br />
                                    
                            <p>Jumlah</p>
                            <input id="date" value={jumlah} onChange={handleJumlah} className={`form__input`} type="number" />
                            {isJumlahError && <Alert> Jumlah Wajib Diisi </Alert>}
                            <br /><br /><br />

                            <button className={`form__button`}>Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </CovidFormStyled>
    )
}

export default CovidForm