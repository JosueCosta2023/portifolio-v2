import { ButtomPrimaryNormal } from "../../../../components/buttons/buttonPrimary"
import { handleClickTest } from "../../../../components/utils"
import { ExperienceCard, ExperienceSectionContainer, ExpirienceCardsContent, ExpirienceDetailsContent } from "./styled"

export const Experience = () => {
    return(
        <ExperienceSectionContainer id="soft-skills">
            <div>
                <ExpirienceDetailsContent>
                    <h2>Habilidades que Impulsionam Além do Código</h2>
                    <p>Desenvolver grandes produtos vai além do código. É sobre colaboração, comunicação e comprometimento. Aqui estão algumas das habilidades que trago para o meu trabalho:</p>
                    <p>Meus soft skills complementam minhas habilidades técnicas, permitindo-me oferecer resultados de alta qualidade e criar experiências digitais memoráveis.</p>
                    <ButtomPrimaryNormal onClick={handleClickTest}>
                        Say Hellow!
                    </ButtomPrimaryNormal>
                </ExpirienceDetailsContent>

                <ExpirienceCardsContent>
                    <div>
                        <ExperienceCard>
                            <h2>Gestão do Tempo e Organização:</h2>
                            <p>Gerencio projetos de forma eficiente, priorizando tarefas e cumprindo prazos de maneira consistente.</p>
                        </ExperienceCard>
                        <ExperienceCard>
                            <h2>Resolução de Problemas:</h2>
                            <p>
                            Abordo desafios com criatividade e perseverança, encontrando soluções práticas e eficientes para questões técnicas e de design.
                            </p>
                        </ExperienceCard>
                        <ExperienceCard>
                            <h2>Adaptabilidade:</h2>
                            <p>
                            Sou rápido em me ajustar a novas tecnologias, metodologias e ambientes de trabalho em constante mudança.
                            </p>
                        </ExperienceCard>
                    </div>
                </ExpirienceCardsContent>
            </div>
        </ExperienceSectionContainer>
    )
}