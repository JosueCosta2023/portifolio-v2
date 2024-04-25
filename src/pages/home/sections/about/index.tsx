import {FaDownload, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { AboutContentGray, AboutContentWhite, AboutDetailsSocial, AboutImageSocial, AboutSectionStyle } from "./styled"
import { SiFrontendmentor } from "react-icons/si"
import ImageDefaul from '../../../../assets/images/perfilImage.png'
import { ButtomPrimaryNormal, ButtomPrimaryWire } from "../../../../components/buttons/buttonPrimary"
import { handleDonwload, scrollToSection } from "../../../../components/utils"


export const About = () => {

    return(
        <AboutSectionStyle id="about">
            <AboutContentWhite> 

                <AboutImageSocial>
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
                </AboutImageSocial>

                <AboutDetailsSocial>
                    <div>
                        <h2>I am Professional User Experience Designer</h2>
                        <p>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p>
                        <p>I design and develop services for customers specializing creating stylish, modern websites, web services.</p>
                        <div>
                            <ButtomPrimaryNormal onClick={() => scrollToSection('project')}>
                                Meus Projetos
                            </ButtomPrimaryNormal>
                            <ButtomPrimaryWire onClick={handleDonwload}>
                                <FaDownload/>
                                Download do CV
                            </ButtomPrimaryWire>
                            
                        </div>
                    </div>
                </AboutDetailsSocial>

            </AboutContentWhite>

            <AboutContentGray>
            </AboutContentGray>
        </AboutSectionStyle>
    )
}