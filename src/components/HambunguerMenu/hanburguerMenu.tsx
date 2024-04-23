import { useState } from "react"
import { BiMailSend, BiMenuAltLeft } from "react-icons/bi"
import { ButtomToggleMenuBurguer, MenuBurguerList } from "./styled"
import { ButtomWire } from "../../globalStyles"
import { Link } from "react-router-dom";
import {handleSmoothScroll} from '../utils'


interface HanburguerMenuProps {
    items: string[];
    itemsRouter: string[]
}

export const HamburguerMenu : React.FC<HanburguerMenuProps> = ({items, itemsRouter}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return(
        <>
            <ButtomToggleMenuBurguer onClick={toggleMenu}>
    
                    <BiMenuAltLeft/>
                
            </ButtomToggleMenuBurguer>
            {
                isOpen && (
                    <MenuBurguerList>
                        {items.map((item, index) => (
                            <Link to={itemsRouter[index]} onClick={handleSmoothScroll}>
                                <li key={index}>{item}</li>
                            </Link>
                        ))}
                        {<ButtomWire>  Fale Comigo<BiMailSend/></ButtomWire>}
                    </MenuBurguerList>
                )
            } 
        </>
    )
}