import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body { 
        background: white;
        margin: 0;
        padding: 0;
        font-family: Source Sans Pro, Helvetica 'Courier New', Courier, monospace, Helvetica, Lucida 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', Arial;
    }
`;