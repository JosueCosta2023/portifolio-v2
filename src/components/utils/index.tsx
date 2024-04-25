export const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId) as HTMLAnchorElement
    if(section){
        section.scrollIntoView({behavior: 'smooth'})
    }
}


export const MailUrl = "mailto:contato_josuecosta@hotmail.com"
export const WhatsappUrl = 'https://wa.me/65993408371'