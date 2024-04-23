import { useState } from "react"
import { BiMailSend, BiMenuAltLeft } from "react-icons/bi"
import { ButtomToggleMenuBurguer, MenuBurguerList } from "./styled"
import { ButtomWire } from "../../globalStyles"


interface HanburguerMenuProps {
    items: string[]
}

export const HamburguerMenu : React.FC<HanburguerMenuProps> = ({items}) => {

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
                            <li key={index}>{item}</li>
                        ))}
                        {<ButtomWire>  Fale Comigo<BiMailSend/></ButtomWire>}
                    </MenuBurguerList>
                )
            } 
        </>
    )
}