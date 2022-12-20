import Button from "./Button";

import styled from "styled-components";

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

const Modal = ({ closeModal, character }) => {
  console.log(character.image);
  return (
    <ModalWrapper className="modalWrapper">
      <ModalImage image={character.image} />
      <CharacterName>{character.name}</CharacterName>
      <div>
        Films:
        {character.films &&
          character.films.map((film) => <span>{film}, </span>)}
      </div>
      <div className="modalRateAndButton">
        <div>stars</div>
        <Button onClick={closeModal}>Close</Button>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
