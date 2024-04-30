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
    background-color: red;
    padding: 88px;
`
export const ContactFormContent = styled.div`
    width: 50%;
    max-width: 100%;
    height: 100%;
    background-color: yellow;
    padding: 144px 88px;
`