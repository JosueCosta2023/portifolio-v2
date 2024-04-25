import { FaWhatsapp } from "react-icons/fa";
import { ButtonPrimary } from "../../../../globalStyles";
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
import { WhatsappUrl } from "../../../../components/utils";

export const Hero = () => {
  return (
    <HeroSectionContainer id="home">
      <HeroContent>
        <HeroDetails>
          <HeroInfo>
            <h3>Olá, eu sou <br/>Josué Costa</h3>
            <p>I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
            <ButtonPrimary href={WhatsappUrl} target="_blank">
                  Say Hello! <FaWhatsapp/>     
              </ButtonPrimary>
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
