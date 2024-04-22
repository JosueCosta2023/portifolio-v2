import styled from "styled-components";


export const HeaderContainier = styled.header`
    width: 100%;
    height: auto;
    background-color: blue;
    
`

export const HContent = styled.div`
    width: 1320px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    & > div{
        width: 30%;
    }

    & > nav {
        width: 70%;
        background-color: green;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`