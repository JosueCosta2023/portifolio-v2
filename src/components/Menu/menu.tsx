import { BiMailSend } from "react-icons/bi";
import { ButtonPrimary } from "../../globalStyles";
import { UlMenu } from "./styled";
import React from "react";



interface MenuProps  {
    items: string[];
}

export const Menu: React.FC<MenuProps> = ({items}) => {

    return(
        <UlMenu>
            {items.map((item, index) => (
            
                    <li key={index}>{item}</li>
                
            ))}
            {<ButtonPrimary>Fale Comigo <BiMailSend/> </ButtonPrimary>}
        </UlMenu>
    )
}