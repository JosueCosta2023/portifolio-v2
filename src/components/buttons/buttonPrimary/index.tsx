import React, { ReactNode } from "react"
import { ButtonWire, ButtonPrimary } from "./styled"

interface BurrtomPropsType {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
}


export const ButtomPrimaryNormal: React.FC<BurrtomPropsType> = ({children, onClick, disabled}) => {
    return(
        <ButtonPrimary onClick={onClick} disabled={disabled || false}>
            {children}
        </ButtonPrimary>
    )
}

export const ButtomPrimaryWire: React.FC<BurrtomPropsType> = ({children, onClick, disabled}) => {
    return(
        <ButtonWire onClick={onClick} disabled={disabled || false}>
            {children}
        </ButtonWire>
    )
}
