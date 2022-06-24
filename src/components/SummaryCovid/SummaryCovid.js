import SummaryCovidStyled from "./SummaryCovidStyled"
import CommonUtils from "../../utils/common_utils"
import ENDPOINTS from "../../utils/constants/endpoint"

function SummaryCovid(props){
    
    const { type } = props;

    return(
        <SummaryCovidStyled>
            <div className={`container`}>
                <section>
                    <div className={`title_container`}>
                        <h1>Summary</h1>
                        <p>Grafik Data Covid { CommonUtils.stringToPascalCase(type) }</p>
                    </div>
                    <div className={`grid_container`}>
                        <img src={type === "global" ? ENDPOINTS.SUMMARY_GLOBAL : ENDPOINTS.SUMMARY_INDONESIA} alt="Summary Data Covid" />
                    </div>
                    
                </section>
            </div>
        </SummaryCovidStyled>
    )
}

export default SummaryCovid