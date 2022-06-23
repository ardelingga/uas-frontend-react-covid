import FooterStyled from "./FooterStyled"
function Footer(){
    return(
        <FooterStyled>
            <div className={`container`}>
                <nav className={`footer`}>
                    <div>
                        <h1 className={`footer__brand`}>Covid ID</h1>
                        <p>Developed by Ardelingga</p>
                    </div>
                    <div>
                        <ul className={`footer__list`}>
                            <li className={`footer__item`}>Global</li>
                            <li className={`footer__item`}>Indonesia</li>
                            <li className={`footer__item`}>Provinsi</li>
                            <li className={`footer__item`}>About</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </FooterStyled>
    )
}

export default Footer