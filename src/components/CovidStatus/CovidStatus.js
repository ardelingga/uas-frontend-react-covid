import CardCovidStatus from "../CardCovidStatus/CardCovidStatus"
import CovidStatusStyled from "./CovidStatusStyled"
import CommonUtils from "../../utils/common_utils"
import { useSelector } from "react-redux"

function CovidStatus(props){
    
    const listCovidStatus = useSelector(store => store.covidStatus.covidStatus);
    // console.log(listCovidStatus);
    const { type } = props;

    return(
        <CovidStatusStyled>
            <div className={`container`}>
                <section>
                    <div className={`title_container`}>
                        <h1>{ CommonUtils.stringToPascalCase(type) }</h1>
                        <p>Data Covid Berdasarkan { CommonUtils.stringToPascalCase(type) }</p>
                    </div>
                    <div className={`grid_container`}>
                        {
                            listCovidStatus.map(function(globalStatus){
                                return <CardCovidStatus status={globalStatus.status} jumlah={globalStatus.total} key={globalStatus.status} />
                            })
                        }
                    </div>
                </section>
            </div>
        </CovidStatusStyled>
    )
}

export default CovidStatus