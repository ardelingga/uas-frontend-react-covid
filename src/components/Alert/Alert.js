import styles from "./Alert.module.css"

function Alert(props){
    return(
        <p className={styles.alert}>{props.children}</p>
    )
}

export default Alert;