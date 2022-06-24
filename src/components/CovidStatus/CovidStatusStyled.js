import styled from "styled-components";

const CovidStatusStyled = styled.div`
    .container {
        background-color: #F8F9FA;
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
    }

    /* Medium Screen */
    @media (min-width: 768px) and (max-width: 992px) {
        .grid_container {
            grid-template-columns: repeat(3, 1fr);
        }
        
        .grid_container {
            grid-template-columns: repeat(2, 1fr);
        }

        .container {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
        .grid_container {
            grid-template-columns: repeat(3, 1fr);
        }
        .container {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
`

export default CovidStatusStyled;