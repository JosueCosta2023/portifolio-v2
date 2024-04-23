export const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId) as HTMLAnchorElement
    if(section){
        section.scrollIntoView({behavior: 'smooth'})
    }
}
