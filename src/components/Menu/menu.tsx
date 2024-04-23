import { BiMailSend } from "react-icons/bi";
import { ButtonPrimary } from "../../globalStyles";
import { UlMenu } from "./styled";
import React from "react";
import { Link } from "react-router-dom";



interface MenuProps  {
    items: string[];
    itemsRouter: string[]
}

export const Menu: React.FC<MenuProps> = ({items, itemsRouter}) => {

    console.log(itemsRouter[1])
    return(
        <UlMenu>
            {items.map((item, index) => (  
                       
               <Link to={itemsRouter[index]} key={index}>
                   <li>{item}</li>
               </Link>
            ))}
            {<ButtonPrimary>Fale Comigo <BiMailSend/> </ButtonPrimary>}
        </UlMenu>
    )
}