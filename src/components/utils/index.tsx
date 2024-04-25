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


export const handleClickTest = () => {
    console.log("Botão clicado")
}

import File from '../../assets/docs/JosueOcanhaCosta_DevWebFrontEndJunior (atualizado).pdf';

export const handleDonwload = () => {
    window.open(File, '_blank');
}