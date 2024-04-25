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
import ImagemPadrao from '../../../../assets/images/perfilImage.png'
import { handleClickWhatsapp } from "../../../../components/utils";
import { ButtomPrimaryNormal } from "../../../../components/buttons/buttonPrimary";


export const Hero = () => {
  return (
    <HeroSectionContainer id="home">
      <HeroContent>
        <HeroDetails>
          <HeroInfo>
            <h3>Olá, eu sou <br/>Josué Costa</h3>
            <p>I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
              <ButtomPrimaryNormal onClick={handleClickWhatsapp}>
                Say Whats <FaWhatsapp/>
              </ButtomPrimaryNormal>
          </HeroInfo>

          <HeroData>
            <HeroDataItem>
              <strong>1.5Y</strong>
              <p>Experience</p>
            </HeroDataItem>

            <HeroDataItem>
              <strong>7+</strong>
              <p>Projetos</p>
            </HeroDataItem>

            <HeroDataItem>
              <strong>5</strong>
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
