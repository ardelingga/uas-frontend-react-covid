import styled from "styled-components";

const HeroStyled = styled.div`
    .container {
        margin: 16rem auto 3rem auto;
    }

    .hero {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .hero__left {
        margin-bottom: 1rem;
        margin: 1rem;
    }

    .hero__title {
        color: #06D6A0;
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }

    .hero__subtitle {
        color: #118AB2;
        font-size: 1.59rem;
    }

    .hero__description {
        color: #64748b;
        margin-bottom: 1rem;
    }

    .hero__button {
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 10px;
        background-color: #06D6A0;
        color: #fff;
    }

    .hero__image {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        /*
        * Nothing TODO Here.
        * We dont change style Hero. 
        */
    }

    /* Large Screen */
    @media (min-width: 992px) {
        .container {
            max-width: 1200px;
            margin: 7rem auto 3rem auto;
        }

        .hero {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }

        .hero__left {
            flex-basis: 40%;
        }

        .hero__right {
            flex-basis: 60%;
        }
    }
`

export default HeroStyled;