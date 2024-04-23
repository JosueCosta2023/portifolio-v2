import styled from "styled-components";


export const HeroSectionContainer = styled.section`
    width: 100%;
    font-family: var(--font-fa--default);
    background: rgb(255,171,0);
    background: linear-gradient(21deg, rgba(255,171,0,0.26934523809523814) 0%, rgba(255,255,255,1) 31%, rgba(255,255,255,0.9808298319327731) 52%, rgba(9,134,163,0.06766456582633051) 81%, rgba(218,77,241,0.5942752100840336) 100%);
`

export const HeroContent = styled.div`
    width: 1320px;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 130px;
    justify-content: center;
    align-items: center;
    padding-bottom: 271px;
    @media(max-width: 768px){
        padding-bottom: 100px;
    }
`

export const HeroDetails = styled.div`
    width: 650px;
    max-width: 100%;
    height: 584px;
    margin-top: 178px;
    @media(max-width: 1024px){
        width: 80%;
        height: auto;
        text-align: center;
    }
    @media(max-width: 768px){
        margin-top: 78px;
    }

`

export const HeroIlustration = styled.div`
    width: 536px;
    max-width: 100%;
    height: 636px;
    margin-top: 126px;
    background-color: blue;
    @media(max-width: 1315px){
        margin-top: 16px;
    }
`

export const HeroInfo = styled.div`
    width: 100%;
    padding-left: 10px;
    padding-right: 20px;
    & > h3{
        font-size: 72px;
        font-weight: bold;
        color: var(--secundary-nomal);
        margin-bottom: 24px;
    }

    & > p{
        font-size: 18px;
        color: var(--tertiary-normal);
        margin-bottom: 24px;
    }

    @media(max-width: 425px){
        & > h3{
        font-size: 42px;
    }
    }
    
`

