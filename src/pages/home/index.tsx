import { BackToTopButtom } from "../../components/ButtomToTop";
import { HamburguerMenu } from "../../components/HambunguerMenu/hanburguerMenu";
import { Menu } from "../../components/Menu/menu";
import { About } from "./sections/about";
import { CallClients } from "./sections/call";
import { Contact } from "./sections/contact/contact";
import { Experience } from "./sections/skills/skills";
import { Hero } from "./sections/hero";
import { Project } from "./sections/project/project";
import { FContent, FooterContainer, HContent, HeaderContainier, Logo } from "./style";

export const Home = () => {

  const MenuItens = ['Principal', 'Sobre','Habilidades','Projetos', 'Contato' ]
  const sectionId = ['home','about','habilidades','project','contact']

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
      <BackToTopButtom/>
      
      <Hero/>
      <About/>
      <Project/>
      <Experience/>
      <CallClients/>
      <Contact/>

      <FooterContainer>
           <FContent>
              <p>Copyright © 2024-2025 <strong>Josué Ocanha Costa.</strong></p>
           </FContent>
      </FooterContainer>
    </>
  );
};
