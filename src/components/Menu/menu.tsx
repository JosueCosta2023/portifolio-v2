import { BiMailSend } from "react-icons/bi";
import { ButtonPrimary } from "../../globalStyles";
import { UlMenu } from "./styled";
import React from "react";
import { scrollToSection } from "../utils";




interface MenuProps  {
    items: string[];
    sectionIds: string[]
}

export const Menu: React.FC<MenuProps> = ({items, sectionIds}) => {

   

    console.log(sectionIds)

    return(
        <UlMenu>
            {items.map((item, index) => (    
                    <li key={index} onClick={() => scrollToSection(sectionIds[index])}>{item}</li>         
            ))}
            {<ButtonPrimary>Fale Comigo <BiMailSend/> </ButtonPrimary>}
        </UlMenu>
    )
}