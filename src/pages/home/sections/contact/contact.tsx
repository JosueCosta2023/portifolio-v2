import { FaAddressCard, FaRegAddressCard } from "react-icons/fa"
import { ButtomPrimaryNormal } from "../../../../components/buttons/buttonPrimary"
import { handleClickTest } from "../../../../components/utils"
import { AboutSectionContainer } from "./styled"
import { BsInboxFill } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import { BiMailSend, BiPhoneCall } from "react-icons/bi"

export const Contact = () => {
    return(
        <AboutSectionContainer id="contact">
            <div>
                <div>
                    <div>
                        <h2>Let’s discuss your Project</h2>
                        <p>There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>
                    </div>
                    <div>
                        <div>Card 1
                            <div>
                                <CiLocationOn/>
                            </div>
                            <div>
                                <span>Address</span>
                                <p>New Mexico 31114</p>
                            </div>
                        </div>
                        <div>Card 1
                            <div>
                                <BiMailSend/>
                            </div>
                            <div>
                                <span>My Email</span>
                                <p>New Mexico 31114</p>
                            </div>
                        </div>
                        <div>Card 1
                            <div>
                                <BiPhoneCall/>
                            </div>
                            <div>
                                <span>Call me Now</span>
                                <p>New Mexico 31114</p>
                            </div>
                        </div>
                    </div>
                    <ul>Redes sociais</ul>
                </div>

                <form>
                    <div>
                        <p>There are many variations of passages of Lorem Ipsu available,
                        but the majority have suffered alte.</p>
                        <div>
                            <p>Campo Obrigatorio</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>Campo Obrigatorio</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>Campo Obrigatorio</p>
                            <input type="text" />
                        </div>

                        <div>
                            <div>
                                <p>Campo Obrigatorio</p>
                                <input type="text" />
                            </div>

                            <div>
                                <p>Campo Obrigatorio</p>
                                <input type="text" />
                            </div>
                        </div>

                        <div>
                            <p>Campo Obrigatorio</p>
                            <input type="text" />
                        </div>
                        <ButtomPrimaryNormal onClick={handleClickTest}>
                            Submit <BsInboxFill/>
                        </ButtomPrimaryNormal>
                    </div>
                </form>
            </div>
        </AboutSectionContainer>
    )
}