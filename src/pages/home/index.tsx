import { HamburguerMenu } from "../../components/HambunguerMenu/hanburguerMenu";
import { Menu } from "../../components/Menu/menu";
import { HContent, HeaderContainier } from "./style";

export const Home = () => {


  const MenuItens = ['home', 'about','experience','projects', 'contacts' ]

  return (
    <>
      <HeaderContainier>
        <HContent>
            <div>
              imagem logo
            </div>

            <nav>
              <Menu items={MenuItens}/>
              <HamburguerMenu items={MenuItens}/>
            </nav>
        </HContent>
      </HeaderContainier>
    </>
  );
};
