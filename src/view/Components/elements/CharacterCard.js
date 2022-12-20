import React, { useState, useContext, memo } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

import Button from "./Button";

import styled from "styled-components";
import placeholder from "../../../assets/jpg/placeholder.jpg";
import BookmarkContext from "../../../context/bookmarkContext";
import Modal from "./Modal";

const Card = styled.div`
  height: 270px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: all ease-in-out 1s;
`;
const CardImage = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url(${props.image})`,
  },
}))`
  height: 80%;
  width: 100%;
  border-radius: 8px;
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
  const [showModal, setShowModal] = useState(false);

  const ctx = useContext(BookmarkContext);

  const image = character.image ? character.image : placeholder;
  const body = document.querySelector("body");
  showModal
    ? (body.style.pointerEvents = "none")
    : (body.style.pointerEvents = "auto");

  const handleBookmark = () => {
    character.toggleBookmark();
    setIsBookmarked(!isBookmarked);
    ctx.onSelectHandler(character);
  };

  const detailsHandler = () => {
    setShowModal(true);
  };

  const closeDetailsHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card className={`card`}>
        <CardImage image={image} />
        <div className="characterName">{character.name}</div>
        <CardControls>
          <div onClick={handleBookmark}>
            {character.bookmarked ? (
              <IoHeart size={20} />
            ) : (
              <IoHeartOutline size={20} />
            )}
          </div>
          <Button onClick={detailsHandler}>Details</Button>
        </CardControls>
      </Card>
      {showModal && (
        <Modal closeModal={closeDetailsHandler} character={character} />
      )}
    </>
  );
};

export default memo(CharacterCard);
