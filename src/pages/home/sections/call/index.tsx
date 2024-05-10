import { BsArrowRight } from "react-icons/bs";
import { ButtomPrimaryNormal } from "../../../../components/buttons/buttonPrimary/index.js";
import { scrollToSection } from "../../../../components/utils/index.js";
import { CallSectionContainer } from "./call.js";

export const CallClients = () => {
  return (
    <CallSectionContainer>
      <div>
        <h2>Você tem uma ideia incrível para um site, mas não sabe por onde começar? </h2>
        <p>
        Deixe-me ajudar a tornar seus sonhos digitais uma realidade!
        </p>
        <p>
        Como desenvolvedor frontend, estou aqui para transformar sua visão em um produto digital impressionante e colaborar e trazer sua ideia à vida.
        </p>
        <ButtomPrimaryNormal onClick={() => scrollToSection('contact')}>
          Vamos trabalhar Juntos!
          <BsArrowRight />
        </ButtomPrimaryNormal>
      </div>
    </CallSectionContainer>
  );
};
