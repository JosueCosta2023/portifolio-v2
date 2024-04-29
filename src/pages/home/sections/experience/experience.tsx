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
                        <ExperienceCard>
                            <h2>User Experience (UX)</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
                        </ExperienceCard>
                        <ExperienceCard>
                            <h2>User Experience (UX)</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
                        </ExperienceCard>
                        <ExperienceCard>
                            <h2>User Experience (UX)</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
                        </ExperienceCard>
                    </div>
                </ExpirienceCardsContent>
            </div>
        </ExperienceSectionContainer>
    )
}