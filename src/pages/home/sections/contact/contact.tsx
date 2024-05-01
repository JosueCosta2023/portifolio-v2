import { CiLocationOn } from "react-icons/ci"
import { BiMailSend, BiPhoneCall } from "react-icons/bi"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { SiFrontendmentor } from "react-icons/si"
import { ContactAddressCard, ContactAddressContent, ContactFormContent, ContactSectionContainer, InputForm } from "./styled"
import {FieldValues, useForm} from 'react-hook-form'
import { ButtomPrimaryNormal } from "../../../../components/buttons/buttonPrimary"

interface IFormValues {
    name: string
    email: string
    location: string
    budget: number
    subject: string
    message?: string
}


export const Contact = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<IFormValues>()

    const OnSumit = (data: FieldValues) => {
        console.log(data)
        reset()
    }


    return(
        <ContactSectionContainer id="contact">
            <div>
                <ContactAddressContent>
                    <div>
                        <h2>Let s discuss your Project</h2>
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

                <ContactFormContent > 
                    <form >
                        <p>There are many variations of passages of Lorem Ipsu available,
                        but the majority have suffered alte.</p>
                        <InputForm>
                            {errors.name && <span>{errors.name.message}</span>}
                            <input type="text" 
                                placeholder="Nome Completo*"
                                id="name"
                                className="campo-preenchido"
                                {
                                    ...register('name', {required: "Campo Obrigatório."})
                                }
                                />
                        </InputForm>

                        <InputForm>
                            {errors.email && <span>{errors.email.message}</span>}
                            <input type="email" 
                                placeholder="E-mail*"
                                id="email"
                                className="campo-preenchido"
                                {
                                    ...register('email', {required: "Campo Obrigatório."})
                                }
                                />
                        </InputForm>

                        <InputForm>
                            {errors.location && <span>{errors.location.message}</span>}
                            <input type="location" 
                                placeholder="Localização*"
                                id="location"
                                className="campo-preenchido"
                                {
                                    ...register('location', {required: "Campo Obrigatório."})
                                }
                                />
                        </InputForm>
                        <div>
                            <InputForm>
                                {errors.budget && <span>{errors.budget.message}</span>}
                                <input type="budget" 
                                    placeholder="Orçamento*"
                                    id="budget"
                                    className="campo-preenchido"
                                    {
                                        ...register('budget', {required: "Campo Obrigatório."})
                                    }
                                    />
                            </InputForm>
                            <InputForm>
                                {errors.subject && <span>{errors.subject.message}</span>}
                                <input type="subject" 
                                    placeholder="Assunto*"
                                    id="subject"
                                    {
                                        ...register('subject', {required: "Campo Obrigatório."})
                                    }
                                    />
                            </InputForm>

                        </div>
                        <InputForm>
                                {errors.message && <span>{errors.message.message}</span>}
                                <input type="message" 
                                    placeholder="Mensagem*"
                                    id="message"
                                    className="campo-preenchido"
                                    {
                                        ...register('message', {required: "Campo Obrigatório."})
                                    }
                                    />
                            </InputForm>



                        <ButtomPrimaryNormal onClick={handleSubmit(OnSumit)} >
                            Enviar
                        </ButtomPrimaryNormal>
                    </form>
                </ContactFormContent>
            </div>
        </ContactSectionContainer>
    )
}