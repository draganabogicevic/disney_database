import { Link } from "react-router-dom";
import styled from "styled-components";
import walle from "../../../assets/png/pngegg.png";
import Button from "./Button";

const WalleImg = styled.img`
  height: 500px;
  @media (max-width: 370px) {
    height: 100px;
  }
  @media (max-width: 720px) {
    height: 300px;
  }
`;
const NoCharactersWrapper = styled.div`
  margin: auto;
  margin-top: 100px;
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

const NoCharacters = () => {
  return (
    <NoCharactersWrapper>
      <WalleImg src={walle} alt="sadWallE" />
      <div>
        <p>
          Sorry, we have no characters maching your search! Please, try again.
        </p>
        <Link reloadDocument>
          <Button>Try again</Button>
        </Link>
      </div>
    </NoCharactersWrapper>
  );
};

export default NoCharacters;
