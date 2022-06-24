import styled from "styled-components";

const NavbarStyled = styled.div`
    .container{
        background-color: #06D6A0;
        padding: 1rem;
        color: #fff;
        position: fixed;
        top: 0;
        width: 100%;
    }

    .navbar__brand {
        margin-bottom: 1rem;
        margin-left: 1rem;
    }

    .navbar__list{
        list-style: none;
        margin-right: 2rem;
    }

    .navbar__item{
        margin-bottom: 1rem;
    }

    .navbar__item a{
        text-decoration: none;
        color: #fff;
    }

    /* Medium Screen */
    @media(min-width: 768px){
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .navbar__brand{
            margin: 0;
        }

        .navbar__list{
            display: flex;
        }

        .navbar__item{
            margin: 0 1rem;
            
        }
    }
`

export default NavbarStyled;