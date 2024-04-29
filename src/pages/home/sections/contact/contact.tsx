import { ButtomPrimaryNormal } from "../../../../components/buttons/buttonPrimary"
import { handleClickTest } from "../../../../components/utils"
import { BsInboxFill } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import { BiMailSend, BiPhoneCall } from "react-icons/bi"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { SiFrontendmentor } from "react-icons/si"

export const Contact = () => {
    return(
        <section id="contact">
            <div>
                <div>
                    <div>
                        <h2>Let’s discuss your Project</h2>
                        <p>There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>
                    </div>
                    <div>
                            <div>
                                <span>
                                    <CiLocationOn/>
                                </span>
                                <div>
                                    <span>Address</span>
                                    <p>New Mexico 31114</p>
                                </div>
                            </div>

                            <div>
                                <span>
                                    <BiMailSend/>
                                </span>
                                <div>
                                    <span>My Email</span>
                                    <p>New Mexico 31114</p>
                                </div>
                            </div>

                            <div>
                                <span>
                                    <BiPhoneCall/>
                                </span>
                                <div>
                                    <span>Call me Now</span>
                                    <p>New Mexico 31114</p>
                                </div>
                            </div>
                    </div>
                    <ul>
                        <li><FaWhatsapp/></li>
                        <li><FaInstagram/> </li>
                        <li><FaLinkedin/> </li>
                        <li><FaGithub/> </li>
                        <li><SiFrontendmentor/> </li>
                    </ul> 
                </div>

                <div>
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
                </div>
            </div>
        </section>
    )
}