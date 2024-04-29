import { HamburguerMenu } from "../../components/HambunguerMenu/hanburguerMenu";
import { Menu } from "../../components/Menu/menu";
import { About } from "./sections/about";
import { CallClients } from "./sections/call";
import { Contact } from "./sections/contact/contact";
import { Experience } from "./sections/experience/experience";
import { Hero } from "./sections/hero";
import { Project } from "./sections/project/project";
import { FooterContainer, HContent, HeaderContainier, Logo } from "./style";

export const Home = () => {

  const MenuItens = ['Principal', 'Sobre','Experiencias','Projetos', 'Contato' ]
  const sectionId = ['home','about','experience','project','contact']

  return (
    <>
      <HeaderContainier>
        <HContent id="home">
            <Logo>
              <span>J</span>
              <p>Josué</p>
            </Logo>

            <nav>
              <Menu items={MenuItens} sectionIds={sectionId}/>
              <HamburguerMenu items={MenuItens} sectionIds={sectionId}/>
            </nav>
        </HContent>
      </HeaderContainier>
      <Hero/>
      
      <About/>
      <Project/>
      <CallClients/>
      <Experience/>
      <Contact/>

      <FooterContainer>
        Fim do site
      </FooterContainer>
    </>
  );
};
