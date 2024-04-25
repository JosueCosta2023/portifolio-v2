import {FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { AboutContentGray, AboutContentWhite, AboutSectionStyle } from "./styled"
import { SiFrontendmentor } from "react-icons/si"
import ImageDefaul from '../../../../assets/images/perfilImage.png'


export const About = () => {

    return(
        <AboutSectionStyle id="about">
            <AboutContentWhite> 
                <div>
                    <div>
                        <img src={ImageDefaul} alt="imagem" />
                    </div>       
                    <ul>
                        <li><FaWhatsapp/></li>
                        <li><FaInstagram/> </li>
                        <li><FaLinkedin/> </li>
                        <li><FaGithub/> </li>
                        <li><SiFrontendmentor/> </li>
                    </ul>   
                </div>
                <div>
                    <h2>I am Professional User Experience Designer</h2>
                    <p>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p>
                    <p>I design and develop services for customers specializing creating stylish, modern websites, web services.</p>
                    <div>
                    </div>
                </div>
            </AboutContentWhite>

            <AboutContentGray>
            </AboutContentGray>
        </AboutSectionStyle>
    )
}