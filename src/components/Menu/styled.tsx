import styled from "styled-components";

export const UlMenu = styled.ul`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    
    @media(max-width: 600px){
        display: none;
    }
`