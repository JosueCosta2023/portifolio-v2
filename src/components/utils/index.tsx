export const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>  {

    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId!);

    if(targetElement){
        window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth'
        })
    }
}
