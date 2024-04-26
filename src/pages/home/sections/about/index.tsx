import {FaDownload, FaFigma, FaGithub, FaHtml5, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { AboutContentGray, AboutContentWhite, AboutDetailsSocial, AboutImageSocial, AboutProccessCards, AboutProccessDetails, AboutSectionStyle, Card, ProccessBottom, ProccessTop } from "./styled"
import { SiFrontendmentor } from "react-icons/si"
import ImageDefaul from '../../../../assets/images/perfilImage.png'
import { ButtomPrimaryNormal, ButtomPrimaryWire } from "../../../../components/buttons/buttonPrimary"
import { handleDonwload, scrollToSection } from "../../../../components/utils"
import { MdJavascript } from "react-icons/md"


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
                <div>
                    <AboutProccessDetails>
                        <div>
                            <h2>Work Process</h2>
                            <p>No desenvolvimento de páginas web, começamos com estruturação HTML semântica para acessibilidade e SEO. O Figma auxilia no design colaborativo e prototipagem. JavaScript adiciona interatividade e aprimora a experiência do usuário.</p>
                            <p>Finalmente, o GitHub permite controle de versão e colaboração eficaz, culminando na publicação de um produto final confiável e acessível para os clientes.</p>
                        </div>
                    </AboutProccessDetails>

                    <AboutProccessCards>
                        <div>
                            <ProccessTop>
                                <Card>
                                    <span><FaHtml5/></span>
                                    <h3>Estrutura Semântica</h3>
                                    <p>HTML e CSS profissionais criam layouts responsivos, acessíveis e visualmente atraentes para websites de alto desempenho.</p>

                                </Card>
                                <Card>
                                    <span><FaFigma/> </span>
                                    <h3>Layouts Profissional</h3>
                                    <p>Figma é uma ferramenta de design colaborativo baseada em nuvem, ideal para criar protótipos, interfaces de usuário e designs digitais.</p>
                                </Card>
                            </ProccessTop>
                            <ProccessBottom>
                                <Card>
                                    <span><MdJavascript/></span>
                                    <h3>Alto Desempenho</h3>
                                    <p>JavaScript impulsiona interatividade, melhorando a experiência do usuário e otimizando a performance de aplicativos.</p>
                                </Card>
                                <Card>
                                    <span><FaGithub/> </span>
                                    <h3>Versionamento</h3>
                                    <p>Versionamento no GitHub garante entrega estável e transparente, facilitando ajustes, resultando em produtos mais confiáveis.</p>
                                </Card>
                            </ProccessBottom>
                        </div>
                    </AboutProccessCards>
                </div>
            </AboutContentGray>
        </AboutSectionStyle>
    )
}