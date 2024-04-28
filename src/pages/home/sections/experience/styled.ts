import styled from "styled-components"

export const ExperienceSectionContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-color: var(--tertiary-light);
    & > div{
        width: 1320px;
        max-width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

`

export const ExpirienceDetailsContent = styled.div`
    width: 50%;
    min-width: 529px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 768px){
        text-align: center;
    }
    & > h2{
        font-size: 48px;
        color: var(--secundary-normal);
        font-weight: 700;
        margin-bottom: 24px;
    }
    & > p {
        font-size: 18px;
        color: var(--tertiary-normal);
        margin-bottom: 16px;
        width: 80%;
    }
    & > button{
        margin-top: 32px;
    }

`
export const ExpirienceCardsContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        width: 648px;
        height: 576px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    
`

export const ExperienceCard = styled.div`
    width: 100%;
    height: 176px;
    background-color: white;
    border-left: 5px solid var(--primary-normal);
    border-radius: 6px;
`