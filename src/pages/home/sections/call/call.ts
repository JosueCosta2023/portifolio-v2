import styled from "styled-components";

export const CallSectionContainer = styled.section`
    width: 100%;
    height: 50%;
    background-color: var(--secundary-normal);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0px;
    & > div{
        width: 819px;
        max-width: 70%;
        text-align: center;
        & > h2{
            font-size: 48px;
            color: white;
            font-weight: 600;
            margin-bottom: 32px;
        }
        & > p{
            font-size: 18px;
            color: var(--tertiary-lightPlus);
            margin-bottom: 32px;
        }
        & > button{
            margin: 0 auto;
            width: auto;
            gap: 10px;
        }
        @media(max-width: 768px){
            & > h2 {
                font-size: 30px;
            }
        }
    }

`
