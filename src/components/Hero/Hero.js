import styles from "./Hero.module.css"

function Hero(){
    return(
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Covid ID</h2>
                    <p className={styles.hero__subtitle}>Monitoring Perkembangan Covid</p>
                    
                    <p className={styles.hero__desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio inventore fuga quam sapiente reprehenderit aut voluptatum magni dolorem harum velit, laboriosam necessitatibus? Enim possimus libero saepe ea illo deserunt accusantium.</p>
                    <button className={styles.hero__button}>Vaccine</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src={require('../../assets/images/undraw_medical_care_movn 1.png')} alt="Gambar" />
                </div>
            </section>
        </div>
    )
}

export default Hero