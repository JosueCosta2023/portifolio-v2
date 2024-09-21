import styled from "styled-components"


export const ProjectSectionContainer = styled.section`
    width: 100%;
    height: auto;
    & > div{
        width: 1320px;
        height: 100%;
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > button{
            margin-bottom: 50px;
        }
    }
`

export const ContentTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 100px;
    padding-bottom: 70px;
    & > h2 {
        font-size:48px ;
        color: var(--secundary-normal);
        font-weight: 700;
        margin-bottom: 24px;
    }
    & > p{
        font-size: 18px;
        color: var(--tertiary-normal);
        width: 590px;
        max-width: 80%;
        text-align: center;
        letter-spacing: 2px;
    }
`
export const ContentCards = styled.div`
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    @media(max-width: 10248px){
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        height: auto;
    }
`

export const Card = styled.div`
    width: 424px;
    min-width: 320px;
    height: 476px;
    border: 1px solid var(--tertiary-lightPlus);
    border-radius: 15px;
    position: relative;

    & > h4 {
            position: absolute;
            bottom: 155px;
            right:28px;
            font-size: 18px;
            opacity: 0.5;
            color: black;
        }

    @media(max-width: 460px){
        width: 90%;
        height: auto;
    }
    & > img{
        width: 100%;
        height: 248px;
        object-fit: cover; 
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
    }
    & > div {
        width: 100%;
        padding: 30px;

        & > div > span{
            font-size: 12px;
            color: var(--tertiary-lightPlus);
            display: block;
            text-transform: uppercase;
            margin-bottom: 6px;
        }
        & > h3 {
            font-size: 18px;
            margin-bottom: 12px;
        }
        & > p{
            font-size: 14px;
            color: var(--tertiary-normal);
            margin-bottom: 20px;
        }
        & > div {
            width: 100%;
            display: flex;
            gap: 5px;
            justify-content: space-between;
            text-align: center;
            align-items: center;
            color: var(--primary-normal);
            font-weight: bold;
            font-size: 14px;
            & > a {
                padding: 12px 24px;
                background-color: white;
                color: var(--primary-normal);
                font-weight: bold;
                min-width: 180px;
                border-radius: 8px;
                font-size: 14px;
                border: 1px solid var(--primary-normal);
                display: flex;
                align-items: center;
                gap: 3px;
                justify-content: space-around;
                align-items: center;
                max-width: 100%;
                &:hover{
                    background-color: var(--primary-normal);
                    color: white;
                }
                & > svg{
                    font-size: 20px;
                }
            }
            @media(max-width: 460px){
                width: 100%;
                flex-direction: column;
            }
        }
    }
`

