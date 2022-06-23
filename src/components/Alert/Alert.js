import AlertStyled from "./AlertStyled";

function Alert(props){
    return(
        <AlertStyled>
            <p className={alert}>{props.children}</p>
        </AlertStyled>
    )
}

export default Alert;