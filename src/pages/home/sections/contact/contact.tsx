import { CiLocationOn } from "react-icons/ci"
import { BiMailSend, BiPhoneCall } from "react-icons/bi"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { SiFrontendmentor } from "react-icons/si"
import { ContactAddressCard, ContactAddressContent, ContactFormContent, ContactSectionContainer, InputForm } from "./styled"
import {FieldValues, useForm} from 'react-hook-form'
import { ButtomPrimaryNormal } from "../../../../components/buttons/buttonPrimary"
import { handleClickGithub, handleClickInstagran, handleClickLinkedin, handleClickMentor, handleClickWhatsapp } from "../../../../components/utils"
import emailJs from '@emailjs/browser'

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
        sendMail(data)
        reset()
    }
    
    const sendMail = (data: FieldValues) => {

        const templateParams = {
            from_name: data.name,
            subject: data.subject,
            message: data.message,
            budget_value: data.budget,
            email: data.email
        }


        emailJs.send(
            "service_9kr7tsm", "template_7uq77cf", templateParams, "VkH23Whshahe1OCM2"
        ).then((response)=>{
            console.log('E-Mail enviado com sucesso!', response.status, response.text)
        }, (err) => {
            console.error("Erro ao enviar email.", err)
        })
    }  

    return(
        <ContactSectionContainer id="contact">
            <div>
                <ContactAddressContent>
                    <div>
                        <h2>Vamos trabalhar juntos? </h2>
                        <p>Se você chegou até aqui, é hora de transformar sua ideia em realidade. Estou pronto para ouvir suas necessidades, resolver seus desafios e criar algo extraordinário.</p>
                    </div>

                    <div>
                            <ContactAddressCard>
                                <span>
                                    <CiLocationOn/>
                                </span>
                                <div>
                                    <span>Endereço:</span>
                                    <p>São josé do Rio Claro - MT, Brazil</p>
                                </div>
                            </ContactAddressCard>

                            <ContactAddressCard>
                                <span>
                                    <BiMailSend/>
                                </span>
                                <div>
                                    <span>Meu Email</span>
                                    <p>contato_josuecosta@hotmail.com</p>
                                </div>
                            </ContactAddressCard>

                            <ContactAddressCard>
                                <span>
                                    <BiPhoneCall/>
                                </span>
                                <div>
                                    <span>Meu Telefone</span>
                                    <p>65 9 9340-8371</p>
                                </div>
                            </ContactAddressCard>
                    </div>

                    <ul>
                        <li><FaWhatsapp onClick={handleClickWhatsapp}/></li>
                        <li><FaInstagram onClick={handleClickInstagran} /> </li>
                        <li><FaLinkedin onClick={handleClickLinkedin} /> </li>
                        <li><FaGithub onClick={handleClickGithub} /> </li>
                        <li><SiFrontendmentor onClick={handleClickMentor}/> </li>
                    </ul> 
                </ContactAddressContent>

                <ContactFormContent > 
                    <form >
                        <p>
                        Deixe-me saber como posso ajudar. Preencha o formulário abaixo e estarei pronto para iniciar nossa jornada rumo ao seu próximo projeto incrível
                        </p>
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
                            Enviar <BiMailSend/>
                        </ButtomPrimaryNormal>
                    </form>
                </ContactFormContent>
            </div>
        </ContactSectionContainer>
    )
}