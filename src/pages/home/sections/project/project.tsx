import { ButtomPrimaryNormal} from "../../../../components/buttons/buttonPrimary"
import { Card, ContentCards, ContentTitle, ProjectSectionContainer } from "./styled"
import { FaGithub } from "react-icons/fa"
import { FaDeploydog } from "react-icons/fa6"
import Projects from '../../../../assets/json/icones.json'

export const Project = () => {
    const handleFunction = () => {
        alert("Teste")
    }
    return(
        <ProjectSectionContainer id="project">
           <div>
                <ContentTitle>
                    <h2>Portfolio</h2>
                    <p>Explore meu portfólio e entre em contato para discutir como podemos trabalhar juntos para alcançar seus objetivos digitais.</p>
                </ContentTitle>

                <ContentCards>
                    {
                        Projects.projects.slice(0,3).map((project, index) => (
                            <Card key={index}>
                                <img src={project.image} alt={project.name} />
                                <div>
                                    <span>{project.tecnology}</span>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div>
                                        <a href={project.repository} target="_blank">
                                            Github <FaGithub/>
                                        </a>

                                        {
                                            project.deploy === "" ? "Necessário instalação local" :
                                        <a href={project.deploy} target="_blank">
                                            Deploy <FaDeploydog/>
                                        </a>
                                        }
                                    </div>
                                </div>
                            </Card>
                        ))
                    }
                </ContentCards>

                <ButtomPrimaryNormal onClick={handleFunction}>
                    Load More
                </ButtomPrimaryNormal>
           </div>
        </ProjectSectionContainer>
    )
}