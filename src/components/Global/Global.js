import CardGlobal from "../CardGlobal/CardGlobal"
import styles from "./Global.module.css"
import data from "../../utils/constants/indonesia"

function Global(){

    const listGlobalStatus = data.indonesia

    return(
        <div className={styles.container}>
            <section>
                <div className={styles.title_container}>
                    <h1>Indonesia</h1>
                    <p>Data Covid Berdasarkan Global</p>
                </div>
                <div className={styles.grid_container}>
                    {
                        listGlobalStatus.map(function(globalStatus){
                            return <CardGlobal status={globalStatus.status} jumlah={globalStatus.total} key={globalStatus.status} />
                        })
                    }
                    {/* <CardGlobal status={"Sembuh"} jumlah={6005646} />
                    <CardGlobal status={"Dirawat"} jumlah={100000} />
                    <CardGlobal status={"Meninggal"} jumlah={10000} /> */}
                </div>
            </section>
        </div>
    )
}

export default Global