import styled from "styled-components";

const ProvincesStyled = styled.div`
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

    .table_container {
        overflow-x: auto;
        margin-top: 3rem;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
    }

    th,
    td {
        text-align: center;
        padding: 8px;
    }

    tr:nth-child(even){background-color: #f2f2f2}

    .text_primary {
        color: #06D6A0;
    }

    .text_secondary {
        color: #118AB2;
    }

    .text_danger {
        color: #EF476F;
    }

    /* Medium Screen */
    @media (max-width: 767px) {
        .container {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }

    /* Medium Screen */
    @media (min-width: 768px) and (max-width: 992px) {
        .container {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
        .container section {
            max-width: 1200px;
            margin: 3rem auto;
        }
        
        .container {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
`

export default ProvincesStyled;