import { HamburguerMenu } from "../../components/HambunguerMenu/hanburguerMenu";
import { Menu } from "../../components/Menu/menu";
import { HContent, HeaderContainier, Logo } from "./style";

export const Home = () => {


  const MenuItens = ['Principal', 'Sobre','Experiencias','Projetos', 'Contato' ]

  return (
    <>
      <HeaderContainier>
        <HContent>
            <Logo>
              <span>J</span>
              <p>Josué</p>
            </Logo>

            <nav>
              <Menu items={MenuItens}/>
              <HamburguerMenu items={MenuItens}/>
            </nav>
        </HContent>
      </HeaderContainier>
    </>
  );
};
