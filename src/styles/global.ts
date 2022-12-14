import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
         --background: #F0F2F5;
         --red: #E52E4D;
         --green:#33CC95;
         --blue: #5429CC;
         --blue-ligth: #6933FF;
         --text-title: #363F5F;
         --text-body: #969CB3;
         --shape: #FFFFFF;

        }


    * {
        margin:0;
        padding:0;
        box-sizing:border-box;

    }
    html { 
        @media (max-width:1000px){
            font-size:93.75%;
        }
        @media(max-width:720px){
            font-size:87.5%;
        }
    }

    body, input, textarea, button{
        font-family:'Montserrat', sans-serif;
        font-weight: 400;

    }
    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 600;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: subpixel-antialiased;

    }

    button{
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`