import { ButtomPrimaryNormal} from "../../../../components/buttons/buttonPrimary"
import { Card, ContentCards, ContentTitle, ProjectSectionContainer } from "./styled"
import { FaGithub } from "react-icons/fa"
import { FaDeploydog } from "react-icons/fa6"
import { useEffect, useState } from "react"
import axios from "axios"

type Projeto = {
    "name":"string",
    "description":"string",
    "repository":"string",
    "deploy"?:"string",
    "image":"string",
    "tecnology":"string"
}


export const Project = () => {

    const [projetos, setProjetos] = useState<Projeto[]>([])
    const [VisibleProjetos, setVisibleProjetos] = useState<Projeto[]>([])


    useEffect(() => {
        axios.get<{projects: Projeto[]}>('/src/assets/json/icones.json').then((response) => {
            const dados = response.data.projects
            setProjetos(dados)
            setVisibleProjetos(dados.slice(0,3))
            console.log(VisibleProjetos)
        })


    }, [])
    const handleFunction = () => {
       const currentLenght = VisibleProjetos.length;
       const nextProject = projetos.slice(currentLenght, currentLenght + 3)
       setVisibleProjetos([...VisibleProjetos, ...nextProject])
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
                        VisibleProjetos?.map((project, index) => (
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
                    VisibleProjetos.length < projetos.length && (
                        <ButtomPrimaryNormal onClick={handleFunction}>
                            Carregar Mais
                        </ButtomPrimaryNormal>
                    )
                }

           </div>
        </ProjectSectionContainer>
    )
}