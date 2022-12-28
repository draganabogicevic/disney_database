import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const CardSmall = styled.div`
  height: 270px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: all ease-in-out 1s;
`;

const SmallCard = ({
  name,
  image,
  characterId,
  setShowModal,
  characterRate,
}) => {
  return (
    <CardSmall className="card">
      <CharacterCard
        name={name}
        image={image}
        characterId={characterId}
        setShowModal={setShowModal}
        characterRate={characterRate}
      />
    </CardSmall>
  );
};

export default SmallCard;
