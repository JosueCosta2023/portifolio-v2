import { FaWhatsapp } from "react-icons/fa";
import {
  HeroContent,
  HeroData,
  HeroDataItem,
  HeroDetails,
  HeroIlustration,
  HeroInfo,
  HeroSectionContainer,
} from "./styled";
import ImagemPadrao from '/assets/images/josue.png';
import { handleClickWhatsapp } from "../../../../components/utils";
import { ButtomPrimaryNormal } from "../../../../components/buttons/buttonPrimary";


export const Hero = () => {
  return (
    <HeroSectionContainer id="home">
      <HeroContent>
        <HeroDetails>
          <HeroInfo>
            <h3>Desenvolvedor Fullstack</h3>
            <p>Olá! Sou <strong>Josué Ocanha Costa</strong>, um desenvolvedor web Fullsatck com foco em criar experiências digitais envolventes e funcionais. Minha paixão pela tecnologia me impulsiona a explorar novas ideias e aprimorar constantemente minhas habilidades.</p>
              <ButtomPrimaryNormal onClick={handleClickWhatsapp}>
                Fale comigo!<FaWhatsapp/>
              </ButtomPrimaryNormal>
          </HeroInfo>

          <HeroData>
            <HeroDataItem>
              <strong>2 anos</strong>
              <p>Experiência</p>
            </HeroDataItem>

            <HeroDataItem>
              <strong>9+</strong>
              <p>Projetos</p>
            </HeroDataItem>

            <HeroDataItem>
              <strong>10</strong>
              <p>Tecnologias</p>
            </HeroDataItem>
          </HeroData>
        </HeroDetails>


        <HeroIlustration>
          <img src={ImagemPadrao} alt="imagem de perfil" />
        </HeroIlustration>
      </HeroContent>
    </HeroSectionContainer>
  );
};
