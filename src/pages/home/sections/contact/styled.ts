import styled from "styled-components";

export const ContactSectionContainer = styled.section`
    width: 100%;
    height: auto;
    padding: 0 20px;
    margin-top: 20px;
    
    & > div {
        width: 1320px;
        max-width: 100%;
        height: 720px;
        background-color: white;
        border-radius: 15px;
        position: relative;
        margin: 0 auto;
        display: flex;
        -webkit-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.75);
        box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.75);
        border-radius: 15px;
        @media(max-width: 1024px){
            flex-direction: column;
            align-items: center;
            height: auto;
            & > div{
                width: 90%;
            }
        }
    }
`

export const ContactAddressContent = styled.div`
    width: 50%;
    max-width: 100%;
    height: 100%;
    padding: 88px;
    & > div {
        width: 100%;
        & > h2 {
            font-size: 33px;
            color: var(--sedundary-normal);
            font-weight: 800;
            margin-bottom: 16px;
        } 
        & > p{
            font-size: 18px;
            color: var(--tertiary-normal);
            margin-bottom: 35px;
        }

    }
    & > div > div:nth-child(1){
        background-color:  white;
        border-radius: 10px;
        -webkit-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.35);
        -moz-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.35);
        box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.35);
    }
`
export const ContactAddressCard = styled.div`
    width: 336px;
    height: 96px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    & > span{
        width: 48px;
        height: 48px;
        background-color: var(--primary-normal);
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 24px 13px 24px 24px;
        border-radius: 4px;
    }
    & > div {
        & >span{
            font-size: 14px;
            color: var(--tertiary-normal);
            margin-bottom: 6px;
            display: block;
        }
        & > p{
            font-size: 18px;
            font-weight: 600;
            color: var(--secundary-normal);
        }
        
    } 
    
`

export const ContactFormContent = styled.div`
    width: 50%;
    max-width: 100%;
    height: 100%;
    background-color: yellow;
    padding: 144px 88px;
`