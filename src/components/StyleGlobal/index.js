import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`

export default StyleGlobal;