import styled from "styled-components"

export const ExperienceSectionContainer = styled.section`
    width: 100%;
    background-color: var(--tertiary-light);
    height: auto;
    & > div{
        width: 1320px;
        max-width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 150px 0px;
        @media(max-width: 1057px){
            gap: 100px;
            padding: 50px 0px;
        }
    }
    
    `

export const ExpirienceDetailsContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 768px){
        text-align: center;
    }
    @media(max-width: 780px){
        width: 100%;
        align-items: center;
    }
    & > h2{
        font-size: 48px;
        color: var(--secundary-normal);
        font-weight: 700;
        margin-bottom: 24px;
        @media(max-width: 780px){
        font-size: 28px;
    }
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
    @media(max-width: 780px){
        width: 100%;
        align-items: center;
    }
    & > div {
        width: 648px;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
        @media(max-width: 780px){
        width: 90%;

    }
    }
    
`

export const ExperienceCard = styled.div`
    width: 100%;
    height: 176px;
    background-color: white;
    border-left: 5px solid var(--primary-normal);
    border-radius: 6px;
    padding: 32px;
    & > h2{
        font-size: 24px;
        color: var(--secundary-normal);
        letter-spacing: 2px;
        font-weight: 600;
        margin-bottom: 16px;
    }
    & > p{
        font-size: 16px;
        color: var(--tertiary-normal);
        letter-spacing: 2px;
    }
    @media(max-width: 1024px){
        height: auto;
    }
`