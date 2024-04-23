import { useState } from "react"
import { BiMailSend, BiMenuAltLeft } from "react-icons/bi"
import { ButtomToggleMenuBurguer, MenuBurguerList } from "./styled"
import { ButtomWire } from "../../globalStyles"
import { scrollToSection } from "../utils";


interface HanburguerMenuProps {
    items: string[];
    sectionIds: string[]
   
}

export const HamburguerMenu : React.FC<HanburguerMenuProps> = ({items, sectionIds}) => {

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
                                <li key={index} onClick={() => scrollToSection(sectionIds[index])}>{item}</li>
                        ))}
                        {<ButtomWire>  Fale Comigo<BiMailSend/></ButtomWire>}
                    </MenuBurguerList>
                )
            } 
        </>
    )
}