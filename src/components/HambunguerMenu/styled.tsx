import styled from "styled-components";


export const ButtomToggleMenuBurguer = styled.button`
    background-color: transparent;
    font-size: 18px;
    border: none;
    padding: 10px;
    display: none;
    @media(max-width: 600px){
        display: block;
    }

`
export const MenuBurguerList = styled.ul`
    width: 100px;
    height: auto;
    background-color: red;
    padding: 20px;
    display: none;
    list-style: none;
    @media(max-width: 600px){
        display: block;
    }

`

