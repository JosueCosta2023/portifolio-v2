import { BsArrowRight } from "react-icons/bs";
import { ButtomPrimaryNormal } from "../../../../components/buttons/buttonPrimary/index.js";
import { handleClickTest } from "../../../../components/utils/index.js";
import { CallSectionContainer } from "./call.js";

export const CallClients = () => {
  return (
    <CallSectionContainer>
      <div>
        <h2>Do you have Project Idia? Let's discuss your project!</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <ButtomPrimaryNormal onClick={handleClickTest}>
          Let’s work Together
          <BsArrowRight />
        </ButtomPrimaryNormal>
      </div>
    </CallSectionContainer>
  );
};
