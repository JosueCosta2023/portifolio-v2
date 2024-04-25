import styled from "styled-components";

export const AboutSectionStyle = styled.section`
    width: 100%;
    height: auto;
    position: relative;
    z-index: -5;
    background: rgb(255,171,0);
background: linear-gradient(122deg, rgba(255,171,0,0.26934523809523814) 1%, rgba(255,255,255,3) 28%);
`

export const AboutContentWhite = styled.div`
    width: 1320px;
    max-width: 90%;
    height: 728px;
    margin: 0 auto;
    background-color: white;
    border-radius: 16px;
    -webkit-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.75);
    box-shadow: 3px 36px 57px 5px rgba(0,0,0,0.75);
`
export const AboutContentGray = styled.div`
    width: 100%;
    height: 988px;
    background-color: gray;
    margin-top: -112px;
    position: relative;
    z-index: -20;
    @media(max-width: 1450px){
        margin-top: 20px;
    }
`