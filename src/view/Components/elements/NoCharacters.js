import { useHistory } from "react-router-dom";
import styled from "styled-components";
import walle from "../../../assets/png/pngegg.png";
import Button from "./Button";

const WalleImg = styled.img`
  height: 450px;
  @media (max-width: 370px) {
    height: 100px;
  }
  @media (max-width: 720px) {
    height: 300px;
  }
`;
const NoCharactersWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  height: 450px;
  max-width: 900px;
  border-radius: 50%;
  @media (max-width: 370px) {
    flex-direction: column;
    margin-bottom: 200px;
  }
`;

const NoCharacters = ({ setSearchText, setShowSearched }) => {
  const history = useHistory();

  const onTryAgainHandler = () => {
    history.push("/");
    setSearchText("");
    setShowSearched(false);
  };

  return (
    <NoCharactersWrapper>
      <WalleImg src={walle} alt="sadWallE" />
      <div>
        <p className="fallbackText">
          Sorry, we have no characters maching your search! Please, try again.
        </p>
        <Button onClick={onTryAgainHandler}>Try again</Button>
      </div>
    </NoCharactersWrapper>
  );
};

export default NoCharacters;
