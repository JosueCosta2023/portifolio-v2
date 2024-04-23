import styled from "styled-components";

export const UlMenu = styled.ul`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    font-weight: 600;
    & > li{
        padding: 12px 18px;
        font-size: 16px;
        cursor: pointer;
        &:hover{
            color: var(--secundary-light);
        }
    }
    
    @media(max-width: 768px){
        display: none;
    }
`