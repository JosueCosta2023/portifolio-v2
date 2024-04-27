import { ButtomPrimaryNormal, ButtomPrimaryWire } from "../../../../components/buttons/buttonPrimary"
import { Card, ContentCards, ContentTitle, ProjectSectionContainer } from "./styled"
import ImageDefault from '../../../../assets/images/perfilImage.png'
import { FaGithub } from "react-icons/fa"
import { FaDeploydog } from "react-icons/fa6"

export const Project = () => {
    const handleFunction =() => {
        console.log("Clicou para carregar mais projetos.")
    }

    return(
        <ProjectSectionContainer id="project">
           <div>
                <ContentTitle>
                    <h2>Portfolio</h2>
                    <p>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration.</p>
                </ContentTitle>

                <ContentCards>
                    <Card>
                        <img src={ImageDefault} alt="" />
                        <div>
                            <span>UI-UX DESIGNER</span>
                            <h3>Product Admin Dashboard</h3>
                            <p>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                            <div>
                                <ButtomPrimaryWire onClick={handleFunction}>
                                    Github <FaGithub/>
                                </ButtomPrimaryWire>
                                <ButtomPrimaryWire onClick={handleFunction}>
                                    Deploy <FaDeploydog/>
                                </ButtomPrimaryWire>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <img src={ImageDefault} alt="" />
                        <div>
                            <span>UI-UX DESIGNER</span>
                            <h3>Product Admin Dashboard</h3>
                            <p>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                            <div>
                                <ButtomPrimaryWire onClick={handleFunction}>
                                    Github <FaGithub/>
                                </ButtomPrimaryWire>
                                <ButtomPrimaryWire onClick={handleFunction}>
                                    Deploy <FaDeploydog/>
                                </ButtomPrimaryWire>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <img src={ImageDefault} alt="" />
                        <div>
                            <span>UI-UX DESIGNER</span>
                            <h3>Product Admin Dashboard</h3>
                            <p>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
                            <div>
                                <ButtomPrimaryWire onClick={handleFunction}>
                                    Github <FaGithub/>
                                </ButtomPrimaryWire>
                                <ButtomPrimaryWire onClick={handleFunction}>
                                    Deploy <FaDeploydog/>
                                </ButtomPrimaryWire>
                            </div>
                        </div>
                    </Card>
                </ContentCards>

                <ButtomPrimaryNormal onClick={handleFunction}>
                    Load More
                </ButtomPrimaryNormal>
           </div>
        </ProjectSectionContainer>
    )
}