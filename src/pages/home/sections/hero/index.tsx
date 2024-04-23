import { FaWhatsapp } from "react-icons/fa";
import { ButtonPrimary } from "../../../../globalStyles";
import {
  HeroContent,
  HeroDetails,
  HeroIlustration,
  HeroInfo,
  HeroSectionContainer,
} from "./styled";

export const Hero = () => {
  return (
    <HeroSectionContainer id="home">
      <HeroContent>
        <HeroDetails>
          <HeroInfo>
            <h3>Hello, I’m <br/>Brooklyn Gilbert</h3>
            <p>I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
            <ButtonPrimary>Say Hello! <FaWhatsapp/> </ButtonPrimary>
          </HeroInfo>

          <div>
            <div>
              <strong>10 Y</strong>
              <p>Experience</p>
            </div>

            <div>
              <strong>10 Y</strong>
              <p>Experience</p>
            </div>

            <div>
              <strong>10 Y</strong>
              <p>Experience</p>
            </div>
          </div>
        </HeroDetails>


        <HeroIlustration>Imagem</HeroIlustration>
      </HeroContent>
    </HeroSectionContainer>
  );
};
