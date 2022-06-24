import styled from "styled-components";

const SummaryCovidStyled = styled.div`
    .container {
        background-color: #FFF;
    }

    .container section {
        padding-top: 2rem;
        padding-bottom: 5rem;
    }

    .title_container {
        text-align: center;
    }

    .title_container h1 {
        font-size: 35px;
        color: #06D6A0;
    }

    .title_container p {
        font-size: 17px;
        color: #118AB2
    }

    .grid_container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-gap: 1rem;
    }

    /* @media (min-width: 600px) {
        .grid_container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 900px) {
        .grid_container {
            grid-template-columns: repeat(3, 1fr);
        }
    } */

    /* Medium Screen */
    @media (max-width: 767px) {
        .container {
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .grid_container img{
            width: 100%;
        }
    }

    /* Medium Screen */
    @media (min-width: 768px) and (max-width: 992px) {
        .container {
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .grid_container img{
            width: 100%;
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
        .container {
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .grid_container img{
            width: 100%;
        }
    }
`

export default SummaryCovidStyled;