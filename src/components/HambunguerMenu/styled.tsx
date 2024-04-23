import styled from "styled-components";


export const ButtomToggleMenuBurguer = styled.button`
    background-color: transparent;
    font-size: 38px;
    border: none;
    padding: 10px;
    display: none;
    @media(max-width: 768px){
        display: block;
    }

`
export const MenuBurguerList = styled.ul`
    width: 150px;
    height: auto;
    background-color: white;
    padding: 20px;
    display: none;
    list-style: none;
    position: absolute;
    top: 40px;
    font-weight: 600;
    -webkit-box-shadow: 3px 10px 17px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 10px 17px 0px rgba(0,0,0,0.75);
    box-shadow: 3px 10px 17px 0px rgba(0,0,0,0.75);
    text-transform: capitalize;
    & > li{
        font-size: 16px;
        cursor: pointer;
        &:hover{
            color: var(--secundary-light);
        }
    }
    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

`

