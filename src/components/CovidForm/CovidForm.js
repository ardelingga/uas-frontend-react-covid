import styles from "./CovidForm.module.css"
import { nanoid } from "nanoid";
import { useState } from "react"
import Alert from "../Alert/Alert";

function CovidForm(props){
    const [provinsi, setProvinsi] = useState("");
    const [status, setStatus] = useState("");
    const [jumlah, setJumlah] = useState("");

    const {provinces, setProvinces} = props;

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

            provinces[indexProvinceFinded] = updateDataProvince;
            
            setProvinces([...provinces]);

            setProvinsi("")
            setStatus("")
            setJumlah("")
        }
    }
    return(
        <div className={styles.container}>
            <section className={styles.form_section}>
                <div className={styles.form_section__right}>
                    <img className={styles.form_section__image} src={require('../../assets/images/Image_form.png')} alt="Gambar" />
                </div>
                <div className={styles.form_section__left}>
                    <h2 className={styles.form_section__title}>Form Covid</h2>
                    <form onSubmit={handleSubmit}>
                        <p>Provinsi</p>
                        <select name="type" id="type" value={provinsi} onChange={handleProvinsi} className={styles.form__input}>
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
                        <select name="type" id="type" value={status} onChange={handleStatus} className={styles.form__input}>
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
                        <input id="date" value={jumlah} onChange={handleJumlah} className={styles.form__input} type="number" />
                        {isJumlahError && <Alert> Jumlah Wajib Diisi </Alert>}
                        <br /><br /><br />

                        <button className={styles.form__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default CovidForm