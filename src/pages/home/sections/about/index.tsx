import {FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { AboutContentGray, AboutContentWhite, AboutSectionStyle } from "./styled"
import { SiFrontendmentor } from "react-icons/si"


export const About = () => {
    return(
        <AboutSectionStyle id="about">
            <AboutContentWhite> 
                <div>
                    <img src="" alt="imagem" />
                </div>       
                <ul>
                    <li><FaWhatsapp/></li>
                    <li><FaInstagram/> </li>
                    <li><FaLinkedin/> </li>
                    <li><FaGithub/> </li>
                    <li><SiFrontendmentor/> </li>
                </ul>
            </AboutContentWhite>

            <AboutContentGray>
            </AboutContentGray>
        </AboutSectionStyle>
    )
}