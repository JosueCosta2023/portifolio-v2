import {FaCss3, FaDownload, FaFigma, FaGithub, FaHtml5, FaInstagram, FaLinkedin, FaReact, FaUsers, FaWhatsapp } from "react-icons/fa"
import { AboutContentGray, AboutContentWhite, AboutDetailsSocial, AboutImageSocial, AboutProccessCards, AboutProccessDetails, AboutSectionStyle, Card, ProccessBottom, ProccessTop } from "./styled"
import { SiFrontendmentor, SiTypescript } from "react-icons/si"
import ImageDefaul from '/assets/images/perfilImageSocial.png'
import { ButtomPrimaryNormal, ButtomPrimaryWire } from "../../../../components/buttons/buttonPrimary"
import { handleClickGithub, handleClickInstagran, handleClickLinkedin, handleClickMentor, handleClickWhatsapp, handleDonwload, scrollToSection } from "../../../../components/utils"
import { MdJavascript } from "react-icons/md"
import {  GiTalk } from "react-icons/gi"


export const About = () => {

    return(
        <AboutSectionStyle id="about" >
            <AboutContentWhite data-aos="zoom-in"> 

                <AboutImageSocial>
                    <div>
                        <img src={ImageDefaul} alt="imagem" />
                    </div>       
                    <ul>
                        <li><FaWhatsapp onClick={handleClickWhatsapp}/></li>
                        <li><FaInstagram onClick={handleClickInstagran} /> </li>
                        <li><FaLinkedin onClick={handleClickLinkedin} /> </li>
                        <li><FaGithub onClick={handleClickGithub} /> </li>
                        <li><SiFrontendmentor onClick={handleClickMentor}/> </li>
                    </ul>   
                </AboutImageSocial>

                <AboutDetailsSocial>
                    <div>
                        <h2> De Infraestrutura de TI para Desenvolvimento Frontend</h2>
                        <p>Estou embarcando em uma emocionante transição de carreira, deixando para trás a infraestrutura de TI para me dedicar ao desenvolvimento frontend.
                        Com uma sólida base em tecnologia da informação e infraestrutura, estou entusiasmado em aplicar minha experiência para criar interfaces digitais impressionantes e funcionais. Estou comprometido em aprender continuamente e dominar as ferramentas modernas de frontend, como HTML, CSS, JavaScript, Typescript e frameworks populares como React.</p>
                        <p>
                        Minha jornada no frontend é impulsionada pelo desejo de construir produtos interativos e acessíveis que proporcionem experiências positivas aos usuários. Estou animado para explorar novos desafios, colaborar com equipes criativas e contribuir para projetos inovadores.
                        </p>
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
                            <h2>Como organizo o desenvolvimento de meus projetos?</h2>
                            <p>
                            Ao iniciar um projeto de desenvolvimento web, adoto um fluxo de trabalho estruturado para garantir resultados de alta qualidade e eficiência. Aqui está uma visão geral do meu processo:
                            </p>
                            <p>
                            Este fluxo de trabalho cuidadosamente planejado me permite criar websites robustos, responsivos e intuitivos, mantendo-me organizado e possibilitando uma colaboração eficaz com outros membros da equipe, quando aplicável.
                            </p>
                        </div>
                    </AboutProccessDetails>

                    <AboutProccessCards>
                        <div>
                            <ProccessTop>
                                <Card>
                                    <div>
                                        <span><FaFigma/></span>
                                        <span><FaUsers/></span>
                                    </div>
                                    <h3>Analise e Dailys</h3>
                                    <p>
                                    Realizo reiniões de alinhamento e estudo cuidadosamente as interfaces, layouts e interações propostas para entender a visão geral e os requisitos do projeto.
                                    </p>
                                </Card>
                                <Card>
                                    <div>
                                        <span><FaHtml5/></span>
                                        <span><FaCss3/></span>
                                    </div>
                                    <h3>Estrutura Semântica</h3>
                                    <p>
                                    Priorizo a acessibilidade e a estruturação adequada do conteúdo para garantir uma base sólida para o desenvolvimento.
                                    </p>

                                </Card>
                            </ProccessTop>
                            <ProccessBottom>
                                <Card>
                                    <div>
                                        <span><MdJavascript/></span>
                                        <span><SiTypescript/></span>
                                        <span><FaReact/></span>
                                    </div>
                                    <h3>Alto Desempenho</h3>
                                    <p>Para tornar o site mais dinâmico e interativo, incorporo JavaScript para atender aos requisitos do projeto.</p>
                                </Card>
                                <Card>
                                    <div>
                                        <span><FaGithub/> </span>
                                        <span><GiTalk/> </span>
                                    </div>
                                    <h3>Versionamento</h3>
                                    <p>
                                    Durante todo o processo de desenvolvimento, faço uso extensivo do Git e Github para controle de versão. 
                                    </p>
                                </Card>
                            </ProccessBottom>
                        </div>
                    </AboutProccessCards>
                </div>
            </AboutContentGray>
        </AboutSectionStyle>
    )
}