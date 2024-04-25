import { BiMailSend } from "react-icons/bi";
import { UlMenu } from "./styled";
import React from "react";
import { ButtonPrimary } from "../buttons/buttonPrimary/styled";
import { handleClickMail, scrollToSection } from "../utils";

interface MenuProps  {
    items: string[];
    sectionIds: string[]
}

export const Menu: React.FC<MenuProps> = ({items, sectionIds}) => {

    return(
        <UlMenu>
            {items.map((item, index) => (    
                    <li key={index} onClick={() => scrollToSection(sectionIds[index])}>{item}</li>         
            ))}
            {<ButtonPrimary onClick={handleClickMail}>
                Fale Comigo <BiMailSend/> 
            </ButtonPrimary>}
        </UlMenu>
    )
}