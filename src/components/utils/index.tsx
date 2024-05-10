import File from '../../assets/docs/JosueOcanhaCosta_DevWebFrontEndJunior (atualizado).pdf';


export const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId) as HTMLAnchorElement
    if(section){
        section.scrollIntoView({behavior: 'smooth'})
    }
}

export const handleClickMail = () => {
    const MailUrl = "mailto:contato_josuecosta@hotmail.com";
    window.location.href = MailUrl;
}

export const handleClickWhatsapp = () => {
    const WhatsappUrl = 'https://wa.me/65993408371';
    window.open(WhatsappUrl, '_blank');
}
export const handleClickInstagran = () => {
    const Url = 'https://www.instagram.com/josue.ocanha/';
    window.open(Url, '_blank');
}
export const handleClickLinkedin = () => {
    const Url = 'https://www.linkedin.com/in/josue-ocanha-costa/';
    window.open(Url, '_blank');
}
export const handleClickGithub = () => {
    const Url = 'https://github.com/JosueCosta2023';
    window.open(Url, '_blank');
}
export const handleClickMentor = () => {
    const Url = 'https://www.frontendmentor.io/profile/JosueCosta2023';
    window.open(Url, '_blank');
}


export const handleDonwload = () => {
    window.open(File, '_blank');
}




