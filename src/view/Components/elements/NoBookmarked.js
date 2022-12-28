import { useHistory } from "react-router-dom";
import styled from "styled-components";
import characters from "../../../assets/png/disneyCharacters.png";
import Button from "./Button";

const CharactersImg = styled.img`
  height: 550px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  @media (max-width: 370px) {
    margin-bottom: 200px;
  }
`;

const NoCharactersText = styled.p`
  margin-bottom: 20px;
`;

const NoBookmarked = () => {
  const history = useHistory();

  const onTryAgainHandler = () => {
    history.push("/");
  };

  return (
    <NoCharactersWrapper>
      <NoCharactersText>
        Here will be collection of your favorite Disney characters. Please
        select them from Home page.
      </NoCharactersText>
      <Button onClick={onTryAgainHandler}>Select favorite characters</Button>
      <CharactersImg src={characters} alt="characters" />
    </NoCharactersWrapper>
  );
};

export default NoBookmarked;
