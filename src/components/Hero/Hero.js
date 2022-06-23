import HeroStyled from './Hero.styled'


function Hero(){
    return(
        <HeroStyled>
            <div className={`container`}>
                <section className={`hero`}>
                    <div className={`hero__left`}>
                        <h2 className={`hero__title`}>Covid ID</h2>
                        <p className={`hero__subtitle`}>Monitoring Perkembangan Covid</p>
                        
                        <p className={`hero__desc`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio inventore fuga quam sapiente reprehenderit aut voluptatum magni dolorem harum velit, laboriosam necessitatibus? Enim possimus libero saepe ea illo deserunt accusantium.</p>
                        <button className={`hero__button`}>Vaccine</button>
                    </div>
                    <div className={`hero__right`}>
                        <img className={`hero__image`} src={require('../../assets/images/undraw_medical_care_movn 1.png')} alt="Gambar" />
                    </div>
                </section>
            </div>
        </HeroStyled>
    )
}

export default Hero