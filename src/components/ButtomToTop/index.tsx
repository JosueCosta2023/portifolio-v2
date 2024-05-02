import React, { useEffect, useState } from "react"
import './style.css'
import { FiArrowUp } from "react-icons/fi";


export const BackToTopButtom: React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollHeight = document.body.scrollHeight;
        const scrollPercent = (scrollPosition / (scrollHeight - windowHeight)) * 100;

        
        setIsVisible(scrollPercent > 20)
    }
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return(
        <button className={`back-to-top ${isVisible ? 'hide' : 'show'}`} onClick={scrollToTop}>
           <FiArrowUp/> Voltar ao topo
        </button>
    )
}