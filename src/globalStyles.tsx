import styled, { createGlobalStyle } from "styled-components";
import "./root.css"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    body{
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

export const ButtonPrimary = styled.a`
    padding: 12px 24px;
    background-color: var(--primary-normal);
    color: white;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid var(--primary-normal);
    justify-content: center;
    display: flex;
    width: 140px;
    max-width: 100%;
    align-items: center;
    gap: 5px;
    & > svg{
        font-size: 18px;
    }
    &:hover{
        background-color: white;
        color: var(--primary-normal);
    }
`
export const ButtomWire = styled.a`
    padding: 12px 24px;
    background-color: white;
    color: var(--primary-normal);
    font-weight: bold;
    border-radius: 8px;
    font-size: 14px;
    border: 1px solid var(--primary-normal);
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 100%;
    &:hover{
        background-color: var(--primary-normal);
        color: white;
    }
`