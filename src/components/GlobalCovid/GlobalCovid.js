import CardGlobal from "../CardGlobal/CardGlobal"
import data from "../../utils/constants/indonesia"
import GlobalCovidStyled from "./GlobalCovidStyled"

function GlobalCovid(){

    const listGlobalCovidStatus = data.indonesia

    return(
        <GlobalCovidStyled>
            <div className={`container`}>
                <section>
                    <div className={`title_container`}>
                        <h1>Indonesia</h1>
                        <p>Data Covid Berdasarkan Global</p>
                    </div>
                    <div className={`grid_container`}>
                        {
                            listGlobalCovidStatus.map(function(globalStatus){
                                return <CardGlobal status={globalStatus.status} jumlah={globalStatus.total} key={globalStatus.status} />
                            })
                        }
                        {/* <CardGlobal status={"Sembuh"} jumlah={6005646} />
                        <CardGlobal status={"Dirawat"} jumlah={100000} />
                        <CardGlobal status={"Meninggal"} jumlah={10000} /> */}
                    </div>
                </section>
            </div>
        </GlobalCovidStyled>
    )
}

export default GlobalCovid