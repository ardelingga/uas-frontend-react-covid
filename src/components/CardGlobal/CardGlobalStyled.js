import styled from "styled-components";

const CardGlobalStyled = styled.div`
    .grid_item {
        text-align: center;
        padding: 2rem;
    }

    .grid_item p {
        font-size: 18px;
    }

    .grid_item h2 {
        font-size: 32px;
    }



    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 80%;
        border-radius: 10px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .container_card {
        padding: 2px 16px;
    }

    .text_primary{
        color: #06D6A0;
    }

    .text_secondary{
        color: #118AB2;
    }

    .text_danger{
        color: #EF476F;
    }
`

export default CardGlobalStyled;