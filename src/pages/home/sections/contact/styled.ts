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
    @media(max-width: 380px){
            width: 100%;
            padding: 10px;
            padding-top: 20px;
        }
    & > div {
        width: 100%;
        @media(max-width: 768px){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        & > h2 {
            font-size: 33px;
            color: var(--sedundary-normal);
            font-weight: 800;
            margin-bottom: 16px;
            @media(max-width: 768px){
                text-align: center;
                font-size: 23px;
            }
           
        } 
        & > p{
            font-size: 18px;
            color: var(--tertiary-normal);
            margin-bottom: 35px;
            @media(max-width: 768px){
                text-align: center;
                font-size: 14px;
            }
        }
        
    }

    & > div > div:nth-child(1){
        background-color:  white;
        border-radius: 10px;
        -webkit-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.35);
        -moz-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.35);
        box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.35);
    }
    & > ul{
        bottom: 90px;
        width: auto;
        padding: 12px;
        list-style: none;
        display: flex;
        background-color: white;
        border-radius: 4px;
        @media(max-width: 768px){
            align-items: center;
            justify-content: center;
        }
        & > li{
            padding: 16px;
            text-align: center;
            font-size: 23px;
            border-radius: 4px;
            color: var(--primary-normal);
            cursor: pointer;
            &:hover {
                background-color: var(--primary-normal);
                color: white;
            }
        }
    }
`
export const ContactAddressCard = styled.div`
    width: 336px;
    height: 96px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    @media(max-width: 380px){
        width: 95%;
    }
    & > span{
        width: 48px;
        height: 48px;
        background-color: var(--primary-normal);
        color: white;
        font-weight: bold;
        font-size: 23px;
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
            font-size: 14px;
            font-weight: 600;
            color: var(--secundary-normal);
            @media(max-width: 380px){
                font-size: 14px;
            }
        }
        
    } 
    
`

export const ContactFormContent = styled.div`
    width: 50%;
    max-width: 100%;
    height: 100%;
    padding: 144px 88px;
    @media(max-width: 1024px){
        padding: 60px 88px;
        & > form > p{
            text-align: center;
        }
    }
    @media(max-width: 495px){
            padding: 20px 10px;
        }
    & > form {
        width: 100%;
        height: 100%;
        & > p{
            font-size: 18px;
            color: var(--tertiary-normal);
            margin-bottom: 50px;
        }
        & > div {
        display: flex;
        gap: 10px;
        @media(max-width: 600px){
            flex-direction: column;
        }
    }
    }
    
`
export const InputForm = styled.div`
    width: 100%;
    height: 38px;
    background-color: blue;
    position: relative;
    margin-bottom: 24px;
    & > span {
        position: absolute;
        right: 5px;
        top: 5px;
        color: red;
        font-weight: 300;
        letter-spacing: 2px;
        font-size: 10px;
    }
    & > input {
        width: 100%;
        height: 100%;
        padding-left: 10px;
        font-size: 18px;
        border: none;
        border-bottom: 2px solid var(--tertiary-light);
        outline: none;
        @media(max-width: 495px){
            font-size: 16px;
        }
    }
`