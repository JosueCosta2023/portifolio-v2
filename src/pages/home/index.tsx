import { HamburguerMenu } from "../../components/HambunguerMenu/hanburguerMenu";
import { Menu } from "../../components/Menu/menu";
import { About } from "./sections/about";
import { Hero } from "./sections/hero";
import { HContent, HeaderContainier, Logo } from "./style";

export const Home = () => {

  const MenuItens = ['Principal', 'Sobre','Experiencias','Projetos', 'Contato' ]
  const MenuItensRouter = ['/#home', '/#about','/#expirience','/#projects', '/#contacts' ]


  return (
    <>
      <HeaderContainier>
        <HContent id="home">
            <Logo>
              <span>J</span>
              <p>Josué</p>
            </Logo>

            <nav>
              <Menu items={MenuItens} itemsRouter={MenuItensRouter}/>
              <HamburguerMenu items={MenuItens} itemsRouter={MenuItensRouter}/>
            </nav>
        </HContent>
      </HeaderContainier>
      <Hero/>
      <About/>
    </>
  );
};
