import { CiLocationOn } from "react-icons/ci"
import { BiMailSend, BiPhoneCall } from "react-icons/bi"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { SiFrontendmentor } from "react-icons/si"
import { ContactAddressCard, ContactAddressContent, ContactFormContent, ContactSectionContainer } from "./styled"

export const Contact = () => {
    return(
        <ContactSectionContainer id="contact">
            <div>
                <ContactAddressContent>
                    <div>
                        <h2>Let’s discuss your Project</h2>
                        <p>There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>
                    </div>

                    <div>
                            <ContactAddressCard>
                                <span>
                                    <CiLocationOn/>
                                </span>
                                <div>
                                    <span>Address</span>
                                    <p>New Mexico 31114</p>
                                </div>
                            </ContactAddressCard>

                            <ContactAddressCard>
                                <span>
                                    <BiMailSend/>
                                </span>
                                <div>
                                    <span>My Email</span>
                                    <p>New Mexico 31114</p>
                                </div>
                            </ContactAddressCard>

                            <ContactAddressCard>
                                <span>
                                    <BiPhoneCall/>
                                </span>
                                <div>
                                    <span>Call me Now</span>
                                    <p>New Mexico 31114</p>
                                </div>
                            </ContactAddressCard>
                    </div>

                    <ul>
                        <li><FaWhatsapp/></li>
                        <li><FaInstagram/> </li>
                        <li><FaLinkedin/> </li>
                        <li><FaGithub/> </li>
                        <li><SiFrontendmentor/> </li>
                    </ul> 
                </ContactAddressContent>

                <ContactFormContent> 
                    oi
                </ContactFormContent>
            </div>
        </ContactSectionContainer>
    )
}