import { ButtomPrimaryNormal } from "../../../../components/buttons/buttonPrimary";
import { handleClickWhatsapp } from "../../../../components/utils";
import {
  ExperienceCard,
  ExperienceHardSkilss,
  ExperienceSectionContainer,
  ExpirienceCardsContent,
  ExpirienceDetailsContent,
} from "./styled";
import { FaWhatsapp } from "react-icons/fa";
import data from '../../../../service/icones.json'


export const Experience = () => {


  return (
    <ExperienceSectionContainer id="habilidades">
      <div>
        <ExperienceHardSkilss>
          <h3>Hard Skills</h3>

          <ul>{
            data.skills.map((skill, index) => (
              <li key={index}>
                <img src={skill.url} title={skill.name} />
              </li>
            ))
 
            }</ul>
        </ExperienceHardSkilss>
      </div>

      <div>
        <ExpirienceDetailsContent>
          
          <h2>SoftSkills <br/>Habilidades <br/> além do código</h2>
          <p>
            Desenvolver grandes produtos vai além do código. É sobre
            colaboração, comunicação e comprometimento. Aqui estão algumas das
            habilidades que trago para o meu trabalho:
          </p>
          <p>
            Meus soft skills complementam minhas habilidades técnicas,
            permitindo-me oferecer resultados de alta qualidade e criar
            experiências digitais memoráveis.
          </p>
          <ButtomPrimaryNormal onClick={handleClickWhatsapp}>
            Fale Comigo! <FaWhatsapp/>
          </ButtomPrimaryNormal>
        </ExpirienceDetailsContent>

        <ExpirienceCardsContent>
          <div>
            <ExperienceCard>
              <h2>Gestão do Tempo e Organização:</h2>
              <p>
                Gerencio projetos de forma eficiente, priorizando tarefas e
                cumprindo prazos de maneira consistente.
              </p>
            </ExperienceCard>
            <ExperienceCard>
              <h2>Resolução de Problemas:</h2>
              <p>
                Abordo desafios com criatividade e perseverança, encontrando
                soluções práticas e eficientes para questões técnicas e de
                design.
              </p>
            </ExperienceCard>
            <ExperienceCard>
              <h2>Adaptabilidade:</h2>
              <p>
                Sou rápido em me ajustar a novas tecnologias, metodologias e
                ambientes de trabalho em constante mudança.
              </p>
            </ExperienceCard>
          </div>
        </ExpirienceCardsContent>
      </div>
    </ExperienceSectionContainer>
  );
};
