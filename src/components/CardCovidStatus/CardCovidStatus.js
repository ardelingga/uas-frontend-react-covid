import CommonUtils from "../../utils/common_utils"
import CardCovidStatusStyled from "./CardCovidStatusStyled"

function CardCovidStatus(props){
    return(
        <CardCovidStatusStyled>
            <div className={`grid_item card`}>
                <div className={`container_card`}>
                    <h3>{CommonUtils.stringToPascalCase(props.status)}</h3> 
                    <h2 className={ props.status === "confirmed" ? `text_primary` : props.status === "recovered" ? `text_secondary` : `text_danger` }><b>{CommonUtils.formatNumber(props.jumlah)}</b></h2> 
                </div>
            </div>
        </CardCovidStatusStyled>
    )
}

export default CardCovidStatus