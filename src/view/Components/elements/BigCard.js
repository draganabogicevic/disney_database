import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const CardBig = styled.div`
  height: 600px;
  width: 50%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  @media (max-width: 779px) {
    width: 90%;
  }
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
