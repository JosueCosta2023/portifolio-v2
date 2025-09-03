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
import dados from "../../../../service/icones.json"


export const Hero = () => {

  const data = new Date().getFullYear()

  return (
    <HeroSectionContainer id="home">
      <HeroContent>
        <HeroDetails>
          <HeroInfo>
            <h3>Desenvolvedor Web</h3>
            <p>Olá! Sou <strong>Josué Ocanha Costa</strong>, um desenvolvedor web em ascenção. Estudo para a area fullStack com foco em tecnologias JavaScript, TypeScript, node.js e React</p>
            <p>Tenho graduação em <strong>Gestão de Técnologia da Informação</strong> desde 2018 </p>
            <p>Hoje estou me graduando em <strong>Inteligencia Artificial</strong> pela pucMinas. Previsão para me formar em novembro de 2026.</p>
              <ButtomPrimaryNormal onClick={handleClickWhatsapp}>
                Fale comigo!<FaWhatsapp/>
              </ButtomPrimaryNormal>
          </HeroInfo>

          <HeroData>
            <HeroDataItem>
              <strong>{data - 2023} anos</strong>
              <p>Experiência</p>
            </HeroDataItem>

            <HeroDataItem>
              <strong>{dados.projects.length}</strong>
              <p>Projetos</p>
            </HeroDataItem>

            <HeroDataItem>
              <strong>{dados.skills.length}</strong>
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
