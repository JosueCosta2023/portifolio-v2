import { ButtomPrimaryNormal } from "../../../../components/buttons/buttonPrimary"
import { handleClickTest } from "../../../../components/utils"
import { ExperienceCard, ExperienceSectionContainer, ExpirienceCardsContent, ExpirienceDetailsContent } from "./styled"

export const Experience = () => {
    return(
        <ExperienceSectionContainer id="experience">
            <div>
                <ExpirienceDetailsContent>
                    <h2>What I do?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                    <ButtomPrimaryNormal onClick={handleClickTest}>
                        Say Hellow!
                    </ButtomPrimaryNormal>
                </ExpirienceDetailsContent>

                <ExpirienceCardsContent>
                    <div>
                        <ExperienceCard>card 01</ExperienceCard>
                        <ExperienceCard>card 02</ExperienceCard>
                        <ExperienceCard>card 03</ExperienceCard>
                    </div>
                </ExpirienceCardsContent>
            </div>
        </ExperienceSectionContainer>
    )
}