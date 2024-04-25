import styled from "styled-components";
import '../../../../root.css'

export const AboutSectionStyle = styled.section`
    width: 100%;
    height: auto;
    position: relative;
    z-index: 0;
    background: rgb(255,171,0);
    background: linear-gradient(122deg, rgba(255,171,0,0.26934523809523814) 1%, rgba(255,255,255,3) 28%);
`

export const AboutContentWhite = styled.div`
    width: 1320px;
    max-width: 90%;
    height: 728px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-radius: 16px;
    -webkit-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.75);
    box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.75);
    @media(max-width: 1024px){
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        gap: 50px;
        height: auto;
    }
`

export const AboutImageSocial = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    & > div{
        width: 424px;
        min-width: 320px;
        height: 468px;
        border-radius: 10px;
        -webkit-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.75);
        box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.75);
    }
    & > div > img{
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    & > ul{
        position: absolute;
        bottom: 90px;
        padding: 12px;
        list-style: none;
        display: flex;
        background-color: white;
        border-radius: 4px;
        -webkit-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.35);
        -moz-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.35);
        box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.35);
        @media(max-width: 1024px){
            bottom: -50px;
        }
        & > li{
            padding: 16px;
            text-align: center;
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

export const AboutDetailsSocial = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div{
        width: 536px;
        height: auto;
        & > h2 {
            font-weight: 600;
            font-size: 48px;
            margin-bottom: 32px;
            color: var(--secundary-normal);
        }
        & > p{
            font-size: 18px;
            color: var(--tertiary-normal);
            margin-bottom: 16px;
        } 
        & div{
            width: 100%;
            display: flex;
            gap: 20px;
            margin-top: 40px;
            @media(max-width: 768px){
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
            }
            @media(max-width: 1024px){
                justify-content: center;
                align-items: center;
            }
        }

    }

    @media(max-width: 1024px){
        margin-top: 50px;
        text-align: center;
    }
`

export const AboutContentGray = styled.div`
    width: 100%;
    height: 988px;
    background-color: gray;
    margin-top: -112px;
    position: relative;
    z-index: -20;
    @media(max-width: 1450px){
        margin-top: 50px;
    }
`