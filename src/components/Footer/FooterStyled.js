import styled from "styled-components";

const FooterStyled = styled.div`
    .container{
        background-color: #06D6A0;
        padding: 2rem;
        color: #fff;
    }

    .footer__brand {
        margin-bottom: 1rem;
    }

    .footer__list{
        list-style: none;
    }

    .footer__item{
        margin-bottom: 1rem;
    }

    /* Medium Screen */
    @media(min-width: 768px){
        .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer__brand{
            margin: 0;
        }

        .footer__list{
            display: flex;
        }

        .footer__item{
            margin: 0 1rem;
            
        }
    }
`

export default FooterStyled;