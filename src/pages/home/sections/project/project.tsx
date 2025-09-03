import { ButtomPrimaryNormal } from "../../../../components/buttons/buttonPrimary";
import {
  Card,
  ContentCards,
  ContentTitle,
  ProjectSectionContainer,
} from "./styled";
import { FaGithub } from "react-icons/fa";
import { FaDeploydog } from "react-icons/fa6";
import dados from "../../../../service/icones.json";
import { useEffect, useState } from "react";
import imageError from "/assets/images/error.png";
import { ImageWithFallBack } from "../../../../components/utils";

type Projetos = {
  id: number;
  name: string;
  description: string;
  image: string;
  repository: string | null;
  deploy: string | null;
  tecnology: string;
  date_release: string;
};

export const Project = () => {
  const [visible, setVisible] = useState<Projetos[]>([]);
  const [loadMoreCount, setLoadMoreCount] = useState(3);

  useEffect(() => {
    const sortedProjects = [...dados.projects].sort((a, b) => b.id - a.id);
    const data = sortedProjects.slice(0, loadMoreCount);
    setVisible(data);
  }, [loadMoreCount]);

  const loadMoreProjects = () => {
    const newCount = loadMoreCount + 3;
    setLoadMoreCount(newCount);
    const sortedProjects = [...dados.projects].sort((a, b) => b.id - a.id);
    setVisible(sortedProjects.slice(0, newCount));
  };


  return (
    <ProjectSectionContainer id="project">
      <div>
        <ContentTitle>
          <h2>Meus Projetos</h2>
          <p>
            Um pouco de meus conhecimentos, todos estes projetos são de nivel acadêmicos. Realizados para fins de fixação do conhecimento.
          </p>
        </ContentTitle>

        <ContentCards>
          {visible &&
            visible.map((project, index) => (
              <Card key={index}>
                <ImageWithFallBack
                  src={project.image}
                  fallBackSrc={imageError}
                  alt={project.name}
                />
                <h4># {project.id}</h4>
                <div>
                  <div>
                    <span>{project.tecnology}</span>
                    <span>{project.date_release}</span>
                  </div>

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  <div>
                    {project.repository === null ? (
                      "Acesso Privado" 
                    ) : (
                      <a href={project.repository} target="_blank">
                        Github <FaGithub />
                      </a>
                    )}

                    {project.deploy === null ? (
                      "Necessário instalação local"
                    ) : (
                      <a href={project.deploy} target="_blank">
                        Deploy <FaDeploydog />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
        </ContentCards>

        {visible.length < dados.projects.length && (
          <ButtomPrimaryNormal onClick={loadMoreProjects}>
            Carregar Mais
          </ButtomPrimaryNormal>
        )}
      </div>
    </ProjectSectionContainer>
  );
};
