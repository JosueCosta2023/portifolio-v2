import { createGlobalStyle } from "styled-components";
import "./root.css"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:var(--font-fa--default);
    }
    h1, h2, h3, h4, h5, p{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
    }

`


