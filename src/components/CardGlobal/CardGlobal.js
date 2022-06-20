import styles from "./CardGlobal.module.css"

function CardGlobal(props){
    return(
        <div className={`${styles.grid_item} ${styles.card}`}>
            <div className={styles.container_card}>
                <p>{props.status}</p> 
                <h2 className={ props.status === "Positif" ? styles.text_primary : props.status === "Sembuh" ? styles.text_secondary : styles.text_danger }><b>{props.jumlah}</b></h2> 
            </div>
        </div>
    )
}

export default CardGlobal