import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const CardBig = styled.div`
  height: 600px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: all ease-in-out 1s;
`;

const BigCard = ({ name, image, characterId, setShowModal }) => {
  return (
    <CardBig className="card">
      <CharacterCard
        name={name}
        image={image}
        characterId={characterId}
        setShowModal={setShowModal}
      />
    </CardBig>
  );
};

export default BigCard;
