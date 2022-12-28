import Button from "./Button";
import Stars from "./Stars";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { get } from "lodash-es";

const ModalWrapper = styled.div`
  margin: auto;
  width: 500px;
  height: 600px;
  border-radius: 8px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 556px) {
    max-width: 80%;
  }
`;

const ModalImage = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url(${props.image})`,
  },
}))`
  height: 70%;
  width: 100%;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 556px) {
    height: 50%;
  }
`;

const CharacterName = styled.h3`
  text-align: center;
  font-size: 28px;
  padding: 10px 0;
`;

const Modal = ({ closeModal, characterId, characterImage, characterName }) => {
  const characterFilms = useSelector((state) =>
    get(state, `characters.characters[${characterId}].films`)
  );
  return (
    <ModalWrapper className="modalWrapper">
      <ModalImage image={characterImage} />
      <CharacterName>{characterName}</CharacterName>
      <div className="filmsWrapper">
        Films:
        {characterFilms &&
          characterFilms.map((film) => <span key={film}>{film}, </span>)}
      </div>
      <div className="modalRateAndButton">
        <Stars characterId={characterId} characterName={characterName} />
        <Button onClick={closeModal}>Close</Button>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
