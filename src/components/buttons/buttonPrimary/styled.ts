import styled from "styled-components";

export const ButtonPrimary = styled.button`
    padding: 12px 24px;
    background-color: var(--primary-normal);
    color: white;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid var(--primary-normal);
    justify-content: center;
    display: flex;
    width: 180px;
    max-width: 100%;
    align-items: center;
    gap: 5px;
    & > svg{
        font-size: 18px;
    }
    &:hover{
        background-color: white;
        color: var(--primary-normal);
    }
`

export const ButtonWire = styled.button`
    padding: 12px 24px;
    background-color: white;
    color: var(--primary-normal);
    font-weight: bold;
    border-radius: 8px;
    font-size: 14px;
    border: 1px solid var(--primary-normal);
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 100%;
    &:hover{
        background-color: var(--primary-normal);
        color: white;
    }
`