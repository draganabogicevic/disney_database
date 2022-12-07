import { useState, useContext } from "react";
import { useElementOnScreen } from "../../../hooks/useElementOnScreen";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

import Button from "./Button";

import styled from "styled-components";
import placeholder from "../../../assets/jpg/placeholder.jpg";
import BookmarkContext from "../../../context/bookmarkContext";

const Card = styled.div`
  height: 270px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: all ease-in-out 1s;
`;
const CardImage = styled.div`
  height: 80%;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
`;

const CardControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const CharacterCard = ({ character }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0,
  });

  const ctx = useContext(BookmarkContext);

  const image = character.image ? character.image : placeholder;

  const handleBookmark = () => {
    character.toggleBookmark();
    setIsBookmarked(!isBookmarked);
    ctx.onSelectHandler(character);
  };

  return (
    <Card ref={containerRef} className={`card ${isVisible ? "" : "invisible"}`}>
      <CardImage image={image}></CardImage>
      <div className="characterName">{character.name}</div>
      <CardControls>
        <div onClick={handleBookmark}>
          {character.bookmarked ? (
            <IoHeart size={20} />
          ) : (
            <IoHeartOutline size={20} />
          )}
        </div>
        <Button>Details</Button>
      </CardControls>
    </Card>
  );
};

export default CharacterCard;
