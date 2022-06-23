import CardGlobalStyled from "./CardGlobalStyled"

function CardGlobal(props){
    return(
        <CardGlobalStyled>
            <div className={`grid_item card`}>
                <div className={`container_card`}>
                    <p>{props.status}</p> 
                    <h2 className={ props.status === "Positif" ? `text_primary` : props.status === "Sembuh" ? `text_secondary` : `text_danger` }><b>{props.jumlah}</b></h2> 
                </div>
            </div>
        </CardGlobalStyled>
    )
}

export default CardGlobal