import styled from "styled-components";

const CovidFormStyled = styled.div`
    /* Small Screen */
    .container {
        background-color: #FFF;
    }

    .form_section {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .form_section__left {
        margin-bottom: 1rem;
    }

    .form_section__title {
        color: #06D6A0;
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }


    .form_section__image {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    .form__input {
        height: 35px !important;
        width: 80% !important;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        border: 1px solid #06D6A0;
        padding-left: 10px;
        padding-right: 10px;
        background-color: #FFF;
    }

    .form__button {
        padding: 0.8rem 2rem;
        border: none;
        width: 80%;
        border-radius: 10px;
        background-color: #06D6A0;
        color: #fff;
    }

    .form_section__left form{
        width: 100%;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        
    }

    /* Large Screen */
    @media (min-width: 992px) {

        .form_section {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            max-width: 1200px;
            margin: 3rem auto;
        }

        .form_section__left {
            flex-basis: 40%;
        }

        .form_section__right {
            flex-basis: 60%;
        }
    }
`

export default CovidFormStyled;