import { Link } from "react-router-dom";

import Button from "../elements/Button";

import micky from "../../../assets/png/mickey.png";
import styled from "styled-components";

const FallbackImg = styled.img`
  height: 500px;
  @media (max-width: 370px) {
    height: 100px;
  }
  @media (max-width: 720px) {
    height: 300px;
  }
`;

const FallbackWrapper = styled.div`
  margin: auto;
  margin-top: 30px;
  padding: 30px;
  display: flex;
  justify-content: center;
  height: 450px;
  max-width: 900px;
  border-radius: 50%;
  @media (max-width: 370px) {
    flex-direction: column;
  }
`;

const TextAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FallbackUi = ({ error }) => {
  return (
    <>
      <FallbackWrapper className="fallbackWrapper">
        <FallbackImg src={micky} alt="micky" />
        <TextAndButtonWrapper>
          <p className="fallbackText">
            Ooooooops! Some error happened! Please click on button below to
            start again.
          </p>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </TextAndButtonWrapper>
      </FallbackWrapper>
    </>
  );
};

export default FallbackUi;
