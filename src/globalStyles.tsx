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

`

export const ButtonPrimary = styled.button`
    padding: 12px 24px;
    background-color: var(--primary-normal);
    color: white;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid var(--primary-normal);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    &:hover{
        background-color: white;
        color: var(--primary-normal);
    }
`

export const ButtomWire = styled.button`
    padding: 12px 24px;
    background-color: white;
    color: var(--primary-normal);
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid var(--primary-normal);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    &:hover{
        background-color: var(--primary-normal);
        color: white;
    }
`