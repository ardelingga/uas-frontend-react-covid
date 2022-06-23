import { Link } from "react-router-dom"
import NavbarStyled from "./NavbarStyled"
function Navbar(){
    return(
        <NavbarStyled>
            <div className={`container`}>
                <nav className={`navbar`}>
                    <div>
                        <h1 className={`navbar__brand`}>Covid ID</h1>
                    </div>
                    <div>
                        <ul className={`navbar__list`}>
                            <li className={`navbar__item`}><Link to="/"> Global </Link></li>
                            <li className={`navbar__item`}><Link to="/indonesia"> Indonesia </Link></li>
                            <li className={`navbar__item`}><Link to="/provinsi"> Provinsi </Link></li>
                            <li className={`navbar__item`}><Link to="/about"> About </Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </NavbarStyled>
    )
}

export default Navbar