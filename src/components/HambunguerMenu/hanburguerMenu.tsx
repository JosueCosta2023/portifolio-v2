import { useState } from "react"
import { BiMenuAltLeft } from "react-icons/bi"
import { ButtomToggleMenuBurguer, MenuBurguerList } from "./styled"


interface HanburguerMenuProps {
    items: string[]
}

export const HamburguerMenu : React.FC<HanburguerMenuProps> = ({items}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return(
        <div>
            <ButtomToggleMenuBurguer onClick={toggleMenu}>
    
                    <BiMenuAltLeft/>
                
            </ButtomToggleMenuBurguer>
            {
                isOpen && (
                    <MenuBurguerList>
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </MenuBurguerList>
                )
            } 
        </div>
    )
}