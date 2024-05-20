import { ButtomPrimaryNormal} from "../../../../components/buttons/buttonPrimary"
import { Card, ContentCards, ContentTitle, ProjectSectionContainer } from "./styled"
import { FaGithub } from "react-icons/fa"
import { FaDeploydog } from "react-icons/fa6"
import dados from '../../../../service/icones.json'
import { useEffect, useState } from "react"
import imageError from "/assets/images/error.png"
import { ImageWithFallBack } from "../../../../components/utils"

type Projetos = {
   "name":string, 
   "description":string, 
   "image":string, 
   "repository":string, 
   "deploy":string | null, 
   "tecnology":string 
}

export const Project = () => {

    const [visible, setVisible] = useState<Projetos[]>([])
    const [loadMoreCount, setLoadMoreCount] = useState(3)

    useEffect(() => {
        const data = dados.projects.slice(0, loadMoreCount)
        setVisible(data)
    }, [loadMoreCount])

    const loadMoreProjects = () => {
        const newCount = loadMoreCount + 3;
        setLoadMoreCount(newCount)
        setVisible(visible.slice(0, newCount))
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
                        visible && visible.map((project, index) => (
                            <Card key={index}>
                                <ImageWithFallBack
                                    src={project.image}
                                    fallBackSrc={imageError}
                                    alt={project.name}
                                />
                                <div>
                                    <span>{project.tecnology}</span>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div>
                                        <a href={project.repository} target="_blank">
                                            Github <FaGithub/>
                                        </a>

                                        {
                                            project.deploy === null ? "Necessário instalação local" :
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

                {
                    visible.length < dados.projects.length && (

                        <ButtomPrimaryNormal onClick={loadMoreProjects}>
                                    Carregar Mais
                        </ButtomPrimaryNormal>
                    )

                }
            
           </div>
        </ProjectSectionContainer>
    )
}