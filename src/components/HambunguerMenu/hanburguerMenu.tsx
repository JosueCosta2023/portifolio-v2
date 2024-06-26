import { useState } from "react"
import { BiMailSend, BiMenuAltLeft } from "react-icons/bi"
import { ButtomToggleMenuBurguer, MenuBurguerList } from "./styled"
import { handleClickMail, scrollToSection } from "../utils";
import { ButtomPrimaryWire } from "../buttons/buttonPrimary";


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
                        {
                            <ButtomPrimaryWire onClick={handleClickMail}>
                                Fale Comigo <BiMailSend/>
                            </ButtomPrimaryWire>

                        }
                            
                    </MenuBurguerList>
                )
            } 
        </>
    )
}