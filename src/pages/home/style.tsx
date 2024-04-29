import styled from "styled-components";

export const HeaderContainier = styled.header`
    width: 100%;
    height: auto;
`
export const HContent = styled.div`
    width: 1320px;
    max-width: 100%;
    padding: 20px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    & > div{
        padding: 0 30px;
    }
    
    & > nav {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        padding: 0 30px;
    }
    @media(max-width: 1000px){
        justify-content: center;
    }
    @media(max-width: 768px){
        justify-content: space-between;
    }
    @media(max-width: 425px){
        flex-wrap: nowrap;
    }
    
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    & > span{
        font-family: var(--font-fa--special);
        color: white;
        width: 56px;
        height: 56px;
        background-color: var(--primary-normal);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 28px;
        font-size: 24px;
        font-weight: 600;
    }
    & > p {
        font-size: 32px;
        color: var(--secundary-normal);
        font-family: var(--font-fa--default);
        font-weight: bold;
    }
`

export const FooterContainer = styled.footer`
    width: 100%;
    height: 30vh;
    background-color: black;
    margin-top: -90px;
`